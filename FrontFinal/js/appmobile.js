let ph1 = document.querySelector('.container-mobile .ph1')
let ph2 = document.querySelector('.container-mobile .ph2')
let b_phone = document.querySelector('.body-phone')
let hamburger = document.querySelector('.hamburger')
let second_head = document.querySelector('.second-head')
let next_head = document.querySelector('.next-head')

ph1.onclick = () =>{
    ph2.style.display = 'inline-block'
    ph1.style.display = 'none'
    b_phone.style.display = 'none'
    hamburger.style.display = 'block'
    second_head.style.display = 'none'
    next_head.style.display = 'none'
}

ph2.onclick = () =>{
    ph2.style.display = 'none'
    ph1.style.display = 'inline-block'
    b_phone.style.display = 'block'
    hamburger.style.display = 'none'
    second_head.style.display = 'block'
    next_head.style.display = 'flex'
}


const all_slides = document.querySelector('.all-slides')
const imgs = document.querySelector('.img1-slide1, .img2-slide2')
const txts = document.querySelector('.text1-slide1, .text2-slide2')
let x = 0

function showSlide(index){
    txts.forEach(txt => txt.style.display = 'none') 
    imgs.forEach(img => img.style.display = 'none') 

    txts[index].style.display = 'block'
    imgs[index].style.display = 'block'
}

function SlideNext() {
    x++
    if(x >= txts.length ){
        x=0
    }
    showSlide(x)

    document.querySelector('.text2-slide2').classList.remove('d-none')
    document.querySelector('.img2-slide2').classList.remove('d-none')
}

function startSlide(){
    sliderInterval = setInterval(SlideNext, 2000)
}

