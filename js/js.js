var start

function goscroll(target){
    start = setInterval(function(){
        scroll(target);
    },5);

    function scroll(target){
        
        if(target.offsetTop > $('html').scrollTop()){
            $('html').scrollTop($('html').scrollTop()+10)
        }else{
            clearInterval(start);
        }
    }
}
