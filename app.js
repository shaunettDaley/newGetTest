function changeBackground(){
    document.body.style.backgroundColor = "yellow";
}


(function(){
    setTimeout(changeBackground,3000);
    setTimeout(changeToGreen,7000);

    document.querySelector(".poppy-moving").style.WebkitAnimationName = "myNEWmove"; // Code for Chrome, Safari, and Opera
    document.querySelector(".poppy-moving").style.animationName = "myNEWmove";
})();


function changeToGreen(){
    document.body.style.backgroundColor = "red";
    document.body.style.color = "#fff";
}