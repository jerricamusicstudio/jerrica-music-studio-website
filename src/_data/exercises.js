// Reads every exercise file in ./exercises/ (one small file per exercise —
// see exercises/README.md) and turns them into one flat, alphabetized list.
// This is the single source of truth: each exercise is entered once here,
// and it automatically appears on its range+category page, its own detail
// page, and in the "Browse Exercises by Name" directory.
const fs = require("fs");
const path = require("path");

const ranges = require("./ranges.js");
const categories = require("./categories.js");

function slugify(str) {
  return String(str)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const exercisesDir = path.join(__dirname, "exercises");

module.exports = (() => {
  const files = fs
    .readdirSync(exercisesDir)
    .filter((f) => f.endsWith(".json")); // TEMPLATE.json.example is skipped on purpose

  const rangeBySlug = Object.fromEntries(ranges.map((r) => [r.slug, r]));
  const categoryBySlug = Object.fromEntries(categories.map((c) => [c.slug, c]));

  const list = files.map((file) => {
    const raw = fs.readFileSync(path.join(exercisesDir, file), "utf8");
    let data;
    try {
      data = JSON.parse(raw);
    } catch (err) {
      throw new Error(`Could not read exercise file "${file}": ${err.message}`);
    }

    if (!data.name) throw new Error(`Exercise file "${file}" is missing a "name".`);
    if (!data.range || !rangeBySlug[data.range]) {
      throw new Error(`Exercise "${data.name}" (${file}) has an unknown "range": ${data.range}`);
    }
    if (!data.category || !categoryBySlug[data.category]) {
      throw new Error(`Exercise "${data.name}" (${file}) has an unknown "category": ${data.category}`);
    }

    return {
      name: data.name,
      slug: data.slug || slugify(data.name),
      range: data.range,
      rangeName: rangeBySlug[data.range].name,
      category: data.category,
      categoryName: categoryBySlug[data.category].name,
      difficulty: data.difficulty || "",
      whatItHelps: data.whatItHelps || "",
      instructions: data.instructions || "",
      audioVideo: data.audioVideo || "",
      coachingNotes: data.coachingNotes || "",
    };
  });

  list.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
  return list;
})();
