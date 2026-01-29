// Shared origami data - used by both origami.html and index.html
// Add multiple images to the 'images' array for carousel support
const origamiData = [ // beginner / intermediate / advanced
  {
    id: 1,
    title: "Ancient Dragon",
    artist: "Satoshi Kamiya",
    difficulty: "advanced",
    description: "On very well known Japanese origami artist Satoshi Kamiya's design, this ancient dragon features intricate details and complex folds to bring the mythical creature to life.",
    images: ["../assets/images/Origami/AncientDragon (1).jpg", "../assets/images/Origami/AncientDragon (2).jpg", "../assets/images/Origami/AncientDragon (3).jpg", "../assets/images/Origami/AncientDragon (4).jpg"]
  },
  {
    id: 2,
    title: "Baby Kroc",
    artist: "Unknown",
    difficulty: "intermediate",
    description: "A charming baby crocodile design with playful proportions and expressive details.",
    images: ["../assets/images/Origami/BabyKroc (1).jpg", "../assets/images/Origami/BabyKroc (2).jpg", "../assets/images/Origami/BabyKroc (3).jpg", "../assets/images/Origami/BabyKroc (4).jpg"]
  },
  {
    id: 3,
    title: "Bahamut Dragon",
    artist: "Unknown",
    difficulty: "advanced",
    description: "A majestic dragon inspired by the legendary Bahamut, featuring elaborate wings and detailed scales.",
    images: ["../assets/images/Origami/BahamutDragon (1).jpg", "../assets/images/Origami/BahamutDragon (2).jpg", "../assets/images/Origami/BahamutDragon (3).jpg", "../assets/images/Origami/BahamutDragon (4).jpg"]
  },
  {
    id: 4,
    title: "Book Saver",
    artist: "Unknown",
    difficulty: "beginner",
    description: "A practical and decorative bookmark design that adds personality to your reading experience.",
    images: ["../assets/images/Origami/BookSaver (1).jpg", "../assets/images/Origami/BookSaver (2).jpg", "../assets/images/Origami/BookSaver (3).jpg", "../assets/images/Origami/BookSaver (4).jpg", "../assets/images/Origami/BookSaver (5).jpg", "../assets/images/Origami/BookSaver (6).jpg", "../assets/images/Origami/BookSaver (7).jpg"]
  },
  {
    id: 5,
    title: "Cat Ball",
    artist: "Unknown",
    difficulty: "intermediate",
    description: "An adorable spherical cat design that combines cuteness with geometric precision.",
    images: ["../assets/images/Origami/CatBall.jpg"]
  },
  {
    id: 6,
    title: "Chameleon",
    artist: "Unknown",
    difficulty: "intermediate",
    description: "A reptilian masterpiece capturing the distinctive features of a chameleon with realistic proportions.",
    images: ["../assets/images/Origami/Chameleon (1).jpg", "../assets/images/Origami/Chameleon (2).jpg", "../assets/images/Origami/Chameleon (3).jpg"]
  },
  {
    id: 7,
    title: "Dancing Fish",
    artist: "Unknown",
    difficulty: "intermediate",
    description: "A dynamic fish design that appears to be in motion, showcasing flowing fins and graceful curves.",
    images: ["../assets/images/Origami/DancingFish (1).jpg", "../assets/images/Origami/DancingFish (2).jpg", "../assets/images/Origami/DancingFish (3).jpg", "../assets/images/Origami/DancingFish (4).jpg"]
  },
  {
    id: 8,
    title: "Donkey",
    artist: "Unknown",
    difficulty: "intermediate",
    description: "A charming donkey with expressive features and characteristic long ears.",
    images: ["../assets/images/Origami/Donkey (1).jpg", "../assets/images/Origami/Donkey (2).jpg"]
  },
  {
    id: 9,
    title: "Double Dragon Baby",
    artist: "Unknown",
    difficulty: "advanced",
    description: "A unique design featuring two baby dragons intertwined in a playful composition.",
    images: ["../assets/images/Origami/DoubleDragonBaby (1).jpg", "../assets/images/Origami/DoubleDragonBaby (2).jpg", "../assets/images/Origami/DoubleDragonBaby (3).jpg", "../assets/images/Origami/DoubleDragonBaby (4).jpg", "../assets/images/Origami/DoubleDragonBaby (5).jpg"]
  },
  {
    id: 10,
    title: "Dragon Flower Brown",
    artist: "Unknown",
    difficulty: "intermediate",
    description: "A creative fusion of dragon and flower elements, creating a mythical botanical specimen.",
    images: ["../assets/images/Origami/DragonFlowerBrown (1).jpg", "../assets/images/Origami/DragonFlowerBrown (2).jpg", "../assets/images/Origami/DragonFlowerBrown (3).jpg"]
  },
  {
    id: 11,
    title: "Dunkleosteus",
    artist: "Unknown",
    difficulty: "advanced",
    description: "A prehistoric armored fish brought to life through intricate folding techniques.",
    images: ["../assets/images/Origami/Dunkleosteus (1).jpg", "../assets/images/Origami/Dunkleosteus (2).jpg", "../assets/images/Origami/Dunkleosteus (3).jpg", "../assets/images/Origami/Dunkleosteus (4).jpg", "../assets/images/Origami/Dunkleosteus (5).jpg"]
  },
  {
    id: 12,
    title: "Mosasaurus",
    artist: "Unknown",
    difficulty: "advanced",
    description: "A fearsome marine reptile from the age of dinosaurs, captured in paper form.",
    images: ["../assets/images/Origami/Mosa.jpg"]
  },
  {
    id: 13,
    title: "Nautilus",
    artist: "Unknown",
    difficulty: "intermediate",
    description: "An elegant representation of the nautilus shell with its characteristic spiral pattern.",
    images: ["../assets/images/Origami/Nautilus (1).jpg", "../assets/images/Origami/Nautilus (2).jpg", "../assets/images/Origami/Nautilus (3).jpg", "../assets/images/Origami/Nautilus (4).jpg"]
  },
  {
    id: 14,
    title: "Ocean Seashell",
    artist: "Unknown",
    difficulty: "intermediate",
    description: "A beautiful seashell design capturing the organic curves and textures of ocean treasures.",
    images: ["../assets/images/Origami/OceanSeashell (1).jpg", "../assets/images/Origami/OceanSeashell (2).jpg", "../assets/images/Origami/OceanSeashell (3).jpg", "../assets/images/Origami/OceanSeashell (4).jpg", "../assets/images/Origami/OceanSeashell (5).jpg", "../assets/images/Origami/OceanSeashell (6).jpg"]
  },
  {
    id: 15,
    title: "Octopus",
    artist: "Unknown",
    difficulty: "advanced",
    description: "A complex design featuring multiple tentacles and the characteristic form of an octopus.",
    images: ["../assets/images/Origami/Octopus (1).jpg", "../assets/images/Origami/Octopus (2).jpg", "../assets/images/Origami/Octopus (3).jpg", "../assets/images/Origami/Octopus (4).jpg"]
  },
  {
    id: 16,
    title: "Rhino Baby",
    artist: "Unknown",
    difficulty: "intermediate",
    description: "An adorable baby rhinoceros with its distinctive horn and sturdy build.",
    images: ["../assets/images/Origami/RhinoBaby (1).jpg", "../assets/images/Origami/RhinoBaby (2).jpg"]
  },
  {
    id: 17,
    title: "Scorpion",
    artist: "Unknown",
    difficulty: "advanced",
    description: "A detailed scorpion design with articulated segments and menacing pincers.",
    images: ["../assets/images/Origami/Scorpion (1).jpg", "../assets/images/Origami/Scorpion (2).jpg", "../assets/images/Origami/Scorpion (3).jpg", "../assets/images/Origami/Scorpion (4).jpg", "../assets/images/Origami/Scorpion (5).jpg"]
  },
  {
    id: 18,
    title: "Shark",
    artist: "Unknown",
    difficulty: "intermediate",
    description: "A sleek predator of the seas, capturing the streamlined form and power of a shark.",
    images: ["../assets/images/Origami/Shark (1).jpg", "../assets/images/Origami/Shark (2).jpg", "../assets/images/Origami/Shark (3).jpg", "../assets/images/Origami/Shark (4).jpg"]
  },
  {
    id: 19,
    title: "Thinking Crane",
    artist: "Unknown",
    difficulty: "intermediate",
    description: "A contemplative variation of the classic crane, captured in a thoughtful pose.",
    images: ["../assets/images/Origami/ThinkingCrane (1).jpg", "../assets/images/Origami/ThinkingCrane (2).jpg", "../assets/images/Origami/ThinkingCrane (3).jpg", "../assets/images/Origami/ThinkingCrane (4).jpg", "../assets/images/Origami/ThinkingCrane (5).jpg"]
  },
  {
    id: 20,
    title: "Unicorn",
    artist: "Unknown",
    difficulty: "advanced",
    description: "A magical unicorn design with flowing mane and the iconic spiral horn.",
    images: ["../assets/images/Origami/Unicorn (1).jpg", "../assets/images/Origami/Unicorn (2).jpg"]
  },
  {
    id: 21,
    title: "Violonist",
    artist: "Unknown",
    difficulty: "advanced",
    description: "An artistic human figure playing the violin, showcasing detailed clothing and posture.",
    images: ["../assets/images/Origami/Violonist (1).jpg", "../assets/images/Origami/Violonist (2).jpg", "../assets/images/Origami/Violonist (3).jpg", "../assets/images/Origami/Violonist (4).jpg", "../assets/images/Origami/Violonist (5).jpg"]
  }
];
