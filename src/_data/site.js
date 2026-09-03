// Site-wide settings, all in one place so they're easy to update later
// without having to dig through page templates.
module.exports = {
  name: "Jerrica Music Studio",
  year: new Date().getFullYear(),
  founder: "Jerrica Alyssa",
  email: "jerricamusicstudio@gmail.com",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Vocal Exercises", href: "/vocal-exercises/" },
    { label: "Gear", href: "/equipment/" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Contact", href: "/#contact" },
  ],
  social: {
    tiktok: "https://www.tiktok.com/@jerricaalyssa",
    youtube: "https://www.youtube.com/c/JerricaAlyssa",
  },
  services: [
    "Vocal Coaching",
    "Artist Development",
    "Songwriting",
    "Music Production",
    "Social Media Training",
  ],
  // TODO (Jerrica): replace with your real Amazon Equipment List link.
  // This one place controls the button on the Equipment page, the small
  // link on the homepage, and anywhere else it's needed.
  amazonEquipmentListUrl: "#",
};
