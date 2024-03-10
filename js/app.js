const imagesArray = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp']
const itemsContainerHTML = document.getElementById('items-container')
const thumbnailContainerHTML = document.getElementById('thumbnail')
const prevElement = document.querySelector('.prev')
const nextElement = document.querySelector('.next')
let itemsHTML = ''
let  thumbnailHTML= ''

for (let index = 0; index < imagesArray.length; index++){

const imagePath = imagesArray[index]
const sliderItem = `
    <div class="item">
        <img src="${imagePath}" alt="">
    </div>
`
const thumbnailItem= `
    <div class="active">
        <img src="${imagePath}" alt="">
        <div class="opacity opacity_activ"></div>
    </div>
`
    itemsHTML += sliderItem
    thumbnailHTML += thumbnailItem
}
itemsContainerHTML.innerHTML = itemsHTML
thumbnailContainerHTML.innerHTML = thumbnailHTML

const divOpacityElements = document.getElementsByClassName('opacity')
const divItemsElements = document.getElementsByClassName('item')
let itemIndex = 0
let opacityIndex = 0
let firstItem = divItemsElements[itemIndex]
let firstOpacityItems = divOpacityElements[opacityIndex]
firstItem.classList.add('active')
firstOpacityItems.classList.remove('opacity_activ')

nextElement.addEventListener('click', function(){
    // prevElement.style.display = 'block'
    firstItem.classList.remove('active')
    firstOpacityItems.classList.add('opacity_activ')
    itemIndex ++
    opacityIndex ++
    if(itemIndex > imagesArray.length -1 && opacityIndex > imagesArray.length -1){
        itemIndex = 0
        opacityIndex = 0
    }

    firstItem = divItemsElements[itemIndex]
    firstItem.classList.add('active')
    firstOpacityItems = divOpacityElements[opacityIndex]
    firstOpacityItems.classList.remove('opacity_activ')
    // if(itemIndex === imagesArray.length -1){
    //     nextElement.style.display = 'none'
    // }
    // console.log(itemIndex)
})

prevElement.addEventListener('click', function(){
    // nextElement.style.display = 'block'
    firstItem.classList.remove('active')
    firstOpacityItems.classList.add('opacity_activ')
    itemIndex --
    opacityIndex --
    if(itemIndex < 1 && opacityIndex < 0){
        itemIndex = imagesArray.length -1
        opacityIndex = imagesArray.length -1    
    }
    
    firstItem = divItemsElements[itemIndex]
    firstItem.classList.add('active')
    firstOpacityItems = divOpacityElements[opacityIndex]
    firstOpacityItems.classList.remove('opacity_activ')
//     if(itemIndex === 0){
//         prevElement.style.display = 'none'
//     }
// console.log(itemIndex)
})








