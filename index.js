function increaseHeartCount() {
  const heartNum = document.getElementById("heartNum");
  let heartCount = parseInt(heartNum.innerText);
  heartNum.innerText = heartCount + 1;
}
function increaseCopyCount() {
  const copyElement = document.getElementById("copyNum");
  let copyCount = parseInt(copyElement.innerText);
  copyElement.innerText = copyCount + 1;
}
function decreaseCoinCount() {
  const coinElement = document.getElementById("coinNum");
  let currentCount = parseInt(coinElement.textContent);
  if (currentCount >= 20) {
    coinElement.textContent = currentCount - 20;
  }
}

function setupHeartButtons() {
  const heartButtons = document.querySelectorAll(".favorite");
  heartButtons.forEach(button => {
    button.addEventListener("click", increaseHeartCount);
  });
}


function copyPaste(){
    const copyButton =document.querySelectorAll(".copy-btn")
    copyButton.forEach(button => {
        button.addEventListener("click", increaseCopyCount);
    });
    
}

function checkCoin(){
    const coinElement = document.getElementById("coinNum");
    let currentCoin = parseInt(coinElement.textContent);
    if (currentCoin >= 20){
        decreaseCoinCount();
        return true;
    }
    else{
        return false;
    }

}

function callButton(){
    const callButton =document.querySelectorAll(".call-btn")
    callButton.forEach(button => {
        button.addEventListener("click", function(){
            if (checkCoin()){
                alert("Calling...");
            }
            else{
                alert("Not enough coins!");
            }
        });
    });

}

setupHeartButtons();
copyPaste();
callButton();