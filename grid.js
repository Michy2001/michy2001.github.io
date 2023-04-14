let images = [
    {
      title: "Oregon",
      url: "https://www.artskcgo.com/wp-content/uploads/sites/www.artskcgo.com/images/2018/05/LiveActionOregonTrailGame-400x400.jpg",
    },
    {
      title: "Space",
      url: "https://m.media-amazon.com/images/I/517WYBsJU-L.png",
    },
    {
      title: "Pac",
      url: "https://static.wixstatic.com/media/a4f877_011744a8632946aeae314e1792963fb0~mv2.jpg/v1/fill/w_816,h_800,al_c,q_85,enc_auto/a4f877_011744a8632946aeae314e1792963fb0~mv2.jpg",
    },
    {
      title: "mar",
      url: "https://archive.org/download/super-mario-bros-.nes/screenshot_11.png",
    },
    {
      title: "ambition",
      url: "https://cdn.cloudflare.steamstatic.com/steam/apps/392470/capsule_616x353.jpg?t=1673502206",
    },
    {
      title: "Galaxian",
      url: "https://static.tvtropes.org/pmwiki/pub/images/galaxian_4798.gif",
    },
    {
      title: "Bomberman",
      url: "https://cdn.vox-cdn.com/thumbor/0ZUruUlkysPmmUQhmOWHRQJmAnY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23921654/amazing_bomberman.jpg",
    },
    {
      title: "Dragon",
      url: "https://modsapk.com/wp-content/uploads/2014/08/ds.jpg",
    },
    {
      title: "Wolfenstein",
      url: "https://geekvibesnation.com/wp-content/uploads/2020/03/C29wcTAXcAISVpc-1024x768.jpg",
    },
    { title: "Zelda", url: "https://www.zelda.com/assets/icons/share_icon-tw.jpg" },
    { title: "Burger", url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/BurgerTime_arcadeflyer.png/220px-BurgerTime_arcadeflyer.png" },
    { title: "Q", url: "https://image.api.playstation.com/cdn/UP2135/CUSA01280_00/IBLGvunXCVTg71WkUIhgYGKmOPEEVNNG.png" },
    { title: "Bubble", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTni0HMu8ZxOhGdetTByvcryrLs2rzWW1QnydXoEKyWVYDNkoxvzMFPOmdsAd2TQJHf59c&usqp=CAU" },
    { title: "Kunio", url: "https://cdn.vox-cdn.com/thumbor/_WDVXJsoFP6xL4erVVclMEwtONc=/0x90:799x623/1400x1400/filters:focal(0x90:799x623):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/17144457/capture.0.jpg" },
    { title: "Ark", url: "https://vgmsite.com/soundtracks/arkanoid-commodore-64/21015-arkanoid-commodore-64-front-cover.jpg" },
    { title: "Quest", url: "https://images.squarespace-cdn.com/content/v1/5355c418e4b0753f93e1fb25/1592855950594-WC1YF58KGU7XJYXTIU0J/DQ5.jpg" },
    { title: "Street", url: "https://image.api.playstation.com/vulcan/img/cfn/11307MTvkumhOsLQiA_3g0ZbFhLnHOOWVw3qR4Rum7sKAh8I3THtbG0aa-P7dF7-miXzo1ceqN897MfxYZ7Qx-GaEZs8kq4X.png" },
    { title: "Train", url: "https://classicreload.com/sites/default/files/a-train.png" },
    { title: "Metroid", url: "https://m.media-amazon.com/images/I/A1D1QgyVHBL.jpg" },
    { title: "Ninja", url: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000055477/b19d9ee35641f25a5503b23aecb05c0048beaf6ee6366c393783298f4f81c8d7" },
    { title: "Reader", url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Reader_Rabbit_logo.gif/250px-Reader_Rabbit_logo.gif" },
    { title: "Shadowgate", url: "https://i.ytimg.com/vi/RVesfinzdrI/hqdefault.jpg" },
    { title: "Donkey Kong", url: "https://cdn.shopify.com/s/files/1/0003/9485/4447/products/Donkey_Kong_1200x1200.png?v=1531290920" },
    { title: "Kirby", url: "https://www.nintendoworldreport.com/media/30228/4/3.jpg" },
    { title: "tetris", url: "https://m.media-amazon.com/images/I/61M3rDwh4qL.png" },
  ];
  
  function generateGalleryItems(images) {
    const img = document.createElement("img"); // creates an image element
    img.classList.add("gallery-img"); // add a class of gallery-img to the image so we can access it in the css
    img.src = images.url; //specifies the source of the image to be the url in our images object
  
    const galleryItem = document.createElement("div"); // creates a new div called gallery item
    galleryItem.appendChild(img); // adds the image into the div
  
    document.querySelector(".gallery").appendChild(galleryItem); // adds the div to the gallery section we added earlier in the html
  }
  
  images.forEach(generateGalleryItems);
  