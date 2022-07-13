//O Botão de Login do deve começar desabilitado. 
const [user, pass] = document.querySelectorAll("input")
const button =  document.querySelector(".buttonLogin")
function validateFiels(){

   if(user.value.length>=1 && pass.value.length>=8){
       button.classList.add("changeColor")
       button.removeAttribute("disabled")
   } else{
    button.classList.remove("changeColor")
    button.setAttribute("disabled", "disabled")
   }
}
user.addEventListener("input", validateFiels)
pass.addEventListener("input", validateFiels)
