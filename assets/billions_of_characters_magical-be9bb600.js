const n=`# BoCharsMag\r
BoCharsMag:\r
    female:\r
        classic:\r
            - "female __person-magical/female__ \r
            {\r
            wearing __clothings-magical/female-attire__ \r
            __magical/words/verbs__ __magical/magic__|\r
            __random/profession-magic__\r
            }, __person-magical/poses__, __magical/lighting__"\r
        modern:\r
            - "female __person-magical/female__ \r
            {\r
            wearing __clothings/female-attire__ \r
            __magical/words/verbs__ __magical/magic__|\r
            __random/profession-magic__\r
            }, __person-magical/poses__, __magical/lighting__"\r
        scenery:\r
            - "{__BoCharsMag/female/classic__|__BoCharsMag/female/modern__}, __magical/lighting__, __scenes/*__"\r
        BoConstructions:\r
            - "{__BoCharsMag/female/classic__|__BoCharsMag/female/modern__}, __BoConstructions/*-magical__"\r
    male:\r
        classic:\r
            - "male __person-magical/male__ \r
            {\r
            wearing __clothings-magical/male-attire__ \r
            __magical/words/verbs__ __magical/magic__|\r
            __random/profession-magic__\r
            }, __person-magical/poses__, __magical/lighting__"\r
        modern:\r
            - "male __person-magical/male__ \r
            {\r
            wearing __clothings/male-attire__ \r
            __magical/words/verbs__ __magical/magic__|\r
            __random/profession-magic__\r
            }, __person-magical/poses__, __magical/lighting__"\r
        scenery:\r
            - "{__BoCharsMag/male/classic__|__BoCharsMag/male/modern__}, __magical/lighting__, __scenes/*__"\r
        BoConstructions:\r
            - "{__BoCharsMag/male/classic__|__BoCharsMag/male/modern__}, __BoConstructions/*-magical__"\r
    div:\r
        - "female {__BoCharsMag/male/classic__|__BoCharsMag/male/modern__}"\r
        - "male {__BoCharsMag/female/classic__|__BoCharsMag/female/modern__}"\r
    random:\r
        - "{0.45::{__BoCharsMag/female/classic__|__BoCharsMag/female/modern__}|\r
        0.45::{__BoCharsMag/male/classic__|__BoCharsMag/male/modern__}|\r
        0.1::__BoCharsMag/div__}"\r
clothings-magical:\r
    female-attire:\r
        - "{\r
            {0.8::__random/properties-magical__|} __clothings-magical/female/lower-body__,\r
            {0.8::__random/properties-magical__|} __clothings-magical/female/upper-body__ |\r
            {0.8::__random/properties-magical__|} __clothings-magical/female/full-body__\r
           },\r
        {0.8::__clothings/female/footwear__|},\r
        {0.5::__clothings/female/headwear__|},\r
        __random/accesoires__"\r
    male-attire:\r
        - "{\r
            {0.8::__random/properties-magical__|} __clothings-magical/male/lower-body__,\r
            {0.8::__random/properties-magical__|} __clothings-magical/male/upper-body__ |\r
            {0.8::__random/properties-magical__|} __clothings-magical/male/full-body__\r
           },\r
        {0.8::__clothings-magical/male/footwear__|},\r
        {0.5::__clothings-magical/male/headwear__|},\r
        __random/accesoires__"\r
    female:\r
        upper-body:\r
            - Celestial Boleros\r
            - Celestial Capes\r
            - Celestial Cloaks\r
            - Celestial Wraps\r
            - Elemental Shawls\r
            - Elven Boleros\r
            - Elven Capes\r
            - Elven Cloaks\r
            - Elven Robes\r
            - Elven Tunics\r
            - Enchanted Capes\r
            - Enchanted Caplets\r
            - Enchanted Mantles\r
            - Enchanted Robes\r
            - Enchanted Shirts\r
            - Enchanted Shrugs\r
            - Enchanting Ponchos\r
            - Fairy Blouses\r
            - Fairy Capes\r
            - Fairy Capes\r
            - Fairy Caplets\r
            - Fairy Vests\r
            - Mystic Capes\r
            - Mystic Capes\r
            - Mystic Caplets\r
            - Mystic Wraps\r
            - Mystical Capes\r
            - Mystical Tunics\r
            - Runed Vests\r
            - Rune-etched Tunics\r
            - Rune-etched Vests\r
            - Rune-etched Wraps\r
            - Seeress Cloaks\r
            - Sorceress Boleros\r
            - Sorceress Capes\r
            - Sorceress Capes\r
            - Sorceress Caplets\r
            - Sorceress Cloaks\r
            - Sorceress Gowns\r
            - Sorceress Mantles\r
            - Sorceress Tunics\r
            - Witch's Cloaks\r
            - Witch's Tunics\r
            - Wizardess Robes\r
        full-body:\r
            - Elven Gown\r
            - Celestial Robes\r
            - Enchantress Dress\r
            - Sorceress Robe\r
            - Mystic Garment\r
            - Arcane Tunic\r
            - Enigma Gown\r
            - Druidic Robes\r
            - Enchanter's Attire\r
            - Enigmatic Robe\r
            - Seeress Dress\r
            - Sorcerer's Habit\r
            - Alchemist Ensemble\r
            - Mystic Vestment\r
            - Oracle Robe\r
            - Priestess Attire\r
            - Wizard's Habit\r
            - Witch's Gown\r
            - Celestial Dress\r
            - Magician Robes\r
        lower-body:\r
            - Enchanted Skirt\r
            - Sorceress Gown\r
            - Mystic Robe with Train\r
            - Elven Leggings\r
            - Enigma Trousers\r
            - Celestial Culottes\r
            - Sorcerer's Breeches\r
            - Enchanter's Skort\r
            - Alchemist Sarong\r
            - Seeress Veil Skirt\r
            - Druidic Kilt\r
            - Enchantress Harem Pants\r
            - Celestial Flare Skirt\r
            - Magician's Banded Skirt\r
            - Sorceress Flared Trousers\r
            - Enigma Split Skirt\r
            - Celestial Wide-Leg Pants\r
            - Oracle Draped Skirt\r
            - Mystic Embroidered Leggings\r
            - Priestess Ankle Skirt\r
        footwear:\r
            - Enchanted Slippers\r
            - Sorceress Sandals\r
            - Mystic Boots\r
            - Elven Pointed Shoes\r
            - Enigma Ballet Flats\r
            - Celestial Wedge Heels\r
            - Sorcerer's Buckled Boots\r
            - Enchanter's Booties\r
            - Alchemist Espadrilles\r
            - Seeress Ankle Boots\r
            - Druidic Leaf Sandals\r
            - Enchantress Embroidered Shoes\r
            - Celestial Wrap-Around Sandals\r
            - Magician's Tasseled Loafers\r
            - Sorceress High Heels\r
            - Enigma Lace-Up Boots\r
            - Celestial Platform Shoes\r
            - Oracle Beaded Slippers\r
            - Mystic Wrap Sandals\r
            - Priestess Kitten Heels\r
        headwear:\r
            - Enchanted Circlet\r
            - Sorceress Hood\r
            - Mystic Veil\r
            - Elven Tiara\r
            - Enigma Headband\r
            - Celestial Diadem\r
            - Sorcerer's Hat\r
            - Enchanter's Wreath\r
            - Alchemist Headscarf\r
            - Seeress Headpiece\r
            - Druidic Crown\r
            - Enchantress Headband\r
            - Celestial Crescent Crown\r
            - Magician's Pointed Hat\r
            - Sorceress Veil\r
            - Enigma Feathered Fascinator\r
            - Celestial Star Diadem\r
            - Oracle Crystal Crown\r
            - Mystic Embroidered Headwrap\r
            - Priestess Headdress\r
    male:\r
        upper-body:\r
            - Enchanted Cloak\r
            - Wizard Robe\r
            - Mystic Tunic\r
            - Elven Mantle\r
            - Enigma Cape\r
            - Celestial Coat\r
            - Sorcerer's Robe\r
            - Enchanter's Vest\r
            - Alchemist Capelet\r
            - Seer's Shrug\r
            - Druidic Surcoat\r
            - Enchanter's Cloak\r
            - Celestial Mantle\r
            - Magician's Cloak\r
            - Sorcerer's Cape\r
            - Enigma Drape\r
            - Celestial Robe\r
            - Oracle Cape\r
            - Mystic Capelet\r
            - Priest's Vestment\r
        full-body:\r
            - Enchanted Robes\r
            - Wizard's Gown\r
            - Mystic Garb\r
            - Elven Attire\r
            - Enigma Ensemble\r
            - Celestial Regalia\r
            - Sorcerer's Attire\r
            - Enchanter's Raiment\r
            - Alchemist's Ensemble\r
            - Seer's Vestments\r
            - Druidic Robes\r
            - Enchanter's Vestment\r
            - Celestial Vestments\r
            - Magician's Garments\r
            - Sorcerer's Robes\r
            - Enigma Robes\r
            - Celestial Vesture\r
            - Oracle Attire\r
            - Mystic Vestments\r
            - Priest's Robes\r
        lower-body:\r
            - Enchanted Trousers\r
            - Wizard's Pants\r
            - Mystic Leggings\r
            - Elven Breeches\r
            - Enigma Trousers\r
            - Celestial Harem Pants\r
            - Sorcerer's Trousers\r
            - Enchanter's Leggings\r
            - Alchemist's Breeches\r
            - Seer's Trousers\r
            - Druidic Kilt\r
            - Enchanter's Harem Pants\r
            - Celestial Trousers\r
            - Magician's Pants\r
            - Sorcerer's Breeches\r
            - Enigma Split Skirt\r
            - Celestial Wide-Leg Pants\r
            - Oracle Draped Skirt\r
            - Mystic Embroidered Leggings\r
            - Priest's Ankle Skirt\r
        footwear:\r
            - Enchanted Boots\r
            - Wizard's Shoes\r
            - Mystic Sandals\r
            - Elven Pointed Boots\r
            - Enigma Loafers\r
            - Celestial Wingtip Shoes\r
            - Sorcerer's Buckled Boots\r
            - Enchanter's Booties\r
            - Alchemist's Boots\r
            - Seer's Sandals\r
            - Druidic Leaf Sandals\r
            - Enchanter's Loafers\r
            - Celestial Ankle Boots\r
            - Magician's Shoes\r
            - Sorcerer's High Boots\r
            - Enigma Lace-Up Boots\r
            - Celestial Platform Shoes\r
            - Oracle Sandals\r
            - Mystic Wrap Sandals\r
            - Priest's Ankle Boots\r
        headwear:\r
            - Enchanted Hat\r
            - Wizard's Pointed Hat\r
            - Mystic Hood\r
            - Elven Circlet\r
            - Enigma Headband\r
            - Celestial Crown\r
            - Sorcerer's Hat\r
            - Enchanter's Cap\r
            - Alchemist's Bandana\r
            - Seer's Headband\r
            - Druidic Wreath\r
            - Enchanter's Headband\r
            - Celestial Diadem\r
            - Magician's Hat\r
            - Sorcerer's Hood\r
            - Enigma Feathered Fascinator\r
            - Celestial Star Crown\r
            - Oracle Headpiece\r
            - Mystic Embroidered Headwrap\r
            - Priest's Headdress\r
    unisex:\r
        accesoires:\r
            - Enchanted Amulet\r
            - Wizard's Staff\r
            - Mystic Runes Bracelet\r
            - Elven Leaf Brooch\r
            - Enigma Crystal Pendant\r
            - Celestial Moonstone Ring\r
            - Sorcerer's Tome Grimoire\r
            - Enchanter's Rune Cufflinks\r
            - Alchemist's Elixir Vial Necklace\r
            - Seer's Divination Tarot Cards\r
            - Druidic Nature Talisman\r
            - Enchantress Charm Bracelet\r
            - Celestial Starry Diadem\r
            - Magician's Top Hat with Hidden Compartments\r
            - Sorcerer's Magic Gloves\r
            - Enigma Pocket Watch with Time Magic Engravings\r
            - Celestial Starry Cloak Pin\r
            - Oracle's Fortune Telling Crystal Ball\r
            - Mystic Pentacle Pendant\r
            - Priest's Holy Relic Medallion\r
        backwear:\r
            - Cloak with Hood\r
            - Elaborate Wizard Robe\r
            - Enchanted Shawl\r
            - Spellweaver Cape\r
            - Mystic Mantle\r
            - Sorceress Bolero\r
            - Enchanter's Tunic\r
            - Druidic Wrap\r
            - Celestial Cloak\r
            - Witch's Capelet\r
            - Mage Blouse\r
            - Alchemist Vestment\r
            - Enigma Shrug\r
            - Sibyl's Scarf\r
            - Enchantress Stole\r
            - Seeress Poncho\r
            - Priestess Cape\r
            - Elemental Shroud\r
            - Oracle Capelet\r
            - Magician Jacket\r
        facewear:\r
            - Mask of Illusions\r
            - Enchanted Veil\r
            - Mystic Goggles\r
            - Sorcerer's Mask\r
            - Celestial Visor\r
            - Enigma Masquerade Mask\r
            - Druidic Face Paint\r
            - Enchanter's Eyepatch\r
            - Alchemist's Breathing Mask\r
            - Seer's Third Eye Crystal\r
            - Elven Leaf Mask\r
            - Oracle's Divination Veil\r
            - Enchantress' Veiled Hat\r
            - Magician's Enigmatic Mask\r
            - Elemental Face Guard\r
            - Dreamweaver Mask\r
            - Time-Bender Goggles\r
            - Celestial Moon Mask\r
            - Rune-Engraved Faceplate\r
            - Priest's Sacred Embellishment\r
            - Enchanted Spectacles\r
            - Wizard's Arcane Glasses\r
            - Mystic Crystal Goggles\r
            - Elven Enchantment Eyewear\r
            - Enigma Kaleidoscope Glasses\r
            - Celestial Starlight Shades\r
            - Sorcerer's Sightseeing Glasses\r
            - Enchanter's Runed Eyeglasses\r
            - Alchemist's Potion-Enhanced Goggles\r
            - Seer's Future-Reading Spectacles\r
            - Druidic Nature-Focused Glasses\r
            - Enchantress' Enigmatic Lenses\r
            - Celestial Moonlit Eyeglasses\r
            - Magician's Illusion-Dispelling Goggles\r
            - Elemental Elemental-Sensing Glasses\r
            - Dreamweaver Dream-Interpreting Spectacles\r
            - Time-Bender Time-Reading Glasses\r
            - Oracle's Foresight Goggles\r
            - Mystic Enchanted Monocle\r
            - Priest's Divine Vision Glasses\r
        neckwear:\r
            - Amulet of Protection\r
            - Celestial Amulet\r
            - Celestial Choker\r
            - Celestial Collar\r
            - Celestial Necklace\r
            - Celestial Pendant\r
            - Celestial Torc\r
            - Elven Locket\r
            - Elven Ribbon\r
            - Elven Torc\r
            - Enchanted Amulet\r
            - Enchanted Choker\r
            - Enchanted Choker\r
            - Enchanted Collar\r
            - Enchanted Ribbon\r
            - Enchanted Torc\r
            - Enchanting Collar\r
            - Enchanting Locket\r
            - Enchanting Pendant\r
            -        Enchanting Torc\r
            - Enchantress Medallion\r
            - Enchantress Necklace\r
            - Enchantress Torc\r
            - Fairy Collar\r
            - Fairy Locket\r
            -        Fairy Medallion\r
            - Fairy Necklace\r
            - Mystic Choker\r
            - Mystic Collar\r
            - Mystic Medallion\r
            - Mystic Scarf\r
            - Mystic Talisman\r
            - Rune-engraved Ribbon\r
            - Rune-engraved Torc\r
            - Rune-etched Collar\r
            - Rune-etched Collar\r
            - Rune-etched Medallion\r
            - Seeress Pendant\r
            - Seer's Necklace\r
            - Sorcerer's Locket\r
            - Sorcerer's Medallion\r
            - Sorcerer's Torc\r
            - Sorceress Medallion\r
            - Sorceress Necklace\r
            - Sorceress Talisman\r
            - Talismanic Choker\r
            - Talismanic Pendant\r
            - Wizard's Choker\r
            - Wizard's Necklace\r
person-magical:\r
    female:\r
        - "{__magical/beings__|},\r
        __person/female__, \r
        __person-magical/poses__, \r
        {0.1::__person-magical/wings__|}"\r
    male:\r
        - "{__magical/beings__|},\r
        __person/male__,\r
        __person-magical/poses__,\r
        {0.1::__person-magical/wings__|}"\r
    poses:\r
        - Mystic Gesture, Hands extended in arcane symbols\r
        - Summoning Stance, Arms raised, calling upon mystical forces\r
        - Incantation Pose, Hands near mouth, casting powerful spells\r
        - Wand Waving, Swirling motions with a magical wand\r
        - Elemental Channeling, Fingers pointed to control elemental energies\r
        - Enchantment Pose, Palms facing outward, imbuing objects with magic\r
        - Ritualistic Stance, Intricate movements in ceremonial magic\r
        - Sorcerer's Gesture, One hand held aloft, magic emanating from fingertips\r
        - Concentration Pose, Eyes closed, deep focus on spellcasting\r
        - Rune Invocation, Tracing runes in the air for spell activation\r
        - Arcane Balance, Balanced posture, drawing from inner magic\r
        - Celestial Alignment, Arms raised to the heavens, invoking cosmic energies\r
        - Magical Nexus, Hands touching, forming a magical connection\r
        - Elemental Attunement, Standing in harmony with natural elements\r
        - Time Manipulation, Circular motions to bend time and space\r
        - Spatial Expansion, Arms spread wide, expanding magical reach\r
        - Astral Projection, Leaning backward, projecting consciousness\r
        - Mystic Meditation, Cross-legged, entering a meditative state for magic\r
        - Veil of Illusion, Hands covering face, concealing or revealing magic\r
        - Astral Transcendence, Floating posture, ascending to a higher plane\r
        - Etheric Resonance, Hands forming an energy ball between palms\r
        - Elemental Fusion, Combining gestures for multi-elemental spells\r
        - Arcane Focus, Pointing at a specific target for concentrated magic\r
        - Mana Absorption, Palms open, drawing magic from the surroundings\r
        - Empowerment Stance, Feet firmly planted, harnessing inner strength\r
        - Symbolic Enchantment, Tracing magical symbols in the air\r
        - Crystal Attunement, Holding crystals to amplify magical energy\r
        - Divine Invocation, Kneeling with reverence, calling upon deities\r
        - Celestial Harmony, Hands in prayer, seeking celestial blessings\r
        - Alchemical Transmutation, Fingers forming alchemical symbols\r
        - Channeling Pose, Opening oneself as a vessel for otherworldly entities\r
        - Runelore Mastery, Hands on ancient runes, accessing their powers\r
        - Dimensional Gateway, Forming a gateway to other realms\r
        - Astral Projection, Palms facing outward, projecting astral form\r
        - Mana Infusion, Palms over a magical source, absorbing energy\r
        - Elemental Burst, Dynamic motion to release elemental power\r
        - Enigmatic Divination, Holding a magical artifact for prophetic visions\r
        - Shielding Stance, Arms crossed, creating protective barriers\r
        - Essence Bond, Hands on heart, connecting with inner magic\r
        - Transcendent Trance, Eyes closed, entering a state of higher consciousness\r
        - Kneeling with arms outstretched, calling upon higher forces\r
        - Standing tall, one hand pointed forward, channeling energy\r
        - Seated, surrounded by books and scrolls, deep in thought\r
        - Meditating in a lotus position, seeking inner wisdom\r
        - Leaping in mid-air, casting a counter-spell\r
        - Standing with arms raised, palms open, invoking mystical beings\r
        - Fingers weaving intricate patterns, shaping the magical weave\r
        - Holding an ancient artifact, eyes focused on deciphering its power\r
        - Scribbling furiously in a spellbook, absorbing magical knowledge\r
        - Dodging an opponent's attack, poised for a retaliatory strike\r
        - Concentrated gaze, calling forth elemental energies\r
        - Arms swirling in circular motions, summoning a cyclone of magic\r
        - Hands clasped, calling upon forces from the mystical realms\r
        - Concentrated stance, eyes closed, mentally focusing on the spell\r
        - Elegant hand gestures, drawing symbols in the air to cast spells\r
        - Gazing upwards as celestial beings descend upon the summoner\r
        - Standing within a sacred summoning circle, arms outstretched\r
        - Communicating with spirits through subtle gestures and movements\r
        - Tracing glowing sigils in the air with fingertips, activating magic\r
        - Holding a gemstone infused with power, summoning its energy\r
        - Engrossed in deciphering cryptic texts, surrounded by ancient scrolls\r
        - Engaged in astral projection, seeking knowledge from beyond\r
        - Practicing runic writing with devotion, strengthening their magic\r
        - Seeking counsel from an enchanted book, reading with intense focus\r
        - Absorbing wisdom from an enchanted tree, standing with reverence\r
        - Dissecting magical creatures for insights, uncovering their secrets\r
        - Holding a crystal for heightened intuition, seeking inner guidance\r
        - Conjuring a barrier with focused intent, protecting against attacks\r
        - Concentrated eyes and poised hands, summoning magical creatures\r
        - Channeling the forces of nature, connecting with the elements\r
        - Embracing fire with flickering fingers, manipulating flames\r
        - Gazing into a pool of scrying water, seeking visions of the future\r
        - Solving riddles within enchanted puzzles, unlocking magical doors\r
        - Collecting dewdrops from enchanted flowers, harnessing nature's essence\r
        - Observing the dance of magical fireflies, learning from their luminescence\r
        - Merging into shadows for stealth, using darkness to their advantage\r
        - Unleashing a barrage of enchanted arrows, arrows glowing with magic\r
        - Shrouding allies in protective auras, enhancing their defenses\r
        - Dancing gracefully in a magical ritual, invoking the power of movement\r
        - Humming a melodious incantation, infusing magic with sound vibrations\r
        - Using a staff to amplify magical energy, connecting with its power\r
        - Conjuring a blinding flash of light, dazzling opponents momentarily\r
        - Deflecting a curse with a magical shield, forming a barrier of protection\r
        - Unleashing a powerful elemental blast, harnessing the forces of nature\r
        - Transforming into a creature of power, embodying magical attributes\r
        - Glowing eyes locked on the adversary, intimidating with magical intensity\r
        - Drawing energy from the earth with roots, connecting to the natural world\r
        - Calling upon the winds with outstretched arms, manipulating the air\r
        - Conjuring water with cupped hands, controlling its flow and power\r
        - Radiating warmth with a touch of the palm, healing with magic's touch\r
        - Extending one hand towards the target plane, summoning entities\r
        - Comparing notes with other magical beings, sharing knowledge and insights\r
        - Holding a magnifying glass to inspect details, examining magical artifacts\r
        - Mixing potions in a cauldron, concocting potent elixirs\r
        - Pouring over ancient manuscripts, uncovering lost knowledge\r
        - Examining star charts and astrological signs, seeking celestial guidance\r
        - Using a magical compass to seek answers, orienting to magical energies\r
        - Analyzing the patterns in a spell matrix, discerning its workings\r
        - Engaging in alchemical experiments, transforming elements with magic\r
        - Seeking visions through a magical mirror, peering into other realms\r
        - Experimenting with time-altering spells, manipulating temporal forces\r
        - Tracing symbols with a quill on parchment, crafting spells with precision\r
        - Immersed in an intricate magical map, navigating its arcane paths\r
        - Dancing with grace, invoking elemental energies through movement\r
        - Singing an enchanting melody, infusing magic with musical notes\r
        - Synchronizing breath and energy flow, harmonizing with the universe\r
        - Blowing magical dust into the air, using it for mystical purposes\r
        - Conducting an otherworldly orchestra, harnessing the power of music\r
        - Sorting magical ingredients with precision, preparing spell components\r
        - Aligned with celestial bodies, drawing power from the stars above\r
        - Collecting moonlight in a crystal, capturing its mystical essence\r
        - Weaving spells into fabric, creating enchanted garments and cloaks\r
        - Transcribing ancient runes onto sacred surfaces, charging them with magic\r
        - Inscribing talismans with symbols, imbuing them with specific powers\r
        - Unraveling the intricacies of a magical curse, seeking its source\r
        - Observing patterns in the movements of magical creatures, decoding their behavior\r
        - Analyzing the glow of a magical crystal, determining its properties\r
        - Experimenting with potions and elixirs, seeking new magical brews\r
        - Consulting with enchanted creatures, seeking their wisdom and guidance\r
        - Tracing the lines of a magical glyph, activating its hidden potential\r
        - Gazing at the moon with reverence, channeling lunar energies\r
        - Connecting with the spirits of the land, becoming one with nature\r
        - Balancing on a narrow precipice, honing balance and magical stability\r
        - Huddled in a circle with other magical beings, pooling their powers\r
        - In the midst of a magical storm, controlling the elements around them\r
        - Chanting ancient incantations, giving voice to powerful spells\r
        - Holding a sacred relic aloft, channeling its sacred energies\r
        - Engulfed in a swirling vortex of magic, tapping into a ley line's power\r
    wings:\r
        - Celestial Wings (__magical/magic__ wings attached to the back)\r
        - Angelic Wings\r
        - Demonic Wings\r
        - Fairy Wings\r
        - Dragon Wings\r
        - Phoenix Wings\r
        - Butterfly Wings\r
        - Seraph Wings\r
        - Bat Wings\r
        - Pegasus Wings\r
        - Griffin Wings\r
        - Wyvern Wings\r
        - __magical/elemental__ Wings\r
        - Crystal Wings\r
        - Celestial Wings\r
        - Dark Wings\r
        - Feathered Wings\r
        - Icarus Wings (enchanted wings made from wax and feathers)\r
        - Gargoyle Wings\r
        - Mechanical Wings made of gears and cogs and clockwork\r
magical:\r
    magic:\r
        - "({6-7$\${-3$$__magical/words/adjectives__}|\r
        {-2$$__random/color__} |\r
        {-2$$__matter/movement1__}|\r
        {-1$$__matter/movement2__}|\r
        0.1::{-1$$__phenomena/natural__}|\r
        {-1$$__phenomena/abstract__}|\r
        {-2$$__properties/patterns/lines__}|\r
        0.1::{-1$$__properties/patterns/2Dshapes__}\r
        |0.1::{-1$$__properties/patterns/3Dshapes__}|\r
        {-1$$__matter/state__}} \r
        magic:1.3)"\r
    types:\r
        air:\r
            - air magic\r
            - Air Manipulation (controlling wind and air currents)\r
            - Aerokinesis\r
            - Flight (levitating or flying)\r
            - Weather Control (manipulating weather patterns)\r
        dark:\r
            - dark magic\r
            - entropy magic\r
            - void magic\r
            - Unpredictable Magic\r
            - Disorder Manipulation\r
            - Necromancy\r
            - Curses\r
            - Hexes\r
            - Black Magic\r
            - Dark Rituals\r
            - Summoning volent Entities\r
        divination:\r
            - Divination magic\r
            - Psychic Magic\r
            - Fortune-telling\r
            - Clairvoyance\r
            - Precognition\r
            - Telepathy\r
            - Scrying\r
        dream:\r
            - dream magic\r
            - Entering Dream Worlds\r
            - Manipulating Dreams\r
            - Creating Illusions on a Larger Scale\r
        earth:\r
            - earth magic\r
            - Earth Manipulation (shaping and moving the ground)\r
            - Terrakinesis\r
            - Plant Manipulation (controlling plant life)\r
            - Crystal Manipulation\r
        elemental:\r
            - __magical/types/air__\r
            - __magical/types/earth__\r
            - __magical/types/fire__\r
            - __magical/types/ice__\r
            - __magical/types/lightning__\r
            - __magical/types/metal__\r
            - __magical/types/water__\r
        fire:\r
            - fire magic\r
            - Fireballs\r
            - Fire Manipulation (creating and controlling flames)\r
            - Fire Breathing\r
            - Pyrokinesis\r
            - Flame Projection\r
        gravity:\r
            - gravity magic\r
            - Gravitational Manipulation (controlling gravity fields)\r
            - Levitation and Floating\r
            - Black Hole Creation (controlled, fictional application)\r
        ice:\r
            - ice magic\r
            - Cryokinesis (mind over ice and cold)\r
            - Frost Manipulation (creating and controlling frost)\r
            - Snow Manipulation (creating and controlling snow)\r
        illusion:\r
            - Illusion Magic\r
            - Enchantment\r
            - Creating Illusions\r
            - Enchanting Objects\r
            - Shape-shifting\r
        light:\r
            - light magic\r
            - Healing Magic\r
            - Illusion Magic\r
            - Using Music or Sound for Magic\r
            - Harmonious or Discordant Effects\r
            - Star-based Spells\r
            - Cosmic Energy Manipulation\r
            - Harnessing Celestial Bodies\r
            - Healing Magic\r
            - Purification Spells\r
            - Light Manipulation\r
            - Protection Charm\r
        lightning:\r
            - lightning magic\r
            - Electrokinesis\r
            - Lightning Bolts\r
            - Electrical Manipulation (creating and controlling electrical currents)\r
        metal:\r
            - metal magic\r
            - Metal Manipulation (controlling metal objects)\r
            - Ferrokinesis\r
            - Magnetism Manipulation\r
            - Shaping and forging metal with magic\r
        nature:\r
            - nature magic\r
            - Plant Growth Manipulation\r
            - Vine Manipulation (controlling and animating vines)\r
            - Photosynthesis Magic (creating energy from light)\r
            - Plant Manipulation\r
            - Controlling Animals\r
            - Weather Manipulation\r
            - Communicating with Nature Spirits\r
        shadow:\r
            - shadow magic\r
            - Shadow Manipulation (creating and controlling shadows)\r
            - Darkness Magic\r
            - Invisibility and Concealment\r
        tech:\r
            - Technology manipulation\r
            - Psychic powers\r
            - Fusion of magic and cybernetics\r
            - Nanotechnology manipulation\r
            - Control over energy forms\r
            - Time manipulation\r
            - Space-warping abilities\r
            - Genetic and biotechnology manipulation\r
            - Creation and control of holographic illusions\r
            - Control over quantum particles and reality\r
        time:\r
            - time magic\r
            - Chronokinesis (mind over time)\r
            - Time Bending (manipulating the flow of time)\r
            - Time Loops and Time Travel\r
            - Time Manipulation\r
            - Time Travel\r
            - Time Alteration\r
        transmutation:\r
            - Transmutation\r
            - Alchemy\r
            - Substance Transformation\r
            - Magical Potions and Elixirs\r
        water:\r
            - water magic\r
            - Water Manipulation (controlling water flow and shape)\r
            - Hydrokinesis\r
            - Healing Waters\r
            - Ice Manipulation\r
    beings:\r
        - Amazon, Fearless warrior, Skilled archer, Formidable strength, Independent and self-reliant, Tall and muscular stature, Battle-hardened, Warriors of ancient myths, Honor and bravery, fantasy\r
        - android, Human-like appearance, Anthropomorphic design, Synthetic skin and hair, Futuristic and sleek aesthetics, Elegance and sophistication in design, Enhanced with advanced technology, sci-fi\r
        - Angel, Radiant aura, Heavenly grace, Harbingers of good news, Guardians of the divine realm, Symbolize purity and innocence, Emanate ethereal light, fantasy\r
        - Centaur, Half-human, half-horse, Mythological creatures, Powerful and agile, Equine lower body, Human upper body,Guardians of the wild, fantasy\r
        - cyborg, Human-machine hybrids, Part organic and part artificial, Advanced bionic enhancements, Futuristic technology, Cybernetic implants, Blend of biology and robotics, Enhanced physical capabilities, Integrated electronics, Neural interfaces, sci-fi, magical\r
        - CyclopeOne-eyed giants, Mythological creatures, Enormous and powerful, Singular eye in the middle of the forehead, Fierce and intimidating appearance, Known for strength and brutality, fantasy, greek mythology\r
        - Demon, Malevolent supernatural being, evil, chaos, infernal, powerful entity, corrupt,harm full, fantasy\r
        - Devil, embodiment of evil, cunning and charismatic, red skin, devil horns, fantasy\r
        - Djinn, supernatural beings, Middle Eastern folklore, humanoid created from smokeless fire, fantasy\r
        - Dragon (in humanoid form),  immense power, wisdom, and connection to fire, draconic features,scales, wings, wise, ancient being, knowledge , fantasy\r
        - Dwarf, short-statured humanoid beings, 3 to 4 feet tall, skilled craftsmen,expertise in mining and blacksmithing, resilience, determination, fantasy\r
        - Elf, graceful and long-lived beings, 6 to 7 feet tall, beautiful,elegant,youthful appearance, graceful, ethereal, magical, fantasy\r
        - Fairy,enchanting, ethereal creature, beauty, nature, protectors creatures, sacred places, 1 to 2 feet tall, delicate wings, delicate wings, flit through the air, fantasy\r
        - Giant, humanoid, enormous and powerful beings, 20 to 40 feet tall, benevolent and wise, force of nature, legendary strength, fantasy\r
        - Gnome, 1 feet small, humanoid, earth-dwelling humanoid being, affinity with the earth and nature, gardening and craftsmanship, fantasy\r
        - Goblin,imaginative and mischievous goblin character with a hunched posture, glowing beady eyes, and a malevolent grin. Use earthy green and brown tones for its mottled skin, and add small, stubby horns on its sloping forehead, scraggly moss-like hair,sharp jagged teeth in its wide mouth, goblin should be small in stature, around 2 to 3 feet tall, fantasy\r
        - Harpie,mythical creature, upper body of a woman,  wings and lower body of a bird, vicious and malevolent, fantasy\r
        - Human\r
        - Kitsune,mythical creature, Japanese folklore, intelligent, humanform with multiple foxtails to denote their age and power, fox ears, red face paint, white slim face, fantasy\r
        - Leprechaun, mischievous, solitary,old men wearing green coats and buckled shoes, 3-4 feet tall, crafty and elusive, fantasy\r
        - Merfolk, upper body of a human and the lower body of a fish, beautiful, alluring, fantasy\r
        - Minotaur, mythical creature with the head of a bull and the body of a man, Greek mythology, fierce and monstrous, chaos, primal instinct, fantasy\r
        - Minotaurin, mythical creature, body of a woman, cow tail, bull horns, cow spots, gentle, friendly, large breasts , Greek mythology\r
        - Naga, mythical serpent humanoid being, serpentine lower bodies, human upper body, "{devine, wisdom, knowledge|dangerous, unpredictable}", fantasy\r
        - Nymph, Ethereal beauty, Nature's guardian, Alluring grace, Youthful appearance, Connected to the environment, Magical presence, Nature spirits, Reside in forests and water bodies, fantasy\r
        - Orc, fictional humanoid creatures, brutish, fearsome, strength, muscular,rough rugged appearance, 8 to 10 feet tall, broad, {earthy tone|dark green|brown|gray} skin, {dark|mottled|} thick coarse hair,broad, prominent brows, sharp, elongated noses, and wide, powerful jaws, {sharp teeth|} fantasy\r
        - Pixie, tiny, mischievous humanoid creature, 1 to 2 feet tall, {forests | meadows}, playful, curious, delicate wings, flitting throught the air, fanatasy\r
        - Satyr, mythological creature, upper body human, lower body goat, revelry, music, wine, dance, skilled musician and dancer, horns, fantasy\r
        - Siren, seductive and alluring creatures, Greek mythology,beautiful,danger, temptation\r
        - Sylph, humanoid elemental being, delicate and ethereal beings with gossamer wings, guardians of the air, {sky|mountain top},weather\r
        - Troll, mythical humanoid being,large, strong, 8 to 10 feet tall, {mountains|deep forests}, Thick Warty {grey|green|brown} Skin, large nose, pointy ears, jutting jaw, prominent teeth, deep-set glowing eyes, long wild hair, claws, fantasy, stooped posture\r
        - Vampire, legendary creature, force, power, blood, undead, beautyful, alluring, night, moon, fangs, fantasy\r
        - Werewolf, lycanthropes,  mythical creature, humanoid wolf-like form, full moon, hairy furry skin, fangs, wolf ears, wolf-like face\r
        - Yeti, large, 10 to 15 feet tall, ape-like being, white fur skin, snow, mountains, plains, \r
    elemental:\r
        - "{fire|water|air|earth|elemental}"\r
    lighting:\r
        - Astral Gleam\r
        - Celestial Glimmer\r
        - Celestial Radiance\r
        - Crystal Luminance\r
        - Dazzling Radiance\r
        - Dreamshine\r
        - Elemental Glow\r
        - Emanating Luminescence\r
        - Enchanted Luminosity\r
        - Enchanted Radiance\r
        - Enchanting Luminescence\r
        - Enchantment Aura\r
        - Enigma Ray\r
        - Ethereal Glow\r
        - Ethereal Luminescence\r
        - Everglow\r
        - Faerie Glow\r
        - Faerie Lights\r
        - Glowstone\r
        - Incandescent Brilliance\r
        - Lumina Veil\r
        - Luminescent Auras\r
        - Magical Radiance\r
        - Moonbeam\r
        - Mystic Ember\r
        - Mystical Radiance\r
        - Prismatic Illumination\r
        - Radiant Halo\r
        - Solar Flare\r
        - Sorcerer's Brilliance\r
        - Spectral Radiant\r
        - Starfire\r
        - Transcendent Glow\r
        - Twilight Spark\r
        - Wispfire\r
\r
    profession:\r
        crafter:\r
            - Alchemist\r
            - Conjurer\r
            - Enchanter\r
        caster:\r
            - caster \r
            - Mage\r
            - Magician\r
            - Magus\r
            - Sorcerer\r
            - Spellcaster\r
        knowledge:\r
            - Arcanist\r
            - Wizard\r
        nature:\r
            - Druid\r
            - Shaman\r
        dark:\r
            - Necromancer\r
            - Occultist\r
            - Thaumaturge\r
            - Warlock\r
            - Witch\r
        light:\r
            - High Priest\r
            - Priest\r
            - Mystic\r
        illusion:\r
            - Clairvoyant\r
            - Enigma\r
            - Illusionist\r
            - Seer\r
        technomancy:\r
            - Technomancer\r
            - Psion\r
            - Cyberwizard\r
            - Nanomancer\r
            - Energy Manipulator\r
            - Chronomancer\r
            - Space Mage\r
            - Biowitch\r
            - Hologrammancer\r
            - Quantum Sorcerer\r
    profession-magic-use:\r
        crafter:\r
            - __magical/types/transmutation__\r
            - __magical/types/metal__\r
            - __magical/types/tech__, __styles/punk-styles__\r
        caster:\r
            - __magical/types/air__\r
            - __magical/types/fire__\r
            - __magical/types/earth__\r
            - __magical/types/lightning__\r
            - __magical/types/ice__\r
            - __magical/types/light__\r
            - __magical/types/metal__\r
            - __magical/types/water__\r
            - __magical/types/elemental__\r
        knowledge:\r
            - __magical/types/time__\r
            - __magical/types/gravity__\r
            - __magical/types/illusion__\r
            - __magical/types/light__\r
        nature:\r
            - __magical/types/nature__\r
            - __magical/types/water__\r
            - __magical/types/elemental__\r
        dark:\r
            - __magical/types/dark__\r
            - __magical/types/tech__, __styles/punk-styles__\r
            - __magical/types/shadow__\r
            - __magical/types/elemental__\r
        light:\r
            - __magical/types/light__\r
            - __magical/types/dream__\r
            - __magical/types/nature__\r
            - __magical/types/water__\r
        illusion:\r
            - __magical/types/divination__\r
            - __magical/types/illusion__\r
            - __magical/types/dream__\r
            - __magical/types/light__\r
            - __magical/types/elemental__\r
            - __magical/types/shadow__\r
        technomancy:\r
            - __magical/types/tech__, __styles/punk-styles__\r
    words:\r
        adjectives:\r
            - Alluring\r
            - Astral\r
            - Beguiling\r
            - Bewildering\r
            - Bewitching\r
            - Captivating\r
            - Celestial\r
            - Charmed\r
            - Elysian\r
            - Enchanted\r
            - Enchanting\r
            - Enigmatic\r
            - Enlivening\r
            - Enrapturing\r
            - Enthralling\r
            - Enveloping\r
            - Ephemeral\r
            - Ethereal\r
            - Fantasmagoric\r
            - Fantastical\r
            - Glamorous\r
            - Glowing\r
            - Hypnotic\r
            - Hypnotizing\r
            - Illuminating\r
            - Illusionary\r
            - Illustrious\r
            - Intriguing\r
            - Luminescent\r
            - Magical\r
            - Mesmerizing\r
            - Mysterious\r
            - Mystical\r
            - Mystifying\r
            - Ornate\r
            - Otherworldly\r
            - Pulsating\r
            - Radiant\r
            - Radiating\r
            - Resonant\r
            - Resonating\r
            - Resplendent\r
            - Seraphic\r
            - Shimmering\r
            - Sorcerous\r
            - Spectral\r
            - Spellbinding\r
            - Spellbound\r
            - Supernatural\r
            - Transcendent\r
            - Transcending\r
            - Transfiguring\r
            - Unearthly\r
            - Unfathomable\r
            - Veiled\r
            - Vibrant\r
            - Whimsical\r
            - Whirling\r
        substantives:\r
            - Alchemy\r
            - Amulet\r
            - Arcane\r
            - Arcanist\r
            - Arcanum\r
            - Astral\r
            - Aura\r
            - Cauldron\r
            - Celestial\r
            - Charm\r
            - Conjuration\r
            - Conjuring\r
            - Coven\r
            - Crystal\r
            - Divination\r
            - Enchanter\r
            - Enchantment\r
            - Enigma\r
            - Enigmatic\r
            - Enthrallment\r
            - Familiar\r
            - Glamour\r
            - Glyph\r
            - Grimoire\r
            - Illusion\r
            - Incantation\r
            - Invocation\r
            - Mage\r
            - Magician\r
            - Mysticism\r
            - Oracle\r
            - Parchment\r
            - Pentacle\r
            - Potion\r
            - Prophecy\r
            - Ritual\r
            - Rune\r
            - Runestone\r
            - Scroll\r
            - Sorcery\r
            - Spellcasting\r
            - Talisman\r
            - Thaumaturgy\r
            - Wand\r
            - Warlock\r
            - Witchcraft\r
            - Wizardry\r
        verbs:\r
            - Beam\r
            - Bedazzle\r
            - Bewitch\r
            - Captivate\r
            - Cast\r
            - Channel\r
            - Charm\r
            - Conjure\r
            - Dazzle\r
            - Emit\r
            - Enchant\r
            - Enflame\r
            - Enkindle\r
            - Enliven\r
            - Enrapture\r
            - Enshroud\r
            - Enthrall\r
            - Envelop\r
            - Evolve\r
            - Fascinate\r
            - Flicker\r
            - Flourish\r
            - Gleam\r
            - Glimmer\r
            - Glitter\r
            - Glow\r
            - Hypnotize\r
            - Illuminate\r
            - Infuse\r
            - Inspire\r
            - Manifest\r
            - Mesmerize\r
            - Pulse\r
            - Radiate\r
            - Resonate\r
            - Shine\r
            - Spark\r
            - Sparkle\r
            - Stun\r
            - Summon\r
            - Transcend\r
            - Transfigure\r
            - Twinkle\r
            - Unleash\r
            - Vivify\r
properties:\r
    materials-magic:\r
        - Copper\r
        - Brass\r
        - Enchanted Steel\r
        - Magic-infused Alloy\r
        - Bronze\r
        - Iron\r
        - Silver\r
        - Gold\r
        - Mithril\r
        - Adamantine\r
        - Arcane Crystals\r
        - Runescribed Plates\r
        - Ethereal Ectoplasm\r
        - Celestial Stardust\r
        - Ancient Hieroglyphic Plates\r
        - Living Wood\r
        - Dragon Scales\r
        - Metallic Plates\r
        - Fey-forged Metal\r
        - __magical/elemental__ Crystals\r
        - Time-Twisted Metal\r
        - Void-Forged Dark Metal\r
phenomena:\r
    natural:\r
        - water\r
        - lightning\r
        - rainbow\r
        - tornado\r
        - earthquake\r
        - aurora\r
        - volcanic eruption\r
        - tsunami\r
        - solar eclipse\r
        - meteor shower\r
        - geyser\r
        - waterfall\r
        - dust storm\r
        - comet\r
        - glacier\r
        - waterspout\r
        - bioluminescence\r
        - fog\r
        - avalanche\r
        - sinkhole\r
        - dust devil\r
        - iceberg\r
        - hailstorm\r
        - spring bloom\r
        - aurora australis\r
        - st. elmo's fire\r
        - fire rainbow\r
        - sundogs\r
        - moonbow\r
        - sprites and elves\r
        - fata morgana\r
        - mammatus clouds\r
        - steam devil\r
        - Northern lights\r
    abstract:\r
        - death\r
        - decay\r
        - doom\r
        - void\r
        - Synchronicity\r
        - Déjà vu\r
        - Serendipity\r
        - Cognitive dissonance\r
        - Flow state\r
        - Epiphany\r
        - Mindfulness\r
        - Collective consciousness\r
        - Quantum entanglement\r
        - Pareidolia\r
        - Hindsight bias\r
        - Theory of mind\r
        - Gestalt principles\r
        - Placebo effect\r
        - Self-fulfilling prophecy\r
        - time\r
        - Time dilation\r
        - Time perception\r
        - Timelessness\r
        - Time loops\r
        - Time travel\r
        - Time paradoxes\r
        - Time compression\r
        - Space-time continuum\r
        - Entropy\r
        - Eternity\r
        - Synchronicity\r
        - Temporality\r
        - Timelessness\r
        - Chronostasis\r
        - Time dilation\r
        - Timelessness\r
        - Causality\r
        - Perpetuity\r
        - Timelessness\r
        - Transience\r
        - Timelessness\r
        - Singularity\r
random:\r
    accesoires-magical:\r
        - "{1-4$$ and$\${0.1::__clothings/unisex/accesoires__ |}|\r
        {0.2::__clothings/unisex/backwear__ |}|\r
        {0.2::__clothings/unisex/facewear__ |}|\r
        {0.1::__clothings/unisex/neckwear__ |}}"\r
    properties-magical:\r
        - "{0-5$$ and $\${-2$$__magical/words/adjectives__}|\r
        {-2$$__magical/words/substantives__}|\r
        {-2$$__magical/words/verbs__}|\r
        {-2$$__properties/materials-magic__}|\r
        __magical/lighting__}"\r
    profession-magic:\r
        - __magical/profession/crafter__, __magical/magic__ __magical/profession-magic-use/crafter__\r
        - __magical/profession/caster__, __magical/magic__ __magical/profession-magic-use/caster__\r
        - __magical/profession/knowledge__, __magical/magic__ __magical/profession-magic-use/knowledge__\r
        - __magical/profession/nature__, __magical/magic__ __magical/profession-magic-use/nature__\r
        - __magical/profession/dark__, __magical/magic__ __magical/profession-magic-use/dark__\r
        - __magical/profession/light__, __magical/magic__ __magical/profession-magic-use/light__\r
        - __magical/profession/illusion__, __magical/magic__ __magical/profession-magic-use/illusion__\r
        - __magical/profession/technomancy__, __magical/magic__ __magical/profession-magic-use/technomancy__\r
`;export{n as default};
