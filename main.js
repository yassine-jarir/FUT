let playerAtrr = []

const butnSubmit = document.querySelector(".SubmitBtn")
const singleBox = document.querySelector(".box")
const nameInput = document.querySelector(".nameInput")
const positionInput = document.querySelector(".positionInput")
const nationalInput = document.querySelector(".nationalInput")
const imageInput = document.querySelector(".imageInput")
const paceInput = document.querySelector(".PaceInputs")
const shootingInput = document.querySelector(".shootingInput")
const passingInput = document.querySelector(".passingInput")
const dribblingInput = document.querySelector(".dribblingInput")
const clubInput = document.querySelector(".clubInput")
const defendingInput = document.querySelector(".defendingInput")
const physicalInput = document.querySelector(".physicalInput")
const playersBox = document.querySelector(".playersBox")
const boxs = document.querySelectorAll(".box")
const sugg = document.querySelector(".sugg")

 
const arr =  []
 
//  add
 function addPlayer(positionValue) {
    const boxCheck = document.querySelector(`.${positionValue}`);
 
    const gktest = Array.from(boxs).filter((item, i) => {
        if (item.classList.contains(positionValue)) {
            const test = item.querySelector('.test');
            console.log("test", test);
            if (test.textContent == "") {
                // Add new player to the array and update the UI
                arr.push({
                    nameInput: nameInput.value,
                    positionInput: positionValue,
                    nationalInput: nationalInput.value,
                    imageInput: imageInput.value,
                    shootingInput: shootingInput.value,
                    dribblingInput: dribblingInput.value,
                    clubInput: clubInput.value,
                    defendingInput: defendingInput.value,
                    physicalInput: physicalInput.value,
                    paceInput: paceInput.value,
                    passingInput: passingInput.value,
                    game: "bsasic"
                });

                boxCheck.innerHTML = `
                    <div class="box" player-id="${i}">
                        <div class="btnCss hidden">
                            <i player-id="${nameInput.value}" class="updatePlayer btnU fa-solid fa-pen"></i>
                            <i player-id="${nameInput.value}" class="deletePlayer btnU fa-solid fa-trash"></i>
                        </div>
                        <img class="boxImg" src="./src/assets/img/badge_gold.webp" alt="">
                        <div class="absolute top-0 boxStats">
                            <div class="flex">
                                <div class="flex flex-col font-bold justify-center items-center">
                                    <span></span>
                                    <span class="font-medium">${positionValue}</span>
                                    <img class="w-[30px]" src="https://cdn.sofifa.net/flags/br.png" alt="">
                                    <img class="w-[30px]" src="https://cdn.sofifa.net/meta/team/3468/120.png" alt="">
                                </div>
                                <div>
                                    <img class="w-[76px]" src="https://cdn.sofifa.net/players/238/794/25_120.png" alt="">
                                </div>
                            </div>
                            <div class="flex flex-col justify-center items-center w-full">
                                <h4 class="font-bold">${nameInput.value}</h4>
                                <div class="flex w-full flex justify-around">
                                    <div class="flex flex-col">
                                        <div class="flex spanBox">
                                            <span class="test">${paceInput.value}</span>
                                            <span>PAC</span>
                                        </div>
                                        <div class="flex spanBox">
                                            <span>${shootingInput.value}</span>
                                            <span>PAC</span>
                                        </div>
                                        <div class="flex spanBox">
                                            <span>${passingInput.value}</span>
                                            <span>PAC</span>
                                        </div>
                                        <div class="flex spanBox">
                                            <span>${dribblingInput.value}</span>
                                            <span>PAC</span>
                                        </div>
                                    </div>
                                    <div class="flex flex-col">
                                        <div class="flex spanBox">
                                            <span>${clubInput.value}</span>
                                            <span>PAC</span>
                                        </div>
                                        <div class="flex spanBox">
                                            <span>${defendingInput.value}</span>
                                            <span>PAC</span>
                                        </div>
                                        <div class="flex spanBox">
                                            <span>${physicalInput.value}</span>
                                            <span>PAC</span>
                                        </div>
                                        <div class="flex spanBox">
                                            <span>${paceInput.value}</span>
                                            <span>PAC</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rounded-[60%] positionCss">${positionInput.value}</div>
                    </div>
                `;
                return console.log("empty");
            } else {
                // Add new player as replacement if box is occupied
                arr.push({
                    nameInput: nameInput.value,
                    positionInput: positionValue,
                    nationalInput: nationalInput.value,
                    imageInput: imageInput.value,
                    shootingInput: shootingInput.value,
                    dribblingInput: dribblingInput.value,
                    clubInput: clubInput.value,
                    defendingInput: defendingInput.value,
                    physicalInput: physicalInput.value,
                    paceInput: paceInput.value,
                    passingInput: passingInput.value,
                    game: "remplacement"
                });

                playersBox.innerHTML += `
                    <div class="suggBox ">
                        <div class="btnCss hidden">
                            <button player-id="${nameInput.value}" class="updatePlayer"><i class="fa-solid fa-pen"></i></button>
                            <button player-id="${nameInput.value}" class="deletePlayer"><i class="fa-solid fa-trash"></i></button>
                        </div>
                        <img class="boxImg" src="./src/assets/img/badge_gold.webp" alt="">
               
                        <div class="absolute top-0 boxStats">
                            <div class="flex">
                                <div class="flex flex-col font-bold justify-center items-center">
                                    <span></span>
                                    <span class="font-medium">${positionValue}</span>
                                    <img class="w-[30px]" src="https://cdn.sofifa.net/flags/br.png" alt="">
                                    <img class="w-[30px]" src="https://cdn.sofifa.net/meta/team/3468/120.png" alt="">
                                </div>
                                <div>
                                    <img class="w-[76px]" src="https://cdn.sofifa.net/players/238/794/25_120.png" alt="">
                                </div>
                            </div>
                            <div class="flex flex-col justify-center items-center w-full">
                                <h4 class="font-bold">${nameInput.value}</h4>
                                <div class="flex w-full flex justify-around">
                                    <div class="flex flex-col">
                                        <div class="flex spanBox">
                                            <span class="test">${paceInput.value}</span>
                                            <span>PAC</span>
                                        </div>
                                        <div class="flex spanBox">
                                            <span>${shootingInput.value}</span>
                                            <span>PAC</span>
                                        </div>
                                        <div class="flex spanBox">
                                            <span>${passingInput.value}</span>
                                            <span>PAC</span>
                                        </div>
                                        <div class="flex spanBox">
                                            <span>${dribblingInput.value}</span>
                                            <span>PAC</span>
                                        </div>
                                    </div>
                                    <div class="flex flex-col">
                                        <div class="flex spanBox">
                                            <span>${clubInput.value}</span>
                                            <span>PAC</span>
                                        </div>
                                        <div class="flex spanBox">
                                            <span>${defendingInput.value}</span>
                                            <span>PAC</span>
                                        </div>
                                        <div class="flex spanBox">
                                            <span>${physicalInput.value}</span>
                                            <span>PAC</span>
                                        </div>
                                        <div class="flex spanBox">
                                            <span>${paceInput.value}</span>
                                            <span>PAC</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rounded-[60%] positionCss">${positionInput.value}</div>
                    </div>
                `;
            }
        }
    });
}

butnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    if (butnSubmit.textContent == "modifier le joueur") {
        const positionValue = positionInput.value;
        updatePlayer(positionValue);
        const gktest = Array.from(boxs).filter((item, i) => {
            if (item.classList.contains(positionValue)) {
                const test = item.querySelector('.test');
                const boxCheck = document.querySelector(`.${positionValue}`);
                console.log("boxCheck", boxCheck);
                console.log("test", test);
             
                    
    
                boxCheck.innerHTML = `
                        <div class="box" player-id="${i}">
                            <div class="btnCss hidden">
                                <i player-id="${nameInput.value}" class="updatePlayer btnU fa-solid fa-pen"></i>
                                <i player-id="${nameInput.value}"  class="deletePlayer btnU fa-solid fa-trash"></i>
                            </div>
                            <img class="boxImg" src="./src/assets/img/badge_gold.webp" alt="">
                            <div class="absolute top-0 boxStats">
                                <div class="flex">
                                    <div class="flex flex-col font-bold justify-center items-center">
                                        <span></span>
                                        <span class="font-medium">${positionValue}</span>
                                        <img class="w-[30px]" src="https://cdn.sofifa.net/flags/br.png" alt="">
                                        <img class="w-[30px]" src="https://cdn.sofifa.net/meta/team/3468/120.png" alt="">
                                    </div>
                                    <div>
                                        <img class="w-[76px]" src="https://cdn.sofifa.net/players/238/794/25_120.png" alt="">
                                    </div>
                                </div>
                                <div class="flex flex-col justify-center items-center w-full">
                                    <h4 class="font-bold">${nameInput.value}</h4>
                                    <div class="flex w-full flex justify-around">
                                        <div class="flex flex-col">
                                            <div class="flex spanBox">
                                                <span class="test">${paceInput.value}</span>
                                                <span>PAC</span>
                                            </div>
                                            <div class="flex spanBox">
                                                <span>${shootingInput.value}</span>
                                                <span>PAC</span>
                                            </div>
                                            <div class="flex spanBox">
                                                <span>${passingInput.value}</span>
                                                <span>PAC</span>
                                            </div>
                                            <div class="flex spanBox">
                                                <span>${dribblingInput.value}</span>
                                                <span>PAC</span>
                                            </div>
                                        </div>
                                        <div class="flex flex-col">
                                            <div class="flex spanBox">
                                                <span>${clubInput.value}</span>
                                                <span>PAC</span>
                                            </div>
                                            <div class="flex spanBox">
                                                <span>${defendingInput.value}</span>
                                                <span>PAC</span>
                                            </div>
                                            <div class="flex spanBox">
                                                <span>${physicalInput.value}</span>
                                                <span>PAC</span>
                                            </div>
                                            <div class="flex spanBox">
                                                <span>${paceInput.value}</span>
                                                <span>PAC</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="rounded-[60%] positionCss">GK</div>
                        </div>
                    `;
                    return console.log("empty");
             
             
            }
        });


        console.log("arr log",arr)
        return;
    }

    const playerExists = arr.some((existingPlayer) => existingPlayer.nameInput == nameInput.value);
    const existingPlayer = arr.find((player) => player.nameInput === nameInput.value);

    if (playerExists) {
        console.log("player already exist");
    }

    if (!playerExists) {
        const positionValue = positionInput.value;
        addPlayer(positionValue); 
        console.log("player arr",arr)
        return;
    } else if (existingPlayer.game == "basic") {
        existingPlayer.game = "remplacement";
        const sugPlayers = Array.from(arr).filter((player) => player.game == "remplacement");
        console.log("sugPlayers", sugPlayers);
        return;
    } else {
        console.log("done");
    }
});

 
// update
let playerCard = document.querySelector(".playerCard")
console.log(playerAtrr)


