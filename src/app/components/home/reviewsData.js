// Real Trustpilot data from https://www.trustpilot.com/review/www.iniziosolutions.com
// (checked November 2026). Update the score/count here when they change.
export const TRUSTPILOT = {
  url: "https://www.trustpilot.com/review/www.iniziosolutions.com",
  score: "4.8",
  label: "Excellent",
  count: 39,
};

export const REVIEWS = [
  {
    name: "Buck Wholesale",
    location: "US",
    quote: "We've been thrilled with the results. The ordering process is easy, we get the files back quickly, and they have all stitched out great.",
    url: "https://www.trustpilot.com/reviews/6a8772f1ea782482db8f22c5",
  },
  {
    name: "Mitchell Weaverling",
    location: "US",
    quote: "My go to for all of my digitizing. Always excellent stitch outs. Adjusts if needed. Super fast.",
    url: "https://www.trustpilot.com/reviews/6a681deadf2a498835c38a25",
  },
  {
    name: "Keynote Marketing",
    location: "GB",
    quote: "Amazing service. They are extremely responsive, always quick to turn things around.",
    url: "https://www.trustpilot.com/reviews/6aa99300db7e4ae5813da531",
  },
  {
    name: "Michael Phillips",
    location: "US",
    quote: "Aiden and his team have done a fantastic job and will be recommended to anyone I come in contact with.",
    url: "https://www.trustpilot.com/reviews/6ad7917dba2c5e85b477e1e0",
  },
  {
    name: "Kay Middleton",
    location: "US",
    quote: "John Reed at Inizio has been nothing short of amazing! He is so helpful, kind and inspiring…",
    url: "https://www.trustpilot.com/reviews/68d6baa79ca20af1c5e02e14",
  },
  {
    name: "Miranda",
    location: "US",
    quote: "We enjoy working with this team! Fast, friendly reliable work.",
    url: "https://www.trustpilot.com/reviews/6a66c5e8c860db4a7a56d0f5",
  },
];

export function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}
