// var height
var Personweight = document.getElementById("userweight");
// var weight
var Personheight= document.getElementById("Userheight")
var sat
var sat =document.getElementById("imp")
var message
var message = document.querySelector(".message")
var btn
var btn = document.getElementById("btn")
btn.addEventListener("click", function(){
    // let case = Personheight.value
    let display = Personweight.value/((Personheight.value/100)**2)
    if( display<=18.4){
    message.innerHTML="underweight"
}else if(display  > 18.5 && display <= 24.9){
    message.innerHTML="normal"
}else if(display > 25.0 && display <=39.9){
    message.innerHTML="overweight"

} else{
    message.innerHTML = "obese"
}
sat.value = display.toFixed(2)

    console.log(Personweight.value)
    console.log(Personheight.value)

})

