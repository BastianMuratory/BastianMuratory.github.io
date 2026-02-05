// Shared games data - used by both games-reviews.html and index.html
// To add an optional image to a game, add an 'image' property with the image path
const gamesData = [
  // 2026  
  { title: "Tank Head", rating: "2", date: "2026", month: "2", genres: "roguelike,vehicle-combat,sci-fi", description: "You play as a little drone trying to reach a place known as Highpoint. To achieve this, pilot your tank, and scavenge equipment in a science-fiction world.<br>The story has awesome potential but I felt the end was missing something", image: "../assets/images/Games/TankHead.jpg" },
  { title: "KEEPER", rating: "3", date: "2026", month: "1", genres: "puzzle,exploration", description: "You are a ... Lighthouse ?? Yep that's what got me to play this game.<br>Explore a magnificent island helped by an original bird.<br>Although slow at the beginning, this game is worth trying just for the scenery.", image: "../assets/images/Games/Keeper.jpg" },
  { title: "Blasphemous", rating: "3", date: "2026", month: "1", genres: "metroidvania,indie,horror", description: "Yup, this one is hard, and unforgiving, the more you die the harder it gets !<br>Appart from that I really liked the gore/pixel-art style.", image: "../assets/images/Games/Blasphemous.jpg" },
  
  // 2025
  { title: "Zelda Tears of the Kingdom", rating: "2", date: "2025", month: "12", genres: "action-adventure,open-world,exploration,fantasy", description: "Although I liked more the first one on switch this one didn't click with me the same way.<br>Maybe the map being similar didn't give me the urge to explore as much as I should have.", image: "../assets/images/Games/ZeldaTears.jpg"},
  { title: "Horizon Zero Dawn", rating: "4", date: "2025", month: "11", genres: "action-adventure,open-world,narrative,sci-fi", description: "There's nothing cooler than fighting robotic dinosaures in a post-apocalyptic world!<br>And you know what ? The story and gamplay are also really worth checking out.", image: "../assets/images/Games/HorizonZeroDawn.webp", squareImage: true },
  { title: "Cyberpunk 2077", rating: "4", date: "2025", month: "10", genres: "action-rpg,open-world,sci-fi,narrative", description: "In the future where everyone swears only by technology and implants, try to find your place in this city.<br>A+ for immersion and story-telling ...<br>But sometimes it feels our society is getting really to close from the one depicted in this game", image: "../assets/images/Games/Cyberpunk2077.jpg" },
  { title: "TowerFall", rating: "3", date: "2025", month: "09", genres: "platformer,multiplayer,co-op,action", description: "Stuck in a confined space with 3 friends and bows .... there's only one thing left to do and only one of you will enjoy the outcome!", image: "../assets/images/Games/Towerfall.avif", squareImage: true },
  { title: "Expedition 33: Clair Obscur", rating: "5", date: "2025", month: "09", genres: "action-rpg,adventure,fantasy,turn-based-strategy", description: "OKAYYYYY, went into this game without expecting anything ... Boy, did it not disapoint. The visuals are extraordinary, the gameplay is feel awesome and the music hits right in the goosbumps area.<br>But DAMN, the story is on another level, it grasps you from the very frst second and won't leave you even after finishing the game!<br>Please don't spoil the story for you if you plan on giving it a try, you won't regret it", image: "../assets/images/Games/Expedition33.gif" },
  { title: "Star Wars Jedi: Fallen Order", rating: "4", date: "2025", month: "06", genres: "space,action-adventure,narrative,sci-fi", description: "As in the first one, it's great to discover the univers of star wars from a different point of view than the main saga !", image: "../assets/images/Games/JediFallenOrder.jpg" },
  { title: "The Talos Principle II", rating: "4", date: "2025", month: "04", genres: "puzzle,sci-fi,narrative", description: "", image: "../assets/images/Games/TheThalosPrinciple.jpg" },
  { title: "Ratchet & Clank: Rift Apart", rating: "4", date: "2025", month: "03", genres: "action-adventure,platformer,narrative", description: "", image: "../assets/images/Games/RatchetAndClankRiftApart.webp" },
  { title: "The Gunk", rating: "1", date: "2025", month: "02", genres: "action-adventure,indie", description: "", image: "../assets/images/Games/TheGunk.jpg" },
  { title: "Dredge", rating: "4", date: "2025", month: "01", genres: "horror,exploration,indie", description: "", image: "../assets/images/Games/Dredge.jpg" },

  // 2024
  { title: "Super Mario Bros. Wonder", rating: "3", date: "2024", month: "12", genres: "platformer,adventure", description: "", image: "../assets/images/Games/SuperMarioBrosWonder.jpg" },
  { title: "Turnip Boy Commits Tax Evasion", rating: "3", date: "2024", month: "10", genres: "action-adventure,indie,comedy", description: "", image: "../assets/images/Games/TurnipBoyCommitTaxEvasion.jpg" },
  { title: "Minishoot' Adventure", rating: "2", date: "2024", month: "9", genres: "action,adventure,arcade", description: "", image: "../assets/images/Games/MinishootAdventure.jpg" },
  { title: "The Land Beneath Us", rating: "3", date: "2024", month: "8", genres: "action,roguelike,indie,turn-based-strategy", description: "", image: "../assets/images/Games/TheLandBeneathUS.jpg" },
  { title: "Shants of Sennaar", rating: "5", date: "2024", month: "7", genres: "puzzle,aventure,indie", description: "In this great puzzle game, you play as a traveller exploring the tower of Babel.<br>As you climb through the tower you will have to learn multiple languages, each with their own grammar, vocabulary and way of speaking. Help communities find a way to regain communication with each others.<br>The style is orginal, the story is full of misteries to solve and the puzzles are very well designed to help you understand each languages! I Love this game for it's originality!", image: "../assets/images/Games/ChantOfSennaar.jpg" },
  { title: "Animal Well", rating: "4", date: "2024", month: "6", genres: "metroidvania,puzzle,indie", description: "", image: "../assets/images/Games/AnimalWell.jpg" },
  { title: "Voidigo", rating: "2", date: "2024", month: "4", genres: "roguelike,action,indie", description: "", image: "../assets/images/Games/Voidigo.jpg" },
  { title: "RoboQuest", rating: "1", date: "2024", month: "4", genres: "roguelike,shooter,indie", description: "", image: "../assets/images/Games/Roboquest.jpg" },
  { title: "No Man's Sky", rating: "5", date: "2024", month: "4", genres: "exploration,survival,space,co-op,open-world,sci-fi", description: "Thought this was just another subnautica in space, but it's actually so much more! The diversity this game offers is trully amazing, the game is beautifull and you actually feel like a traveller trying to discover the misteries of space!", image: "../assets/images/Games/NoManSky.gif" },
  { title: "PEPPER Grinder", rating: "2", date: "2024", month: "2", genres: "platformer,action,indie", description: "", image: "../assets/images/Games/PepperGrinder.jpg" },
  { title: "Nova Drift", rating: "5", date: "2024", month: "2", genres: "roguelike,arcade,space,shooter", description: "This one is a true arcade gem! The concept is pretty simple: you are a spaship that needs to destroy other spaceships ...<br>But the execution is perfect! each run feel unique, you'll never run the same weapons so the game feels fresh each times. Don't want to fire a weapon ? just ram full speed you enemies or build drones to do that for you!", image: "../assets/images/Games/NovaDrift.gif" },
  { title: "Detroit: Become Human", rating: "4", date: "2024", month: "2", genres: "adventure,narrative", description: "", image: "../assets/images/Games/DetroitBecomeHuman.jpg" },
  { title: "Balatro", rating: "3", date: "2024", month: "1", genres: "card-game,roguelike,indie", description: "", image: "../assets/images/Games/Balatro.jpg" },
  { title: "Star Wars Jedi: Survivor", rating: "5", date: "2024", month: "1", genres: "action-adventure,space,narrative,sci-fi", description: "In this game, you trully feel like a jedi trying to survive in a word not really welcoming for your kind.<br>It was trully amazing to re-discover the universe of stars wars like the way I did when I was little, going to the cinema ... but this time being the jedi!", image: "../assets/images/Games/JediSurvivor.webp" },

  // 2023
  { title: "Pokemon Scarlet", rating: "2", date: "2023", month: "12", genres: "rpg,adventure,creature-collection,open-world", description: "", image: "../assets/images/Games/PokemonScarlet.jpg" },
  { title: "High On Life", rating: "4", date: "2023", month: "11", genres: "fps,action,comedy,narrative,shooter", description: "", image: "../assets/images/Games/HighOnLife.jpg" },
  { title: "Outer Wilds", rating: "5", date: "2023", month: "10", genres: "exploration,space,puzzle,adventure", description: "", image: "../assets/images/Games/OuterWilds.gif", squareImage: true },
  { title: "Tiny Tina's Wonderlands", rating: "4", date: "2023", month: "9", genres: "fps,action-rpg,co-op,comedy,fantasy", description: "", image: "../assets/images/Games/TinyTinaWonderland.jpg" },
  { title: "cobalt core", rating: "3", date: "2023", month: "8", genres: "card-game,roguelike,indie,turn-based-strategy", description: "", image: "../assets/images/Games/CobaltCore.jpg" },
  { title: "Zelda Breath Of The Wild", rating: "3", date: "2023", month: "7", genres: "action-adventure,open-world,exploration,fantasy", description: "", image: "../assets/images/Games/ZeldaBreathOfTheWild.jpg" },
  { title: "Aperture Desk Job", rating: "4", date: "2023", month: "6", genres: "puzzle,comedy", description: "", image: "../assets/images/Games/ApertureDeskJob.jpg" },
  { title: "Superliminal", rating: "4", date: "2023", month: "5", genres: "puzzle,indie", description: "", image: "../assets/images/Games/Superliminal.jpg" },
  { title: "Grounded", rating: "3", date: "2023", month: "4", genres: "survival,exploration,co-op,open-world", description: "", image: "../assets/images/Games/Grounded.jpg" },
  { title: "Cat Quest", rating: "2", date: "2023", month: "2", genres: "action-rpg,adventure,indie,fantasy", description: "", image: "../assets/images/Games/CatQuest.jpg" },
  { title: "Cat Quest 2", rating: "3", date: "2023", month: "2", genres: "action-rpg,adventure,indie,co-op,fantasy", description: "", image: "../assets/images/Games/CatQuest2.jpg" },

  // 2022
  { title: "Cult of the Lamb", rating: "4", date: "2022", month: "", genres: "action-adventure,roguelike,building,indie", description: "", image: "../assets/images/Games/CultOfTheLamb.png" },
  { title: "Wildfrost", rating: "3", date: "2022", month: "", genres: "card-game,roguelike,indie,turn-based-strategy", description: "", image: "../assets/images/Games/Wildfrost.jpg" },
  { title: "Pokemon Legends: Arceus", rating: "4", date: "2022", month: "", genres: "rpg,action,creature-collection", description: "", image: "../assets/images/Games/PokemonLegendArceus.avif" },
  { title: "Pokemon Brilliant Diamond", rating: "2", date: "2022", month: "", genres: "rpg,adventure,creature-collection", description: "", image: "../assets/images/Games/PokemonBrilliantDiamond.avif" },
  { title: "Patch Quest", rating: "3", date: "2022", month: "", genres: "roguelike,indie,exploration", description: "", image: "../assets/images/Games/PatchQuest.jpg" },
  { title: "Nobody Saves the World", rating: "1", date: "2022", month: "", genres: "action-rpg,adventure,fantasy", description: "", image: "../assets/images/Games/NobodySavesTheWorld.jpg" },
  { title: "Little Nightmares 2", rating: "1", date: "2022", month: "", genres: "horror,adventure,narrative", description: "", image: "../assets/images/Games/LittleNightmare2.jpg" },
  { title: "Maneater", rating: "4", date: "2022", month: "", genres: "action,adventure,open-world", description: "", image: "../assets/images/Games/Maneater.jpg" },

  //2021
  { title: "Ori and the Will of the Wisps", rating: "5", date: "2021", month: "", genres: "metroidvania,action,adventure", description: "", image: "../assets/images/Games/OriAndTheWillOfTheWisps.gif" },
  { title: "Pokemon Shield", rating: "3", date: "2021", month: "", genres: "rpg,adventure,creature-collection", description: "", image: "../assets/images/Games/PokemonShield.webp" },
  { title: "Borderland 3", rating: "3", date: "2021", month: "", genres: "fps,action-rpg,co-op,shooter", description: "", image: "../assets/images/Games/Borderlan3.jpg" },
  { title: "Ring of Pain", rating: "3", date: "2021", month: "", genres: "roguelike,card-game,indie,turn-based-strategy", description: "", image: "../assets/images/Games/RingOfPain.jpg" },
  { title: "Inscryption", rating: "5", date: "2021", month: "", genres: "card-game,roguelike,indie,turn-based-strategy,fantasy,horror", description: "", image: "../assets/images/Games/Inscryption.jpg" },
  { title: "Gunfire Reborn", rating: "2", date: "2021", month: "", genres: "fps,roguelike,multiplayer,co-op,shooter", description: "", image: "../assets/images/Games/GunfireReborn.jpg" },
  { title: "The stanley parable", rating: "4", date: "2021", month: "", genres: "puzzle,adventure,indie,comedy", description: "", image: "../assets/images/Games/TheStanleyParable.jpg" },
  { title: "Control", rating: "3", date: "2021", month: "", genres: "action,adventure,sci-fi,narrative", description: "", image: "../assets/images/Games/Control.jpg" },
  { title: "Webbed", rating: "3", date: "2021", month: "", genres: "platformer,puzzle,indie,adventure", description: "", image: "../assets/images/Games/Webbed.jpg" },

  // 2020
  { title: "Mario Odyssey", rating: "5", date: "2020", month: "", genres: "platformer,adventure", description: "", image: "../assets/images/Games/MarioOdyssey.gif", squareImage: true },
  { title: "Pokemon let'go Pikachu", rating: "2", date: "2020", month: "", genres: "rpg,adventure,creature-collection", description: "", image: "../assets/images/Games/PokemonLet'sGo.jpg" },
  { title: "Ori and the Blind Forest", rating: "5", date: "2020", month: "", genres: "metroidvania,action,adventure", description: "", image: "../assets/images/Games/OriAndTheBlindForest.gif" },
  { title: "Journey to the Savage Planet", rating: "4", date: "2020", month: "", genres: "exploration,adventure,sci-fi,open-world", description: "", image: "../assets/images/Games/JourneyToTheSavagePlanet.jpg" },
  { title: "Minecraft Dungeons", rating: "3", date: "2020", month: "", genres: "action-rpg,multiplayer,co-op,dungeon-crawler", description: "", image: "../assets/images/Games/MinecraftDungeon.jpg" },
  { title: "Hades", rating: "3", date: "2020", month: "", genres: "roguelike,action,indie,dungeon-crawler", description: "", image: "../assets/images/Games/Hades.jpg" },
  { title: "Carrion", rating: "3", date: "2020", month: "", genres: "metroidvania,horror", description: "", image: "../assets/images/Games/Carrion.jpg" },
  { title: "Untitled Goose Game", rating: "3", date: "2020", month: "", genres: "puzzle,adventure,comedy", description: "", image: "../assets/images/Games/UntitledGooseGame.webp" },

  // 2019
  { title: "Dead Cell", rating: "3", date: "2019", month: "", genres: "roguelike,action,metroidvania,dungeon-crawler", description: "", image: "../assets/images/Games/DeadCell.jpg" },
  { title: "Mad Max", rating: "5", date: "2019", month: "", genres: "action,open-world,adventure", description: "", image: "../assets/images/Games/MadMax.jpg" },
  { title: "Little Nightmares", rating: "3", date: "2019", month: "", genres: "horror,adventure", description: "", image: "../assets/images/Games/LittleNightmare.jpg" },
  { title: "Apex", rating: "3", date: "2019", month: "", genres: "fps,battle-royale,multiplayer,shooter", description: "", image: "../assets/images/Games/Apex.webp" },
  { title: "Subnautica Below Zero", rating: "4", date: "2019", month: "", genres: "survival,exploration,adventure,horror,open-world", description: "", image: "../assets/images/Games/SubnauticaBelowZero.jpg" },
  { title: "Noita", rating: "5", date: "2019", month: "", genres: "roguelike,action,physics,indie,replayable", description: "", image: "../assets/images/Games/Noita.gif" },
  { title: "Forager", rating: "2", date: "2019", month: "", genres: "action-rpg,indie,building", description: "", image: "../assets/images/Games/Forager.avif" },
  { title: "A Way Out", rating: "3", date: "2019", month: "", genres: "action,co-op,adventure,narrative", description: "", image: "../assets/images/Games/AWayOut.jpg" },
  { title: "Celeste", rating: "4", date: "2019", month: "", genres: "platformer,adventure,indie", description: "", image: "../assets/images/Games/Celeste.avif" },

  // 2018
  { title: "Besiege", rating: "5", date: "2018", month: "", genres: "sandbox,building,puzzle,physics", description: "", image: "../assets/images/Games/Besiege.gif" },
  { title: "Into the breach", rating: "5", date: "2018", month: "", genres: "turn-based,indie,turn-based-strategy", description: "", image: "../assets/images/Games/IntoTheBreach.gif" },
  { title: "Titanfall 2", rating: "4", date: "2018", month: "", genres: "fps,action,multiplayer,shooter", description: "", image: "../assets/images/Games/Titanfall2.jpg" },
  { title: "Xcom 2", rating: "4", date: "2018", month: "", genres: "turn-based,sci-fi,turn-based-strategy", description: "", image: "../assets/images/Games/Xcom2.jpg" },
  { title: "Trove", rating: "2", date: "2018", month: "", genres: "rpg,adventure,exploration,building,open-world", description: "", image: "../assets/images/Games/Trove.jpg" },
  { title: "Bloon TD 6", rating: "3", date: "2018", month: "", genres: "arcade,tower-defense,puzzle", description: "", image: "../assets/images/Games/BloonTD6.jpg" },

  // 2017
  { title: "Pokemon Sun", rating: "1", date: "2017", month: "", genres: "rpg,adventure,creature-collection", description: "", image: "../assets/images/Games/PokemonSun.jpg", squareImage: true },
  { title: "Rocket League", rating: "5", date: "2017", month: "", genres: "physics,multiplayer,action,replayable", description: "", image: "../assets/images/Games/RocketLeague.gif" },
  { title: "Robocraft (RIP)", rating: "5", date: "2017", month: "", genres: "building,vehicle-combat", description: "", image: "../assets/images/Games/Robocraft.jpg" },
  { title: "Crossout", rating: "2", date: "2017", month: "", genres: "building,vehicle-combat,multiplayer", description: "", image: "../assets/images/Games/Crossout.webp" },
  { title: "Dreadnaught (RIP)", rating: "4", date: "2017", month: "", genres: "vehicle-combat,space,multiplayer", description: "", image: "../assets/images/Games/Dreadnaught.jpg" },

  // 2016 
  { title: "BattleBlock Theater", rating: "2", date: "2016", month: "", genres: "platformer,action,co-op", description: "", image: "../assets/images/Games/BattleBlockTheater.jpg" },
  { title: "Castle Crashers", rating: "2", date: "2016", month: "", genres: "action,co-op", description: "", image: "../assets/images/Games/CastleCrashers.jpg" },
  { title: "Nuclear Throne", rating: "3", date: "2016", month: "", genres: "roguelike,shooter,indie", description: "", image: "../assets/images/Games/NuclearThrone.jpg" },
  { title: "Borderlan The Pre-Sequel", rating: "3", date: "2016", month: "", genres: "fps,action-rpg,co-op,shooter", description: "", image: "../assets/images/Games/BorderlandPreSequel.jpg" },
  { title: "Duelyst", rating: "5", date: "2016", month: "", genres: "card-game,turn-based,turn-based-strategy,fantasy", description: "", image: "../assets/images/Games/Duelyst.jpg" },
  { title: "ARK: Survival Evolved", rating: "5", date: "2016", month: "", genres: "survival,exploration,replayable,co-op,open-world", description: "", image: "../assets/images/Games/ARK.jpg" },

  // 2015
  { title: "The Binding of Isaac", rating: "5", date: "2015", month: "", genres: "roguelike,action,replayable,dungeon-crawler,fantasy,horror", description: "", image: "../assets/images/Games/TheBidingOfIsaac.gif", squareImage: true },
  { title: "Super Mario 3D World", rating: "3", date: "2015", month: "", genres: "platformer,co-op", description: "", image: "../assets/images/Games/Mario3DWorld.jpg" },
  { title: "Broforce", rating: "3", date: "2015", month: "", genres: "action,platformer,arcade,indie,co-op,comedy", description: "", image: "../assets/images/Games/Broforce.avif" },
  { title: "SteamWorld Heist", rating: "3", date: "2015", month: "", genres: "turn-based,indie,turn-based-strategy", description: "", image: "../assets/images/Games/SteamWorldHeist.jpg" },
  { title: "Borderland 2", rating: "4", date: "2015", month: "", genres: "fps,action-rpg,co-op,shooter", description: "", image: "../assets/images/Games/Borderlan2.jpg" },
  { title: "Kerbal Space Program", rating: "3", date: "2015", month: "", genres: "space,physics,sandbox,building", description: "", image: "../assets/images/Games/KSP.jpg" },
  { title: "PVZ Garden Warfare", rating: "2", date: "2015", month: "", genres: "shooter,action,multiplayer", description: "", image: "../assets/images/Games/PVZGardenWarfare.webp" },

  // 2014
  { title: "Portal 2", rating: "5", date: "2014", month: "", genres: "puzzle,physics,co-op,sci-fi", description: "", image: "../assets/images/Games/Portal2.gif" },
  { title: "BioShock", rating: "2", date: "2014", month: "", genres: "fps,action,horror,shooter", description: "", image: "../assets/images/Games/BioShock1.jpg" },
  { title: "BioShock 2", rating: "3", date: "2014", month: "", genres: "fps,action,horror,shooter", description: "", image: "../assets/images/Games/BioShock2.jpg" },
  { title: "BioShock Infinite", rating: "4", date: "2014", month: "", genres: "fps,action,adventure,shooter", description: "", image: "../assets/images/Games/BioShockInfinite.jpg" },
  { title: "Subnautica", rating: "5", date: "2014", month: "", genres: "survival,exploration,adventure,horror,open-world", description: "", image: "../assets/images/Games/Subnautica.gif" },

  // 2013
  { title: "Portal", rating: "4", date: "2013", month: "", genres: "puzzle,physics,sci-fi", description: "", image: "../assets/images/Games/Portal1.jpg" },
  { title: "Trackmania nation forever", rating: "3", date: "2013", month: "", genres: "racing,arcade,multiplayer", description: "", image: "../assets/images/Games/TrackManiaNation.jpg" },
  { title: "Skylanders Giant", rating: "2", date: "2013", month: "", genres: "action-rpg,adventure", description: "", image: "../assets/images/Games/SkylandersGiants.png", squareImage: true },

  // 2012
  { title: "Minecraft", rating: "5", date: "2012", month: "", genres: "sandbox,building,survival,replayable,co-op,open-world", description: "", image: "../assets/images/Games/Minecraft.gif" },
  { title: "Mario and Luigi Bowser's inside", rating: "5", date: "2012", month: "", genres: "rpg,adventure,comedy", description: "", image: "../assets/images/Games/MarioAndLuigiBowsersInside.gif" },
  { title: "Mario and Luigi Partners in Time", rating: "5", date: "2012", month: "", genres: "rpg,adventure,platformer", description: "", image: "../assets/images/Games/MarioAndLuigiPartnersInTime.png", squareImage: true },
  { title: "Galaxy Life", rating: "4", date: "2010", month: "", genres: "space,building,multiplayer,sci-fi", description: "", image: "../assets/images/Games/GalaxieLife.jpg" },
  { title: "Skylanders", rating: "4", date: "2012", month: "", genres: "action-rpg,adventure,fantasy", description: "", image: "../assets/images/Games/SkylandersSpyroAdventure.webp" },

  // 2011
  { title: "Pokemon White", rating: "5", date: "2011", month: "", genres: "rpg,adventure,creature-collection", description: "", image: "../assets/images/Games/PokemonWhite.png", squareImage: true },
  { title: "Kirby: Squeak Squad", rating: "5", date: "2011", month: "", genres: "platformer,adventure,action,fantasy", description: "", image: "../assets/images/Games/KirbySqueakSquad.gif", squareImage: true },
  { title: "Super Smash Bros Brawl", rating: "3", date: "2011", month: "", genres: "multiplayer,action", description: "", image: "../assets/images/Games/SuperSmashBrosBrawl.jpg", squareImage: true },
  { title: "Super Mario Galaxy 2", rating: "4", date: "2011", month: "", genres: "platformer,space,adventure", description: "", image: "../assets/images/Games/SuperMarioGalaxie2.jpg" },

  // <2010
  { title: "Super Mario Galaxy", rating: "5", date: "2010", month: "", genres: "platformer,space,adventure", description: "", image: "../assets/images/Games/SuperMarioGalaxie.gif" },
  { title: "Ricochet Infinity", rating: "2", date: "2010", month: "", genres: "arcade,puzzle,action", description: "", image: "../assets/images/Games/RicochetInfinity.jpg" },
  { title: "Plants vs Zombies", rating: "4", date: "2010", month: "", genres: "tower-defense,arcade,puzzle", description: "", image: "../assets/images/Games/PVZ.jpg" },
  { title: "Rayman contre les lapins crétins", rating: "3", date: "2010", month: "", genres: "fps,action,comedy", description: "", image: "../assets/images/Games/RaymanContreLapinsCretins.jpg" },
  { title: "Pokemon Diamond", rating: "4", date: "2010", month: "", genres: "rpg,adventure,creature-collection", description: "", image: "../assets/images/Games/PokemonDiamond.jpg", squareImage: true },
  { title: "Pokemon Heartgold", rating: "5", date: "2010", month: "", genres: "rpg,adventure,creature-collection", description: "", image: "../assets/images/Games/PokemonHeartgold.gif" },
  { title: "Revolt", rating: "4", date: "2010", month: "", genres: "racing,arcade", description: "", image: "../assets/images/Games/Revolt.jpg" },
  { title: "Mario Kart", rating: "5", date: "2010", month: "", genres: "racing,multiplayer", description: "", image: "../assets/images/Games/MarioKart.gif" },
  { title: "Balance", rating: "4", date: "2010", month: "", genres: "puzzle,platformer,physics", description: "", image: "../assets/images/Games/Balance.jpg" },
  { title: "New super Mario Bros", rating: "5", date: "2010", month: "", genres: "platformer,adventure", description: "", image: "../assets/images/Games/NewSuperMarioBros.jpg", squareImage: true },

];
