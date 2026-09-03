// Recommended Equipment page category sections, in the approved order
// (beginner-facing gear first, since most visitors arrive as students).
// Each category is empty for now — Jerrica adds her own picks and notes
// later; this file just defines the shape.
function slugify(name) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const names = [
  "Beginner Equipment",
  "Microphones",
  "Audio Interfaces",
  "Headphones",
  "Keyboards & MIDI Controllers",
  "Recording Equipment",
  "Home Studio Equipment",
  "Vocal Practice Accessories",
  "Cameras & Lighting",
];

module.exports = names.map((name) => ({ name, slug: slugify(name) }));
