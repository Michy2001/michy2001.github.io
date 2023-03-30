let images = [
    {title: "RettaMcCabe", url: "retta_mccabe.png"}, 
    // {title: "DedrickOwens", url:"C8gGwyxU0AAxGc5.jpg"},
    // {title: "CarrollCole", url: "htN8rwr.png"},
    // {title: "JamesArcene", url: "2_THP_CHP_081118SLUG_2268JPGjpge.jpg" }, 
    // {title: "RobertTompson", url: "thompson.jpg" }, 
    // {title: "JonVenables", url: "0_Jon-Venables-legal-action.jpg" }, 
    // {title: "JosephHall", url: "article-2476327-18F77E4100000578-790_634x427.jpg" }, 
    // {title: "MaryBell", url: "murderous-children-mary-bell.jpg" }, 
    // {title: "NatsumiTsuji", url: "tumblr_84cc4d9be045598aa5ddf562a53d816c_fcdb5245_1280.jpg" }, 
    // {title: "LionelTate", url: "life-prison-sentence-Lionel-Tate.jpg" }, 
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
// tlqkf

let image1 =[
    {title: "DedrickOwens", url:"C8gGwyxU0AAxGc5.jpg"}
]

function generateDedrickItems(image1){
const img = document.createElement('img') 
img.classList.add('dedrick-img') 
img.src = image1.url 
const dedrickItem = document.createElement("div") 
dedrickItem.appendChild(img); 
document.querySelector('.dedrick').appendChild(dedrickItem) 
}
image1.forEach(generateDedrickItems)
// tlqkf

let image2 =[
    {title: "JamesArcene", url: "2_THP_CHP_081118SLUG_2268JPGjpge.jpg" }
]

function generateJamesItems(image2){
const img = document.createElement('img') 
img.classList.add('james-img') 
img.src = image2.url 
const jamesItem = document.createElement("div") 
jamesItem.appendChild(img); 
document.querySelector('.james').appendChild(jamesItem) 
}
image2.forEach(generateJamesItems)
// tlqkf

let image3 =[
    {title: "Hannah", url: "Hannah_Ocuish.jpg" }
]

function generateHannahItems(image3){
const img = document.createElement('img') 
img.classList.add('hannah-img') 
img.src = image3.url 
const hannahItem = document.createElement("div") 
hannahItem.appendChild(img); 
document.querySelector('.hannah').appendChild(hannahItem) 
}
image3.forEach(generateHannahItems)
// tlqkf

let image4 =[
    {title: "Jesse", url: "Jesse_Pomeroy.jpg" }
]

function generateJesseItems(image4){
const img = document.createElement('img') 
img.classList.add('jesse-img') 
img.src = image4.url 
const jesseItem = document.createElement("div") 
jesseItem.appendChild(img); 
document.querySelector('.jesse').appendChild(jesseItem) 
}
image4.forEach(generateJesseItems)
// tlqkf

let image5 =[
    {title: "MaryBell", url: "murderous-children-mary-bell.jpg" }
]

function generateCarrolItems(image5){
const img = document.createElement('img') 
img.classList.add('carrol-img') 
img.src = image5.url 
const carrolItem = document.createElement("div") 
carrolItem.appendChild(img); 
document.querySelector('.carrol').appendChild(carrolItem) 
}
image5.forEach(generateCarrolItems)
// tlqkf

let image6 =[
    {title: "pedro", url: "Pedrinho_Matador,_1991,_2.jpg" }
]

function generatePedroItems(image6){
const img = document.createElement('img') 
img.classList.add('pedro-img') 
img.src = image6.url 
const pedroItem = document.createElement("div") 
pedroItem.appendChild(img); 
document.querySelector('.pedro').appendChild(pedroItem) 
}
image6.forEach(generatePedroItems)
// tlqkf

let image7 =[
    {title: "eric", url: "Eric_Borel.jpg" }
]

function generateEricItems(image7){
const img = document.createElement('img') 
img.classList.add('eric-img') 
img.src = image7.url 
const ericItem = document.createElement("div") 
ericItem.appendChild(img); 
document.querySelector('.eric').appendChild(ericItem) 
}
image7.forEach(generateEricItems)
// tq
let image8 =[
    {title: "otaya", url: "avatars-000134065531-f0m23m-t500x500.jpg" }
]

function generateOtayaItems(image8){
const img = document.createElement('img') 
img.classList.add('otaya-img') 
img.src = image8.url 
const otayaItem = document.createElement("div") 
otayaItem.appendChild(img); 
document.querySelector('.otaya').appendChild(otayaItem) 
}
image8.forEach(generateOtayaItems)
// tq
let image9 =[
    {title: "peter", url: "Peterwoodcock.jpg" }
]

function generatePeterItems(image9){
const img = document.createElement('img') 
img.classList.add('peter-img') 
img.src = image9.url 
const peterItem = document.createElement("div") 
peterItem.appendChild(img); 
document.querySelector('.peter').appendChild(peterItem) 
}
image9.forEach(generatePeterItems)
// tq
let image10 =[
    {title: "RobertTompson", url: "thompson.jpg" }
]

function generateRobertItems(image10){
const img = document.createElement('img') 
img.classList.add('robert-img') 
img.src = image10.url 
const robertItem = document.createElement("div") 
robertItem.appendChild(img); 
document.querySelector('.robert').appendChild(robertItem) 
}
image10.forEach(generateRobertItems)
// tq
let image11 =[
    {title: "JonVenables", url: "0_Jon-Venables-legal-action.jpg" }
]

function generateJonItems(image11){
const img = document.createElement('img') 
img.classList.add('jon-img') 
img.src = image11.url 
const jonItem = document.createElement("div") 
jonItem.appendChild(img); 
document.querySelector('.jon').appendChild(jonItem) 
}
image11.forEach(generateJonItems)
// tq
let image12 =[
    {title: "LionelTate", url: "life-prison-sentence-Lionel-Tate.jpg" }
]

function generateTataItems(image12){
const img = document.createElement('img') 
img.classList.add('tate-img') 
img.src = image12.url 
const tateItem = document.createElement("div") 
tateItem.appendChild(img); 
document.querySelector('.tate').appendChild(tateItem) 
}
image12.forEach(generateTataItems)
// tq
let image13 =[
    {title: "criag", url: "071215-murderer-vlrg-1130a.webp" }
]

function generateCraigItems(image13){
const img = document.createElement('img') 
img.classList.add('craig-img') 
img.src = image13.url 
const craigItem = document.createElement("div") 
craigItem.appendChild(img); 
document.querySelector('.craig').appendChild(craigItem) 
}
image13.forEach(generateCraigItems)
// tq
let image14 =[
    {title: "sajal", url: "26sajal.jpg" }
]

function generateSajalItems(image14){
const img = document.createElement('img') 
img.classList.add('sajal-img') 
img.src = image14.url 
const sajalItem = document.createElement("div") 
sajalItem.appendChild(img); 
document.querySelector('.sajal').appendChild(sajalItem) 
}
image14.forEach(generateSajalItems)
// tq
let image15 =[
    {title: "terry", url: "James_Terry_Roach.webp" }
]

function generateTerryItems(image15){
const img = document.createElement('img') 
img.classList.add('terry-img') 
img.src = image15.url 
const terryItem = document.createElement("div") 
terryItem.appendChild(img); 
document.querySelector('.terry').appendChild(terryItem) 
}
image15.forEach(generateTerryItems)
// tq
let image16 =[
    {title: "JosephHall", url: "article-2476327-18F77E4100000578-790_634x427.jpg" }
]

function generateHallItems(image16){
const img = document.createElement('img') 
img.classList.add('hall-img') 
img.src = image16.url 
const hallItem = document.createElement("div") 
hallItem.appendChild(img); 
document.querySelector('.hall').appendChild(hallItem) 
}
image16.forEach(generateHallItems)
// tq
let image17 =[
    {title: "NatsumiTsuji", url: "tumblr_84cc4d9be045598aa5ddf562a53d816c_fcdb5245_1280.jpg" }
]

function generateNatsumiItems(image17){
const img = document.createElement('img') 
img.classList.add('natsumi-img') 
img.src = image17.url 
const natsumiItem = document.createElement("div") 
natsumiItem.appendChild(img); 
document.querySelector('.natsumi').appendChild(natsumiItem) 
}
image17.forEach(generateNatsumiItems)
// tq
let image18 =[
    {title: "pitt", url: "58012152a6610.webp" }
]

function generatePittItems(image18){
const img = document.createElement('img') 
img.classList.add('pitt-img') 
img.src = image18.url 
const pittItem = document.createElement("div") 
pittItem.appendChild(img); 
document.querySelector('.pitt').appendChild(pittItem) 
}
image18.forEach(generatePittItems)
// tq
let image19 =[
    {title: "jasmine", url: "FCXC2DKTFHGKTZ2BC6LF7SYI7I.avif" }
]

function generateJasmineItems(image19){
const img = document.createElement('img') 
img.classList.add('jasmine-img') 
img.src = image19.url 
const jasmineItem = document.createElement("div") 
jasmineItem.appendChild(img); 
document.querySelector('.jasmine').appendChild(jasmineItem) 
}
image19.forEach(generateJasmineItems)
// tq
let image20 =[
    {title: "brazil", url: "Nathaniel_brazill_new.jpg" }
]

function generateBrazilItems(image20){
const img = document.createElement('img') 
img.classList.add('brazil-img') 
img.src = image20.url 
const brazilItem = document.createElement("div") 
brazilItem.appendChild(img); 
document.querySelector('.brazil').appendChild(brazilItem) 
}
image20.forEach(generateBrazilItems)
// tq
let image21 =[
    {title: "brandon", url: "62f51c30c0252.webp" }
]

function generateBrandonItems(image21){
const img = document.createElement('img') 
img.classList.add('brandon-img') 
img.src = image21.url 
const brandonItem = document.createElement("div") 
brandonItem.appendChild(img); 
document.querySelector('.brandon').appendChild(brandonItem) 
}
image21.forEach(generateBrandonItems)
// tq
let image22 =[
    {title: "yukio", url: "Yukio_Yamaji.jpg" }
]

function generateYukioItems(image22){
const img = document.createElement('img') 
img.classList.add('yukio-img') 
img.src = image22.url 
const yukioItem = document.createElement("div") 
yukioItem.appendChild(img); 
document.querySelector('.yukio').appendChild(yukioItem) 
}
image22.forEach(generateYukioItems)