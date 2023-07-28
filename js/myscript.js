var clicked = -1;
function myFunction(event){
    event.stopPropagation();
    var targetElement = event.target;
    if(targetElement.nodeName === 'I') {
        targetElement = targetElement.parentNode;
    }
    var customAttribute = targetElement.getAttribute("custom");
    console.log(customAttribute)
    if(customAttribute === "test"){
        clicked = -1 * clicked;
    } else if(customAttribute === "product"){
        clicked = 1;
    }else {
        clicked = -1;
    }
    // clicked = clicked * (-1);
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

function closeButton(props){
    
    clicked = -1;
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


