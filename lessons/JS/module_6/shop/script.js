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

console.log(document.cookie);