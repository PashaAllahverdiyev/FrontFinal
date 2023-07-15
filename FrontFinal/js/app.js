let language = document.querySelector('.container .language')
let languages = document.querySelector('.container .languages')
let first = document.querySelector('.container .first')
let second = document.querySelector('.sf1')
let second_ul = document.querySelector('.sf1 ul')
let third = document.querySelector('.container .third')
let third_f1 = document.querySelector('.container .third .f1')
let third_f1_ul = document.querySelector('.container .third .f1 ul')
let third_f3 = document.querySelector('.container .third .f3')
let third_f3_ul = document.querySelector('.container .third .f3 ul')


language.onclick=()=>{
    if(language.style.display==='flex'){
        languages.style.display='none'
    }else{
        languages.style.display='flex'
    }
}


let f = document.querySelectorAll('.container .first li')
for(let ff of f){
 ff.onclick = () =>{
    let back = document.querySelector('.container .first-before')
    back.classList.remove('first-before')
    ff.classList.add('first-before') 
 }
}

let body = document.querySelector('body')
let secondd = document.querySelector('.container .second')
let search = document.querySelector('.container .search')
let i = document.querySelector('.container .search i')
secondd.onclick = ()=>{
    search.style.display = 'flex'
    third.style.display = 'none'
    
}
third_f1.onmouseover = () => {
    third_f1_ul.style.opacity = "1"
    third_f1_ul.style.transform = 'scaleY(1)'
}
third_f1.onmouseleave = () => {
    third_f1_ul.style.opacity = "0"
    third_f1_ul.style.transform = 'scaleY(0)'
}
third_f3.onmouseover = () => {
    third_f3_ul.style.opacity = "1"
    third_f3_ul.style.transform = 'scaleY(1)'
}
third_f3.onmouseleave = () => {
    third_f3_ul.style.opacity = "0"
    third_f3_ul.style.transform = 'scaleY(0)'
    
}
second.onmouseover = () => {
    second_ul.style.opacity = "1"
    second_ul.style.transform = 'scaleY(1)'
}
second.onmouseleave = () => {
    second_ul.style.opacity = "0"
    second_ul.style.transform = 'scaleY(0)'
}
let tab_btn = document.querySelectorAll('.tab-btn button')

for(let bttn of tab_btn){
    bttn.onclick = () =>{
        let bt = document.querySelector('.btn')
        bt.classList.remove('btn')
        bttn.classList.add('btn')

        let id = bttn.id
        let div = document.querySelectorAll('.tab-menues div')
        for(let chng of div){
            if(chng.id===id){
                chng.classList.add('d-none')
            }else{
                 chng.classList.remove('d-none')
            }
        }
    }
}

let calc_bttn = document.querySelectorAll('.calc-btn button')
for(let clc of calc_bttn){
    clc.onclick = () => {
        let clcs = document.querySelector('.calc-bttn')
        clcs.classList.remove('calc-bttn')
        clcs.classList.add('calc-bttn')

        let id = calcs.id
        let div = document.querySelectorAll('.bank-calcs div')

        for(let divs of div){
            if(divs.id === id){
                divs.classList.add('d-none')
            }else{
                divs.classList.remove('d-none')
            }
        }
    }
}

function calc(){
    let x = parseFloat(document.getElementById('range1').value)
    let y = parseFloat(document.getElementById('range2').value)
    let z = parseFloat(document.getElementById('range3').value)
    num = (x*z)/100
    num1 = num + x
    num3 = (num1/y).toFixed(2)

    document.querySelector('.bank-show .bank-show-months').innerHTML = num3
    document.querySelector('.bank-show . bank-showes').innerHTML = num1
}
function p1(){
    document.querySelector('.inp1 .value1').innerHTML = document.getElementById('range1').value
    calc()
}
function p2(){
    document.querySelector('.inp2 .value2').innerHTML = document.getElementById('range2').value
    calc()
}
document.querySelector('.inp1').addEventListener("input",p1)
document.querySelector('.inp2').addEventListener("input",p2)


window.onscroll = function(){

    if( document.documentElement.scrollTop>150){
        document.querySelector('header').style.backgroundColor = 'white'
    }
  }

  
  const slides = document.querySelector('.sliders')
  const text = document.querySelectorAll('.text1-slide, .text2-slide')
  const photo = document.querySelectorAll('.img-slide1, .img-slide2')
  const left = document.querySelector('.left-icon')
  const right = document.querySelector('.right-icon')

 let x = 0

  function showSlide(index) {
    text.forEach(textt => textt.style.display = 'none');
    photo.forEach(photos => photos.style.display = 'none');
  
    text[index].style.display = 'block';
    photo[index].style.display = 'block';
  }
  
  function NextSlide() {
    x++;
    if (x >= text.length) {
      x = 0;
    }
    showSlide(x);
  }
  
  function BackSlide() {
    x--;
    if (x < 0) {
      x = text.length - 1;
    }
    showSlide(x);
  }
  
  right.onclick = () =>{
    NextSlide()
  }
  left.onclick = () => {
    BackSlide()
  }
  setInterval(() => {
      NextSlide()
  }, 2000);


  