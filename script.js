function getFormValue()
  {
    var display = document.getElementById("display")
	
  	var fname= document.getElementById("fname").value
    var lname= document.getElementById("lname").value

	display.innerHTML="Hello "+ fname+ " "+ lname
  }

  
function changeBackgroundColor()
{
  document.body.style.backgroundColor= "white"
}
// i want to change the background color on submit but i dont know how onsubmit ="changeBackgroundColor()"//
