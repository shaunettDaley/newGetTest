function changeBackground(){
    document.body.style.backgroundColor = "yellow";
}


(function(){
    setTimeout(changeBackground,3000);
})();