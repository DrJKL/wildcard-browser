const r=`# Prompts taken from the excellent https://publicprompts.art/\r
# They have been modified with parameters and re-usable chunks\r
public-prompts:\r
  styles:\r
    3d-render:\r
      - |\r
        # Usage: <object>, __public-prompts/styles/3d-render(color_scheme=soft pastel)__\r
        # Homepage: https://publicprompts.art/\r
        \r
        __public-prompts/lighting/soft-smooth__,\r
        \${color_scheme:soft pastel} colors,\r
        3d, blender render,\r
        polycount, modular constructivism,\r
        physically based rendering,\r
        square image\r
  lighting:\r
    soft-smooth:\r
      - soft smooth lighting\r
    studio:\r
      - vibrant studio lighting\r
    diffused:\r
      - diffused lighting\r
  \r
  needle-felted:\r
    - |\r
      # Usage: __public-prompts/needle-felted(figure=frog)__\r
      # Homepage: https://publicprompts.art/needle-felted-objects/\r
      # Suggested settings:\r
      # CFG scale: 13\r
      # Sampler DDIM\r
      # Steps: 25\r
\r
      Tiny cute 3D felt fiber toy \${figure:frog}, made from Felt fibers, a 3D render, trending on cgsociety, rendered in maya, rendered in cinema4d, made of yarn, square image\r
  silhouetted-backgrounds:\r
    - |\r
      # Usage: __public-prompts/silhouetted-backgrounds(natural-feature=mountains,object=big rocket)__\r
      # Homepage: https://publicprompts.art/silhouette-wallpapers/\r
      # Suggested settings:\r
      # CFG scale: 13\r
      # Sampler DDIM\r
      # Steps: 25\r
      # Resolution: 704x384\r
\r
      Multiple layers of silhouette \${natural-feature:mountains}, \r
      with silhouette of \${object:big rocket} in sky, \r
      sharp edges, at sunset, \r
      with heavy fog in air, \r
      vector style, \r
      horizon silhouette \r
      Landscape wallpaper by Alena Aenami, \r
      firewatch game style, vector style background\r
  \r
  comic-art:\r
    - |\r
      # Usage: __public-prompts/comic-art(figure=James Bond)__\r
      # Homepage: https://publicprompts.art/comic-art/\r
      # Suggested settings:\r
      # CFG scale: 13\r
      # Sampler DDIM\r
      # Steps: 25\r
\r
      Retro comic style artwork, highly detailed \${figure:James Bond}, comic book cover, symmetrical, vibrant\r
  psychedelic-pop-art:\r
    - |\r
      # Usage: __public-prompts/psychedelic-pop-art(figure=Halloween pumpkin)__\r
      # Homepage: https://publicprompts.art/psychedelic-pop-art/\r
      # Suggested settings:\r
      # CFG scale: 13\r
      # Sampler DDIM\r
      # Steps: 25\r
\r
      Hypnotic illustration of a \${figure:Halloween pumpkin}, hypnotic psychedelic art by Dan Mumford, pop surrealism, dark glow neon paint, mystical, Behance\r
  space-hologram:\r
    - |\r
      # Usage: __public-prompts/space-hologram(figure=wolf)__\r
      # Homepage: https://publicprompts.art/space-holograms/\r
      # Suggested settings:\r
      # CFG scale: 13\r
      # Sampler DDIM\r
      # Steps: 25\r
\r
      Hologram of a \${figure:wolf} floating in space, a vibrant digital illustration, dribbble, quantum wavetracing, black background, behance hd\r
  cute-stickers:\r
    - |\r
      # Usage: __public-prompts/cute-stickers(figure=kawaii flower character)__\r
      # Homepage: https://publicprompts.art/cute-stickers/\r
      # Suggested settings:\r
      # CFG scale: 10-15\r
      # Sampler k_euler-a\r
      # Steps: 50\r
\r
      Die-cut sticker, Cute \${figure:kawaii flower character} sticker, white background, illustration minimalism, vector, pastel colors\r
  anime-portraits:\r
    - |\r
      # Usage: __public-prompts/anime-portraits(figure=girl wearing a crown of flowers)__\r
      # Homepage: https://publicprompts.art/hyper-realistic-anime-portraits/\r
      # Suggested settings:\r
      # CFG scale: 10-15\r
      # Sampler k_euler-a\r
      # Steps: 50\r
\r
      Closeup face portrait of a \${figure:girl wearing crown of flowers}, smooth soft skin, big dreamy eyes, beautiful intricate colored hair, symmetrical, anime wide eyes, soft lighting, detailed face, by makoto shinkai, stanley artgerm lau, wlop, rossdraws, concept art, digital painting, looking into camera\r
  gold-pendant:\r
    - |\r
      # Usage: __public-prompts/gold-pendant(symbol=dia de los muertos)__\r
      # Homepage: https://publicprompts.art/gold-pendant-prompt/\r
      # Suggested settings:\r
      # CFG scale: 10-15\r
      # Sampler k_euler-a\r
      # Steps: 50\r
\r
      gold \${symbol:dia de los muertos} pendant, intricate 2d vector geometric, cutout shape pendant, blueprint frame lines sharp edges, svg vector style, product studio shoot\r
  sport-team-logo:\r
    - |\r
      # Usage: __public-prompts/sport-team-logo(figure=ferocious lion head)__\r
      # Homepage: https://publicprompts.art/sport-team-logo-v1/\r
      # Suggested settings:\r
      # CFG scale: 10-15\r
      # Sampler k_euler-a\r
      # Steps: 50\r
\r
      2d \${figure:ferocious lion head}, vector illustration, angry eyes, football team emblem logo, 2d flat, centered\r
  isometric:\r
    rooms:\r
        - |\r
          # Usage: __public-prompts/isometric/rooms(room=bedroom, style=borderland game)__\r
          # Homepage: https://publicprompts.art/isometric-rooms/\r
          # Suggested settings:\r
          # CFG scale: 10\r
          # Sampler DDIM\r
          # Steps: 50\r
\r
          Tiny cute isometric \${room:bedroom} in a cutaway box, \${style:borderlands game} style, \r
          __public-prompts/lighting/soft-smooth__,\r
          soft colors, 100mm lens, 3d blender render\r
    rendered-objects:\r
      - | \r
        # Usage: __public-prompts/isometric/rendered-objects(object=porcelain cup of coffee, background=blue)__\r
        # Homepage: https://publicprompts.art/rendered-objects/\r
        # Suggested settings:\r
        # CFG scale: 10-15\r
        # Sampler k_euler_a\r
        # Steps: 50\r
\r
        Tiny cute isometric \${object:porcelain cup of coffee},\r
        100mm lens \r
        trending on polycount, \r
        \${background:blue} background,\r
        pop surrealism,\r
        __public-prompts/styles/3d-render__\r
    block-structures:\r
      - |\r
        # Usage: __public-prompts/isometric/block-structures(structure=temple, background=blue)__\r
        # Homepage: https://publicprompts.art/block-structures-prompt/\r
        # Suggested settings:\r
        # CFG scale: 10-15\r
        # Sampler k_euler-a\r
        # Steps: 50\r
\r
        Tiny cute isometric \${structure:temple},\r
        100mm lens, trending on polycount, \r
        \${background:blue} blackground,\r
        pop surrealism,\r
        __public-prompts/styles/3d-render__\r
    micro-worlds:\r
    - |\r
      # Usage: __public-prompts/isometric/micro-worlds(figure=volcano)__\r
      # Homepage: https://publicprompts.art/surreal-micro-worlds/\r
      # Suggested settings:\r
      # CFG scale: 10-15\r
      # Sampler k_euler-a\r
      # Steps: 50\r
\r
      100mm photo of isometric floating island in the sky, surreal \${figure:volcano}, intricate, high detail, behance, microworlds smooth, macro sharp focus, centered\r
  renders:\r
    funky-pop:\r
      - |\r
        # Usage: __public-prompts/renders/funky-pop(figure=Yoda, background=white)__\r
        # Homepage: https://publicprompts.art/funky-pop/\r
        # Suggested settings:\r
        # CFG scale: 10-15\r
        # Sampler k_euler-a\r
        # Steps: 50\r
\r
        Funky pop \${figure:Yoda} figurine,\r
        made of plastic,\r
        product studio shot, on a \${background:white} background,\r
        __public-prompts/lighting/soft-smooth__, \r
        centered\r
    low-poly-creatures:\r
      - |\r
        # Usage: __public-prompts/renders/low-poly-creatures(figure=panda, background=white)__\r
        # Homepage: https://publicprompts.art/low-poly-prompt/\r
        # Suggested settings:\r
        # CFG scale: 10-15\r
        # Sampler k_euler-a\r
        # Steps: 50\r
\r
        kawaii low poly \${figure:panda} character, 3d isometric render, \${background:white} background, ambient occlusion, unity engine\r
    \r
    cute-creatures:\r
      - |\r
        # Usage: __public-prompts/renders/cute-creatures(figure=llama)__\r
        # Homepage: https://publicprompts.art/cute-creatures/\r
        # Suggested settings:\r
        # CFG scale: 10\r
        # Sampler k_euler_a\r
        # Steps: 50\r
\r
        3d fluffy \${figure:llama}, closeup cute and adorable, \r
        cute big circular reflective eyes, long fuzzy fur, \r
        Pixar render, \r
        unreal engine cinematic smooth, intricate detail, cinematic\r
    \r
\r
    cute-stuffed-animals:\r
    - |\r
      # Usage: __public-prompts/renders/cute-stuffed-animals(figure=elephant)__\r
      # Homepage: https://publicprompts.art/cute-stuffed-animals/\r
      # Suggested settings:\r
      # CFG scale: 13\r
      # Sampler DDIM\r
      # Steps: 35\r
          \r
      cute kawaii Squishy \${figure} plush toy,\r
      realistic texture, visible stitch line, \r
      __public-prompts/lighting/soft-smooth__\r
      __public-prompts/lighting/studio__\r
      modular constructivism, \r
      physically based rendering, \r
      square image\r
\r
    3d-character:\r
    - |\r
      # Usage: __public-prompts/renders/3d-character(figure=ninja)__\r
      # Homepage: https://publicprompts.art/3d-character/\r
      # Suggested settings:\r
      # CFG scale: 13\r
      # Sampler DDIM\r
      # Steps: 25\r
\r
      tiny cute \${figure} toy,\r
      standing character,\r
      skottie2 young,\r
      __public-prompts/styles/3d-render__`;export{r as default};
