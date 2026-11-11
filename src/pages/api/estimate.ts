import type { APIRoute } from 'astro';
import { parseEstimate, validateEstimate } from '../../lib/estimate';
import { brand } from '../../lib/content';

export const prerender = false;
const json = (value: object, status = 200) => new Response(JSON.stringify(value), {
  status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
});

export const POST: APIRoute = async ({ request }) => {
  if (!request.headers.get('content-type')?.startsWith('application/json')) return json({ message: 'Expected a JSON request.' }, 415);
  let body: unknown;
  try {
    const raw = await request.text();
    if (raw.length > 6000) return json({ message: 'Please shorten your description and try again.' }, 413);
    body = JSON.parse(raw);
  } catch {
    return json({ message: 'The request could not be read. Please try again.' }, 400);
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) return json({ message: 'The request could not be read.' }, 400);
  const estimate = parseEstimate(body as Record<string, unknown>);
  const errors = validateEstimate(estimate);
  if (Object.keys(errors).length) return json({ errors }, 422);
  if (brand.demo || (process.env.ESTIMATE_MODE ?? import.meta.env.ESTIMATE_MODE) !== 'live') return json({ simulated: true });

  const target = process.env.ESTIMATE_WEBHOOK_URL ?? import.meta.env.ESTIMATE_WEBHOOK_URL;
  const token = process.env.ESTIMATE_WEBHOOK_TOKEN ?? import.meta.env.ESTIMATE_WEBHOOK_TOKEN;
  const key = request.headers.get('Idempotency-Key') ?? '';
  try {
    if (!target || new URL(target).protocol !== 'https:') throw new Error('Missing HTTPS endpoint');
    const result = await fetch(target, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(/^[a-f0-9-]{36}$/i.test(key) ? { 'Idempotency-Key': key } : {}),
      },
      body: JSON.stringify(estimate),
      redirect: 'error',
      signal: AbortSignal.timeout(8000),
    });
    if (!result.ok) throw new Error('Endpoint rejected the request');
    return json({ simulated: false });
  } catch {
    return json({ message: 'We couldn’t confirm delivery. Your details are still here. Please try again.' }, 503);
  }
};
