# How to add a vocal exercise

This folder holds one small file per exercise — nothing else. Every exercise you
add here automatically shows up in three places on the site, with no extra work:

1. Its range page (e.g. Beginner) under the right category (e.g. Warm Ups)
2. The "Browse Exercises by Name" alphabetical directory, with search
3. Its own exercise detail page

## To add a new exercise

1. Duplicate `TEMPLATE.json.example` in this folder.
2. Rename the copy to something like `gentle-sirens.json` (the filename doesn't
   matter, but it must end in `.json`).
3. Fill in the fields — see below.
4. Save. The next time the site is built, your exercise appears automatically.

Do not rename or delete `TEMPLATE.json.example` itself — it ends in
`.json.example`, not `.json`, so the site ignores it and it's always there as a
reference copy.

## Fields

- `name` (required) — the exercise's name, e.g. "Gentle Sirens"
- `range` (required) — one of: `beginner`, `high-range`, `middle-range`, `low-range`
- `category` (required) — one of: `full-workout`, `warm-ups`, `breathing`, `range`,
  `chest-voice`, `head-voice`, `mixed-voice`, `agility`, `runs-and-melisma`,
  `belting`, `cool-downs`
- `difficulty` (optional) — e.g. "Easy", "Moderate", "Advanced"
- `whatItHelps` (optional) — a short sentence on what the exercise builds or improves
- `instructions` (optional) — the step-by-step instructions
- `audioVideo` (optional) — a link to an audio or video recording of the exercise
- `coachingNotes` (optional) — any extra notes, in your own voice

You never need to type the exercise's name a second time anywhere else — the
range and category pages, and the Browse by Name directory, all pull from this
one file.
