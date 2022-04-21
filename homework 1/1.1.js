const inp = document.getElementById("inp")
const sub = document.getElementById("sub")
const content = document.getElementById("content")

sub.addEventListener("click",ValidateEmail)

function ValidateEmail() 
{   

 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inp.value))
  {
    content.innerText = ''
    
  }
  else{
    content.innerText = "Email is not valid"
    content.style.color = "red"
    
  }
    
}




