<<<<<<< HEAD
var btnBuy = document.querySelectorAll('.block button');

function buy(btns){
    btns = btns || [];
    
    for(var i = 0; i < btns.length; i++){
        btns[i].onclick = function(){
            set_cookie(this.getAttribute('name'), this.getAttribute('value'))
        }
    }
}

buy(btnBuy);

=======
var btnBuy = document.querySelectorAll('.block button');

function buy(btns){
    btns = btns || [];
    
    for(var i = 0; i < btns.length; i++){
        btns[i].onclick = function(){
            set_cookie(this.getAttribute('name'), this.getAttribute('value'))
        }
    }
}

buy(btnBuy);

>>>>>>> 97bff1b82a2f6506a747f2f5e80ab10ce79655d1
console.log(document.cookie);