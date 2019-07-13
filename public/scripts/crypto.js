var elements=document.getElementsByClassName('dropdown-menu');
var dropDownMenu=document.getElementById('dropdownMenu');

console.log("The crypto js file is connected");

 Array.from(elements).forEach((element)=>{
     element.addEventListener('click',(event)=>{
        alert("Clicked " +event.target.innerText);
        dropDownMenu.innerHTML=event.target.innerText;
        
        //document.clientForm.clientAmount.value=event.target.innerText.;
     });
 });

function dropDown(){
    alert("The button was clicked at index");
}

