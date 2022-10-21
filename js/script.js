const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// console.log(images.)

// prendo le immagini dell'array e creo un nuovo array di sole immagini
const imagesArray = []
images.forEach((key,index)=>{
    // console.log(index, key.image)
    imagesArray.push(key.image)

})
console.log(imagesArray)

imagesArray.forEach((key)=>{
const imgContainer = document.getElementById("card");
console.log(imgContainer)
imgContainer.innerHTML += `<img class="image" src="${key}" alt="">`
})




// let imgList = "";
// let thisImg = "";
// for(let i = 0; i<images.length; i++){
//     thisImg = images[i];
//     console.log(thisImg)
//     imgList += `<div class="card postiton-relative">
//     <img class="image" src="${thisImg}" alt="">
//     <ul class="text_container position-absolute">
//         <li>title: <span>'Marvel\'s Spiderman Miles Morale'</span> </li> 
//         <li>text: <span> 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.' </span> </li> 
//     </ul>
//     <button class="next position-absolute">&rightarrow;</button>
//     <button class="prev position-absolute">&leftarrow;</button>
// </div>`;    
//     console.log(imgList);
// }
// const imgContainer = document.getElementById("card_container");
// imgContainer.innerHTML += imgList;


// const card = document.getElementById("card_container");
// console.log(card)

// images.forEach(Element => {
// console.log(images ["image"])
// card.innerHTML += `<div class="card postiton-relative">
// <img class="image" src="img/01.webp" alt="">
// <ul class="text_container position-absolute">
//     <li>title: <span>'${title}'</span> </li> 
//     <li>text: <span> 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.' </span> </li> 
// </ul>
// <button class="next position-absolute">&rightarrow;</button>
// <button class="prev position-absolute">&leftarrow;</button>
// </div>`

// });

// [] prendiamo i bottoni e creiamo evento al click
// [] ciclo for per scorrere le cards (i++)
