let images = [
    {title: "Retta McCabe", url: "retta_mccabe.png"}, 
    {title: "Dedrick Owens", url:"C8gGwyxU0AAxGc5.jpg"},
    {title: "Carroll Cole", url: "htN8rwr.png"},
    {title: "James Arcene", url: "2_THP_CHP_081118SLUG_2268JPGjpge.jpg" }, 
    {title: "Robert Tompson", url: "thompson.jpg" }, 
    {title: "Jon Venables", url: "0_Jon-Venables-legal-action.jpg" }, 
    {title: "Joseph Hall", url: "article-2476327-18F77E4100000578-790_634x427.jpg" }, 
    {title: "Mary Bell", url: "murderous-children-mary-bell.jpg" }, 
    {title: "Natsumi Tsuji", url: "tumblr_84cc4d9be045598aa5ddf562a53d816c_fcdb5245_1280.jpg" }, 
    {title: "Lionel Tate", url: "life-prison-sentence-Lionel-Tate.jpg" }, 
]


function generateGalleryItems(images){

const img = document.createElement('img') 
img.classList.add('gallery-img') 
img.src = images.url 

const galleryItem = document.createElement("div") 
galleryItem.appendChild(img); 

document.querySelector('.gallery').appendChild(galleryItem) 
}

images.forEach(generateGalleryItems)
