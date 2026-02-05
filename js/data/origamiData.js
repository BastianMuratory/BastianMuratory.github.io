// Shared origami data - used by both origami.html and index.html
// Add multiple images to the 'images' array for carousel support
const origamiData = [ // beginner / intermediate / advanced
  {
    id: 1,
    title: "Humanoid Crane",
    artist: "Sasade Shinji",
    description: "What if the classic crane wanted to go to the gym ?",
    images: ["../assets/images/Origami/HumanoidCrane (1).jpg", "../assets/images/Origami/HumanoidCrane (2).jpg", "../assets/images/Origami/HumanoidCrane (3).jpg", "../assets/images/Origami/HumanoidCrane (4).jpg", "../assets/images/Origami/HumanoidCrane (5).jpg"]
  },
  {
    id: 1,
    title: "Ancient Dragon",
    artist: "Satoshi Kamiya",
    description: "On very well known Japanese origami artist Satoshi Kamiya's design, this ancient dragon features intricate details and complex folds to bring the mythical creature to life.",
    images: ["../assets/images/Origami/AncientDragon (1).jpg", "../assets/images/Origami/AncientDragon (2).jpg", "../assets/images/Origami/AncientDragon (3).jpg", "../assets/images/Origami/AncientDragon (4).jpg"]
  },
  {
    id: 2,
    title: "Baby Kroc",
    artist: "Ziliang",
    description: "Pretty cool design of a baby crocodile, brought to life with a pretty nice colored paper too !",
    images: ["../assets/images/Origami/BabyKroc (1).jpg", "../assets/images/Origami/BabyKroc (2).jpg", "../assets/images/Origami/BabyKroc (3).jpg", "../assets/images/Origami/BabyKroc (4).jpg"]
  },
  {
    id: 3,
    title: "Bahamut Dragon",
    artist: "Lien Quoc Dat",
    description: "A majestic dragon inspired by the legendary Bahamut.",
    images: ["../assets/images/Origami/BahamutDragon (1).jpg", "../assets/images/Origami/BahamutDragon (2).jpg", "../assets/images/Origami/BahamutDragon (3).jpg", "../assets/images/Origami/BahamutDragon (4).jpg"]
  },
  {
    id: 4,
    title: "Dragon bookmark",
    artist: "Jo Nakashima",
    description: "Definitely the coolest bookmark I own, maybe because I made it myself ! Although a little too small.",
    images: ["../assets/images/Origami/BookSaver (1).jpg", "../assets/images/Origami/BookSaver (2).jpg", "../assets/images/Origami/BookSaver (3).jpg", "../assets/images/Origami/BookSaver (4).jpg", "../assets/images/Origami/BookSaver (5).jpg", "../assets/images/Origami/BookSaver (6).jpg", "../assets/images/Origami/BookSaver (7).jpg"]
  },
  {
    id: 5,
    title: "Cat on the moon",
    artist: "Jo Nakashima",
    description: "A little cat playing with moon, this one was made with a really thick paper.",
    images: ["../assets/images/Origami/CatBall.jpg"]
  },
  {
    id: 6,
    title: "Chameleon",
    artist: "Jo Nakashima",
    description: "A very small chameleon. One again with the cartooney style of Jo Nakashima which I really like if you haven't noticed it yet.",
    images: ["../assets/images/Origami/Chameleon (1).jpg", "../assets/images/Origami/Chameleon (2).jpg", "../assets/images/Origami/Chameleon (3).jpg"]
  },
  {
    id: 7,
    title: "Dancing Fish",
    artist: "Lien Quoc Dat",
    description: "A very elegant fish that seems to be dancing in the water. I like the fact that the dual colored paper make it stand out even more.",
    images: ["../assets/images/Origami/DancingFish (1).jpg", "../assets/images/Origami/DancingFish (2).jpg", "../assets/images/Origami/DancingFish (3).jpg", "../assets/images/Origami/DancingFish (4).jpg"]
  },
  {
    id: 8,
    title: "Donkey",
    artist: "Daniel Chang",
    description: "One of the few origami I did during the 2025 Origami convention at Lyon (France). Amazing experience to be able to fold with some true masters.",
    images: ["../assets/images/Origami/Donkey (1).jpg", "../assets/images/Origami/Donkey (2).jpg"]
  },
  {
    id: 9,
    title: "Updated Heavy Dragon",
    artist: "Tsuruta Yoshimasa",
    description: "An updated version of the classic Heavy dragon that was on of the first intermediat level origamis I did.",
    images: ["../assets/images/Origami/DoubleDragonBaby (1).jpg", "../assets/images/Origami/DoubleDragonBaby (2).jpg", "../assets/images/Origami/DoubleDragonBaby (3).jpg", "../assets/images/Origami/DoubleDragonBaby (4).jpg", "../assets/images/Origami/DoubleDragonBaby (5).jpg"]
  },
  {
    id: 10,
    title: "Dragon Blooming",
    artist: "Huang Zhen Ming",
    description: "A beautiful dragon accompanied by a flower, both of which I altered a bit from the original design.",
    images: ["../assets/images/Origami/DragonFlowerBrown (1).jpg", "../assets/images/Origami/DragonFlowerBrown (2).jpg", "../assets/images/Origami/DragonFlowerBrown (3).jpg"]
  },
  {
    id: 11,
    title: "Dunkleosteus",
    artist: "Maeng Hyeong Kyu",
    description: "A prehistoric armored fish brought to life, but this time let's not let it go in water !",
    images: ["../assets/images/Origami/Dunkleosteus (1).jpg", "../assets/images/Origami/Dunkleosteus (2).jpg", "../assets/images/Origami/Dunkleosteus (3).jpg", "../assets/images/Origami/Dunkleosteus (4).jpg", "../assets/images/Origami/Dunkleosteus (5).jpg"]
  },
  {
    id: 13,
    title: "Nautilus",
    artist: "Please contact me if you know the author!",
    description: "A very little nautilus, which I had to make given, how much I love sea creatures.",
    images: ["../assets/images/Origami/Nautilus (1).jpg", "../assets/images/Origami/Nautilus (2).jpg", "../assets/images/Origami/Nautilus (3).jpg", "../assets/images/Origami/Nautilus (4).jpg"]
  },
  {
    id: 14,
    title: "An Ocean From A Seashell",
    artist: "Li Changqi",
    description: "Legends says you can hear the ocean if you put a seashell to your ear.",
    images: ["../assets/images/Origami/OceanSeashell (1).jpg", "../assets/images/Origami/OceanSeashell (2).jpg", "../assets/images/Origami/OceanSeashell (3).jpg", "../assets/images/Origami/OceanSeashell (4).jpg", "../assets/images/Origami/OceanSeashell (5).jpg", "../assets/images/Origami/OceanSeashell (6).jpg"]
  },
  {
    id: 15,
    title: "Octopus",
    artist: "Satoshi Kamiya",
    description: "Who thought an octopus could be made out of a single square sheet of paper ? I really liked the shaping of the tentacles on this one.",
    images: ["../assets/images/Origami/Octopus (1).jpg", "../assets/images/Origami/Octopus (2).jpg", "../assets/images/Origami/Octopus (3).jpg", "../assets/images/Origami/Octopus (4).jpg"]
  },
  {
    id: 16,
    title: "Rhino Baby",
    artist: "Ziliang",
    description: "An adorable baby rhinoceros with its distinctive horn and sturdy build.",
    images: ["../assets/images/Origami/RhinoBaby (1).jpg", "../assets/images/Origami/RhinoBaby (2).jpg"]
  },
  {
    id: 17,
    title: "Scorpion",
    artist: "Please contact me if you know the author!",
    description: "A little scorpion made from 2 sheets of paper.",
    images: ["../assets/images/Origami/Scorpion (1).jpg", "../assets/images/Origami/Scorpion (2).jpg", "../assets/images/Origami/Scorpion (3).jpg", "../assets/images/Origami/Scorpion (4).jpg", "../assets/images/Origami/Scorpion (5).jpg"]
  },
  {
    id: 19,
    title: "Thinking Crane",
    artist: "Chiang Jie",
    description: "What if the original cran had thoutghts ?",
    images: ["../assets/images/Origami/ThinkingCrane (1).jpg", "../assets/images/Origami/ThinkingCrane (2).jpg", "../assets/images/Origami/ThinkingCrane (3).jpg", "../assets/images/Origami/ThinkingCrane (4).jpg", "../assets/images/Origami/ThinkingCrane (5).jpg"]
  },
  {
    id: 20,
    title: "Pegasus",
    artist: "Pham HoangTuan",
    description: "Magical creatures are always fun to fold!",
    images: ["../assets/images/Origami/Unicorn (1).jpg", "../assets/images/Origami/Unicorn (2).jpg"]
  },
  {
    id: 23,
    title: "Black Cat",
    artist: "Yamaguchi Makoto",
    description: "Sometimes simple designs are the best !",
    images: ["../assets/images/Origami/BlackCat (1).jpg", "../assets/images/Origami/BlackCat (2).jpg"]
  },
  {
    id: 24,
    title: "Shinlong (Oriental Dragon)",
    artist: "Lien Quoc Dat",
    description: "Always loved dragons, this one is a modular origami that looks really great when done right. Especially with tiny papers!",
    images: ["../assets/images/Origami/DragonOriental (1).jpg", "../assets/images/Origami/DragonOriental (2).jpg", "../assets/images/Origami/DragonOriental (3).jpg", "../assets/images/Origami/DragonOriental (4).jpg", "../assets/images/Origami/DragonOriental (5).jpg", "../assets/images/Origami/DragonOriental (6).jpg", "../assets/images/Origami/DragonOriental (7).jpg"]
  },
  {
    id: 25,
    title: "Dragon Treasure",
    artist: "Yudai Imai",
    description: "Don't you dare touch my treasure !",
    images: ["../assets/images/Origami/DragonTreasure (1).jpg", "../assets/images/Origami/DragonTreasure (2).jpg", "../assets/images/Origami/DragonTreasure (3).jpg", "../assets/images/Origami/DragonTreasure (4).jpg"]
  },
  {
    id: 26,
    title: "Fossil Tyrannosaurus",
    artist: "Issei Yoshino",
    description: "One of the origami that required the highest amount of papers compared to the usual ... well ... 1.",
    images: ["../assets/images/Origami/FossilTyranosaure (1).jpg", "../assets/images/Origami/FossilTyranosaure (2).jpg", "../assets/images/Origami/FossilTyranosaure (3).jpg", "../assets/images/Origami/FossilTyranosaure (4).jpg", "../assets/images/Origami/FossilTyranosaure (5).jpg", "../assets/images/Origami/FossilTyranosaure (6).jpg"]
  },
  {
    id: 27,
    title: "Hanging Chameleon",
    artist: "Wonseon Seo",
    description: "I really like reptiles so when I saw this model I couldn't resist folding it. Tried to integrate it with real sticks for a better effect.",
    images: ["../assets/images/Origami/HangingChameleon (1).jpg", "../assets/images/Origami/HangingChameleon (2).jpg", "../assets/images/Origami/HangingChameleon (3).jpg"]
  },
  {
    id: 28,
    title: "Hanging Wyvern",
    artist: "Lien Quoc Dat",
    description: "I like that this branch gives the impression that the wyvern is really tiny compared to the usual size at which we imagine creatures like this one !",
    images: ["../assets/images/Origami/HangingWyvern (1).jpg", "../assets/images/Origami/HangingWyvern (2).jpg", "../assets/images/Origami/HangingWyvern (3).jpg"]
  },
  {
    id: 29,
    title: "Hydra",
    artist: "Lien Quoc Dat",
    description: "The famous mythological Hydra, cut one head and ... well ... actually with this one let's not try that !",
    images: ["../assets/images/Origami/Hydra (1).jpg", "../assets/images/Origami/Hydra (2).jpg", "../assets/images/Origami/Hydra (3).jpg"]
  },
  {
    id: 30,
    title: "Lotus Crane",
    artist: "Yamaki",
    description: "There's something I really like to origamis that expends from the classic crane!",
    images: ["../assets/images/Origami/LotusCrane (1).jpg", "../assets/images/Origami/LotusCrane (2).jpg", "../assets/images/Origami/LotusCrane (3).jpg"]
  },
  {
    id: 31,
    title: "Mosasaurus",
    artist: "ino87",
    description: "Always a big fan of prehistoric marine reptiles, the mosasaurus is no exception.",
    images: ["../assets/images/Origami/Mosasaure (1).jpg", "../assets/images/Origami/Mosasaure (2).jpg", "../assets/images/Origami/Mosasaure (3).jpg", "../assets/images/Origami/Mosa.jpg"]
  },
  {
    id: 32,
    title: "Kraken Attacking A Boat",
    artist: "Patricia Crawford",
    description: "Legends of the sea often speak of giant sea monsters attacking ships. Even in the world of origami no boats are safe!",
    images: ["../assets/images/Origami/OctopusBoat (1).jpg", "../assets/images/Origami/OctopusBoat (2).jpg", "../assets/images/Origami/OctopusBoat (3).jpg", "../assets/images/Origami/OctopusBoat (4).jpg", "../assets/images/Origami/OctopusBoat (5).jpg", "../assets/images/Origami/OctopusBoat (6).jpg", "../assets/images/Origami/OctopusBoat (7).jpg", "../assets/images/Origami/OctopusBoat (8).jpg", "../assets/images/Origami/OctopusBoat (9).jpg"]
  },
  {
    id: 33,
    title: "Phoenix",
    artist: "Lien Quoc Dat",
    description: "The legendary phoenix, reborn from its ashes to soar once again. this time more papery than fiery!",
    images: ["../assets/images/Origami/Phoenix (1).jpg", "../assets/images/Origami/Phoenix (2).jpg", "../assets/images/Origami/Phoenix (3).jpg", "../assets/images/Origami/Phoenix (4).jpg", "../assets/images/Origami/Phoenix (5).jpg", "../assets/images/Origami/Phoenix (6).jpg"]
  },
  {
    id: 34,
    title: "Stingray",
    artist: "Please contact me if you know the author!",
    description: "A simple yet pretty nice stingray with it's friend.",
    images: ["../assets/images/Origami/Raie.jpg"]
  },
  {
    id: 35,
    title: "Desert Snake",
    artist: "Gen Hagiwara",
    description: "A Little snake guarding it's flower in the middle of the desert.",
    images: ["../assets/images/Origami/SnakeDesert (1).jpg", "../assets/images/Origami/SnakeDesert (2).jpg", "../assets/images/Origami/SnakeDesert (3).jpg", "../assets/images/Origami/SnakeDesert (4).jpg", "../assets/images/Origami/SnakeDesert (5).jpg"]
  },
  {
    id: 36,
    title: "Heavy Dragon",
    artist: "Tsuruta Yoshimasa",
    description: "The first complex origami dragon I made, and still one of my favorite. The transparent paper really gives it a unique look.",
    images: ["../assets/images/Origami/transparentDragon (1).jpg", "../assets/images/Origami/transparentDragon (2).jpg", "../assets/images/Origami/transparentDragon (3).jpg", "../assets/images/Origami/transparentDragon (4).jpg", "../assets/images/Origami/transparentDragon (5).jpg", "../assets/images/Origami/transparentDragon (6).jpg"]
  },
  {
    id: 37,
    title: "Turtle",
    artist: "Akira Yoshizawa",
    description: "Sea creatures are the best !",
    images: ["../assets/images/Origami/Turtle (1).jpg", "../assets/images/Origami/Turtle (2).jpg"]
  },
  {
    id: 38,
    title: "Raptor Dragon",
    artist: "Lien Quoc Dat",
    description: "What do you get when fusing a raptor and a wyvern ? This pretty cool origami of course!",
    images: ["../assets/images/Origami/Wyvern (1).jpg", "../assets/images/Origami/Wyvern (2).jpg", "../assets/images/Origami/Wyvern (3).jpg", "../assets/images/Origami/Wyvern (4).jpg"]
  },
  {
    id: 18,
    title: "Mini Shark",
    artist: "Tu Kaiming",
    description: "I love the cartooney style of this one, and the book it comes from has some really nice designs overall. (Origami From China)",
    images: ["../assets/images/Origami/Shark (1).jpg", "../assets/images/Origami/Shark (2).jpg", "../assets/images/Origami/Shark (3).jpg", "../assets/images/Origami/Shark (4).jpg"]
  },
  {
    id: 22,
    title: "Flower tree and humming-birds",
    artist: "Arun Johns",
    description: "A familly of humming-birds with a mother always watching out.",
    images: ["../assets/images/Origami/ArbreOiseau (1).jpg", "../assets/images/Origami/ArbreOiseau (2).jpg", "../assets/images/Origami/ArbreOiseau (3).jpg"]
  },
  {
    id: 21,
    title: "Violonist",
    artist: "Hojyo Takashi",
    description: "The last really complex origami I made, a violinist playing his instrument with passion.",
    images: ["../assets/images/Origami/Violonist (1).jpg", "../assets/images/Origami/Violonist (2).jpg", "../assets/images/Origami/Violonist (3).jpg", "../assets/images/Origami/Violonist (4).jpg", "../assets/images/Origami/Violonist (5).jpg"]
  },
  {
    id: 39,
    title: "Cherry tree Dragon",
    artist: "Lien Quoc Dat",
    description: "Always wanted to make a dragon along some flowers. The result was so good that I had to put it in a frame !",
    images: ["../assets/images/Origami/CherryDragon (1).jpg", "../assets/images/Origami/CherryDragon (2).jpg", "../assets/images/Origami/CherryDragon (3).jpg", "../assets/images/Origami/CherryDragon (4).jpg", "../assets/images/Origami/CherryDragon (5).jpg"]
  }
];
