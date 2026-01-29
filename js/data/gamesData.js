// Shared games data - used by both games-reviews.html and index.html
// To add an optional image to a game, add an 'image' property with the image path
// Example: { title: "Game", rating: 4, date: "2024", genres: "rpg", description: "...", image: "../assets/images/game.jpg" }
const gamesData = [
  // 2023
  { title: "Rocket League", rating: 3.5, date: "2023", genres: "sports,fun", description: "Fun with friends" },
  { title: "Patch Quest", rating: 3, date: "2023", genres: "adventure", description: "" },
  { title: "High On Life", rating: 3, date: "2023", genres: "adventure", description: "" },
  { title: "Outer Wilds", rating: 4.5, date: "2023", genres: "exploration,puzzle", description: "Exploration spatiale captivante" },
  { title: "Besiege", rating: 4, date: "2023", genres: "puzzle,strategy", description: "Excellents puzzles, gameplay très amusant, bons graphiques, grande liberté dans la résolution" },

  // 2024
  { title: "Pokemon Scarlet", rating: 4.5, date: "2024", genres: "rpg,strategy", description: "Diversity et stratégie. Grande variété de possibilités" },
  { title: "Ring of Pain", rating: 3, date: "2024", genres: "roguelike,adventure", description: "Univers intéressant" },
  { title: "Inscryption", rating: 3.5, date: "2024", genres: "roguelike,deck-building", description: "Lore vraiment original, histoire surprenante, gameplay amusant" },
  { title: "ARK: Survival Evolved", rating: 2, date: "2024", genres: "survival,open-world", description: "Les dinos sont cool" },
  { title: "Subnautica", rating: 3.5, date: "2024", genres: "survival,exploration", description: "Survie vraiment immersive, grande diversité de faune et flore, excellent jeu" },
  { title: "Noita", rating: 2.5, date: "2024", genres: "roguelike,crafting", description: "Take these magical wands, a bottle of water and good luck figuring everything out ! Discover a world where every pixel is simulated (and actively trying to kill you) !Find out secrets, learn alchemy and most importantly craft your own magical spells which might do what you intended to do ... or provoke a chain reaction resulting in your death." },
  { title: "Little Nightmares", rating: 4, date: "2024", genres: "adventure,horror", description: "Atmosphère sombre et captivante" },
  { title: "Ori and the Will of the Wisps", rating: 4.5, date: "2024", genres: "adventure,platformer", description: "Magnifique et émouvant" },
  { title: "Ori and the Blind Forest", rating: 4.5, date: "2024", genres: "adventure,platformer", description: "Chef-d'œuvre du genre" },
  { title: "Super Mario Bros. Wonder", rating: 3.5, date: "2024", genres: "platformer", description: "Platformer coloré et créatif" },
  { title: "Detroit: Become Human", rating: 4.5, date: "2024", genres: "adventure,choice-driven", description: "Créez votre propre histoire avec des choix significatifs" },
  { title: "Turnip Boy Commits Tax Fraud", rating: 3.25, date: "2024", genres: "adventure,puzzle", description: "Aventure amusante et absurde" },
  { title: "Minishoot' Adventure", rating: 2, date: "2024", genres: "adventure,shooter", description: "Petit adventure mignon" },
  { title: "The Land Beneath Us", rating: 2, date: "2024", genres: "roguelite", description: "Exploration dans les profondeurs" },
  { title: "Shants of Sennaar", rating: 4, date: "2024", genres: "adventure,puzzle", description: "Puzzle solving incroyable et histoire très intéressante" },
  { title: "Animal Well", rating: 2, date: "2024", genres: "exploration,puzzle", description: "Exploration mystérieuse" },
  { title: "Voidigo", rating: 3, date: "2024", genres: "roguelite,action", description: "Action roguelite dynamique" },
  { title: "RoboQuest", rating: 2, date: "2024", genres: "roguelite,action", description: "Action roguelite rapide" },
  { title: "No Man's Sky", rating: 3.75, date: "2024", genres: "exploration,adventure", description: "Mondes infinis dans l'espace, très belle découverte" },
  { title: "PEPPER Grinder", rating: 2.5, date: "2024", genres: "platformer", description: "Joli platformer avec des mécaniques originales" },
  { title: "Nova Drift", rating: 3, date: "2024", genres: "roguelike,shooter", description: "Chouette roguelike de tir" },

  // 2025
  { title: "Borderlands 3", rating: 3.5, date: "2025", genres: "fps,action", description: "" },
  { title: "Tiny Tina's Wonderlands", rating: 3.5, date: "2025", genres: "fps,fantasy", description: "" },
  { title: "Dredge", rating: 3, date: "2025", genres: "horror,adventure", description: "" },
  { title: "The Gunk", rating: 3, date: "2025", genres: "adventure,puzzle", description: "" },
  { title: "Journey to the Savage Planet", rating: 3, date: "2025", genres: "exploration,adventure", description: "" },
  { title: "The Binding of Isaac", rating: 4, date: "2025", genres: "roguelike,dungeon-crawler", description: "" },
  { title: "Ratchet & Clank: Rift Apart", rating: 4, date: "2025", genres: "platformer,action", description: "" },
  { title: "The Talos Principle II", rating: 4, date: "2025", genres: "puzzle,philosophy", description: "" },
  { title: "Star Wars Jedi: Survivor", rating: 4, date: "2025", genres: "action,adventure", description: "" },
  { title: "R.E.P.O", rating: 3.5, date: "2025", genres: "action,sci-fi", description: "" },
  { title: "Expedition 33: Clair Obscur", rating: 3.5, date: "2025", genres: "action,adventure", description: "" },
  { title: "Cyberpunk 2077", rating: 4, date: "2025", genres: "rpg,open-world", description: "" },
  { title: "Horizon Zero Dawn", rating: 4, date: "2025", genres: "action,rpg", description: "" },
  { title: "Minecraft Dungeons", rating: 3, date: "2025", genres: "dungeon-crawler,action", description: "" },
  { title: "Glonk", rating: 2.5, date: "2025", genres: "adventure", description: "" },
  { title: "Satisfactory", rating: 4, date: "2025", genres: "building,strategy", description: "" },
  { title: "Astro's Playroom", rating: 4, date: "2025", genres: "platformer,fun", description: "" },

  // 2026
  { title: "KEEPER", rating: 3.5, date: "2026", genres: "adventure,puzzle", description: "" },
  { title: "Blasphemous", rating: 3.5, date: "2026", genres: "action,horror", description: "" }
];