playerCard.addEventListener("click",(e) => {
 console.log(e.target)
 if (e.target.classList.contains("updatePlayer")) {

let nameInput = document.querySelector('.nameInput');
let positionInput = document.querySelector('.positionInput');
let nationalityInput = document.querySelector('.nationalInput');
let imageInput = document.querySelector('.imageInput');
let paceInput = document.querySelector('.PaceInputs');
let shootingInput = document.querySelector('.shootingInput');
let passingInput = document.querySelector('.passingInput');
let dribblingInput = document.querySelector('.dribblingInput');
let clubInput = document.querySelector('.clubInput');
let defendingInput = document.querySelector('.defendingInput');
let physicalInput = document.querySelector('.physicalInput');
let paceInputField = document.querySelector('.paceInput');


 playerAtrr = e.target.getAttribute('player-id');
console.log("playerAtrr",playerAtrr)
 
 

    const playerObj =  arr.filter((player) => player.nameInput == playerAtrr)
        console.log(playerObj.length)
    if (playerObj.length > 0) {  
        const player = playerObj[0];  
        console.log("update click player", player)

        nameInput.value = player.nameInput
        positionInput.value = player.positionInput;
        nationalityInput.value = player.nationalInput;
        // imageInput.value = player.ima;
        paceInput.value = player.paceInput;
        shootingInput.value = player.shootingInput;
        passingInput.value = player.passingInput;
        dribblingInput.value = player.dribblingInput;
        clubInput.value = player.clubInput;
        defendingInput.value = player.defendingInput;
        physicalInput.value = player.physicalInput;

         console.log("player is update", playerObj)

        //  SubmitBtn.style
        butnSubmit.textContent = "modifier le joueur"

  }else{
    console.log("update err")
  }
}
// delete
else if(e.target.classList.contains("deletePlayer")){
             const playerId = e.target.getAttribute("player-id");
             console.log(playerId)
       
            for (let i = 0; i < arr.length; i++) {
                if(arr[i].nameInput == playerId){
                console.log(arr[i])
               const playerPos = arr[i].positionInput
                arr.splice(i,1)

                const playerBox = e.target.closest(".box");
                playerBox.textContent = ""
                     const boxImg = document.createElement("img");
                    boxImg.classList.add("boxImg");
                    boxImg.src = "./src/assets/img/badge_gold.webp";
                    boxImg.alt = "";

                    const boxStats = document.createElement("div");
                    boxStats.classList.add("absolute", "top-0", "boxStats");

                    const flexDiv = document.createElement("div");
                    flexDiv.classList.add("flex");

                    const testSpan = document.createElement("span");
                    testSpan.classList.add("test");
                     testSpan.textContent = "";  

                    const flexCenterDiv = document.createElement("div");
                    flexCenterDiv.classList.add("flex", "justify-center", "items-center");

                    const imgElement = document.createElement("img");
                    imgElement.classList.add("w-[135px]");
                    imgElement.src = "./src/assets/img/unknown.png";
                    imgElement.alt = "";

                     flexDiv.appendChild(testSpan);
                    flexCenterDiv.appendChild(imgElement);
                    boxStats.appendChild(flexDiv);
                    boxStats.appendChild(flexCenterDiv);

                     const positionLabel = document.createElement("div");
                    positionLabel.classList.add("rounded-[60%]", "positionCss");
                    positionLabel.textContent = playerPos;  

                     playerBox.appendChild(boxImg);
                    playerBox.appendChild(boxStats);
                    playerBox.appendChild(positionLabel);

  
            }
        }
        
        console.log("player delted",arr)
 
 }
 }
)
 
function updatePlayer(){
    if (playerAtrr.length > 0) {  
        const playerObj =  arr.filter((player) => player.nameInput == playerAtrr)

        const player = playerObj[0];  
      
        player.nameInput = nameInput.value 
        player.nameInput = nameInput.value;
        player.nationalInput = nationalInput.value;
        player.imageInput = imageInput.value;
        player.paceInput = paceInput.value;
        player.shootingInput = shootingInput.value;
        player.passingInput = passingInput.value;
        player.dribblingInput = dribblingInput.value;
        player.clubInput = clubInput.value;
        player.defendingInput = defendingInput.value;
        player.physicalInput = physicalInput.value;
        
        console.log("player is updated", player);
 
        butnSubmit.textContent = "add le joueur"

  }else{
    console.log("update err")
  }

}

 