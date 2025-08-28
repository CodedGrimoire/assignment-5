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


function copyPaste() {
    const copyButton = document.querySelectorAll(".copy-btn");

    copyButton.forEach(button => {
        button.addEventListener("click", function(){
            // 1. Find the parent card
            const card = button.closest(".flashcards");

            // 2. Get the text to copy (example: phone number)
            const numberElement = card.querySelector(".phone-number");
            const numberText = numberElement.textContent.trim();

            // 3. Copy to clipboard
            navigator.clipboard.writeText(numberText)
                .then(() => {
                    console.log(`Copied: ${numberText}`);

                    // 4. Increase your built-in counter
                    increaseCopyCount();
                })
                .catch(err => {
                    console.error("Failed to copy:", err);
                });
        });
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
const callHistory = [];
function addToCallHistory(title, number) {
     const timestamp = new Date().toLocaleTimeString();
    callHistory.push({ title, number, timestamp });
    showCallHistory();
   
    
   
}
function showCallHistory() {
    const callList = document.querySelector(".call-list");
    callList.innerHTML = "";

    callHistory.forEach(entry => {
        const callItem = document.createElement("div");
        callItem.classList.add("call-item");
        callItem.innerHTML = `
            <div>
                <strong>${entry.title}</strong>
                <small>${entry.number}</small>
            </div>
            <span class="time">${entry.timestamp}</span>
        `;
        callList.appendChild(callItem);
    });
}
function callButton(){
    const callButton =document.querySelectorAll(".call-btn")
    callButton.forEach(button => {
        button.addEventListener("click", function(){
             const card = button.closest(".flashcards");
             const numberElement = card.querySelector(".phone-number");
            const numberText = numberElement.textContent.trim();
            const titleElement = card.querySelector(".description");
            const titleText = titleElement.textContent.trim();
           
            if (checkCoin()){
                alert("📞 Calling " + titleText + " at " + numberText+"...");
                addToCallHistory(titleText, numberText);
            }
            else{
                alert("❌ Not enough coins! You need at least 20 coins to make a call.");
            }
        });
    });

}
function clearCallHistory() {
    document.getElementById("clr-btn")
.addEventListener("click", function() {
        callHistory.length = 0; 
        showCallHistory(); 
    });
}
setupHeartButtons();
copyPaste();
callButton();
clearCallHistory();
