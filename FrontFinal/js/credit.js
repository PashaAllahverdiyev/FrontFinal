let crd_btn = document.querySelectorAll('.all-credits .card-btns button')
   for(let bt of crd_btn){
    bt.onclick = () => {
        let act = document.querySelector('.active')
        act.classList.remove('active');
        bt.classList.add('active')

        let id = bt.id
        let div = document.querySelectorAll('.credit-all .inf-credit1')
    
             for(let dv of div){
               
                if(dv.id===id){
                    dv.classList.remove('d-none')
                }else{
                    dv.classList.add('d-none')
    
                }
             }
    }
   }





   