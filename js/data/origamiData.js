// Shared origami data - used by both origami.html and index.html
// Add multiple images to the 'images' array for carousel support
const origamiData = [ // beginner / intermediate / advanced
  {
    id: 1,
    title: "Humanoid Crane",
    artist: "Sasade Shinji",
    description: "What if the classic crane wanted to go to the gym ?",
    images: ["../assets/images/Origami-optimized/HumanoidCrane (1).avif", "../assets/images/Origami-optimized/HumanoidCrane (2).avif", "../assets/images/Origami-optimized/HumanoidCrane (3).avif", "../assets/images/Origami-optimized/HumanoidCrane (4).avif", "../assets/images/Origami-optimized/HumanoidCrane (5).avif"]
  },
  {
    id: 1,
    title: "Ancient Dragon",
    artist: "Satoshi Kamiya",
    description: "On very well known Japanese origami artist Satoshi Kamiya's design, this ancient dragon features intricate details and complex folds to bring the mythical creature to life.",
    images: ["../assets/images/Origami-optimized/AncientDragon (1).avif", "../assets/images/Origami-optimized/AncientDragon (2).avif", "../assets/images/Origami-optimized/AncientDragon (3).avif", "../assets/images/Origami-optimized/AncientDragon (4).avif"]
  },
  {
    id: 2,
    title: "Baby Kroc",
    artist: "Ziliang",
    description: "Pretty cool design of a baby crocodile, brought to life with a pretty nice colored paper too !",
    images: ["../assets/images/Origami-optimized/BabyKroc (1).avif", "../assets/images/Origami-optimized/BabyKroc (2).avif", "../assets/images/Origami-optimized/BabyKroc (3).avif", "../assets/images/Origami-optimized/BabyKroc (4).avif"]
  },
  {
    id: 3,
    title: "Bahamut Dragon",
    artist: "Lien Quoc Dat",
    description: "A majestic dragon inspired by the legendary Bahamut.",
    images: ["../assets/images/Origami-optimized/BahamutDragon (1).avif", "../assets/images/Origami-optimized/BahamutDragon (2).avif", "../assets/images/Origami-optimized/BahamutDragon (3).avif", "../assets/images/Origami-optimized/BahamutDragon (4).avif"]
  },
  {
    id: 4,
    title: "Dragon bookmark",
    artist: "Jo Nakashima",
    description: "Definitely the coolest bookmark I own, maybe because I made it myself ! Although a little too small.",
    images: ["../assets/images/Origami-optimized/BookSaver (1).avif", "../assets/images/Origami-optimized/BookSaver (2).avif", "../assets/images/Origami-optimized/BookSaver (3).avif", "../assets/images/Origami-optimized/BookSaver (4).avif", "../assets/images/Origami-optimized/BookSaver (5).avif", "../assets/images/Origami-optimized/BookSaver (6).avif", "../assets/images/Origami-optimized/BookSaver (7).avif"]
  },
  {
    id: 5,
    title: "Cat on the moon",
    artist: "Jo Nakashima",
    description: "A little cat playing with moon, this one was made with a really thick paper.",
    images: ["../assets/images/Origami-optimized/CatBall.avif"]
  },
  {
    id: 6,
    title: "Chameleon",
    artist: "Jo Nakashima",
    description: "A very small chameleon. One again with the cartooney style of Jo Nakashima which I really like if you haven't noticed it yet.",
    images: ["../assets/images/Origami-optimized/Chameleon (1).avif", "../assets/images/Origami-optimized/Chameleon (2).avif", "../assets/images/Origami-optimized/Chameleon (3).avif"]
  },
  {
    id: 7,
    title: "Dancing Fish",
    artist: "Lien Quoc Dat",
    description: "A very elegant fish that seems to be dancing in the water. I like the fact that the dual colored paper make it stand out even more.",
    images: ["../assets/images/Origami-optimized/DancingFish (1).avif", "../assets/images/Origami-optimized/DancingFish (2).avif", "../assets/images/Origami-optimized/DancingFish (3).avif", "../assets/images/Origami-optimized/DancingFish (4).avif"]
  },
  {
    id: 8,
    title: "Donkey",
    artist: "Daniel Chang",
    description: "One of the few origami I did during the 2025 Origami convention at Lyon (France). Amazing experience to be able to fold with some true masters.",
    images: ["../assets/images/Origami-optimized/Donkey (1).avif", "../assets/images/Origami-optimized/Donkey (2).avif"]
  },
  {
    id: 9,
    title: "Updated Heavy Dragon",
    artist: "Tsuruta Yoshimasa",
    description: "An updated version of the classic Heavy dragon that was on of the first intermediat level origamis I did.",
    images: ["../assets/images/Origami-optimized/DoubleDragonBaby (1).avif", "../assets/images/Origami-optimized/DoubleDragonBaby (2).avif", "../assets/images/Origami-optimized/DoubleDragonBaby (3).avif", "../assets/images/Origami-optimized/DoubleDragonBaby (4).avif", "../assets/images/Origami-optimized/DoubleDragonBaby (5).avif"]
  },
  {
    id: 10,
    title: "Dragon Blooming",
    artist: "Huang Zhen Ming",
    description: "A beautiful dragon accompanied by a flower, both of which I altered a bit from the original design.",
    images: ["../assets/images/Origami-optimized/DragonFlowerBrown (1).avif", "../assets/images/Origami-optimized/DragonFlowerBrown (2).avif", "../assets/images/Origami-optimized/DragonFlowerBrown (3).avif"]
  },
  {
    id: 11,
    title: "Dunkleosteus",
    artist: "Maeng Hyeong Kyu",
    description: "A prehistoric armored fish brought to life, but this time let's not let it go in water !",
    images: ["../assets/images/Origami-optimized/Dunkleosteus (1).avif", "../assets/images/Origami-optimized/Dunkleosteus (2).avif", "../assets/images/Origami-optimized/Dunkleosteus (3).avif", "../assets/images/Origami-optimized/Dunkleosteus (4).avif", "../assets/images/Origami-optimized/Dunkleosteus (5).avif"]
  },
  {
    id: 13,
    title: "Nautilus",
    artist: "Please contact me if you know the author!",
    description: "A very little nautilus, which I had to make given, how much I love sea creatures.",
    images: ["../assets/images/Origami-optimized/Nautilus (1).avif", "../assets/images/Origami-optimized/Nautilus (2).avif", "../assets/images/Origami-optimized/Nautilus (3).avif", "../assets/images/Origami-optimized/Nautilus (4).avif"]
  },
  {
    id: 14,
    title: "An Ocean From A Seashell",
    artist: "Li Changqi",
    description: "Legends says you can hear the ocean if you put a seashell to your ear.",
    images: ["../assets/images/Origami-optimized/OceanSeashell (1).avif", "../assets/images/Origami-optimized/OceanSeashell (2).avif", "../assets/images/Origami-optimized/OceanSeashell (3).avif", "../assets/images/Origami-optimized/OceanSeashell (4).avif", "../assets/images/Origami-optimized/OceanSeashell (5).avif", "../assets/images/Origami-optimized/OceanSeashell (6).avif"]
  },
  {
    id: 15,
    title: "Octopus",
    artist: "Satoshi Kamiya",
    description: "Who thought an octopus could be made out of a single square sheet of paper ? I really liked the shaping of the tentacles on this one.",
    images: ["../assets/images/Origami-optimized/Octopus (1).avif", "../assets/images/Origami-optimized/Octopus (2).avif", "../assets/images/Origami-optimized/Octopus (3).avif", "../assets/images/Origami-optimized/Octopus (4).avif"]
  },
  {
    id: 16,
    title: "Rhino Baby",
    artist: "Ziliang",
    description: "An adorable baby rhinoceros with its distinctive horn and sturdy build.",
    images: ["../assets/images/Origami-optimized/RhinoBaby (1).avif", "../assets/images/Origami-optimized/RhinoBaby (2).avif"]
  },
  {
    id: 17,
    title: "Scorpion",
    artist: "Please contact me if you know the author!",
    description: "A little scorpion made from 2 sheets of paper.",
    images: ["../assets/images/Origami-optimized/Scorpion (1).avif", "../assets/images/Origami-optimized/Scorpion (2).avif", "../assets/images/Origami-optimized/Scorpion (3).avif", "../assets/images/Origami-optimized/Scorpion (4).avif", "../assets/images/Origami-optimized/Scorpion (5).avif"]
  },
  {
    id: 19,
    title: "Thinking Crane",
    artist: "Chiang Jie",
    description: "What if the original cran had thoutghts ?",
    images: ["../assets/images/Origami-optimized/ThinkingCrane (1).avif", "../assets/images/Origami-optimized/ThinkingCrane (2).avif", "../assets/images/Origami-optimized/ThinkingCrane (3).avif", "../assets/images/Origami-optimized/ThinkingCrane (4).avif", "../assets/images/Origami-optimized/ThinkingCrane (5).avif"]
  },
  {
    id: 20,
    title: "Pegasus",
    artist: "Pham HoangTuan",
    description: "Magical creatures are always fun to fold!",
    images: ["../assets/images/Origami-optimized/Unicorn (1).avif", "../assets/images/Origami-optimized/Unicorn (2).avif"]
  },
  {
    id: 23,
    title: "Black Cat",
    artist: "Yamaguchi Makoto",
    description: "Sometimes simple designs are the best !",
    images: ["../assets/images/Origami-optimized/BlackCat (1).avif", "../assets/images/Origami-optimized/BlackCat (2).avif"]
  },
  {
    id: 24,
    title: "Shinlong (Oriental Dragon)",
    artist: "Lien Quoc Dat",
    description: "Always loved dragons, this one is a modular origami that looks really great when done right. Especially with tiny papers!",
    images: ["../assets/images/Origami-optimized/DragonOriental (1).avif", "../assets/images/Origami-optimized/DragonOriental (2).avif", "../assets/images/Origami-optimized/DragonOriental (3).avif", "../assets/images/Origami-optimized/DragonOriental (4).avif", "../assets/images/Origami-optimized/DragonOriental (5).avif", "../assets/images/Origami-optimized/DragonOriental (6).avif", "../assets/images/Origami-optimized/DragonOriental (7).avif"]
  },
  {
    id: 25,
    title: "Dragon Treasure",
    artist: "Yudai Imai",
    description: "Don't you dare touch my treasure !",
    images: ["../assets/images/Origami-optimized/DragonTreasure (1).avif", "../assets/images/Origami-optimized/DragonTreasure (2).avif", "../assets/images/Origami-optimized/DragonTreasure (3).avif", "../assets/images/Origami-optimized/DragonTreasure (4).avif"]
  },
  {
    id: 26,
    title: "Fossil Tyrannosaurus",
    artist: "Issei Yoshino",
    description: "One of the origami that required the highest amount of papers compared to the usual ... well ... 1.",
    images: ["../assets/images/Origami-optimized/FossilTyranosaure (1).avif", "../assets/images/Origami-optimized/FossilTyranosaure (2).avif", "../assets/images/Origami-optimized/FossilTyranosaure (3).avif", "../assets/images/Origami-optimized/FossilTyranosaure (4).avif", "../assets/images/Origami-optimized/FossilTyranosaure (5).avif", "../assets/images/Origami-optimized/FossilTyranosaure (6).avif"]
  },
  {
    id: 27,
    title: "Hanging Chameleon",
    artist: "Wonseon Seo",
    description: "I really like reptiles so when I saw this model I couldn't resist folding it. Tried to integrate it with real sticks for a better effect.",
    images: ["../assets/images/Origami-optimized/HangingChameleon (1).avif", "../assets/images/Origami-optimized/HangingChameleon (2).avif", "../assets/images/Origami-optimized/HangingChameleon (3).avif"]
  },
  {
    id: 28,
    title: "Hanging Wyvern",
    artist: "Lien Quoc Dat",
    description: "I like that this branch gives the impression that the wyvern is really tiny compared to the usual size at which we imagine creatures like this one !",
    images: ["../assets/images/Origami-optimized/HangingWyvern (1).avif", "../assets/images/Origami-optimized/HangingWyvern (2).avif", "../assets/images/Origami-optimized/HangingWyvern (3).avif"]
  },
  {
    id: 29,
    title: "Hydra",
    artist: "Lien Quoc Dat",
    description: "The famous mythological Hydra, cut one head and ... well ... actually with this one let's not try that !",
    images: ["../assets/images/Origami-optimized/Hydra (1).avif", "../assets/images/Origami-optimized/Hydra (2).avif", "../assets/images/Origami-optimized/Hydra (3).avif"]
  },
  {
    id: 30,
    title: "Lotus Crane",
    artist: "Yamaki",
    description: "There's something I really like to origamis that expends from the classic crane!",
    images: ["../assets/images/Origami-optimized/LotusCrane (1).avif", "../assets/images/Origami-optimized/LotusCrane (2).avif", "../assets/images/Origami-optimized/LotusCrane (3).avif"]
  },
  {
    id: 31,
    title: "Mosasaurus",
    artist: "ino87",
    description: "Always a big fan of prehistoric marine reptiles, the mosasaurus is no exception.",
    images: ["../assets/images/Origami-optimized/Mosasaure (1).avif", "../assets/images/Origami-optimized/Mosasaure (2).avif", "../assets/images/Origami-optimized/Mosasaure (3).avif", "../assets/images/Origami-optimized/Mosa.avif"]
  },
  {
    id: 32,
    title: "Kraken Attacking A Boat",
    artist: "Patricia Crawford",
    description: "Legends of the sea often speak of giant sea monsters attacking ships. Even in the world of origami no boats are safe!",
    images: ["../assets/images/Origami-optimized/OctopusBoat (1).avif", "../assets/images/Origami-optimized/OctopusBoat (2).avif", "../assets/images/Origami-optimized/OctopusBoat (3).avif", "../assets/images/Origami-optimized/OctopusBoat (4).avif", "../assets/images/Origami-optimized/OctopusBoat (5).avif", "../assets/images/Origami-optimized/OctopusBoat (6).avif", "../assets/images/Origami-optimized/OctopusBoat (7).avif", "../assets/images/Origami-optimized/OctopusBoat (8).avif", "../assets/images/Origami-optimized/OctopusBoat (9).avif"]
  },
  {
    id: 33,
    title: "Phoenix",
    artist: "Lien Quoc Dat",
    description: "The legendary phoenix, reborn from its ashes to soar once again. this time more papery than fiery!",
    images: ["../assets/images/Origami-optimized/Phoenix (1).avif", "../assets/images/Origami-optimized/Phoenix (2).avif", "../assets/images/Origami-optimized/Phoenix (3).avif", "../assets/images/Origami-optimized/Phoenix (4).avif", "../assets/images/Origami-optimized/Phoenix (5).avif", "../assets/images/Origami-optimized/Phoenix (6).avif"]
  },
  {
    id: 34,
    title: "Stingray",
    artist: "Please contact me if you know the author!",
    description: "A simple yet pretty nice stingray with it's friend.",
    images: ["../assets/images/Origami-optimized/Raie.avif"]
  },
  {
    id: 35,
    title: "Desert Snake",
    artist: "Gen Hagiwara",
    description: "A Little snake guarding it's flower in the middle of the desert.",
    images: ["../assets/images/Origami-optimized/SnakeDesert (1).avif", "../assets/images/Origami-optimized/SnakeDesert (2).avif", "../assets/images/Origami-optimized/SnakeDesert (3).avif", "../assets/images/Origami-optimized/SnakeDesert (4).avif", "../assets/images/Origami-optimized/SnakeDesert (5).avif"]
  },
  {
    id: 36,
    title: "Heavy Dragon",
    artist: "Tsuruta Yoshimasa",
    description: "The first complex origami dragon I made, and still one of my favorite. The transparent paper really gives it a unique look.",
    images: ["../assets/images/Origami-optimized/transparentDragon (1).avif", "../assets/images/Origami-optimized/transparentDragon (2).avif", "../assets/images/Origami-optimized/transparentDragon (3).avif", "../assets/images/Origami-optimized/transparentDragon (4).avif", "../assets/images/Origami-optimized/transparentDragon (5).avif", "../assets/images/Origami-optimized/transparentDragon (6).avif"]
  },
  {
    id: 37,
    title: "Turtle",
    artist: "Akira Yoshizawa",
    description: "Sea creatures are the best !",
    images: ["../assets/images/Origami-optimized/Turtle (1).avif", "../assets/images/Origami-optimized/Turtle (2).avif"]
  },
  {
    id: 38,
    title: "Raptor Dragon",
    artist: "Lien Quoc Dat",
    description: "What do you get when fusing a raptor and a wyvern ? This pretty cool origami of course!",
    images: ["../assets/images/Origami-optimized/Wyvern (1).avif", "../assets/images/Origami-optimized/Wyvern (2).avif", "../assets/images/Origami-optimized/Wyvern (3).avif", "../assets/images/Origami-optimized/Wyvern (4).avif"]
  },
  {
    id: 18,
    title: "Mini Shark",
    artist: "Tu Kaiming",
    description: "I love the cartooney style of this one, and the book it comes from has some really nice designs overall. (Origami From China)",
    images: ["../assets/images/Origami-optimized/Shark (1).avif", "../assets/images/Origami-optimized/Shark (2).avif", "../assets/images/Origami-optimized/Shark (3).avif", "../assets/images/Origami-optimized/Shark (4).avif"]
  },
  {
    id: 22,
    title: "Flower tree and humming-birds",
    artist: "Arun Johns",
    description: "A familly of humming-birds with a mother always watching out.",
    images: ["../assets/images/Origami-optimized/ArbreOiseau (1).avif", "../assets/images/Origami-optimized/ArbreOiseau (2).avif", "../assets/images/Origami-optimized/ArbreOiseau (3).avif"]
  },
  {
    id: 21,
    title: "Violonist",
    artist: "Hojyo Takashi",
    description: "The last really complex origami I made, a violinist playing his instrument with passion.",
    images: ["../assets/images/Origami-optimized/Violonist (1).avif", "../assets/images/Origami-optimized/Violonist (2).avif", "../assets/images/Origami-optimized/Violonist (3).avif", "../assets/images/Origami-optimized/Violonist (4).avif", "../assets/images/Origami-optimized/Violonist (5).avif"]
  },
  {
    id: 39,
    title: "Cherry tree Dragon",
    artist: "Lien Quoc Dat",
    description: "Always wanted to make a dragon along some flowers. The result was so good that I had to put it in a frame !",
    images: ["../assets/images/Origami-optimized/CherryDragon (1).avif", "../assets/images/Origami-optimized/CherryDragon (2).avif", "../assets/images/Origami-optimized/CherryDragon (3).avif", "../assets/images/Origami-optimized/CherryDragon (4).avif", "../assets/images/Origami-optimized/CherryDragon (5).avif"]
  }
];
