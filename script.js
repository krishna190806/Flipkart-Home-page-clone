var i=0
function slide() {
    setInterval(() => {
        document.getElementById("caro-img").classList.add("fade")
        if(i==6)
        i=0;
        document.getElementById("caro-img").setAttribute("src",im[i])
        i=i+1;
        setTimeout(() => {
            document.getElementById("caro-img").classList.remove("fade")
        }, 600);
    },2000); 
}
slide()
