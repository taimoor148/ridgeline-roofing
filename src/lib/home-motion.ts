import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const serviceLinks = document.querySelectorAll<HTMLElement>('[data-service]');
const servicePhotos = document.querySelectorAll<HTMLElement>('[data-service-photo]');
serviceLinks.forEach(link => {
  const select = () => servicePhotos.forEach(photo => photo.classList.toggle('current', photo.dataset.servicePhoto === link.dataset.service));
  link.addEventListener('pointerenter', select);
  link.addEventListener('focus', select);
});

const craftButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-craft-button]'));
const craftPhotos = document.querySelectorAll<HTMLElement>('[data-craft-photo]');
const craftNotes = Array.from(document.querySelectorAll<HTMLElement>('[data-craft-note]'));
function selectDetail(index: number) {
  craftPhotos.forEach((photo, i) => photo.classList.toggle('current', i === index));
  craftButtons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
  craftNotes.forEach((note, i) => note.classList.toggle('current', i === index));
}
craftButtons.forEach((button, i) => button.addEventListener('click', () => {
  selectDetail(i);
  if (matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)').matches) {
    craftNotes[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}));
selectDetail(0);

const marquee = document.querySelector('.marquee-track')!;
const pause = document.querySelector<HTMLButtonElement>('#marquee-pause')!;
pause.addEventListener('click', () => {
  const paused = marquee.classList.toggle('paused');
  pause.textContent = paused ? 'Resume town names' : 'Pause town names';
});

const media = gsap.matchMedia();
media.add('(prefers-reduced-motion: no-preference)', () => {
  const entrance = gsap.timeline({ defaults: { ease: 'power3.out' } });
  entrance.from('.hero-frame', { clipPath: 'inset(0 0 12% 0 round 24px)', duration: 0.95, clearProps: 'clipPath' }, 0)
    .from('.hero-copy h1 > span > b', { yPercent: 108, duration: 0.8, stagger: 0.095, clearProps: 'transform' }, 0.08)
    .from('.hero-actions, .hero-feature', { y: 13, opacity: 0, duration: 0.55, clearProps: 'transform,opacity' }, 0.39);

  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(element => {
    gsap.from(element, {
      y: 25, opacity: 0.55, duration: 0.75, ease: 'power2.out',
      scrollTrigger: { trigger: element, start: 'top 92%', once: true },
    });
  });
});

media.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
  const opening = document.querySelector<HTMLElement>('.hero-actions')!;
  const feature = document.querySelector<HTMLElement>('.hero-feature')!;
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero-sequence', start: 'top top', end: 'bottom bottom', scrub: 0.65,
      onUpdate: ({ progress }) => {
        const hide = progress > 0.55 && !opening.contains(document.activeElement) && document.activeElement !== feature;
        opening.inert = hide;
        feature.inert = hide;
      },
    },
  });
  timeline.to('.hero-img', { scale: 1.17, xPercent: -2, yPercent: -3, duration: 1, ease: 'none' }, 0)
    .to('.hero-copy, .hero-meta, .hero-linework', { opacity: 0, y: -46, duration: 0.38, ease: 'power1.inOut' }, 0.13)
    .to('.hero-feature', { opacity: 0, y: 28, duration: 0.38, ease: 'power1.inOut' }, 0.13)
    .fromTo('.hero-next', { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.42, ease: 'power2.out' }, 0.53);
  craftNotes.forEach((note, i) => ScrollTrigger.create({
    trigger: note, start: 'top 62%', end: 'bottom 62%',
    onEnter: () => selectDetail(i), onEnterBack: () => selectDetail(i),
  }));
  return () => {
    opening.inert = false;
    feature.inert = false;
  };
});
