var elform = document.querySelector(".form")
var elInput = document.querySelector(".input")
var elInput1 = document.querySelector(".input1")
var elInput2 = document.querySelector(".input2")
var elbtn = document.querySelector(".btn")
var elText = document.querySelector(".text")
var elHeading =document.querySelector(".heading")
var elInput3 = document.querySelector(".input3")




elform.addEventListener("submit", function(evt){
    evt.preventDefault()

 var input = elInput.value.trim()
    console.log(input)
 

 var input1 = elInput1.value.trim()
    console.log(input1)

    var input2 = elInput2.value.trim()
    console.log(input2)
    var input3 = elInput3.value.trim()
    console.log(input3)

    if (isNaN(input2)) {
        elHeading.textContent = "Raqam kiriting"
    
        return
      }



var javob = "Familiyangiz:"+input + "            "   + "Ismingiz:"+  input1 + "            " + "Email:" + input3 + "            " + "Telefon raqam:"+ input2;
  
  elText.textContent=javob;
  
  

    
})