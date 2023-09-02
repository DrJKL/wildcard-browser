const n=`# billions of clothings\r
BoCloth:\r
    random-fullbody:\r
        - "full body clothing,\r
        {__styles/clothing/collar__,|__styles/clothing/neckline__,|}\r
        __properties/fabric*__, {__properties/pattern/*__,|}, {__properties/materials*/*__,|}\r
        __styles/clothing/Sleeve__,\r
        __styles/clothing/dress-Length__,\r
        __styles/clothing/Waistlines__,\r
        __styles/clothing/skirt__,\r
        __BoCloth/random-extras__\r
        "\r
    random-combination:\r
        - "__BoCloth/random-upperbody__, __BoCloth/random-lowerbody__"\r
    random-upperbody:\r
        - "upper body clothing,\r
        {__styles/clothing/collar__,|__styles/clothing/neckline__,|}\r
        __properties/fabric*__, {__properties/pattern/*__,|}, {__properties/materials*/*__,|}\r
        __styles/clothing/Sleeve__,\r
        __styles/clothing/dress-Length__,\r
        __styles/clothing/Waistlines__,\r
        __BoCloth/random-extras__\r
        "\r
    random-lowerbody:\r
        - "lower body clothing,\r
        __properties/fabric*__, {__properties/pattern/*__,|}, {__properties/materials*/*__,|}\r
        __styles/clothing/fit-Length__,\r
        __styles/clothing/Waistlines__,\r
        __BoCloth/random-extras__\r
        "\r
    random-extras:\r
        - "\r
        {1-6$$__styles/clothing/Embellishments__,|__styles/clothing/Special-Features__,|__styles/clothing/Functional-Features__,|\r
        __styles/clothing/Waistband-Closure__,|__styles/clothing/pockets__,|__styles/clothing/wash__,|__styles/clothing/Back-Designs__,|\r
        __styles/clothing/Dress-Accents__,|__styles/clothing/Unique-Features__, __styles/clothing/Closure__,|__styles/clothing/Design__}\r
        "\r
styles:\r
    clothing:\r
        Collar:\r
            - Ribbed\r
            - Mock Neck\r
            - Crew Neck\r
            - V-neck\r
            - Scoop Neck\r
            - Henley Neck\r
            - Boat Neck\r
            - Off-the-Shoulder Neckline\r
            - Halter Neck\r
            - Cowl Neck\r
        Neckline:\r
            - Boat Neck\r
            - Crew Neck\r
            - Cowl Neck\r
            - Halter Neck\r
            - Henley Neck\r
            - High Neck\r
            - Mock Neck\r
            - Off-Shoulder Neckline\r
            - Plunging Neckline\r
            - Round Neck\r
            - Scoop Neck\r
            - Square Neck\r
            - Sweetheart Neckline\r
            - V-Neck\r
        Sleeve:\r
            - Batwing Sleeves\r
            - Bell Sleeves\r
            - Cap Sleeves\r
            - Cuffed Sleeves\r
            - Cutout Sleeves\r
            - Dolman Sleeves\r
            - Flutter Sleeves\r
            - Long Sleeves\r
            - Puff Sleeves\r
            - Raglan Sleeves\r
            - Rolled Sleeves\r
            - Short Sleeves\r
            - Sleeveless\r
            - Spaghetti Straps\r
            - Three-Quarter Sleeves  \r
        Embellishments:\r
            - Embroidery\r
            - Appliqué\r
            - Sequins\r
            - Beads\r
            - Studs\r
            - Rhinestones\r
            - Patches\r
            - Prints\r
            - Lace Trim\r
            - Ruffles\r
            - Ribbons\r
            - Tassels\r
            - Fringe\r
            - Metallic Accents\r
            - Sequin Embellishments\r
            - Beaded Accents\r
            - Embroidery Details\r
            - Lace Trims\r
            - Ruffle Details\r
            - Bow Accents\r
            - Appliqué Work\r
        Special-Features:\r
            - Cold Shoulder Design\r
            - Asymmetric Hem\r
            - Hi-Lo Hem\r
            - Peplum Hem\r
            - chest pockets\r
            - patch\r
            - Side Seam Slits\r
            - Belt\r
            - Sash\r
            - Waist Chain\r
            - Statement Necklace\r
            - Choker\r
            - Scarf\r
            - Collar\r
        Fit-Length:\r
            - Slim Fit\r
            - Regular Fit\r
            - Relaxed Fit\r
            - Oversized Fit\r
            - Cropped Length\r
            - High-Low Hem\r
            - Tunic Length\r
        Functional-Features:\r
            - Cargo Pockets\r
            - Utility Loops\r
            - Suspender Buttons\r
            - Cargo Straps\r
            - D-Rings\r
            - Reinforced Knees\r
            - Knee Pads\r
            - Embellishments\r
            - Stitching Details\r
            - Paneling\r
            - Ventilation\r
            - Reinforced Knees\r
            - Tonal Stitching\r
            - Pocket Flaps\r
            - Utility Loops\r
            - Suspender Buttons\r
            - Back Darts\r
            - Knee Pads\r
            - Cargo Straps\r
            - D-Rings\r
        Wash:\r
            - Vintage Wash\r
            - Stone Wash\r
            - Acid Wash\r
            - Bleached Wash\r
            - Vintage Wash\r
            - Enzyme Wash\r
            - Distressed Wash\r
            - Dark Wash\r
            - Light Wash\r
            - Indigo Wash\r
            - Faded Wash\r
            - Whiskering\r
            - Sandblasted Wash\r
            - Hand Sanding\r
            - Tinted Wash\r
            - Ombre Wash\r
            - Dip Dye Wash\r
            - Resin Wash\r
            - Oil Wash\r
            - Raw Wash\r
            - Overdyed Wash\r
            - Muted Wash\r
            - Ice Wash  \r
        Waistband-Closure:\r
            - Waistband\r
            - Belt Loops\r
            - Zipper Fly \r
            - Button Fly\r
            - Closure Type\r
            - Belt Included\r
            - Adjustable Waist\r
            - Elastic Waistband\r
            - Drawstring Waist\r
        Pockets:\r
            - Front Pockets \r
            - Back pockets\r
            - Side pockets\r
            - Cargo Pockets\r
            - Coin Pockets\r
        Legs-Fit:\r
            - Pleats\r
            - Cuffs\r
            - Hem\r
            - Seams\r
            - low Rise\r
            - Mid rise\r
            - High rise\r
            - slim Fit \r
            - Regular fit\r
            - Relaxed fit\r
            - Tapered Legs\r
            - Straight Legs\r
            - Bootcut\r
            - Flare\r
            - Culottes\r
            - Cropped Length\r
            - Ankle Zippers\r
\r
        Dress-Length:\r
            - Mini Length\r
            - Knee Length\r
            - Tea Length\r
            - Midi Length\r
            - Maxi Length\r
            - High-Low Hemline\r
            - Asymmetrical Hemline\r
            - Floor-Length\r
\r
\r
        Waistlines:\r
            - Natural Waist\r
            - Empire Waist\r
            - Drop Waist\r
            - High Waist\r
        Skirt:\r
            - A-Line Skirt\r
            - Flared Skirt\r
            - Pleated Skirt\r
            - Pencil Skirt\r
            - Mermaid Skirt\r
            - Ball Gown Skirt     \r
        Back-Designs:\r
            - Open Back\r
            - Lace-Up Back\r
            - Keyhole Back\r
            - Illusion Back\r
            - Cross-Back\r
            - Low Back\r
        Dress-Accents:\r
            - Pockets\r
            - Slit Details\r
            - Train\r
        Unique-Features:\r
            - Convertible Dress\r
            - Two-Piece Set\r
            - High Slit\r
            - Detachable Train\r
            - Sheer Panels\r
            - Cutout Details\r
        Closure:\r
            - Zipper Closure\r
            - Button Closure\r
            - Tie Closure\r
            - Corset Closure\r
\r
        Design:\r
            - Typography\r
            - Illustration\r
            - Color Palette\r
            - Placement Print\r
            - Allover Print\r
            - Logo Placement\r
            - Tie-Dye\r
            - Distressed Details\r
            - Contrast Stitching\r
            - Patchwork\r
            - Layered Look\r
            - Vintage Design\r
            - Color Blocking\r
            - Cutout Details\r
            - Ripped or Distressed Look\r
`;export{n as default};
