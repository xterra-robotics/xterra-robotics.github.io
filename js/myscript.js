var clicked = -1;
function myFunction(){
    clicked = clicked * (-1);
    if(clicked===1){
        // console.log(clicked);
        var nav= document.querySelectorAll(".Links.hidden");
        [].forEach.call(nav, function(e){
            e.classList.remove("hidden");
        })
    }else{
        var nav= document.querySelectorAll(".Links");
        [].forEach.call(nav, function(e){
            e.classList.add("hidden");
        })
    }
}