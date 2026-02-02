// Shared games data - used by both games-reviews.html and index.html
// To add an optional image to a game, add an 'image' property with the image path
// Example: { title: "Game", rating: 4, date: "2024", genres: "rpg", description: "...", image: "../assets/images/game.jpg" }
const gamesData = [

  // <2010
  { title: "New super Mario Bros", rating: "5", date: "2010", genres: "platformer,adventure,family-friendly", description: "", image: "../assets/images/Games/NewSuperMarioBros.jpg", squareImage: true },
  { title: "Pokemon Diamond", rating: "4", date: "2010", genres: "rpg,adventure,creature-collection", description: "", image: "../assets/images/Games/PokemonDiamond.jpg", squareImage: true },
  { title: "Pokemon Heartgold", rating: "5", date: "2010", genres: "rpg,adventure,creature-collection", description: "", image: "../assets/images/Games/PokemonHeartgold.gif" },
  { title: "Mario Kart", rating: "5", date: "2010", genres: "racing,multiplayer,family-friendly", description: "", image: "../assets/images/Games/MarioKart.gif" },
  { title: "Balance", rating: "4", date: "2010", genres: "puzzle,platformer,physics", description: "", image: "../assets/images/Games/Balance.jpg" },
  { title: "Revolt", rating: "4", date: "2010", genres: "racing,driving,arcade", description: "", image: "../assets/images/Games/Revolt.jpg" },
  { title: "Super Mario Galaxy", rating: "5", date: "2010", genres: "platformer,space,adventure", description: "", image: "../assets/images/Games/SuperMarioGalaxie.gif" },

  // 2011
  { title: "Pokemon White", rating: "5", date: "2011", genres: "rpg,adventure,creature-collection", description: "", image: "../assets/images/Games/PokemonWhite.png", squareImage: true },
  { title: "Kirby: Squeak Squad", rating: "5", date: "2011", genres: "platformer,adventure,action", description: "", image: "../assets/images/Games/KirbySqueakSquad.gif", squareImage: true },
  { title: "Super Smash Bros Brawl", rating: "3", date: "2011", genres: "fighting,multiplayer,action", description: "", image: "../assets/images/Games/SuperSmashBrosBrawl.jpg", squareImage: true },
  { title: "Super Mario Galaxy 2", rating: "4", date: "2011", genres: "platformer,space,adventure", description: "", image: "../assets/images/Games/SuperMarioGalaxie2.jpg" },

  // 2012
  { title: "Minecraft", rating: "5", date: "2012", genres: "sandbox,building,survival,replayable", description: "", image: "../assets/images/Games/Minecraft.gif" },
  { title: "Mario and Luigi Bowser's inside", rating: "5", date: "2012", genres: "rpg,adventure,comedy", description: "", image: "../assets/images/Games/MarioAndLuigiBowsersInside.gif" },
  { title: "Mario and Luigi Partners in Time", rating: "5", date: "2012", genres: "rpg,adventure,platformer", description: "", image: "../assets/images/Games/MarioAndLuigiPartnersInTime.png", squareImage: true },
  { title: "Skylanders", rating: "4", date: "2012", genres: "action-rpg,adventure,fantasy", description: "", image: "../assets/images/Games/SkylandersSpyroAdventure.webp" },

  // 2013
  { title: "Portal", rating: "4", date: "2013", genres: "puzzle,first-person,sci-fi", description: "", image: "../assets/images/Games/Portal1.jpg" },
  { title: "Trackmania nation forever", rating: "3", date: "2013", genres: "racing,arcade,multiplayer", description: "", image: "../assets/images/Games/TrackManiaNation.jpg" },
  { title: "Skylanders Giant", rating: "2", date: "2013", genres: "action-rpg,adventure,family-friendly", description: "", image: "../assets/images/Games/SkylandersGiants.png", squareImage: true },

  // 2014
  { title: "Portal 2", rating: "5", date: "2014", genres: "puzzle,first-person,co-op", description: "", image: "../assets/images/Games/Portal2.gif" },
  { title: "BioShock", rating: "2", date: "2014", genres: "fps,action,horror", description: "", image: "../assets/images/Games/BioShock1.jpg" },
  { title: "BioShock 2", rating: "3", date: "2014", genres: "fps,action,horror", description: "", image: "../assets/images/Games/BioShock2.jpg" },
  { title: "BioShock Infinite", rating: "4", date: "2014", genres: "fps,action,adventure", description: "", image: "../assets/images/Games/BioShockInfinite.jpg" },
  { title: "Subnautica", rating: "5", date: "2014", genres: "survival,exploration,adventure", description: "", image: "../assets/images/Games/Subnautica.gif" },

  // 2015
  { title: "The Binding of Isaac", rating: "5", date: "2015", genres: "roguelike,action,replayable", description: "", image: "../assets/images/Games/TheBidingOfIsaac.gif", squareImage: true },
  { title: "Super Mario 3D World", rating: "3", date: "2015", genres: "platformer,co-op", description: "", image: "../assets/images/Games/Mario3DWorld.jpg" },
  { title: "Broforce", rating: "3", date: "2015", genres: "action,platformer,indie", description: "", image: "../assets/images/Games/Broforce.avif" },
  { title: "SteamWorld Heist", rating: "3", date: "2015", genres: "strategy,turn-based,indie", description: "", image: "../assets/images/Games/SteamWorldHeist.jpg" },
  { title: "Borderland 2", rating: "4", date: "2015", genres: "fps,action-rpg,co-op", description: "", image: "../assets/images/Games/Borderlan2.jpg" },
  { title: "PVZ Garden Warfare", rating: "2", date: "2015", genres: "shooter,action,multiplayer", description: "", image: "../assets/images/Games/PVZGardenWarfare.webp" },

  // 2016 
  { title: "BattleBlock Theater", rating: "2", date: "2016", genres: "platformer,action,co-op", description: "", image: "../assets/images/Games/BattleBlockTheater.jpg" },
  { title: "Castle Crashers", rating: "2", date: "2016", genres: "action,beat-em-up,co-op", description: "", image: "../assets/images/Games/CastleCrashers.jpg" },
  { title: "Nuclear Throne", rating: "3", date: "2016", genres: "roguelike,shooter,indie", description: "", image: "../assets/images/Games/NuclearThrone.jpg" },
  { title: "Borderlan The Pre-Sequel", rating: "3", date: "2016", genres: "fps,action-rpg,co-op", description: "", image: "../assets/images/Games/BorderlandPreSequel.jpg" },
  { title: "Duelyst", rating: "5", date: "2016", genres: "strategy,card-game,turn-based", description: "", image: "../assets/images/Games/Duelyst.jpg" },
  { title: "ARK: Survival Evolved", rating: "5", date: "2016", genres: "survival,exploration,dinosaurs,replayable", description: "", image: "../assets/images/Games/ARK.jpg" },

  // 2017
  { title: "Pokemon Sun", rating: "1", date: "2017", genres: "rpg,adventure,creature-collection", description: "", image: "../assets/images/Games/PokemonSun.jpg", squareImage: true },
  { title: "Rocket League", rating: "5", date: "2017", genres: "physics,multiplayer,action,replayable", description: "", image: "../assets/images/Games/RocketLeague.gif" },
  { title: "Robocraft (RIP)", rating: "5", date: "2017", genres: "tinkering,vehicle-combat,online", description: "", image: "../assets/images/Games/Robocraft.jpg" },
  { title: "Crossout", rating: "2", date: "2017", genres: "tinkering,vehicle-combat,multiplayer", description: "", image: "../assets/images/Games/Crossout.webp" },
  { title: "Dreadnaught (RIP)", rating: "4", date: "2017", genres: "vehicle-combat,space,multiplayer", description: "", image: "../assets/images/Games/Dreadnaught.jpg" },

  // 2018
  { title: "Besiege", rating: "5", date: "2018", genres: "sandbox,tinkering,puzzle,physics", description: "", image: "../assets/images/Games/Besiege.gif" },
  { title: "Into the breach", rating: "5", date: "2018", genres: "strategy,turn-based,indie", description: "", image: "../assets/images/Games/IntoTheBreach.gif" },
  { title: "Titanfall 2", rating: "4", date: "2018", genres: "fps,action,mecha", description: "", image: "../assets/images/Games/Titanfall2.jpg" },
  { title: "Xcom 2", rating: "4", date: "2018", genres: "strategy,turn-based,sci-fi", description: "", image: "../assets/images/Games/Xcom2.jpg" },
  { title: "Trove", rating: "2", date: "2018", genres: "mmorpg,adventure,exploration", description: "", image: "../assets/images/Games/Trove.jpg" },
  { title: "Bloon TD 6", rating: "3", date: "2018", genres: "strategy,tower-defense,puzzle", description: "", image: "../assets/images/Games/BloonTD6.jpg" },

  // 2019
  { title: "Dead Cell", rating: "3", date: "2019", genres: "roguelike,action,platformer", description: "", image: "../assets/images/Games/DeadCell.jpg" },
  { title: "Mad Max", rating: "5", date: "2019", genres: "action,open-world,adventure", description: "", image: "../assets/images/Games/MadMax.jpg" },
  { title: "Little Nightmares", rating: "3", date: "2019", genres: "puzzle-platformer,horror,adventure", description: "", image: "../assets/images/Games/LittleNightmare.jpg" },
  { title: "Apex", rating: "3", date: "2019", genres: "fps,battle-royale,multiplayer", description: "", image: "../assets/images/Games/Apex.webp" },
  { title: "Subnautica Below Zero", rating: "4", date: "2019", genres: "survival,exploration,adventure", description: "", image: "../assets/images/Games/SubnauticaBelowZero.jpg" },
  { title: "Noita", rating: "5", date: "2019", genres: "roguelike,building,action,physics,indie,replayable", description: "", image: "../assets/images/Games/Noita.gif" },
  { title: "Forager", rating: "2", date: "2019", genres: "action-rpg,indie,farming", description: "", image: "../assets/images/Games/Forager.avif" },
  { title: "A Way Out", rating: "3", date: "2019", genres: "action,co-op,adventure", description: "", image: "../assets/images/Games/AWayOut.jpg" },

  // 2020
  { title: "Mario Odyssey", rating: "5", date: "2020", genres: "platformer,adventure", description: "", image: "../assets/images/Games/MarioOdyssey.gif", squareImage: true },
  { title: "Pokemon let'go Pikachu", rating: "2", date: "2020", genres: "rpg,adventure,creature-collection", description: "", image: "../assets/images/Games/PokemonLet'sGo.jpg" },
  { title: "Ori and the Blind Forest", rating: "5", date: "2020", genres: "platformer,action,adventure", description: "", image: "../assets/images/Games/OriAndTheBlindForest.gif" },
  { title: "Journey to the Savage Planet", rating: "4", date: "2020", genres: "exploration,adventure,sci-fi", description: "", image: "../assets/images/Games/JourneyToTheSavagePlanet.jpg" },
  { title: "Minecraft Dungeons", rating: "3", date: "2020", genres: "action-rpg,dungeon-crawler,multiplayer", description: "", image: "../assets/images/Games/MinecraftDungeon.jpg" },
  { title: "Hades", rating: "3", date: "2020", genres: "roguelike,action,indie", description: "", image: "../assets/images/Games/Hades.jpg" },
  { title: "Untitled Goose Game", rating: "3", date: "2020", genres: "puzzle,adventure,comedy", description: "", image: "../assets/images/Games/UntitledGooseGame.webp" },

  //2021
  { title: "Ori and the Will of the Wisps", rating: "5", date: "2021", genres: "platformer,action,adventure", description: "", image: "../assets/images/Games/OriAndTheWillOfTheWisps.gif" },
  { title: "Pokemon Shield", rating: "3", date: "2021", genres: "rpg,adventure,creature-collection", description: "", image: "../assets/images/Games/PokemonShield.webp" },
  { title: "Borderland 3", rating: "3", date: "2021", genres: "fps,action-rpg,co-op", description: "", image: "../assets/images/Games/Borderlan3.jpg" },
  { title: "Ring of Pain", rating: "3", date: "2021", genres: "roguelike,card-game,indie", description: "", image: "../assets/images/Games/RingOfPain.jpg" },
  { title: "Inscryption", rating: "5", date: "2021", genres: "card-game,roguelike,indie", description: "", image: "../assets/images/Games/Inscryption.jpg" },
  { title: "Gunfire Reborn", rating: "2", date: "2021", genres: "fps,roguelike,multiplayer", description: "", image: "../assets/images/Games/GunfireReborn.jpg" },
  { title: "The stanley parable", rating: "4", date: "2021", genres: "puzzle,adventure,indie", description: "", image: "../assets/images/Games/TheStanleyParable.jpg" },
  { title: "Control", rating: "3", date: "2021", genres: "action,adventure,sci-fi", description: "", image: "../assets/images/Games/Control.jpg" },
  { title: "Webbed", rating: "3", date: "2021", genres: "puzzle-platformer,indie,adventure", description: "", image: "../assets/images/Games/Webbed.jpg" },

  // 2022
  { title: "Wildfrost", rating: "3", date: "2022", genres: "card-game,roguelike,indie", description: "", image: "../assets/images/Games/Wildfrost.jpg" },
  { title: "Pokemon Legends: Arceus", rating: "4", date: "2022", genres: "rpg,action,creature-collection", description: "", image: "../assets/images/Games/PokemonLegendArceus.avif" },
  { title: "Pokemon Brilliant Diamond", rating: "2", date: "2022", genres: "rpg,adventure,creature-collection", description: "", image: "../assets/images/Games/PokemonBrilliantDiamond.avif" },
  { title: "Patch Quest", rating: "3", date: "2022", genres: "roguelike,indie,exploration", description: "", image: "../assets/images/Games/PatchQuest.jpg" },
  { title: "Nobody Saves the World", rating: "1", date: "2022", genres: "action-rpg,adventure,fantasy", description: "", image: "../assets/images/Games/NobodySavesTheWorld.jpg" },
  { title: "Little Nightmares 2", rating: "1", date: "2022", genres: "puzzle-platformer,horror,adventure", description: "", image: "../assets/images/Games/LittleNightmare2.jpg" },
  { title: "Maneater", rating: "4", date: "2022", genres: "action,adventure,open-world", description: "", image: "../assets/images/Games/Maneater.jpg" },

  // 2023
  { title: "High On Life", rating: "4", date: "2023", genres: "fps,action,comedy", description: "", image: "../assets/images/Games/HighOnLife.jpg" },
  { title: "Outer Wilds", rating: "5", date: "2023", genres: "exploration,puzzle,adventure", description: "", image: "../assets/images/Games/OuterWilds.gif", squareImage: true },
  { title: "Tiny Tina's Wonderlands", rating: "4", date: "2023", genres: "fps,action-rpg,comedy", description: "", image: "../assets/images/Games/TinyTinaWonderland.jpg" },
  { title: "cobalt core", rating: "3", date: "2023", genres: "card-game,roguelike,indie", description: "", image: "../assets/images/Games/CobaltCore.jpg" },
  { title: "Zelda Breath Of The Wild", rating: "3", date: "2023", genres: "action-adventure,open-world,exploration", description: "", image: "../assets/images/Games/ZeldaBreathOfTheWild.jpg" },
  { title: "Aperture Desk Job", rating: "4", date: "2023", genres: "puzzle", description: "", image: "../assets/images/Games/ApertureDeskJob.jpg" },
  { title: "Superliminal", rating: "4", date: "2023", genres: "puzzle,first-person,indie", description: "", image: "../assets/images/Games/Superliminal.jpg" },
  { title: "Grounded", rating: "3", date: "2023", genres: "survival,exploration,co-op", description: "", image: "../assets/images/Games/Grounded.jpg" },
  { title: "Cat Quest", rating: "2", date: "2023", genres: "action-rpg,adventure,indie", description: "", image: "../assets/images/Games/CatQuest.jpg" },
  { title: "Cat Quest 2", rating: "3", date: "2023", genres: "action-rpg,adventure,indie", description: "", image: "../assets/images/Games/CatQuest2.jpg" },

  // 2024
  { title: "Pokemon Scarlet", rating: "2", date: "2024", genres: "rpg,adventure,creature-collection", description: "", image: "../assets/images/Games/PokemonScarlet.jpg" },
  { title: "Super Mario Bros. Wonder", rating: "3", date: "2024", genres: "platformer,adventure,family-friendly", description: "", image: "../assets/images/Games/SuperMarioBrosWonder.jpg" },
  { title: "Detroit: Become Human", rating: "4", date: "2024", genres: "adventure,narrative,choices", description: "", image: "../assets/images/Games/DetroitBecomeHuman.jpg" },
  { title: "Turnip Boy Commits Tax Fraud", rating: "3", date: "2024", genres: "action-adventure,indie,comedy", description: "", image: "../assets/images/Games/TurnipBoyCommitTaxEvasion.jpg" },
  { title: "Minishoot' Adventure", rating: "2", date: "2024", genres: "action,adventure,arcade", description: "", image: "../assets/images/Games/MinishootAdventure.jpg" },
  { title: "The Land Beneath Us", rating: "3", date: "2024", genres: "exploration,adventure,indie", description: "", image: "../assets/images/Games/TheLandBeneathUS.jpg" },
  { title: "Shants of Sennaar", rating: "5", date: "2024", genres: "puzzle,aventure,indie", description: "", image: "../assets/images/Games/ChantOfSennaar.jpg" },
  { title: "Animal Well", rating: "4", date: "2024", genres: "exploration,puzzle,indie", description: "", image: "../assets/images/Games/AnimalWell.jpg" },
  { title: "Voidigo", rating: "2", date: "2024", genres: "roguelike,action,indie", description: "", image: "../assets/images/Games/Voidigo.jpg" },
  { title: "RoboQuest", rating: "1", date: "2024", genres: "roguelike,shooter,indie", description: "", image: "../assets/images/Games/Roboquest.jpg" },
  { title: "No Man's Sky", rating: "5", date: "2024", genres: "exploration,survival,space", description: "", image: "../assets/images/Games/NoManSky.gif" },
  { title: "PEPPER Grinder", rating: "2", date: "2024", genres: "platformer,action,indie", description: "", image: "../assets/images/Games/PepperGrinder.jpg" },
  { title: "Nova Drift", rating: "5", date: "2024", genres: "roguelike,space,shooter", description: "", image: "../assets/images/Games/NovaDrift.gif" },
  { title: "Balatro", rating: "3", date: "2024", genres: "card-game,roguelike,indie", description: "", image: "../assets/images/Games/Balatro.jpg" },
  { title: "Star Wars Jedi: Survivor", rating: "5", date: "2024", genres: "action-adventure,space-opera,narrative", description: "", image: "../assets/images/Games/JediSurvivor.webp" },

  // 2025
  { title: "Borderlands 3", rating: "2", date: "2025", genres: "fps,action-rpg,co-op", description: "", image: "../assets/images/Games/Borderlan3.jpg" },
  { title: "Dredge", rating: "4", date: "2025", genres: "horror,exploration,indie", description: "", image: "../assets/images/Games/Dredge.jpg" },
  { title: "The Gunk", rating: "1", date: "2025", genres: "action-adventure,puzzle,indie", description: "", image: "../assets/images/Games/TheGunk.jpg" },
  { title: "Ratchet & Clank: Rift Apart", rating: "4", date: "2025", genres: "action-adventure,platformer,third-person", description: "", image: "../assets/images/Games/RatchetAndClankRiftApart.webp" },
  { title: "The Talos Principle II", rating: "4", date: "2025", genres: "puzzle,first-person,sci-fi", description: "", image: "../assets/images/Games/TheThalosPrinciple.jpg" },
  { title: "Star Wars Jedi: Fallen Order", rating: "4", date: "2025", genres: "action-adventure,space-opera,narrative", description: "", image: "../assets/images/Games/JediFallenOrder.jpg" },
  { title: "Expedition 33: Clair Obscur", rating: "5", date: "2025", genres: "action-rpg,adventure,fantasy", description: "", image: "../assets/images/Games/Expedition33.gif" },
  { title: "Cyberpunk 2077", rating: "4", date: "2025", genres: "action-rpg,open-world,sci-fi", description: "", image: "../assets/images/Games/Cyberpunk2077.jpg" },
  { title: "Horizon Zero Dawn", rating: "4", date: "2025", genres: "action-adventure,open-world,post-apocalyptic", description: "", image: "../assets/images/Games/HorizonZeroDawn.webp", squareImage: true },
  { title: "Zelda Tears of the Kingdom", rating: "2", date: "2025", genres: "action-adventure,open-world,exploration", description: "", image: "../assets/images/Games/ZeldaTears.jpg"},
  { title: "TowerFall", rating: "3", date: "2025", genres: "platformer,multiplayer,action", description: "", image: "../assets/images/Games/Towerfall.avif", squareImage: true },

  // 2026  
  { title: "Tank Head", rating: "2", date: "2026", genres: "action,arcade,vehicle-combat", description: "", image: "../assets/images/Games/TankHead.jpg" },
  { title: "KEEPER", rating: "3", date: "2026", genres: "puzzle,strategy,indie", description: "", image: "../assets/images/Games/Keeper.jpg" },
  { title: "Blasphemous", rating: "3", date: "2026", genres: "action-platformer,pixel-art,indie", description: "", image: "../assets/images/Games/Blasphemous.jpg" }
];
