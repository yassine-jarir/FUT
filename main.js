const butnSubmit = document.querySelector(".SubmitBtn")
  
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




const arr = []
 const suggArr = []
if (arr.length == 0) {
    Array.from(boxs).map((item, i) => {
      return item.innerHTML = `<img class="boxImg " src="./src/assets/img/badge_gold.webp" alt="" >
                        <div class="absolute top-0 boxStats">
                            <div class="flex">           
                                <div class="flex justify-center items-center">
                                   <img class="w-[135px]" src="./src/assets/img/unknown.png" alt="">
                                 </div>
                            </div>
                        </div>
                        <div class="rounded-[60%] positionCss">ST</div>`
    }   
)
}
    
butnSubmit.addEventListener("click",(e) => {
    e.preventDefault() 

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
        console.log("sd",positionInput.value)
         // check position if its empty 



      const gktest =   Array.from(boxs).filter((box, i) => console.log(`${i}`,box))
      console.log(gktest)
        
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
            game: "basic"
         })

         const checkPlayerExist = gktest.filter((box) =>
         {
            const boxCheck = document.querySelector(`.${positionInput.value}`)
return boxCheck
         })
        
         
         // get box depend on position and check if its null 
         console.log("checkPlayerExist", checkPlayerExist)
         
        }
    else if(playerExists && existingPlayer.game == "basic"){
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

// 1 check the player card 
// 2 check the player changement 
// 3 add the player 

function handlePlayerBox(){
    console.log(Array.from(boxs).length)
    console.log(boxs)
    for (let i = 0; i < Array.from(boxs).length; i++) {
        boxs.forEach((box) => {
            const posPlayer = box.getAttribute("pos_player");
            if (posPlayer === "GK") {
                box.innerHTML = `
                  <img class="boxImgq h-[315px]" src="./src/assets/img/badge_gold.webp" alt="">
                  <div class="absolute top-0 boxStats">
                    <div class="flex">
                      <div class="flex flex-col font-bold justify-center items-center">
                        <span>81</span>
                        <span class="font-medium">wd</span>
                        <img class="w-[30px]" src="https://cdn.sofifa.net/flags/br.png" alt="">
                        <img class="w-[30px]" src="https://cdn.sofifa.net/meta/team/3468/120.png" alt="">
                      </div>
                      <div>
                        <img class="w-[76px]" src="https://cdn.sofifa.net/players/238/794/25_120.png" alt="">
                      </div>
                    </div>
                    you dont get it i when i submit the form it have to do some checks so if 
                    the player is in the player card add it to the player card if its not 
                    add it to the changenent card 
                    <div class="flex flex-col justify-center items-center w-full">
                      <h4 class="font-bold">wd</h4>
                      <div class="flex w-full flex justify-around">
                        <div class="flex flex-col">
                          <div class="flex spanBox">
                            <span>wdd</span>
                            <span>PAC</span>
                          </div>
                          <div class="flex spanBox">
                            <span>wdwd</span>
                            <span>PAC</span>
                          </div>
                          <div class="flex spanBox">
                            <span>wdd</span>
                            <span>PAC</span>
                          </div>
                          <div class="flex spanBox">
                            <span>wdd</span>
                            <span>PAC</span>
                          </div>
                        </div>
                        <div class="flex flex-col">
                          <div class="flex spanBox">
                            <span>ddd</span>
                            <span>PAC</span>
                          </div>
                          <div class="flex spanBox">
                            <span>dd </span>
                            <span>PAC</span>
                          </div>
                          <div class="flex spanBox">
                            <span>wdd</span>
                            <span>PAC</span>
                          </div>
                          <div class="flex spanBox">
                            <span>wdd</span>
                            <span>PAC</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                `;
            }
    }
        )
     }
    playersBox.innerHTML = ""

arr.map((item) => {
  return  playersBox.innerHTML += `<div class="box">
                        <img class="boxImgq h-[315px]" src="./src/assets/img/badge_gold.webp" alt="">
                        <div class="absolute top-0 boxStats">
                            <div class="flex">
                                <div class="flex flex-col font-bold	justify-center items-center ">
                                    <span>81</span>
                                    <span class="font-medium">${item.positionInput}</span>
                                    <img class="w-[30px]" src="https://cdn.sofifa.net/flags/br.png" alt="">
                                    <i class="w-[30px]" src="https://cdn.sofifa.net/meta/team/3468/120.png" alt="">
                                 </div>
                                <div>
                                   <img class="w-[76px]" src="https://cdn.sofifa.net/players/238/794/25_120.png" alt="">
                                </div>
                            </div>

                            <div class="flex flex-col justify-center items-center w-full ">
                                <h4 class="font-bold ">${item?.nameInput}</h4>
                                <div class="flex w-full flex justify-around">
                                    <div class="flex   flex-col">
                                        <div class="flex spanBox">
                                            <span>${item.paceInput}</span>
                                            <span>PAC</span>
                                        </div>
                                        <div class="flex spanBox">
                                            <span>${item?.shootingInput}</span>
                                            <span>PAC</span>
                                        </div>
                                        <div class="flex spanBox">
                                            <span>${item?.passingInput}</span>
                                            <span>PAC</span>
                                        </div>
                                          <div class="flex spanBox">
                                            <span>${item.dribblingInput}</span>
                                            <span>PAC</span>
                                        </div>
                                    </div>
                                    <div class="flex   flex-col  ">
                                        <div class="flex spanBox">
                                            <span>${item.clubInput}</span>
                                            <span>PAC</span>
                                        </div>
                                        <div class="flex spanBox">
                                            <span>${item.defendingInput}</span>
                                            <span>PAC</span>
                                        </div>
                                        <div class="flex spanBox">
                                            <span>${item.physicalInput}</span>
                                            <span>PAC</span>
                                        </div>
                                        <div class="flex spanBox">
                                            <span>${item.paceInput}</span>
                                            <span>PAC</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
        }
    )
}
 