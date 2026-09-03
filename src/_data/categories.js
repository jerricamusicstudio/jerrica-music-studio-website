// The 11 exercise categories used identically across every range section
// (Beginner, High, Middle, Low), in the approved order.
function slugify(name) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const names = [
  "Full Workout",
  "Warm Ups",
  "Breathing",
  "Range",
  "Chest Voice",
  "Head Voice",
  "Mixed Voice",
  "Agility",
  "Runs & Melisma",
  "Belting",
  "Cool Downs",
];

module.exports = names.map((name) => ({ name, slug: slugify(name) }));
