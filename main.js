let playerAtrr = null

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
console.log(physicalInput.value)
const sugg = document.querySelector(".sugg")

console.log(positionInput.value)

const arr = []
 const suggArr = []

 
butnSubmit.addEventListener("click",(e) => {
    e.preventDefault() 

    if(butnSubmit.textContent == "modifier le joueur"){
        updatePlayer()
        return
    }

    const playerExists = arr.some((existingPlayer) =>  existingPlayer.nameInput == nameInput.value );
    const existingPlayer = arr.find((player) => 
    {
        if(player.nameInput === nameInput.value){
            return player
        }
    }     
);
  
console.log("existingPlayer", existingPlayer)
if(playerExists){
console.log("player already exist");
}
     if (!playerExists) {
        const positionInput = document.querySelector(".positionInput")

        console.log("sd",positionInput.value)
         // check position if its empty 

const boxCheck = document.querySelector(`.${positionInput.value}`);

console.log("boxCheck", boxCheck);


const gktest = Array.from(boxs).filter((item,i) => {
    if (item.classList.contains(positionInput.value)) {
        const positionInput = document.querySelector(".positionInput")
        console.log("pos",positionInput.value)
        const test = item.querySelector('.test');
        console.log("testt",test)
        if (test.textContent == "") {
            arr.push({
                nameInput :nameInput.value ,
                positionInput: positionInput.value,
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
             })
             boxCheck.innerHTML = ` <div class="suggBox  " player-id="${i}">
             <div class="btnCss hidden">
                    <i player-id="${nameInput.value}" class="updatePlayer btnU fa-solid fa-pen"></i> 
                    <i player-id="${i} class="deletePlayer btnU fa-solid fa-trash"></i> 
                        </div>
                        <img class="boxImg" src="./src/assets/img/badge_gold.webp" alt="">
                        <div class="absolute top-0 boxStats">
                            <div class="flex">
                                <div class="flex flex-col font-bold	justify-center items-center ">
                                    <span></span>
                                    <span class="font-medium">${positionInput.value}</span>
                                    <img class="w-[30px]" src="https://cdn.sofifa.net/flags/br.png" alt="">
                                    <img class="w-[30px]" src="https://cdn.sofifa.net/meta/team/3468/120.png" alt="">
                                 </div>
                                <div>
                                   <img class="w-[76px]" src="https://cdn.sofifa.net/players/238/794/25_120.png" alt="">
                                </div>
                            </div>

                         <div class="flex flex-col justify-center items-center w-full ">
                                <h4 class="font-bold ">${nameInput.value}</h4>
                                <div class="flex w-full flex justify-around">
                                    <div class="flex   flex-col">
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
                                    <div class="flex   flex-col  ">
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



             return console.log("empty")
        } else {
            arr.push({
                nameInput :nameInput.value ,
                positionInput: positionInput.value,
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
             })
             playersBox.innerHTML +=
              `
                    <div class="suggBox  ">
                    <div>
                            <button class="updatePlayer"><i class="fa-solid fa-pen"></i></button>
                            <button class="deletePlayer"><i class="fa-solid fa-trash"></i></button>
                        </div>
                        <img class="boxImg" src="./src/assets/img/badge_gold.webp" alt="">
                     <i class="updateBtn fa-solid fa-pencil"></i>
                     <i class="trash fa-solid fa-trash"></i>
                        <div class="absolute top-0 boxStats">
                            <div class="flex">
                                <div class="flex flex-col font-bold	justify-center items-center ">
                                   
                                <span></span>
                                    <span class="font-medium">${positionInput.value}</span>
                                    <img class="w-[30px]" src="https://cdn.sofifa.net/flags/br.png" alt="">
                                    <img class="w-[30px]" src="https://cdn.sofifa.net/meta/team/3468/120.png" alt="">
                                 </div>
                                <div>
                                   <img class="w-[76px]" src="https://cdn.sofifa.net/players/238/794/25_120.png" alt="">
                                </div>
                            </div>

                         <div class="flex flex-col justify-center items-center w-full ">
                                <h4 class="font-bold ">${nameInput.value}</h4>
                                <div class="flex w-full flex justify-around">
                                    <div class="flex   flex-col">
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
                                    <div class="flex   flex-col  ">
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
        }
    }
});
  
    console.log(gktest);
        return
        }
    else if( existingPlayer.game == "basic"){
        existingPlayer.game = "remplacment"
        const sugPlayers = Array.from(arr).filter((player) => {
          if(player.game == "remplacment"){
            return player
          }
        }
        )
       console.log("sugPlayers", sugPlayers)
       return
    }else{
       console.log("done")
    }
    
     console.log(arr)
    }
) 
 

// update
let playerCard = document.querySelector(".playerCard")

console.log(playerAtrr)
playerCard.addEventListener("click",(e) => {

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
        

)
 


function updatePlayer(){
    if (playerAtrr.length > 0) {  
        const playerObj =  arr.filter((player) => player.nameInput == playerAtrr)

        const player = playerObj[0];  
        console.log("update click player", player)

        player.nameInput = nameInput.value = 
        // positionInput.value = player.positionInput;
        // nationalityInput.value = player.nationalInput;
        // // imageInput.value = player.ima;
        // paceInput.value = player.paceInput;
        // shootingInput.value = player.shootingInput;
        // passingInput.value = player.passingInput;
        // dribblingInput.value = player.dribblingInput;
        // clubInput.value = player.clubInput;
        // defendingInput.value = player.defendingInput;
        // physicalInput.value = player.physicalInput;

        //  console.log("player is update", playerObj)

        //  SubmitBtn.style
        butnSubmit.textContent = "add le joueur"

  }else{
    console.log("update err")
  }

}