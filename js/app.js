const imagesArray = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp']
const itemsContainerHTML = document.getElementById('items-container')
const prevElement = document.querySelector('.prev')
const nextElement = document.querySelector('.next')
let itemsHTML = ''

for (let index = 0; index < imagesArray.length; index++){

const imagePath = imagesArray[index]
const sliderItem = `
    <div class="item">
        <img src="${imagePath}" alt="">
    </div>
`
    itemsHTML += sliderItem
}

itemsContainerHTML.innerHTML = itemsHTML

const divItemsElements = document.getElementsByClassName('item')
let itemIndex = 0
let firstItem = divItemsElements[itemIndex]
firstItem.classList.add('active')

nextElement.addEventListener('click', function(){
    prevElement.style.display = 'block'
    firstItem.classList.remove('active')
    itemIndex ++
    firstItem = divItemsElements[itemIndex]
    firstItem.classList.add('active')
    if(itemIndex === imagesArray.length -1){
        nextElement.style.display = 'none'
    }
    console.log(itemIndex)
})

prevElement.addEventListener('click', function(){
    nextElement.style.display = 'block'
    firstItem.classList.remove('active')
    itemIndex --
    firstItem = divItemsElements[itemIndex]
    firstItem.classList.add('active')
    if(itemIndex === 0){
        prevElement.style.display = 'none'
    }
console.log(itemIndex)
})








