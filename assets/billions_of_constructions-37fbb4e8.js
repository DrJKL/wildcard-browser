const r=`# BoConstructions\r
BoConstructions:\r
    building-cyberpunk:\r
        - __random/buildings-cyberpunk__\r
    building-scifi:\r
        - __random/buildings-scifi__\r
    building-magical:\r
        - __random/buildings-magical__\r
    room-cyberpunk:\r
        - __random/rooms-cyberpunk__\r
    room-scifi:\r
        - __random/rooms-scifi__\r
    room-magical:\r
        - __random/rooms-magical__\r
    random-building:\r
        - __random/buildings*__\r
    random-room:\r
        - __random/rooms*__\r
    random:\r
        - "{__BoConstructions/random-room__|__BoConstructions/random-building__}"\r
constructions:\r
    types:\r
        Residential-Buildings:\r
            - Single-Family Homes\r
            - Apartments\r
            - Condominiums\r
            - Townhouses\r
            - Cottages\r
            - Duplexes\r
            - Mobile Homes\r
        Commercial-Buildings:\r
            - Office Buildings\r
            - Shopping Centers\r
            - Retail Stores\r
            - Restaurants and Cafes\r
            - Hotels and Motels\r
            - Banks\r
            - Warehouses\r
            - Supermarkets\r
        Educational-Buildings:\r
            - Schools\r
            - Colleges and Universities\r
            - Libraries\r
            - Research Facilities\r
        Healthcare-Buildings:\r
            - Hospitals\r
            - Clinics\r
            - Medical Offices\r
            - Nursing Homes\r
        Industrial-Buildings:\r
            - Factories\r
            - Manufacturing Plants\r
            - Warehouses\r
            - Distribution Centers\r
        Recreational-Buildings:\r
            - Sports Arenas and Stadiums\r
            - Gyms and Fitness Centers\r
            - Theaters and Cinemas\r
            - Museums\r
            - Amusement Parks\r
        Government-Buildings:\r
            - Courthouses\r
            - City Halls\r
            - Police Stations\r
            - Fire Stations\r
        Religious-Buildings:\r
            - Churches\r
            - Mosques\r
            - Temples\r
            - Synagogues\r
        Transportation-Buildings:\r
            - Airports\r
            - Train Stations\r
            - Bus Terminals\r
        Special Purpose-Buildings:\r
            - Prisons\r
            - Power Plants\r
            - Data Centers\r
            - Exhibition Halls\r
    types-fictional:\r
        residential:\r
            - cozy cottage\r
            - futuristic apartment tower\r
            - enchanted treehouse\r
            - underwater dome residence\r
            - floating sky palace\r
        commercial:\r
            - high-tech corporate headquarters\r
            - intergalactic shopping mall\r
            - time travelers inn\r
            - holographic entertainment complex\r
            - alien marketplace\r
        governmental:\r
            - utopian capitol building\r
            - space command center\r
            - mythical palace of kings\r
            - parallel universe embassy\r
            - interplanetary council chambers\r
        educational:\r
            - wizarding school of magic\r
            - extraterrestrial university\r
            - ancient library of knowledge\r
            - virtual reality learning hub\r
            - time bending academy\r
        recreational:\r
            - zero gravity amusement park\r
            - underwater coral resort\r
            - floating garden oasis\r
            - celestial spa retreat\r
            - infinite maze of wonders\r
        industrial:\r
            - steampunk factory complex\r
            - robotic production plant\r
            - mythical forge of legend\r
            - interdimensional power plant\r
            - ethereal energy refinery\r
    types-cyberpunk:\r
        Corporate-Megatowers:\r
            - Shinohara Corp. Headquarters\r
            - OmniTech Plaza\r
            - Zephyr Industries Tower\r
            - CyberSys Tower\r
            - ZenithCorp Skyspire\r
            - Nexus Dynamics Center\r
            - StellarCorp Megatower\r
            - AetherTech Headquarters\r
            - Infinitron Tower\r
            - MetaGlobal Tower\r
        Underground-Cyber-Bunkers:\r
            - Resistance Hideout\r
            - Black Market Hub\r
            - Cybercrime Syndicate Lair\r
            - Techno-Anarchist Safehouse\r
            - Rogue Hacker's Den\r
            - ShadowOps Command Center\r
            - Neon Underground Club\r
            - Cyber Smuggler's Depot\r
            - VR Illusionist's Hideaway\r
            - Darknet Data Vault\r
        Arcade-and-Entertainment-Complexes:\r
            - NeoArcade Haven\r
            - Cybernetic VR Arena\r
            - Holographic Racing Emporium\r
            - Holosuite Gaming Center\r
            - Cyberpunk Amusement Park\r
            - VR Combat Simulator Dome\r
            - Immersive Gaming District\r
            - Zero-G Dance and Music Hall\r
            - Augmented Reality Casino\r
            - Retro-Cyber Gaming Lounge\r
        High-Tech-Medical-Facilities:\r
            - Cybernetics Enhancement Clinic\r
            - Virtual Reality Therapy Center\r
            - Nanotech Medical Research Lab\r
            - Holographic Surgery Theater\r
            - Biohacking and Gene Editing Facility\r
            - Neuroenhancement Institute\r
            - Time Dilation Healing Spa\r
            - Cryogenic Stasis Research Center\r
            - Augmented Reality Rehabilitation Center\r
            - Bionic Prosthetics Manufacturing\r
        Mega-Marketplaces-and-Bazaars:\r
            - NeoBazaar Central\r
            - TechnoTrade Exchange\r
            - Augmented Reality Mall\r
            - CyberWare Emporium\r
            - AI-driven Market Square\r
            - HoloMarket Plaza\r
            - Futuristic Black Market\r
            - Underground Tech Bazaar\r
            - Holographic Vendor Arcade\r
            - Virtual Reality Auction House\r
        Cyberpunk-Nightclubs:\r
            - NeonSky Club and Lounge\r
            - Holographic Dance Haven\r
            - Virtual Reality Rave Nexus\r
            - SynthBeat Electroclub\r
            - Augmented Reality DJ Den\r
            - TechnoCyber Discotheque\r
            - Immersive Trance Theater\r
            - VR Lightshow Emporium\r
            - Cybernetic Dance Factory\r
            - Time-warping Party Hangar\r
        Cyberspace-Data-Towers:\r
            - Augmented Reality Data Hub\r
            - Virtual Reality Data Matrix\r
            - Holographic Information Nexus\r
            - Cybernetic Cloud Storage Facility\r
            - AI Data Processing Center\r
            - Quantum Computing Node\r
            - Infinite Data Archive\r
            - Neural Network Data Tower\r
            - Darknet Intelligence Hub\r
            - Time-looped Information Repository\r
        Cyberpunk-Residential-Complexes:\r
            - Futuristic Hi-Tech Apartments\r
            - Neon-lit Skyscraper Residences\r
            - VR-Integrated Smart Homes\r
            - Holographic Co-living Spaces\r
            - Augmented Reality Luxury Penthouses\r
            - Techno-Modular Housing Units\r
            - Immersive Augmented Apartments\r
            - Timeless Retro-fitted Lofts\r
            - Cyborg Co-op Living Community\r
            - Futuristic Sustainable Eco-Domes\r
        Cyberpunk-Street-Hangouts:\r
            - Neon Alleyway Marketplace\r
            - Holographic Street Performer's Corner\r
            - VR Street Sports Arena\r
            - Synthwave Street Art District\r
            - Augmented Reality Graffiti Zone\r
            - Techno Street Food Bazaar\r
            - Immersive Cyber Cafes\r
            - Time-warped Urban Plaza\r
            - Futuristic Rooftop Gardens\r
            - VR Skate Park and Playground\r
        Cyberpunk-Factories-and-Assembly-Plants:\r
            - Holographic Nanofactory\r
            - VR Mass Production Line\r
            - Immersive Robotic Assembly Hub\r
            - Augmented Reality Automated Plant\r
            - Quantum-powered Manufacturing Facility\r
            - Time-distorted 3D Printing Workshop\r
            - Futuristic Cybernetics Factory\r
            - AI-driven Smart Factory\r
            - Synthetics and Androids Production Plant\r
            - Zero-waste Green Tech Manufacturing\r
    types-scifi:\r
        Spaceship-Bridges-and-Command-Centers:\r
            - USS Enterprise Command Bridge\r
            - Galactic Starcruiser Control Hub\r
            - Intergalactic Exploration Vessel Bridge\r
            - Cosmic Carrier Command Center\r
            - Nebula-class Battleship Bridge\r
            - Celestial Cruiser Control Deck\r
            - Quantum-class Flagship Command Center\r
            - Stellar Interceptor Bridge\r
            - Warp-speed Frigate Command Hub\r
            - AI-powered Starship Control Nexus\r
        Interstellar-Research-and-Exploration:\r
            - Astrobiology Research Facility\r
            - Xenoplanet Exploration Center\r
            - Galactic Archive and Data Repository\r
            - Celestial Phenomenon Observatory\r
            - Time Distortion Research Lab\r
            - Exoplanetary Geology Laboratory\r
            - Astronomical Observation Hub\r
            - Quantum Entanglement Research Institute\r
            - Extraterrestrial Archaeology Institute\r
            - Galactic History and Civilization Studies\r
        Extraterrestrial-Diplomacy-and-Relations:\r
            - Intergalactic Diplomatic Embassy\r
            - Alien Cultural Exchange Center\r
            - Celestial Peace Treaty Council\r
            - Interspecies Communication Hub\r
            - Galactic Alliance Mediation Chamber\r
            - Multinational Space Accord Assembly\r
            - Cosmic Confederation Summit Hall\r
            - Interplanetary Trade Negotiation Center\r
            - Extraterrestrial Federation Embassy\r
            - Galactic United Nations Headquarters\r
        Futuristic-Cybernetic-Cities:\r
            - Neon Metropolis Megacity\r
            - Techno-Infused Urban Hub\r
            - Holographic Skyline Complex\r
            - Augmented Reality Smart City\r
            - Cybernetic Skyscraper Cluster\r
            - Immersive Megalopolis Center\r
            - Time-Looped Futuristic Metropolis\r
            - Quantum-powered City of Tomorrow\r
            - Synthwave Utopian Cityscape\r
            - AI-controlled Urban Civilization\r
        Advanced-Extraterrestrial-Labs:\r
            - Quantum Particle Accelerator Lab\r
            - Nanotechnology Research Facility\r
            - Plasma Fusion Energy Lab\r
            - AI-controlled Biotechnology Lab\r
            - Time-travel Experimentation Chamber\r
            - Gravitational Wave Observatory\r
            - Dark Matter and Antimatter Research Center\r
            - Quantum Computing Complex\r
            - Alien Genetic Engineering Institute\r
            - Celestial Robotics and AI Lab\r
        AI-Controlled-Planetary-Defense:\r
            - Orbital Defense Satellite Network\r
            - Planetary Shield Control Center\r
            - AI-driven Laser Defense Array\r
            - Interstellar Missile Defense Platform\r
            - Quantum-based Force Field Nexus\r
            - Celestial Antimatter Cannon\r
            - Time-warping Tactical Command Center\r
            - Nanobot-infused Nanodome Defense System\r
            - Extraterrestrial Threat Monitoring Station\r
            - Galactic Sentry Fleet Headquarters\r
        Time-Travelling-Research-Facilities:\r
            - ChronoLab Temporal Research Center\r
            - Time-Looped Quantum Laboratory\r
            - Celestial Time Anomaly Observatory\r
            - Time-warp Accelerated Innovation Hub\r
            - Temporal Paradox Investigation Unit\r
            - Multiverse and Parallel Realities Lab\r
            - Quantum Entanglement Time Travel Nexus\r
            - Cosmic Temporal Preservation Archive\r
            - Extraterrestrial Time Traveler's Rest Stop\r
            - Stellar Temporal Navigation Complex\r
        High-Tech-Cyber-Casinos:\r
            - Futuristic HoloGamble Casino\r
            - Quantum-based Slot Machine Arena\r
            - Celestial Poker and Blackjack Lounge\r
            - Virtual Reality Roulette Hall\r
            - Time-distorted Card Game Parlor\r
            - Synthwave High Roller Suite\r
            - AI-controlled Sports Betting Arena\r
            - Galactic Racing and Betting Track\r
            - Immersive E-Sports Betting Hub\r
            - Zero-Gravity Craps and Dice Den\r
        Extraterrestrial-Artifact-Museums:\r
            - Alien Relic Exhibition Hall\r
            - Celestial Ancient Artifacts Gallery\r
            - Holographic Extraterrestrial Art Center\r
            - Quantum Art and Sculpture Gallery\r
            - Timeless Extraterrestrial Archaeology Museum\r
            - Intergalactic Historical Relics Showcase\r
            - Cosmic Artifacts and Antiquities Archive\r
            - AI-Interpreted Alien Art Collection\r
            - Virtual Reality Time Capsule Exhibit\r
            - Time-warping Mythical Artifact Hall\r
        Interstellar-Transportation-Hubs:\r
            - Celestial Spaceport Terminal\r
            - Quantum Portal Gateway\r
            - Interdimensional Stargate Port\r
            - Hyperspace Jumping Junction\r
            - Extraterrestrial Hyperloop Terminal\r
            - Time-looped Wormhole Connector\r
            - Galactic Transport Nexus\r
            - AI-controlled Teleportation Hub\r
            - Space-time Distorted Warp Gate\r
            - Futuristic Intergalactic Transit Center\r
    types-magical:\r
        Enchanted-Schools-of-Magic:\r
            - Hogwarts School of Witchcraft and Wizardry\r
            - Celestia Academy of Sorcery\r
            - Arcane Academy of Enchantment\r
            - Lumos Academy of Elemental Magic\r
            - Celestial College of Arcanum\r
            - Mystica School of Magical Arts\r
            - Enigma Institute of Spells and Potions\r
            - Timeless Tower of Magecraft\r
            - Ethereal Grove of Druidic Wisdom\r
            - Fairy Academy of Enchantment\r
        Celestial-Libraries-of-Knowledge:\r
            - Astral Archive of Ancient Wisdom\r
            - Cosmic Codex and Star Maps Repository\r
            - Timeless Tome of Prophecies\r
            - Enchanted Grimoire Hall\r
            - Celestial Library of Astronomical Lore\r
            - Mystical Records Hall of Spells\r
            - Etherium Scrolls Sanctum\r
            - Arcane Repository of Magical Tomes\r
            - Ancient Mythical Chronicles Chamber\r
            - Celestial Atlas of Mythos\r
        Witch-Covens-and-Magical-Circles:\r
            - Coven of the Silver Moon\r
            - Mystic Circle of Elemental Witches\r
            - Timeless Cauldron Gathering\r
            - Ethereal Seance and Divination Room\r
            - Celestial Moonlit Ritual Grove\r
            - Mystical Crystal Ball Chamber\r
            - Enchantress' Forest Retreat\r
            - Arcane Pentacle and Rune Circle\r
            - Celestial Starlit Sabbat Grounds\r
            - Witch's Time-warping Apothecary\r
        Fairy-Tale-Castles-and-Palaces:\r
            - Enchanted Castle of Dreams\r
            - Celestial Palace of Everlasting Light\r
            - Timeless Citadel of Sorcery\r
            - Ethereal Fortress of the Elven King\r
            - Fairy Queen's Emerald Palace\r
            - Mystical Crystal Cavern Castle\r
            - Enchanted Rose Tower\r
            - Celestial Unicorn Palace\r
            - Magical Floating Island Citadel\r
            - Fairy Godmother's Enchanted Chateau\r
        Magical-Taverns-and-Inns:\r
            - Celestial Moonlight Tavern\r
            - Enchanted Inn of the Traveler\r
            - Mystical Potions and Brews Pub\r
            - Timeless Hearth of the Phoenix\r
            - Ethereal Goblet and Mead Hall\r
            - Celestial Hearthstone Tavern\r
            - Enchanted Woodsman's Retreat\r
            - Magical Inn at the Crossroads\r
            - Fairy-Lit Forest Tea House\r
            - Time-warping Wizard's Pub\r
        Enchanted-Schools-of-Magic:\r
            - Hogwarts School of Witchcraft and Wizardry\r
            - Celestia Academy of Sorcery\r
            - Arcane Academy of Enchantment\r
            - Lumos Academy of Elemental Magic\r
            - Celestial College of Arcanum\r
            - Mystica School of Magical Arts\r
            - Enigma Institute of Spells and Potions\r
            - Timeless Tower of Magecraft\r
            - Ethereal Grove of Druidic Wisdom\r
            - Fairy Academy of Enchantment\r
        Celestial-Libraries-of-Knowledge:\r
            - Astral Archive of Ancient Wisdom\r
            - Cosmic Codex and Star Maps Repository\r
            - Timeless Tome of Prophecies\r
            - Enchanted Grimoire Hall\r
            - Celestial Library of Astronomical Lore\r
            - Mystical Records Hall of Spells\r
            - Etherium Scrolls Sanctum\r
            - Arcane Repository of Magical Tomes\r
            - Ancient Mythical Chronicles Chamber\r
            - Celestial Atlas of Mythos\r
        Witch-Covens-and-Magical-Circles:\r
            - Coven of the Silver Moon\r
            - Mystic Circle of Elemental Witches\r
            - Timeless Cauldron Gathering\r
            - Ethereal Seance and Divination Room\r
            - Celestial Moonlit Ritual Grove\r
            - Mystical Crystal Ball Chamber\r
            - Enchantress' Forest Retreat\r
            - Arcane Pentacle and Rune Circle\r
            - Celestial Starlit Sabbat Grounds\r
            - Witch's Time-warping Apothecary\r
        Fairy-Tale-Castles-and-Palaces:\r
            - Enchanted Castle of Dreams\r
            - Celestial Palace of Everlasting Light\r
            - Timeless Citadel of Sorcery\r
            - Ethereal Fortress of the Elven King\r
            - Fairy Queen's Emerald Palace\r
            - Mystical Crystal Cavern Castle\r
            - Enchanted Rose Tower\r
            - Celestial Unicorn Palace\r
            - Magical Floating Island Citadel\r
            - Fairy Godmother's Enchanted Chateau\r
        Magical-Taverns-and-Inns:\r
            - Celestial Moonlight Tavern\r
            - Enchanted Inn of the Traveler\r
            - Mystical Potions and Brews Pub\r
            - Timeless Hearth of the Phoenix\r
            - Ethereal Goblet and Mead Hall\r
            - Celestial Hearthstone Tavern\r
            - Enchanted Woodsman's Retreat\r
            - Magical Inn at the Crossroads\r
            - Fairy-Lit Forest Tea House\r
            - Time-warping Wizard's Pub\r
    rooms:\r
        Service-Spaces:\r
            - Kitchen\r
            - Bathroom\r
            - Laundry Room\r
            - Pantry (In kitchen or separate)\r
            - Mudroom\r
            - Walk-In Closet\r
        Entertainment-Leisure-Spaces:\r
            - Dining Room\r
            - Family Room\r
            - Game/Entertainment Room\r
            - Home Theater\r
            - Music Room/Studio\r
            - Gym/Exercise Room\r
            - Library/Reading Room\r
        Utility-Spaces:\r
            - Garage\r
            - Basement\r
            - Attic\r
            - Storage Room\r
            - Workshop/Tool Room\r
            - Server/Utility Room\r
        Common-Spaces:\r
            - Hallway/Corridor\r
            - Staircase\r
            - Balcony/Patio\r
            - Porch/Veranda\r
            - Sunroom\r
        Public-Spaces:\r
            - Conference Room\r
            - Reception/Lobby\r
            - Restroom/Washroom (Public or Private)\r
        Living-Spaces:\r
            - Living Room\r
            - Bedroom\r
            - Guest Room\r
            - Children's Room/Nursery\r
            - Master Suite\r
        Utility-Spaces:\r
            - Garage\r
            - Basement\r
            - Attic\r
            - Storage Room\r
            - Workshop/Tool Room\r
            - Server/Utility Room\r
        Public-Spaces:\r
            - Conference Room\r
            - Reception/Lobby\r
            - Restroom/Washroom (Public or Private)\r
        Work-Spaces:\r
            - Study/Office\r
            - Home Office\r
            - Co-working Space\r
            - Artist's Studio\r
        Commercial-Spaces:\r
            - Retail Space\r
            - Showroom\r
            - Restaurant Dining Area\r
            - Bar/Lounge Area\r
            - Hotel Room\r
        Educational-Spaces:\r
            - Classroom\r
            - Lecture Hall\r
            - Laboratory\r
            - Library\r
        Healthcare-Spaces:\r
            - Hospital Patient Room\r
            - Examination Room\r
            - Operating Room\r
            - Waiting Room\r
        Recreational-Spaces:\r
            - Swimming Pool Area\r
            - Sauna/Spa Room\r
            - Game Room/Playroom\r
            - Indoor Play Area\r
        Community-Spaces:\r
            - Community Hall\r
            - Clubhouse\r
            - Meeting Room\r
        Transit-Spaces:\r
            - Waiting Area\r
            - Ticket Counter\r
        Outdoor-Spaces:\r
            - Courtyard\r
            - Garden\r
            - Terrace\r
            - Patio\r
            - Roof Deck\r
    rooms-fictional:\r
        Magical-Spaces:\r
            - Enchanted Room\r
            - Wizard's Chamber\r
            - Fairy Grotto\r
            - Potion Brewing Room\r
            - Library of Magical Tomes\r
        Mystical-Spaces:\r
            - Oracle's Chamber\r
            - Sacred Temple\r
            - Time Traveler's Nexus\r
            - Astral Projection Room\r
            - Room of Prophecies\r
        Fantasy-Spaces:\r
            - Dragon's Lair\r
            - Elven Pavilion\r
            - Dwarf's Forge\r
            - Mermaid's Underwater Retreat\r
            - Goblin's Hideout\r
        Sci-Fi-Spaces:\r
            - Spaceship Cockpit\r
            - Holodeck Simulation Room\r
            - Teleporter Room\r
            - Cyberspace Virtual Room\r
            - Alien Observation Chamber\r
        Adventure-Spaces:\r
            - Treasure Room\r
            - Secret Passage\r
            - Hidden Temple\r
            - Pirate's Den\r
            - Lost City's Crypt\r
        Steampunk-Spaces:\r
            - Steampunk Workshop\r
            - Airship Control Room\r
            - Clockwork Mechanism Room\r
            - Brass and Gears Observatory\r
            - Victorian Inventor's Study\r
        Haunted-Spaces:\r
            - Haunted Attic\r
            - Creepy Cellar\r
            - Ghostly Ballroom\r
            - Spooky Library\r
            - Cursed Chamber\r
        Futuristic-Spaces:\r
            - High-Tech Control Center\r
            - Holographic Entertainment Room\r
            - Nanotechnology Lab\r
            - Artificial Intelligence Hub\r
            - Solar-Powered Energy Room\r
    rooms-scifi:\r
        Living-Spaces:\r
            - Futuristic Space Apartment\r
            - AI-controlled Smart Home\r
            - Zero-Gravity Living Module\r
            - Holographic Entertainment Room\r
            - Holodeck Virtual Reality Chamber\r
            - Biosphere Living Quarters\r
            - Time Dilation Sleep Pod\r
            - Cryogenic Stasis Chamber\r
            - Alien Bioluminescent Habitat\r
            - Interstellar Traveler's Cabin\r
        Workspaces:\r
            - Space Station Command Center\r
            - High-Tech Research Laboratory\r
            - Holographic Conference Room\r
            - Virtual Collaboration Hub\r
            - AI-controlled Workstation\r
            - Cybernetic Augmentation Lab\r
            - Zero-Gravity Manufacturing Facility\r
            - Teleportation Prototype Lab\r
            - Nanotechnology Research Chamber\r
            - Galactic Explorer's Bridge\r
        Recreational:\r
            - VR Gaming Arena\r
            - Zero-Gravity Trampoline Park\r
            - Interstellar Nightclub\r
            - Holosuite Amusement Park\r
            - Anti-Gravity Sports Arena\r
            - Alien Art and Culture Gallery\r
            - Intergalactic Spa Retreat\r
            - Time-Travel Themed Escape Room\r
            - Virtual Reality Concert Hall\r
            - Space Simulator and Training Center\r
        Security-and-Surveillance:\r
            - Space Station Security Hub\r
            - Biometric Identification Vault\r
            - Force Field Control Center\r
            - Holographic Surveillance Room\r
            - Quantum Encryption Chamber\r
            - Invisibility Shield Control Room\r
            - Galactic Prison Facility\r
            - Alien Intrusion Detection Center\r
            - Hyper-Advanced Defense Bunker\r
            - Time-Loop Secured Archive\r
        Medbay-and-Bioengineering-Lab:\r
            - Advanced Regenerative Medical Bay\r
            - Genetic Engineering Facility\r
            - Cybernetic Prosthetics Workshop\r
            - Nanobot Infirmary\r
            - Alien Biotechnology Research Lab\r
            - Neuroenhancement Chamber\r
            - Telemedicine Teleportation Center\r
            - Virtual Reality Healing Retreat\r
            - Bio-Printed Organ Production Lab\r
            - Robotic Surgery Theater\r
        Alien-Encounters:\r
            - Extraterrestrial Embassy\r
            - Alien Diplomatic Meeting Room\r
            - Intergalactic Communication Center\r
            - Alien Artifact Exhibition Hall\r
            - Interspecies Cultural Exchange Zone\r
            - Galactic Peace Negotiation Chamber\r
            - Alien Linguistics and Translation Lab\r
            - Alien Abduction Research Chamber\r
            - Galactic Council Assembly Room\r
            - Alien Species Genetic Study Lab\r
        Astrobiology-and-Xenobiology:\r
            - Xenobotany Research Greenhouse\r
            - Alien Microbial Study Lab\r
            - Astroecology Research Habitat\r
            - Exobiology and Alien Anatomy Lab\r
            - Alien Wildlife Observation Deck\r
            - Galactic Specimen Collection Room\r
            - Extraterrestrial Geology Lab\r
            - Xenophysiognomy and Non-Humanoid Studies Lab\r
            - Alien Planet Simulation Chamber\r
            - Alien Astrozoology Exhibit\r
        Interstellar-Travel:\r
            - Spaceship Bridge and Command Center\r
            - Hyperdrive Engine Room\r
            - Cryogenic Stasis Chamber\r
            - Warp Core Reactor Facility\r
            - Wormhole Navigation Control Room\r
            - Zero-Gravity G-Force Simulation Chamber\r
            - Intergalactic Navigation Observatory\r
            - Alien Technology-Infused Propulsion Lab\r
            - Wormhole Entry and Exit Point Hangar\r
            - Subspace Communications Array\r
        Exoplanetary-Exploration:\r
            - Exoplanet Discovery and Observation Center\r
            - Alien Ruins Archaeology Dig Site\r
            - Robotic Planetary Exploration Rover Hangar\r
            - Advanced Terrain Mapping and Analysis Lab\r
            - Exotic Climate Simulation Chamber\r
            - Alien Flora and Fauna Study Enclosure\r
            - Celestial Phenomenon Observation Deck\r
            - Alien Civilization Artifacts Exhibit\r
            - Exoplanetary Weather and Storm Prediction Room\r
            - Microgravity Geological Excavation Site\r
        Space-Colony-and-Habitat:\r
            - Space Colony Command and Control Center\r
            - Habitat Engineering and Life Support Room\r
            - Hydroponics and Food Production Facility\r
            - Intra-stellar Power Generation Chamber\r
            - Zero-Gravity Recreation and Exercise Area\r
            - Astronaut Training and Simulation Hub\r
            - Extraterrestrial Defense Perimeter Control\r
            - Space Colony Communal Living Quarters\r
            - Orbital Viewing and Stargazing Lounge\r
            - Space Colony Medical Bay and Quarantine\r
    rooms-cyberpunk:\r
        Living-Spaces:\r
            - Neon-lit Loft Apartment\r
            - Tech-Integrated Smart Home\r
            - Augmented Reality Entertainment Room\r
            - Holographic Virtual Reality Chamber\r
            - Cluttered Hacker's Hideout\r
            - Futuristic Capsule Hotel Room\r
            - Vertically Stacked Living Pods\r
            - Underground Cyberpunk Bunker\r
            - Floating Skybox Residence\r
            - Ultra-Modern Modular Living Unit\r
        Workspaces:\r
            - Cybernetic Office Space\r
            - High-Tech Co-Working Hub\r
            - Virtual Boardroom with Holo-conferencing\r
            - Cyberdeck-Controlled Command Center\r
            - Immersive VR Design Studio\r
            - Underground Cybercrime Den\r
            - AI-driven R&D Lab\r
            - Holographic Projection Mapping Studio\r
            - Techno-Alchemist's Workshop\r
            - Neon-lit Cyberpunk Bar and Club\r
        Recreational:\r
            - VR Gaming Parlor\r
            - Neon Arcade Wonderland\r
            - Holographic Nightclub\r
            - Futuristic Cyber Spa Retreat\r
            - Holodeck-style Simulation Room\r
            - Hacking Challenge Arena\r
            - Cybernetic Gym and Training Facility\r
            - Augmented Reality Escape Room\r
            - Virtual Racing Simulator\r
            - Immersive Cyberpunk Theater\r
        Security-and-Surveillance:\r
            - Futuristic Cybersecurity Operations Center (SOC)\r
            - High-Tech Surveillance Control Room\r
            - Biometric Access Control Chamber\r
            - Holographic Retina Scanner Vault\r
            - Intrusion Detection System Hub\r
            - AI-Driven Threat Analysis Chamber\r
            - Cyber Defense War Room\r
            - Drone Command and Control Center\r
            - Secure Data Storage Vault\r
            - Surveillance Drone Launch Pad\r
        Medbay-and-Cybernetics-Lab:\r
            - Advanced Cybernetics Implant Lab\r
            - Biopunk Genetic Enhancement Facility\r
            - Futuristic Prosthetics Workshop\r
            - Nanotech Medical Treatment Room\r
            - Cyberware Repair and Maintenance Center\r
            - Neural Implant Calibration Chamber\r
            - Biometric Health Monitoring Lab\r
            - Brain-Computer Interface Testing Room\r
            - Virtual Reality Therapy Space\r
            - Cybernetic Enhancements Showroom\r
        Cybernetics-and-Augmentation:\r
            - Cyberware Modification Lab\r
            - Neural Interface Calibration Room\r
            - Bionic Limb Manufacturing Facility\r
            - Cybernetic Enhancement Clinic\r
            - Virtual Reality Neural Training Chamber\r
            - Nanotech Implant Injection Suite\r
            - Augmented Reality Calibration Room\r
            - Cybernetic Prosthetics Showroom\r
            - Holographic Augmentation Visualization Chamber\r
            - Brain-Computer Interface Testing Lab\r
        Darknet-and-Underground:\r
            - Cybercrime Hideout and Server Farm\r
            - Virtual Black Market Trading Hub\r
            - Illegal Tech and Weapon Manufacturing Lab\r
            - Secret Resistance Headquarters\r
            - Underground VR Gaming Arena\r
            - Discreet Holographic Projection Club\r
            - Rogue AI Hackers Den\r
            - VR Fight Club and Arena\r
            - Cryptocurrency Laundering Facility\r
            - Stealthy Spy Network Operations Center\r
        Cyberpunk-Street-Scene:\r
            - Neon-lit Night Market\r
            - Hovering Vehicle Repair Garage\r
            - Cybernetics Street Clinic\r
            - Futuristic Food Cart Alley\r
            - Holographic Graffiti Art Gallery\r
            - Underground Cyberpunk Bar\r
            - Virtual Reality Arcade\r
            - Bionic Body Modding Studio\r
            - High-tech Cyber Street Food Truck\r
            - Augmented Reality Fashion Boutique\r
        AI-and-Robotics:\r
            - Advanced AI Research Laboratory\r
            - Robotics and Android Assembly Line\r
            - AI-controlled Automation Center\r
            - Drone Control Room\r
            - Sentient Robot Design Studio\r
            - Holographic AI Communication Nexus\r
            - Virtual Reality Simulation for AI Training\r
            - Cybernetic Animal Companion Lab\r
            - Android Repair and Maintenance Shop\r
            - AI Art and Creativity Showcase\r
        Cyberspace-and-Virtual Worlds:\r
            - Immersive Virtual Reality Hub\r
            - Cybernetic Consciousness Upload Chamber\r
            - Virtual Cyberspace Bar and Lounge\r
            - Hacking and Data Breach Simulation Room\r
            - Futuristic MMO Gaming Universe\r
            - Cybernetic Astral Projection Deck\r
            - Virtual Reality Architectural Visualization Studio\r
            - AI-generated Dream World Experience\r
            - Time-distorted Virtual Reality Sandbox\r
            - Futuristic Cyberspace DJ Club\r
    rooms-magical:\r
        Living-Spaces:\r
            - Enchanted Forest Cottage\r
            - Magical Wizard's Tower\r
            - Fairy Glade Sanctuary\r
            - Underwater Mermaid Grotto\r
            - Elven Treehome Haven\r
            - Dragon's Lair Retreat\r
            - Celestial Starlit Chamber\r
            - Timeless Fairy Tale Castle\r
            - Mystical Crystal Cave Dwelling\r
            - Unicorn Meadow Cottage\r
        Workspaces:\r
            - Sorcerer's Alchemy Lab\r
            - Enchanted Book-filled Study\r
            - Potion Brewing Chamber\r
            - Crystal Ball Divination Room\r
            - Runes and Sigils Workshop\r
            - Magical Artifact Museum\r
            - Enchanting Spellcasting Room\r
            - Time-Weaving Chronomancer's Den\r
            - Elven Lore Archive\r
            - Dragon Oracle's Lair\r
        Recreational:\r
            - Wizarding Dueling Arena\r
            - Enchanted Enigma Maze\r
            - Faerie Dance and Music Hall\r
            - Mystical Labyrinth of Illusions\r
            - Unicorn Riding Adventure Park\r
            - Magical Creature Menagerie\r
            - Sorcerer's Dueling Club\r
            - Time Traveler's Chrono Fair\r
            - Celestial Celebria Carnival\r
            - Dragon Racing Circuit\r
        Security-and-Surveillance:\r
            - Ancient Guardian Chamber\r
            - Spell-protected Vault\r
            - Golem Guarded Sanctuary\r
            - Magical Barrier Control Room\r
            - Phoenix Flame Defense Station\r
            - Elven Archers Watchtower\r
            - Wyvern Aerial Surveillance Nest\r
            - Enchanted Mirror Scrying Room\r
            - Shielded Charm Warded Fortress\r
            - Time-looped Protective Sanctum\r
        Healing-and-Potions:\r
            - Healing Springs Sanctuary\r
            - Herbalist's Apothecary\r
            - Healing Crystal Infirmary\r
            - Fairy Healer's Grove\r
            - Dragon's Breath Healing Chamber\r
            - Potion Mixing Laboratory\r
            - Timeless Fountain of Rejuvenation\r
            - Celestial Astral Projection Room\r
            - Unicorn Tears Elixir Dispensary\r
            - Enchanted Garden of Restoration\r
        Transportation-and-Portals:\r
            - Time-traveling Portal Room\r
            - Magic Carpet Hangar\r
            - Teleportation Nexus\r
            - Dragon-Drawn Carriage Garage\r
            - Celestial Starship Docking Bay\r
            - Enchanted Portal Gateways\r
            - Fairy Wings Air Terminal\r
            - Ancient Rune-activated Doorway\r
            - Unicorn-ride Gateway Arch\r
            - Time-warping Pathway\r
        Artifacts-and-Relics:\r
            - Hall of Ancient Artifacts\r
            - Crystal Skull Chamber\r
            - Timeless Magical Art Gallery\r
            - Celestial Reliquary\r
            - Enchanted Totem Shrine\r
            - Dragon Hoard Treasury\r
            - Faerie Crown Jewels Vault\r
            - Mystical Rune Stones Chamber\r
            - Unicorn Horn Collection Room\r
            - Time-traveling Trinket Repository\r
        Guardians-and-Companions:\r
            - Phoenix Roost and Aviary\r
            - Elven Spirit Animal Grove\r
            - Dragon Hatchery\r
            - Celestial Sentinel Shrine\r
            - Enchanted Familiar's Lair\r
            - Fairy Court Gathering Place\r
            - Sorcerer's Elemental Chambers\r
            - Time-guardian Chrono Beasts' Den\r
            - Unicorn Herd Sanctuary\r
            - Mystical Guardian Golems' Chamber\r
        Celestial-Observatories:\r
            - Cosmic Stargazing Terrace\r
            - Astral Constellations Dome\r
            - Planetary Alignment Observatory\r
            - Enchanted Aurora Observatory\r
            - Starship Landing Pad and Dock\r
            - Celestial Skywalking Platform\r
            - Time-warp Viewing Deck\r
            - Comet Chasing Chamber\r
            - Moon and Sun Watching Loft\r
            - Celestial Navigation Room\r
        Chambers-of-Prophecy:\r
            - Oracle's Hall of Foresight\r
            - Crystal Ball Divination Chamber\r
            - Time-scrolls Archives\r
            - Celestial Star Maps Room\r
            - Enchanted Tarot Reading Parlor\r
            - Dragon Divination Lair\r
            - Astral Projection Chamber\r
            - Fairy Fortune-telling Nook\r
            - Sorcerer's Destiny Weaving Chamber\r
            - Mystical Time-loop Library\r
        Feywild-Gardens:\r
            - Enchanted Blossom Arboretum\r
            - Timeless Enchanted Labyrinth\r
            - Celestial Moonlit Garden\r
            - Dragon Enclave Courtyard\r
            - Fairy Glow Gardens\r
            - Mystical Rainbow Meadow\r
            - Starlight Gazing Glade\r
            - Sorcerer's Elemental Garden\r
    interior-design:\r
        Furniture:\r
            - Bed\r
            - Sofa\r
            - Table\r
            - Chairs\r
            - Desk\r
            - Dresser\r
            - Wardrobe\r
            - Bookshelf\r
            - Nightstand\r
            - Coffee Table\r
        Appliances:\r
            - Refrigerator\r
            - Oven/Stove\r
            - Microwave\r
            - Washing Machine\r
            - Dryer\r
            - Dishwasher\r
            - Television\r
            - Air Conditioner\r
            - Heater\r
            - Fan\r
        Lighting:\r
            - Ceiling Light\r
            - Table Lamp\r
            - Floor Lamp\r
            - Wall Sconce\r
            - Pendant Light\r
            - Chandelier\r
        Bedding-Linens:\r
            - Bedsheets\r
            - Blankets/Comforters\r
            - Pillows\r
            - Pillowcases\r
            - Mattress\r
            - Curtains\r
            - Rugs\r
        Storage-Organization:\r
            - Closet Organizers\r
            - Shoe Rack\r
            - Storage Bins\r
            - Hangers\r
            - Drawer Organizers\r
            - Shelves\r
        Decor:\r
            - Wall Art/Paintings\r
            - Picture Frames\r
            - Mirrors\r
            - Vases\r
            - Indoor Plants\r
            - Clocks\r
            - Decorative Cushions/Pillows\r
            - Candles\r
        Electronics:\r
            - Laptop/Computer\r
            - Smartphone\r
            - Speakers\r
            - Charging Station\r
            - Alarm Clock\r
        Kitchenware:\r
            - Plates\r
            - Bowls\r
            - Cups/Glasses\r
            - Cutlery (Forks, Knives, Spoons)\r
            - Pots and Pans\r
            - Cooking Utensils (Spatula, Ladle, etc.)\r
            - Cutting Board\r
        Bathroom-Essentials:\r
            - Towels\r
            - Hand Soap\r
            - Shampoo and Conditioner\r
            - Shower Curtain\r
            - Toilet Paper\r
            - Toothbrush and Toothpaste\r
            - Hairdryer\r
        Cleaning-Supplies:\r
            - Broom and Dustpan\r
            - Vacuum Cleaner\r
            - Mop and Bucket\r
            - Cleaning Cloths\r
    interior-design-fictional:\r
        Furniture:\r
            - Table\r
            - Chair\r
            - Bed\r
            - Bookshelf\r
            - Wardrobe\r
            - Desk\r
            - Chest\r
            - Mirror\r
            - Couch\r
            - Fireplace\r
        Magical Artifacts:\r
            - Wand\r
            - Spellbook\r
            - Potion Vials\r
            - Crystal Ball\r
            - Enchanted Amulet\r
            - Magic Cauldron\r
            - Magic Mirror\r
            - Flying Broomstick\r
            - Time-Turner\r
            - Fairy Dust\r
        Treasures:\r
            - Golden Chalice\r
            - Jeweled Crown\r
            - Precious Gemstones\r
            - Ancient Scrolls\r
            - Magic Rings\r
            - Valuable Artwork\r
            - Pot of Gold\r
            - Exquisite Fabrics\r
            - Magical Artifacts\r
        Technology:\r
            - Computer Terminal\r
            - Advanced Control Panels\r
            - Laser Gun\r
            - Holographic Projector\r
            - Teleportation Device\r
            - Cybernetic Implants\r
            - Nanotechnology Devices\r
            - Futuristic Gadgets\r
        Ancient Relics:\r
            - Mysterious Artifact\r
            - Ancient Statue\r
            - Weathered Map\r
            - Lost Scroll\r
            - Sacred Talisman\r
            - Crumbling Idol\r
            - Magical Runes\r
            - Enigmatic Hieroglyphs\r
        Mystical Creatures:\r
            - Dragon Egg\r
            - Phoenix Feathers\r
            - Unicorn Horn\r
            - Mermaid Scales\r
            - Fairy Wings\r
            - Griffin Feather\r
            - Elf Elixir\r
            - Troll's Treasure\r
        Tools and Gadgets:\r
            - Multi-tool\r
            - Compass\r
            - Spyglass\r
            - Mechanized Gears\r
            - Energy Crystals\r
            - Traps and Snares\r
            - Invisibility Cloak\r
            - Mind-reading Device\r
    light-sources-indoor:\r
        natural:\r
            - Sunlight through Windows\r
            - Sunlight through Skylights\r
            - Moonlight\r
        fire:\r
            - Fireplace\r
            - Fire Pit\r
            - Fire Torch or Tiki Torch\r
            - Ethanol or Bioethanol Fireplace\r
            - Candlelight\r
            - Oil Lamps\r
            - Gas Lanterns\r
            - Kerosene Lamps\r
            - Campfire\r
            - Bonfire \r
        artificial:\r
            - LED Bulbs\r
            - Compact Fluorescent Lamps\r
            - Halogen Bulbs\r
            - Incandescent Bulbs\r
            - High-Intensity Discharge Lamps\r
            - Fluorescent Tubes\r
            - Track Lighting\r
            - Recessed Ceiling Lights\r
            - Wall Sconces\r
            - Pendant Lights\r
            - Chandeliers\r
        biological:\r
            - Bioluminescent Organisms\r
            - Algae Bioreactors for Lighting\r
            - Bio-luminescent Mushrooms\r
            - Jellyfish Gene Insertion\r
    light-sources-outdoor:\r
        natural:\r
            - Sunlight\r
            - Moonlight\r
            - Starlight\r
            - Northern Lights\r
            - Bioluminescent Ocean Waves\r
            - Fireflies\r
            - Glow-in-the-Dark Insects\r
            - Reflective Moonlight on Snow\r
            - Twilight\r
        artificial:\r
            - LED Outdoor Lights\r
            - Solar-Powered Lights\r
            - Halogen Floodlights\r
            - Incandescent Outdoor Lamps\r
            - Fluorescent Outdoor Fixtures\r
            - Outdoor Chandeliers\r
            - String Lights (Fairy Lights)\r
            - Pathway Lights\r
            - Wall-Mounted Sconces\r
            - In-Ground Well Lights\r
            - Bollard Lights\r
        biological:\r
            - Bioluminescent Organisms\r
            - Bio-luminescent Algae\r
            - Glow-in-the-Dark Plants\r
            - Bioluminescent Jellyfish\r
            - Bioluminescent Fungi\r
            - Luminescent Deep-Sea Creatures\r
            - Glow-in-the-Dark Insects\r
            - Bioluminescent Phytoplankton\r
        fire type:\r
            - Outdoor Fire Pit\r
            - Tiki Torches with Fire\r
            - Outdoor Fireplace\r
            - Gas Lanterns\r
            - Oil Lamps\r
            - Campfires\r
            - Bonfires\r
            - Torches (Traditional or Modern)\r
            - Fire Bowls\r
            - Chimineas\r
            - Lanterns with Real Flames\r
    lighting:\r
        indoor:\r
            - Ambient Lighting\r
            - Task Lighting\r
            - Accent Lighting\r
            - Chandeliers\r
            - Pendant Lights\r
            - Wall Sconces\r
            - Track Lighting\r
            - Recessed Lighting\r
            - Table Lamps\r
            - Floor Lamps\r
            - Under-Cabinet Lighting\r
            - Cove Lighting\r
            - Wall Washers\r
            - Picture Lights\r
            - Strip Lights (LED strips)\r
            - Night Lights\r
            - Fiber Optic Lighting\r
            - Smart Lighting\r
        outdoor:\r
            - Pathway Lighting\r
            - Landscape Lighting\r
            - Floodlights\r
            - Security Lighting\r
            - Wall-Mounted Lanterns\r
            - Bollard Lights\r
            - Deck and Step Lights\r
            - In-Ground Well Lights\r
            - String Lights (Fairy Lights)\r
            - Wall Washers (Exterior)\r
            - Spotlights\r
            - Garden Lighting\r
            - Pond and Pool Lighting\r
            - Patio Umbrella Lights\r
            - Solar Garden Lights\r
            - Motion Sensor Lights\r
            - Lanterns (Traditional or Modern)\r
            - Gas Lanterns (Outdoor)\r
            - Flame Lights\r
        specialized:\r
            - Bar Lighting\r
            - Rim Lighting\r
            - Wall Grazing\r
            - Wall Washing\r
            - Downlighting\r
            - Uplighting\r
            - Footlighting\r
            - Cove Lighting\r
            - Neon Lights\r
            - Rope Lights\r
            - Black Lights\r
            - Strobe Lights\r
            - Gobo Lighting\r
            - Moving Head Lights\r
            - Pin Spot Lighting\r
            - Laser Lights\r
    features:\r
        tiny:\r
            - Compact and Colorful Facades\r
            - Adorable Window Flower Boxes\r
            - Rustic Wooden Shutters\r
            - Quaint Gabled Roof\r
            - Cute Front Porch or Veranda\r
            - Charming Bay Windows\r
            - Decorative Carved Doors\r
            - Cozy Window Seats\r
            - Slanted Skylights for More Headroom\r
            - Unique Tiny Tower or Turret\r
            - Lofts or Mezzanines\r
            - Large Windows to Maximize Natural Light\r
            - Sliding Glass Doors to Connect Indoor and Outdoor Spaces\r
            - Cozy Fireplace or Wood-Burning Stove\r
            - Charming Exterior Trim and Details\r
        small:\r
            - Architectural Recesses and Projections\r
            - Elegant French Doors\r
            - Stylish Sash Windows\r
            - Tasteful Wrought Iron Balconies\r
            - Artistic Glass Art Installations\r
            - Intricate Fretwork or Lattice Work\r
            - Beautifully Landscaped Entryways\r
            - Classic Round or Octagonal Turrets\r
            - Quirky Roof Cupolas\r
            - Decorative Dormer Windows\r
            - Contemporary Architectural Elements (e.g., Flat Roofs, Clean Lines)\r
            - Floor-to-Ceiling Windows for Panoramic Views\r
            - Rooftop Gardens or Green Spaces\r
            - Juliet Balconies or Small Terraces\r
            - Unique Façade Finishes (e.g., Wood Cladding, Stucco)\r
        medium:\r
            - Striking Glass Curtain Walls\r
            - Impressive Rotundas or Domes\r
            - Grand Staircases in Foyers\r
            - Ornate Terracotta or Stone Carvings\r
            - Decorative Roof Cresting or Finials\r
            - Eye-catching Metal Cladding Patterns\r
            - Multi-Pane Arched Windows\r
            - Architectural Pediments or Porticos\r
            - Beautifully Sculpted Columns\r
            - Geometric Patterned Exterior Tiles\r
            - Grand Entrance Foyers\r
            - Atriums or Skylights for Natural Light in Common Areas\r
            - Artistic Murals or Sculptures as Focal Points\r
            - Glass-Walled Meeting or Conference Rooms\r
            - Rooftop Bars or Restaurants\r
        big:\r
            - Iconic Arched or Cable-Stayed Bridges\r
            - Towering Flagpoles or Flag Towers\r
            - Elaborate Exterior Mosaics or Murals\r
            - Magnificent Dome Roofs\r
            - Decorative Metal Grilles on Facades\r
            - Prominent Clock Faces or Clock Towers\r
            - Graceful Flying Buttresses\r
            - Striking Diagrid Facades\r
            - Sculptural Wind Turbines (Sustainable Buildings)\r
            - Unique Structural Cantilevers\r
            - Impressive Lobby Areas with Water Features\r
            - Striking Façade Cladding (e.g., Glass Curtain Walls)\r
            - Landscaped Rooftop Gardens\r
            - Dramatic Lighting Effects on Building Exteriors\r
            - Unique Sculptures or Installations in Public Spaces\r
        huge:\r
            - Sky-High Observation Decks with Panoramic Views\r
            - Glowing Illuminated Facades (Light Shows)\r
            - Vast Roof Gardens with Recreational Spaces\r
            - Artistic LED Screen Displays\r
            - Massive Exterior Wall Murals\r
            - Striking Cantilevered Sections\r
            - Iconic Spire or Minaret\r
            - Expansive Reflecting Pools or Water Features\r
            - Architectural Helical Ramps\r
            - Sculptural Solar Panels as Building Skin\r
            - Iconic Crown or Spire as a Landmark\r
            - Observatory Decks for Panoramic Views\r
            - Large-scale Murals or Frescoes on Building Facades\r
            - Elaborate Exterior Decorations (e.g., Carvings, Gargoyles)\r
            - Architectural Lighting for Nighttime Illumination\r
        large:\r
            - Striking Suspension Bridges\r
            - Massive Smokestacks or Chimneys (Industrial Complexes)\r
            - Distinctive Roof Trusses or Arch Structures\r
            - Unique Façade Textures (e.g., Corrugated Metal)\r
            - Decorative Art Deco Facades\r
            - Towering Communication Antennas\r
            - Stately Entrance Gates or Portals\r
            - Monumental Statues or Sculptures\r
            - Impressive Barrel Vault Ceilings\r
            - Historic Mosaics or Frescoes\r
            - Majestic Arched Entryways (e.g., Bridge Tunnels)\r
            - Large Smokestacks or Chimneys (Power Plants)\r
            - Aesthetic Pedestrian Bridges (e.g., Skywalks)\r
            - Striking Clock Towers or Bell Towers\r
            - Unique Roofs (e.g., Geodesic Domes)\r
        mega:\r
            - Futuristic Sky Bridges Connecting Towers\r
            - Immense Artistic LED Façade Displays\r
            - Spectacular Atriums with Living Trees\r
            - Gigantic Rooftop Helipads\r
            - Landmark Central Waterfalls or Fountains\r
            - Enormous Interactive Media Walls\r
            - Floating Solar Farms (Megastructures)\r
            - Striking Skyscraper Diagrids\r
            - Iconic Eco-Friendly Green Roofs\r
            - Avant-Garde 3D-Printed Architecture\r
            - Futuristic and Avant-Garde Design Elements\r
            - Massive Central Atrium Spaces\r
            - Enormous Roof Gardens or Green Roofs\r
            - Architectural Lighting for Dramatic Night Displays\r
            - Immersive Interactive Façades (e.g., LED Screens)\r
properties:\r
    patterns:\r
        tapestry:\r
            - Plain Weave\r
            - Soumak Weave\r
            - Slit Weave\r
            - Rya Knots\r
            - Herringbone Weave\r
            - Basket Weave\r
            - Eccentric Wefts\r
            - Inlay Weave\r
            - Tapisserie Basse\r
            - Tapestry Rosepath\r
            - Tapestry Samitum\r
            - Warp-Faced Technique\r
            - Weft-Faced Technique\r
            - Brocading\r
            - Pick and Pick\r
            - Tapestry Pile Weave\r
            - Beiderwand\r
            - Chenille Weave\r
            - Cut Pile\r
            - Dobby Weave\r
            - Eccentric Wefts\r
            - Felted Tapestry\r
            - Ghiordes Knot\r
            - Kilim Weave\r
            - Loom-Controlled Shifting\r
            - Manikin Technique\r
            - PatteTissage\r
            - Russian Tapestry Weave\r
            - Slit & Interlock\r
            - Shaft Switching Technique\r
            - Soumak with Twinning\r
            - Swedish Weave\r
            - Tapestry on Opposite Warps\r
            - Tied Rya Knots\r
            - Triangular Tapestry\r
            - Turned Taquete\r
            - Woven and Embroidered Tapestries\r
            - Warp Interlock\r
            - Weft Interlock\r
            - Egyptian Knots\r
            - Bead Weaving\r
            - Twill Weave\r
            - Needle Weaving\r
            - Leno Weave\r
            - Tapestry with Gauze Overlay\r
            - Double Weave\r
            - Tapestry with Velvet Pile\r
            - Tapestry with Cut and Drawn Work\r
            - Moquette Weave\r
            - Jacquard Weave\r
            - Tapestry with Laid-in Yarns\r
            - Warp Painting\r
            - Pile Weave\r
            - Tapestry with Slit Soumak\r
            - Gothic Tapestry Weave\r
            - Tapestry with Collage\r
            - Tapestry with Felt Inlay\r
            - Laid-in Weft Patterning\r
            - Ecclesiastical Tapestry Weave\r
            - Overshot Weave\r
            - Tapestry with Wrapped Cords\r
            - Tapestry with Metal Threads\r
            - Stained Glass Tapestry Weave\r
            - Hand-Dyed Tapestry\r
            - Indian Tapestry Weave\r
            - Pictorial Tapestry Weave\r
    materials-construction:\r
        stones:\r
            - Granite\r
            - Marble stone\r
            - Limestone\r
            - Sandstone\r
            - Slate\r
            - Basalt stone\r
            - Travertine stone\r
            - Gneiss\r
            - Schist stone\r
            - Quartzite stone\r
            - Obsidian stone\r
            - Pumice stone\r
            - Soapstone stone\r
            - Onyx stone\r
            - Serpentine stone\r
            - Dolomite stone\r
            - Gabbro stone\r
            - Rhyolite stone\r
            - Andesite stone\r
            - Diorite stone\r
            - Conglomerate stone\r
            - Breccia stone\r
            - Lapis Lazuli\r
            - Tuff stone\r
            - Concrete\r
            - Reinforced Concrete\r
            - Precast Concrete\r
            - Exposed Aggregate Concrete \r
        materials:\r
            - Wood\r
            - Steel\r
            - Brick\r
            - Glass\r
            - Aluminum\r
            - Plaster\r
            - Gypsum Board\r
            - Asphalt\r
            - Terracotta\r
            - Timber\r
            - Cement Board\r
            - Fiberglass\r
            - Plywood\r
            - Vinyl Siding\r
            - Metal Cladding\r
            - Ceramic Tiles\r
            - Rubber Flooring\r
            - Polycarbonate Panels\r
            - Insulated Concrete Forms\r
            - Composite Materials\r
            - Plastic Lumber\r
            - Fiber Cement Siding\r
            - Metal Roofing Sheets\r
            - Thatch\r
            - Rammed Earth\r
            - Cob\r
            - Bamboo\r
            - Prefabricated Materials\r
        materials-fictinal:\r
            - Starstone Bricks\r
            - Moonlight Glass\r
            - Dragon Scale Roofing\r
            - Phoenix Feather Insulation\r
            - Enchanted Wood Planks\r
            - Unicorn Horn Beams\r
            - Mermaid's Tears Tiles\r
            - Fairy Dust Cement\r
            - Time Crystal Facades\r
            - Celestial Alloy Frames\r
            - Warp Core Foundations\r
            - Essence-infused Walls\r
            - Elemental Gemstone Slabs\r
            - Quantum Mesh Windows\r
            - Wyvern Wing Shingles\r
            - Leviathan Scale Siding\r
            - Cosmic Energy Panels\r
            - Dreamstone Pillars\r
            - Elixir Stone Cladding\r
            - Arcane Rune Flooring\r
            - Galaxy Marble Columns\r
            - Void Stone Foundations\r
            - Nebula Fabric Roofs\r
            - Luminous Pearl Pathways\r
            - Stardust Bricks\r
            - Crystal Prism Glass\r
            - Phoenix Ember Roofing\r
            - Enchanted Ironwood Planks\r
            - Griffin Feather Insulation\r
            - Mermaid Scale Tiles\r
            - Faerie Silk Cement\r
            - Celestial Steel Frames\r
            - Timeless Stone Facades\r
            - Seraphic Halo Beams\r
            - Etherium Reinforcements\r
            - Spectral Essence Walls\r
            - Dragonfire Glass Panels\r
            - Cosmic Veil Windows\r
            - Moonstone Slabs\r
            - Eldritch Timber Siding\r
            - Starfall Cladding\r
            - Enigma Stone Flooring\r
            - Arcanite Gargoyle Pillars\r
            - Ethereal Glowstone Lanterns\r
            - Auroral Prism Roof Panels\r
            - Wyrmstone Archways\r
            - Celestium Reinforced Foundations\r
            - Mithril Alloy Beams\r
            - Celestial Crystal Pavers\r
        materials-cyberpunk:\r
            - Carbon Nanotube Reinforced Concrete\r
            - Graphene-infused Polymer Sheets\r
            - Nanoceramic Building Panels\r
            - Nanofiber-reinforced Plastics\r
            - High-strength Nanotube Girders\r
            - Bio-engineered Glow-in-the-dark Paints\r
            - Bioluminescent Photoluminescent Pavers\r
            - Illuminated Bioluminescent Signage\r
            - Bioluminescent Fiber-optic Threads\r
            - Quantum Nanowire Power Cables\r
            - Quantum Nanowire Data Transmission Lines\r
            - Electrochromic Smart Glass Windows\r
            - Holographic Projector Walls\r
            - Transparent OLED Screens\r
            - Ferrofluid-based Building Foundation\r
            - Magnetic Levitation Structural Support\r
            - AR-enabled Building Facades\r
            - Dynamic Augmented Reality Cladding\r
            - Virtual Reality Construction Planning\r
            - VR Architectural Design Visualization\r
            - Self-healing Concrete\r
            - Self-repairing Nanogels for Facades\r
            - Electroactive Shape-changing Facades\r
            - Smart Electroactive Building Skins\r
            - Anti-gravity Building Platforms\r
            - Hovering Elevators\r
        materials-scifi:\r
            - Titanium-Lithium Matrix\r
            - Carbon-Nanotube Infused Alloys\r
            - Hypersteel Reinforcements\r
            - Quantum-Metallic Composites\r
            - Electromagnetic Reinforced Plastics\r
            - Nanofiber-reinforced Polymer Sheets\r
            - Self-assembling Nanobots\r
            - Nanoceramic Coatings\r
            - Programmable Smart Nanomaterials\r
            - Self-repairing Nanite-infused Structures\r
            - Bioluminescent Photoluminescent Pavers\r
            - Bioregenerative Living Walls\r
            - Bio-adaptable Shape-shifting Facades\r
            - Genetically Enhanced Biomaterials\r
            - Bio-organic Smart Glass\r
            - Quantum Computing Building Brains\r
            - Quantum Entangled Teleportation Hubs\r
            - Quantum Encryption Infrastructure\r
            - Quantum-controlled Smart Grids\r
            - Quantum-Infused Artificial Intelligence\r
            - Interactive Holographic Building Skins\r
            - Holographic Solar Absorbers\r
            - Hologram Projector Architectural Elements\r
            - Holo-Integrated Communication Panels\r
            - Holographic Simulation Construction Planning\r
            - Plasma-Generated Force Fields\r
            - Electromagnetic Pulse Resilient Structures\r
            - Plasma-Reflective Exterior Coatings\r
            - Magnetic Shielding Architecture\r
            - Electromagnetic Disguise Camouflage\r
            - Hyper-Responsive Tinting Windows\r
            - Smart Glass with Adaptive Transparency\r
            - Photovoltaic Solar-Collecting Surfaces\r
            - Temperature Regulating Glass Coatings\r
            - Dynamic Light Manipulation Panels\r
            - Nanofluid-based Heat Exchange Coils\r
            - Quantum-Cooled Supercomputing Rooms\r
            - Self-adjusting Nanofluidic Climate Control\r
            - Nano-enhanced Thermal Insulation\r
            - Advanced Nanocoolant Infrastructure\r
            - Antigravity Suspension Platforms\r
            - Levitating Structural Support Systems\r
            - Graviton Stabilized Buildings\r
            - Levitation Assisted Elevators\r
            - Magnetic Hoverpads and Walkways\r
        Roofing-Materials:\r
            - Asphalt Shingles\r
            - Metal Roofing\r
            - Clay Tiles\r
            - Slate Tiles\r
            - Concrete Tiles\r
            - Wood Shingles or Shake\r
            - Rubber Roofing\r
            - Polycarbonate Roofing\r
            - Thatch Roofing\r
            - Green Roofing\r
        Insulation-Materials:\r
            - Fiberglass Insulation\r
            - Cellulose Insulation\r
            - Mineral Wool Insulation\r
            - Spray Foam Insulation\r
            - Reflective Foil Insulation\r
            - Expanded Polystyrene\r
            - Extruded Polystyrene\r
            - Polyurethane Insulation\r
            - Cotton Insulation (Recycled Cotton)\r
        Flooring-Materials:\r
            - Hardwood\r
            - Laminate\r
            - Vinyl\r
            - Ceramic Tiles\r
            - Porcelain Tiles\r
            - Natural Stone Tiles (excluding those mentioned before)\r
            - Concrete Flooring\r
            - Bamboo Flooring\r
            - Cork Flooring\r
            - Linoleum Flooring\r
            - Rubber Flooring\r
            - Carpet\r
            - Terrazzo Flooring\r
            - Engineered Wood Flooring\r
            - Luxury Vinyl Tiles\r
            - Epoxy Flooring\r
styles:\r
    art-styles:\r
        - Prehistoric Art\r
        - Ancient Egyptian Art\r
        - Ancient Greek Art\r
        - Roman Art\r
        - Byzantine Art\r
        - Medieval Art\r
        - Renaissance Art\r
        - Baroque Art\r
        - Rococo Art\r
        - Neoclassical Art\r
        - Romanticism\r
        - Realism\r
        - Impressionism\r
        - Post-Impressionism\r
        - Expressionism\r
        - Cubism\r
        - Surrealism\r
        - Abstract Expressionism\r
        - Pop Art\r
        - Minimalism\r
        - Conceptual Art\r
        - Postmodernism\r
        - Contemporary Art\r
        - sci-fi\r
        - cyberpunk\r
        - Realism\r
        - Impressionism\r
        - Post-Impressionism\r
        - Cubism\r
        - Surrealism\r
        - Abstract Expressionism\r
        - Pop Art\r
        - Minimalism\r
        - Art Nouveau\r
        - Romanticism\r
        - Baroque\r
        - Rococo\r
        - Renaissance\r
        - Gothic\r
        - Fauvism\r
        - Dadaism\r
        - Pointillism\r
        - Symbolism\r
        - Photorealism\r
        - Constructivism\r
        - Abstract Art\r
        - Op Art\r
        - Futurism\r
        - Art Deco\r
        - Expressionism\r
        - Neoclassicism\r
        - Indigenous Art\r
        - Afrofuturism\r
        - Digital Art\r
        - Street Art\r
        - Land Art\r
        - Installation Art\r
        - Conceptual Art\r
        - Environmental Art\r
        - Performance Art\r
        - Video Art\r
        - Outsider Art\r
        - Naïve Art\r
        - Folk Art\r
        - Graffiti Art\r
        - Art Brut\r
        - Tonalism\r
        - Suprematism\r
        - Fluxus\r
        - Ashcan School\r
        - Precisionism\r
        - Neue Sachlichkeit (New Objectivity)\r
        - Magic Realism\r
        - Postmodernism\r
        - Contemporary Art\r
        - Installation Art\r
        - Video Installation\r
        - Landscapes\r
        - Portraiture\r
        - Still Life\r
        - Trompe-l'oeil\r
        - Hyperrealism\r
        - Kinetic Art\r
        - Body Art\r
        - Bio Art\r
        - Indigenous Art\r
        - Chinese Ink Painting\r
        - Japanese Ukiyo-e\r
        - Persian Miniature\r
        - Byzantine Art\r
        - Egyptian Art\r
        - Prehistoric Art\r
        - Mosaic Art\r
        - Mexican Muralism\r
        - Social Realism\r
        - Romantic Landscape\r
        - Abstract Landscape\r
        - Optical Art\r
        - Kinetic Sculpture\r
        - Photomontage\r
        - Constructive Realism\r
        - Neo-Expressionism\r
        - Neue Wilde\r
        - Street Photography\r
        - Hyperpop Art\r
        - Graffiti Writing\r
        - Art Povera\r
        - Happening\r
        - Video Game Art\r
        - Digital Painting\r
        - Photographic Realism\r
        - Postcolonial Art\r
        - Installation Sculpture\r
        - Geometric Abstraction\r
        - Hard-Edge Painting\r
        - Social Sculpture\r
        - New Media Art\r
        - Indigenous Australian Art\r
        - Aboriginal Dot Painting\r
        - Photocollage\r
        - Neo-Pop Art\r
        - Art Informel\r
        - Color Field Painting\r
        - Assemblage Art\r
        - Stuckism\r
    punk-styles:\r
        - Biopunk\r
        - Dieselpunk\r
        - Atompunk\r
        - Clockpunk\r
        - Solarpunk\r
        - Post-Apocalyptic\r
        - Retrofuturism\r
        - Tech Noir\r
        - Cyber-occultism\r
        - Neo-Noir\r
        - sci-fi\r
        - cyberpunk\r
        - steampunk\r
        - Post-Cyberpunk\r
        - Biopunk\r
        - Stonepunk\r
        - Teslapunk\r
        - Raypunk\r
        - Decopunk\r
        - Mythpunk\r
        - Spacepunk\r
        - Nanopunk\r
        - Retro Cyberpunk\r
        - Robotpunk\r
        - Vaporwave\r
        - Glitch Art\r
        - Post-Apocalyptic\r
        - Tech Noir\r
        - Solarwave\r
random:\r
    materials-indoor:\r
        - "{1-3$$ and $$__properties/materials-construction/stones__|__properties/materials-construction/Flooring-Materials__|__properties/patterns/tapestry__ tapestry}"\r
    materials-outdoor:\r
        - "{1-3$$ and $$__properties/materials-construction/stones__|__properties/materials-construction/materials__|__properties/materials-construction/Roofing-Materials__ roof}"\r
    light-source-indoor:\r
        - __constructions/light-sources-indoor/*__\r
    light-source-outdoor:\r
        - __constructions/light-sources-outdoor/*__\r
    lighting-indoor:\r
        - "{1-2$$ and $$__random/light-source-indoor__}, {__constructions/lighting/indoor__|__constructions/lighting/specialized__}"\r
    lighting-outdoor:\r
        - "{1-2$$ and $$__random/light-source-outdoor__}, {__constructions/lighting/outdoor__|__constructions/lighting/specialized__}"\r
    interior-design:\r
        - "{1-5$$__constructions/interior-design/*__}"\r
    interior-design-fictional:\r
        - "{1-5$$__constructions/interior-design*/*__}"\r
    rooms:\r
        - __constructions/rooms/*__, __random/interior-design__, __random/materials-indoor__, __random/lighting-indoor__\r
    rooms-fictional:\r
        - __constructions/rooms*/*__, __random/interior-design-fictional__, __random/materials-indoor__, __random/lighting-indoor__, __styles/punk-styles__\r
    rooms-cyberpunk:\r
        - __constructions/rooms-cyberpunk/*__, __random/interior-design-fictional__, __random/materials-indoor__, __random/lighting-indoor__, cyberpunk, sci-fi\r
    rooms-scifi:\r
        - __constructions/rooms-scifi/*__, __random/interior-design-fictional__, __random/materials-indoor__, __random/lighting-indoor__, __styles/punk-styles__, sci-fi\r
    rooms-magical:\r
        - __constructions/rooms-magical/*__, __random/interior-design-fictional__, __random/materials-indoor__, __random/lighting-indoor__, fantasy\r
    buildings:\r
        - "__constructions/types/*__, {1-3$$__properties/materials-construction/materials__|__properties/materials-construction/stones__}, __random/lighting-outdoor__"\r
    buildings-fictional:\r
        - "__constructions/types*/*__, {1-3$$__properties/materials-construction/materials*__|__properties/materials-construction/stones__}, __random/lighting-outdoor__"\r
    buildings-cyberpunk:\r
        - "__constructions/types-cyberpunk/*__, {1-3$$__properties/materials-construction/materials-cyberpunk__|__properties/materials-construction/stones__}, __random/lighting-outdoor__"\r
    buildings-scfi:\r
        - "__constructions/types-scifi/*__, {1-3$$__properties/materials-construction/materials-scifi__|__properties/materials-construction/stones__}, __random/lighting-outdoor__"\r
    buildings-magical:\r
        - "__constructions/types-magical/*__, {1-3$$__properties/materials-construction/materials*__|__properties/materials-construction/stones__}, __random/lighting-outdoor__"`;export{r as default};
