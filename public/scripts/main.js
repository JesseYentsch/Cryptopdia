console.log("JS was loaded");

var getStartedBtn=document.getElementById('getStarted');
getStartedBtn.addEventListener('click', startedBtn);

function startedBtn (){
    location.href="/cryptocurrency";
}

