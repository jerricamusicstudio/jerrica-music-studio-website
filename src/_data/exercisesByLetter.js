// Groups the alphabetized exercises list by first letter, for the
// "Browse Exercises by Name" directory page.
const exercises = require("./exercises.js");

module.exports = (() => {
  const groups = {};

  exercises.forEach((exercise) => {
    const letter = exercise.name.charAt(0).toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(exercise);
  });

  return Object.keys(groups)
    .sort()
    .map((letter) => ({ letter, exercises: groups[letter] }));
})();
