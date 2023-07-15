let card_btn = document.querySelectorAll('.real-card .card-btnss button')
for(let bttn of card_btn ){
 bttn.onclick = () => {
     let activ = document.querySelector('.active')
     activ.classList.remove('active')
     bttn.classList.add('active')

     let id = bttn.id
     let x = document.querySelectorAll('.inf-card .info-card1')

     for(let y of x){
         if(y.id === id){
             y.classList.remove('d-none')
         }else{
             y.classList.add('d-none')
         }
     }
 }
}       