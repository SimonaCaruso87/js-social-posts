/*Milestone 1 - 
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes*/

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15",
            "fallback" : "PM" 
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10" ,
            "fallback" : "SP" 
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20",
            "fallback" : "CP" 
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null ,
            "fallback" : "LF" 
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29",
            "fallback" : "AS" 
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

/*Milestone 2 - 
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
//Stampare le stesse informazioni su DOM sottoforma di stringhe*/

const containerPostList = document.querySelector('.posts-list');


for(let i = 0 ; i < posts.length ; i++){
   

    const element = posts[i];
    //conditio se img == null
    let imageAuthor 
    if (element.author.image == null ){

        imageAuthor = element.author.fallback 
    } else{
       
        imageAuthor = `<img class="profile-pic" src="${element.author.image}" alt="${element.author.fallback}">`;
    }

    const newPost =   
    `<div class="post">
    <div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
                ${imageAuthor}              
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${element.author.name}</div>
            <div class="post-meta__time">${element.created}</div>
        </div>                    
    </div>
</div>
<div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
<div class="post__image">
    <img src="${element.media}" alt="">
</div>
<div class="post__footer">
    <div class="likes js-likes">
        <div class="likes__cta">
            <a class="like-button js-like-button" href="#" data-postid="${element.id}">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
            </a>
        </div>
        <div class="likes__counter">
            Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone
        </div>
    </div> 
</div>            
</div> `

containerPostList.innerHTML += newPost;
//prendiamo la classe like-button dallo style
const likeButton = document.querySelectorAll('.like-button');
//aggiungiamo un evento click alla classe like-button
for(let i = 0; i < likeButton.length; i++){

    likeButton[i].addEventListener('click', function(e){

        const dataPostid = likeButton[i].getAttribute('data-postid');

        const numbersLike = document.getElementById(`like-counter-${dataPostid}`)
        //prevenire azioni di default nelle function
        e.preventDefault()
        //tramite il metodo .getAttribute prendiamo il click sul data-postid
    
        let numberLike =  posts[dataPostid - 1].likes;

        numberLike ++ ;

        numbersLike.innerHTML = numberLike ;


        //scateniamo l'evento change color al click del button



        
        likeButton[i].classList.add('like-button--liked');

    })
}





}

