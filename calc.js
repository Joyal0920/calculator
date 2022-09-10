var screen =document.getElementById("screen")

function btnclick(value){
    screen.value+=value


}
function clearScreen(){
    screen.value=""
}
let findResult=()=>{
    try{
        screen.value=eval(screen.value)
    }
    catch(err){
        alert("Enter the valid input")
    }
}
function del(){
    screen.value=screen.value.slice(0,-1)
}