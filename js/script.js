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

// prendo le key dell'array e creo 3 nuovi array
const imagesArray = []
const titleArray = []
const textArray = []
images.forEach((key)=>{
    // console.log(index, key.image)
    imagesArray.push(key.image);
    titleArray.push(key.title);
    textArray.push(key.text);
})
console.log(imagesArray, titleArray, textArray)

// inserisco dinamicamente l'array delle immagini nel file html
const imgContainer = document.getElementById("img_container");

imagesArray.forEach((image)=>{    
    console.log(image)
    imgContainer.innerHTML += `
    <div id= "card" class=" ms_card ms_none postiton-relative">
        <img class="image position-absolute" src="${image}" alt="">
    </div>`
})

// Creo un nuovo Array composto dalla didascalia delle immagini e le inserisco dinamicamente nel file html


const titleTextArray = []
    images.forEach((key)=>{
    imgContainer.innerHTML += `
    <div id="text_container" class="txt_section ms_none position-absolute">
        <p class="">${key.title}</p>
        <p>${key.text}</p>
    </div>        
    `;
})

// Imposto la slide iniziale senza display none
const img = document.getElementsByClassName("ms_card");
let activeImg = 0;
img[activeImg].classList.remove("ms_none");
console.log(img[activeImg])

// Imposto la didascalia iniziale senza display none
const textContainer = document.getElementsByClassName("txt_section")
let activeTxt = 0;
textContainer[activeTxt].classList.remove("ms_none");

// NAVIGAZIONE
const nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", function(){
    // Rimetto display-none all'immagine e alla didascalia corrente
    img[activeImg].classList.add("ms_none");
    textContainer[activeTxt].classList.add("ms_none");
    if (activeImg < img.length - 1) {
        // passo alla prossima img
        activeImg++;
    } else{
        activeImg = 0;
    };

    if (activeTxt < textContainer.length - 1) {
        // passo alla prossima img
        activeTxt++;
    } else{
        activeTxt = 0;
    }
    
    // Rimuovo display none alla prossima img e alla prossima didascalia
    img[activeImg].classList.remove("ms_none");
    textContainer[activeTxt].classList.remove("ms_none");
    
})
// for (let i = 0; i < imagesArray.length; i++) {
//     const thisImg = array[i];
//     thisImg.classList.add("active")
//     i++
//     thisImg.classList.remove("active")
    
// }






    // const titleTextArray =[]
    // title = titleArray.forEach((title)=>{
    //     // console.log(imgContainer)
    //     console.log(title)
    //     titleTextArray.push(title);
    //     console.log(titleTextArray)

    //     // imageContainer.innerHTML += `<p>${title} </p>`
    // })

    // text = textArray.forEach((text)=>{
    //     // const textContainer = document.getElementById("text_container");
    //     // console.log(imgContainer)
    //     console.log(text)
    //     // textContainer.innerHTML += ` `
    //     return text;
    // })



    
    // cardContainer.innerHTML += ` 
    //     <div id="img_container" class="col">
    //         <div id= "card" class=" postiton-relative">
    //             <img class="image" src="${image}" alt=""></img>
    //             <ul id="text_container"class="position-absolute">
    //                 <li><${title}</li>
    //                 <li>${text}</li>
    //             </ul>
    //         </div>
    //     </div>`
// }
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
