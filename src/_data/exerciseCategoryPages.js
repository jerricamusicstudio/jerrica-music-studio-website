// Cross-join of every range x category combination, used to generate
// one page per combination (44 pages) from a single template — see
// src/vocal-exercises/category.njk. Adding a 5th range or a 12th category
// automatically produces the right new pages, no template changes needed.
// Each combination also carries the (possibly empty) list of matching
// exercises, precomputed here so the template doesn't need to filter.
const ranges = require("./ranges.js");
const categories = require("./categories.js");
const exercises = require("./exercises.js");

module.exports = ranges.flatMap((range) =>
  categories.map((category) => ({
    range,
    category,
    exercises: exercises.filter(
      (ex) => ex.range === range.slug && ex.category === category.slug
    ),
  }))
);
