let one = [
    {title: "RettaMcCabe", url: "retta_mccabe.png"}, 
    {title: "DedrickOwens", url:"C8gGwyxU0AAxGc5.jpg"},
    {title: "CarrollCole", url: "htN8rwr.png"},
    {title: "JamesArcene", url: "2_THP_CHP_081118SLUG_2268JPGjpge.jpg" }, 
    {title: "RobertTompson", url: "thompson.jpg" }, 
    // {title: "JonVenables", url: "0_Jon-Venables-legal-action.jpg" }, 
    // {title: "JosephHall", url: "article-2476327-18F77E4100000578-790_634x427.jpg" }, 
    // {title: "MaryBell", url: "murderous-children-mary-bell.jpg" }, 
    // {title: "NatsumiTsuji", url: "tumblr_84cc4d9be045598aa5ddf562a53d816c_fcdb5245_1280.jpg" }, 
    // {title: "LionelTate", url: "life-prison-sentence-Lionel-Tate.jpg" }, 
    // {title: "pitt", url: "58012152a6610.webp" },
    // {title: "Hannah", url: "Hannah_Ocuish.jpg" },
    // {title: "jasmine", url: "FCXC2DKTFHGKTZ2BC6LF7SYI7I.avif" },
    // {title: "brazil", url: "Nathaniel_brazill_new.jpg" },
    // {title: "criag", url: "071215-murderer-vlrg-1130a.webp" }
]
one.forEach(generateOneItems)

function generateOneItems(one){

const img = document.createElement('img') 
img.classList.add('one-img') 
img.src = one.url 

const oneItem = document.createElement("div") 
oneItem.appendChild(img);

document.querySelector('.one').appendChild(oneItem) 

}

let two= [
    {title: "JonVenables", url: "0_Jon-Venables-legal-action.jpg" }, 
    {title: "JosephHall", url: "article-2476327-18F77E4100000578-790_634x427.jpg" }, 
    {title: "MaryBell", url: "murderous-children-mary-bell.jpg" }, 
    {title: "NatsumiTsuji", url: "tumblr_84cc4d9be045598aa5ddf562a53d816c_fcdb5245_1280.jpg" }, 
    {title: "LionelTate", url: "life-prison-sentence-Lionel-Tate.jpg" }, 
]

two.forEach(generatetwoItems)

function generatetwoItems(two){

    const img = document.createElement('img') 
    img.classList.add('two-img') 
    img.src = two.url 
    
    const twoItem = document.createElement("div") 
    twoItem.appendChild(img);
    
    document.querySelector('.two').appendChild(twoItem) 
    
    
    }
let three=[
    {title: "pitt", url: "58012152a6610.webp" },
    {title: "Hannah", url: "Hannah_Ocuish.jpg" },
    {title: "jasmine", url: "FCXC2DKTFHGKTZ2BC6LF7SYI7I.avif" },
    {title: "brazil", url: "Nathaniel_brazill_new.jpg" },
    {title: "criag", url: "071215-murderer-vlrg-1130a.webp" }
]
    three.forEach(generatethreeItems)

    function generatethreeItems(three){
    
        const img = document.createElement('img') 
        img.classList.add('three-img') 
        img.src = three.url 
        
        const threeItem = document.createElement("div") 
        threeItem.appendChild(img);
        
        document.querySelector('.three').appendChild(threeItem) 
        
        
        }