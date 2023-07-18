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



if(localStorage.getItem('karts') === null){
    localStorage.setItem('karts',JSON.stringify([]))
}

    let btns = document.querySelector('.inf-text1 .card-a1 a')

    btns.onclick = () => {
        let img = document.querySelector('.inf-photo1 img').src
        let text = document.querySelector('.inf-text h4').innerHTML
        let text1 = document.querySelector('.inf-text p').innerHTML
        let id = document.getElementById.id
        let baskets = JSON.parse(localStorage.getItem('karts'))
        let exist = baskets.find(x=> x.Id === id)
      
        if(exist === undefined){
          baskets.push({
              Id: id, 
              sekil: img,
              yazi: text,
              yazi1: text1
          })
        }
        
        localStorage.setItem('karts',JSON.stringify(baskets))
        show()   
    }


    let btnss = document.querySelector('.inf-text card-a1')
    btnss.onclick = () =>{
        let img = document.querySelector('.zz img').src
        let text = document.querySelector('.zz h4').innerHTML
        let text1 = document.querySelector('.zz p').innerHTML
        let id = document.getElementById.id
        let baskets = JSON.parse(localStorage.getItem('karts'))
        let exist = baskets.find(x=> x.Id === id)
      
        if(exist === undefined){
          baskets.push({
              Id: id, 
              sekil: img,
              yazi: text,
              yazi1: text1
          })
        }
        
        localStorage.setItem('karts',JSON.stringify(baskets))
        show()  
    }

    function show() {
        let basketa  = JSON.parse(localStorage.getItem('karts'))
        document.getElementById('count').innerHTML = basketa.length
    }
   
    