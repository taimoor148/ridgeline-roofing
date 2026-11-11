export const brand = {
  name: 'Ridgeline Roofing & Exteriors',
  short: 'Ridgeline',
  descriptor: 'Roofing & Exteriors',
  city: 'Franklin',
  state: 'TN',
  region: 'Middle Tennessee',
  towns: ['Brentwood', 'Nolensville', 'Thompson’s Station', 'Spring Hill', 'College Grove'],
  contact: { email: '', phone: '' },
  demo: true,
  verified: {
    rating: '', reviews: [] as { quote: string; author: string }[],
    license: '', insurance: '', warranty: '',
  },
};
export const estimateUrl = '/estimate/';
export const navigation = [
  ['Home', '/'], ['Services', '/services/'], ['Projects', '/projects/'],
  ['About', '/about/'], ['Service Areas', '/service-areas/'],
];
export const services = [
  { slug: 'roof-replacement', name: 'Roof Replacement', image: 'cottage', summary: 'A fresh roofing system for widespread wear, recurring leaks, or a roof nearing the end of its life.', scope: ['Review the roof deck and ventilation after tear-off.', 'Choose shingle profiles and colors that suit the home.', 'Install underlayment, flashing, shingles, and ridge details as a system.'], signal: 'Multiple slopes show wear, the roof has widespread granule loss, or leaks return after previous repairs.' },
  { slug: 'roof-repair', name: 'Roof Repair', image: 'flashing', summary: 'Find where water is getting in and address the part of the roof that needs attention.', scope: ['Trace the visible leak back to its likely entry point.', 'Check pipe boots, valleys, flashing, and nearby shingles.', 'Explain the proposed repair and any conditions that could affect it.'], signal: 'A new ceiling stain, loose shingles, or a leak around a chimney or vent appears after rain.' },
  { slug: 'storm-damage', name: 'Storm Damage', image: 'hero', summary: 'Get a documented look at wind or hail damage and a clear plan for the next step.', scope: ['Look for missing shingles, lifted edges, and impact marks.', 'Photograph observable conditions and affected areas.', 'Explain repair and replacement options based on the condition of the roof.'], signal: 'You spot shingle pieces on the ground or notice a leak after severe weather.' },
  { slug: 'siding', name: 'Siding', image: 'farmhouse', summary: 'Refresh the exterior with siding that accounts for how water moves around walls, windows, and trim.', scope: ['Inspect the wall and identify moisture concerns.', 'Compare profiles, colors, and trim details.', 'Plan transitions around doors, windows, and the roofline.'], signal: 'Boards are loose or warped, joints have opened, or trim shows signs of water damage.' },
  { slug: 'gutters', name: 'Gutters', image: 'gutters', summary: 'Guide runoff off the roof and away from the places it can cause trouble.', scope: ['Check how water travels from roof valleys to the ground.', 'Size and place gutters and downspouts for the roof layout.', 'Plan discharge to keep runoff away from the foundation.'], signal: 'Water spills over the roof edge, pools by the foundation, or leaves dark streaks on the siding.' },
];
export const projects = [
  { slug: 'cedar-ridge-residence', name: 'Cedar Ridge Residence', type: 'Roof replacement', image: 'cottage', area: 0, intro: 'A charcoal architectural shingle roof gives a cream cottage a sharper roofline and keeps the original brick chimney as the focal point.', challenge: 'The example starts with a weathered roof, patched slopes, and aging transitions at the chimney.', approach: 'The proposed scope pairs a full tear-off and deck inspection with new underlayment, ridge caps, and carefully detailed chimney flashing.', compare: true },
  { slug: 'stonebrook-farmhouse', name: 'Stonebrook Farmhouse', type: 'Siding & trim', image: 'farmhouse', area: 1, intro: 'Vertical siding and understated dark trim bring a cleaner rhythm to a traditional farmhouse exterior.', challenge: 'The porch, windows, and gables create several places where wall cladding meets other materials.', approach: 'The proposed scope coordinates a drainage plane, window flashing, trim returns, and siding reveals so the transitions read clearly and shed water.' },
  { slug: 'hollow-creek-ranch', name: 'Hollow Creek Ranch', type: 'Metal roofing concept', image: 'ranch', area: 4, intro: 'A restrained standing-seam roof complements warm timber and stone on a low, wide ranch home.', challenge: 'The long roof planes and intersecting gables make seam alignment and valley drainage particularly visible.', approach: 'The proposed scope lays out panel seams before installation and coordinates eave, valley, and ridge details with the roof geometry.' },
];
export const details = [
  { name: 'Shingle edges', image: 'shingles', text: 'The starter course gives the first row of shingles a secure edge. Laying it straight and sealing it correctly helps limit wind lift at the edge of the roof.' },
  { name: 'Step flashing', image: 'flashing', text: 'Overlapping metal pieces guide water down the roof where a slope meets a wall. Each piece works with the shingle course below it so runoff stays outside the wall.' },
  { name: 'Gutter outlets', image: 'gutters', text: 'Gutters collect runoff. The outlet and downspout carry it away from the roof edge and direct it to a discharge point clear of the foundation.' },
];
export const processSteps = [
  { title: 'Inspect the exterior', text: 'We review the areas you’re concerned about and document the conditions we can see.' },
  { title: 'Review a written estimate', text: 'See the proposed scope, materials, timing, and what could affect the price before you decide.' },
  { title: 'Schedule the installation', text: 'Confirm access, staging, and cleanup. We’ll keep you informed if the weather changes the plan.' },
  { title: 'Walk through the work', text: 'Review the finished details together and get answers to any questions about care or follow-up.' },
];
export const faqs = [
  ['Can my roof be repaired?', 'A localized issue such as a damaged pipe boot or a small section of missing shingles may be repairable. Widespread wear, repeated leaks, or damage across several slopes can make replacement the better option. An inspection helps narrow it down.'],
  ['What is included in an estimate?', 'Expect a written scope, proposed materials, site protection and cleanup plans, and a price for the work described. Ask how concealed conditions, such as damaged decking discovered during tear-off, would be handled.'],
  ['How should I prepare for installation?', 'Move vehicles out of the work zone, clear items from around the house, and plan a quiet space for pets. If you have fragile items hung on interior walls, move them somewhere safe before work starts.'],
  ['Which roofing materials can I choose?', 'Architectural asphalt shingles offer a range of profiles and colors. Standing-seam metal can suit some roof designs. Your roof pitch, ventilation, budget, and the look of the house all inform the choice.'],
  ['How soon can work start?', 'Timing depends on the scope, weather, material availability, and the crew’s schedule. The estimate conversation is where you can ask about the earliest practical start and how weather delays are communicated.'],
];
