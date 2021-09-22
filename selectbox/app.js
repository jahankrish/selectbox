
function validate()
{
if(document.form.city.selectedIndex=="")
{
alert ( "Please select city!");


return false;
}


var sel = document.getElementById("city");
//get the selected option
var selectedText = sel.options[sel.selectedIndex].text;
alert("You have selected : "+selectedText);
return true;
}
