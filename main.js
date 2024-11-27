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
const boxs = document.getElementsByClassName("box")

const sugg = document.querySelector(".sugg")

const attr = boxs.getAttribute("pos_player")
const arr = []
 
if (arr.length == 0) {
    Array.from(boxs).map((item, i) => {
      return item.innerHTML = `<img class="boxImg " src="./src/assets/img/badge_gold.webp" alt="" >
                        <div class="absolute top-0 boxStats">
                            <div class="flex">           
                                <div class="flex justify-center items-center">
                                   <img class="w-[135px]" src="./src/assets/img/unknown.png" alt="">
                                   <i class="absolute fa-solid fa-plus" style="font-size: 6rem; color: #29a682bf;"></i>
                                </div>
                            </div>
                        </div>
                        <div class="rounded-[60%] positionCss">ST</div>`
    }   
)
}
    
butnSubmit.addEventListener("click",(e) => {
    e.preventDefault()    
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
        passingInput: passingInput.value       
     })
    console.log(arr)
    handlePlayerBox()
    }
) 

function handlePlayerBox(){
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
                                    <img class="w-[30px]" src="https://cdn.sofifa.net/meta/team/3468/120.png" alt="">
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
 