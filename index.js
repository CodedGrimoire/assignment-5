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
  if (currentCount > 20) {
    coinElement.textContent = currentCount - 1;
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

setupHeartButtons();
copyPaste();