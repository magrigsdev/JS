var screen = document.getElementById("screen")
var btn = document.querySelectorAll(".btn")

for (item of btn) {
    item.addEventListener('click', (e) => {
        
        btnText = e.target.innerText;
        console.log(screen.value)
        screen.value +=btnText
        //console.log(screen.value)   
    });
     
    
}

function egal() {
    screen.value = eval(screen.value)
}
function efface() {
    screen.value = ""
}
function sin() {
    screen.value = Math.sin(screen.value)
}
function cos() {
    screen.value = Math.cos(screen.value)
}
function tan() {
    screen.value = Math.tan(screen.value)
}
function pow() {
    screen.value = Math.pow(screen.value, 2)
}
function sqrt() {
    screen.value = Math.sqrt(screen.value, 2)
}
function log() {
    screen.value = Math.log(screen.value)
}
function pi() {
    screen.value = 3.1415926535897932
}
function expo() {
    screen.value = Math.exp(screen.value)
}

function fact() {
    var num = screen.value 
    var f = 1

    if (num == 1) {
        f = 1
    }
    else if(num == 2){
        f = 2
    }
    else {
       for (let index = num; index > 0; index--) {          
           f = f * index
        }
    }
   
    screen.value = f
    
    

}
function backspc() {
    screen.value = screen.value.substr(0,screen.value.length-1)
}
