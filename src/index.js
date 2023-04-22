
// write your code here
let newLi = document.createElement('ul')
let menu = document.getElementById('ramen-menu')
menu.appendChild(newLi)

function createMenu(ramen) {
    let newImg = document.createElement('img')
    newImg.src = `${ramen.image}`
    newImg.addEventListener('click', () =>{
        handleOneRamen(ramen)
    })
    newLi.append(newImg)
}

function handleOneRamen(ramen) {
    const ramenDetail = document.getElementById('ramen-detail')
    const ramenRating = document.getElementById('rating-display')
    const ramenComment = document.getElementById('comment-display')
    ramenDetail.innerHTML = `
        <img class='detail-image' src=${ramen.image} alt='Insert Name Here'>
        <h2 class='name'>${ramen.name}</h2>
        <h3 class='restaurant'>${ramen.restaurant}
    `
    ramenRating.innerText = ramen.rating
    ramenComment.innerText =ramen.comment
}


function getRamens() {
    fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then((data) => {
        data.forEach(element => createMenu(element))
    })
}

function addNewRamen() {
    document.querySelector('form').addEventListener('submit', (e) => {
       e.preventDefault()
        const newRamen = {
        'name': e.target.name.value,
        'restaurant': e.target.restaurant.value,
        'image': e.target.image.value,
        'rating': e.target.rating.value,
        'comment': e.target['new-comment'].value
       }
       createMenu(newRamen)
    })
}

document.addEventListener('DOMContentLoaded', () => {
    getRamens()
    addNewRamen()
})

