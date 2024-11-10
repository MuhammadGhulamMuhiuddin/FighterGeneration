var moveTowards = 0;
function hulkFun() {
  console.log(event.keyCode);

  var character = document.getElementById("character");
  if(event.keyCode === 65){
    moveTowards = moveTowards + 10;
    character.style.left = moveTowards + "px"
  }
  if(event.keyCode === 66){
    moveTowards = moveTowards - 10;
    character.style.left = moveTowards + "px"
  }
  if(event.keyCode === 67){
    character.style.width = "450px"
    character.style.height = "450px"
     character.src = "images/hulk-2.gif"
    
  }
  if(event.keyCode === 68){
    character.style.width = "450px"
    character.style.height = "450px"
    character.src = "images/hulk-3.gif"
    
  }
}
window.onkeydown = hulkFun;



var moveForward = 0;
function thonusFun() {
  console.log(event.keyCode);

  var character = document.getElementById("character2");
  if(event.keyCode === 69){
    moveForward = moveForward + 10;
    character2.style.left = moveForward + "px"
  }
  if(event.keyCode === 70){
    moveForward = moveForward - 10;
    character2.style.left = moveForward + "px"
  }
  if(event.keyCode === 71){
    character2.style.width = "450px"
    character2.style.height = "450px"
     character2.src = "images/thonus5.gif"
    
  }
  if(event.keyCode === 72){
    character2.style.width = "450px"
    character2.style.height = "450px"
    character2.src = "images/thonus6.gif"
    
  }
}
window.onkeydown = thonusFun;