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
const sugg = document.querySelector(".sugg")

let arr = JSON.parse(localStorage.getItem('players')) || [];
console.log(arr)
// display all from local
    let positionDisplay = ["GK","ST1","ST2","CM1","CM2","LM","RM","LB","RB","CB2","CB1"]
    if (arr.length > 0 ) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0 ; j < positionDisplay.length; j++) {

           if (positionDisplay[j] == arr[i].positionInput) {
            Array.from(boxs).filter((item) => {
                if (item.classList.contains(positionDisplay[j])) {
                    const test = item.querySelector('.test');
                    console.log("test", test);
                    console.log("positionDisplay[j]", positionDisplay[j]);
                    if (test.textContent == "") {
                        const boxCheck = document.querySelector(`.${arr[i].positionInput}`);

                       boxCheck.textContent = ""
                       const box = document.createElement('div');
                       box.classList.add('box');
                       // box.setAttribute('player-id', i);
                       
                       const btnCss = document.createElement('div');
                       btnCss.classList.add('btnCss', 'hidden');
                       
                       const updateBtn = document.createElement('i');
                       updateBtn.classList.add('updatePlayer', 'btnU', 'fa-solid', 'fa-pen');
                       updateBtn.setAttribute('player-id', arr[i].nameInput);
                       
                       const deleteBtn = document.createElement('i');
                       deleteBtn.classList.add('deletePlayer', 'btnU', 'fa-solid', 'fa-trash');
                       deleteBtn.setAttribute('player-id', arr[i].nameInput);
                       
                       btnCss.appendChild(updateBtn);
                       btnCss.appendChild(deleteBtn);
                       
                       const boxImg = document.createElement('img');
                       boxImg.classList.add('boxImg');
                       boxImg.src = './src/assets/img/badge_gold.webp';
                       boxImg.alt = '';
                       
                       const boxStats = document.createElement('div');
                       boxStats.classList.add('absolute', 'top-0', 'boxStats');
                       
                       const flex1 = document.createElement('div');
                       flex1.classList.add('flex');
                       
                       const flexColumn = document.createElement('div');
                       flexColumn.classList.add('flex', 'flex-col', 'font-bold', 'justify-center', 'items-center');
                       
                       const positionText = document.createElement('span');
                       const positionSpan = document.createElement('span');
                       positionSpan.classList.add('font-medium');
                       positionSpan.textContent = arr[i].positionInput;
                       
                       const flagImg = document.createElement('img');
                       flagImg.classList.add('w-[30px]');
                       flagImg.src = 'https://cdn.sofifa.net/flags/br.png';
                       flagImg.alt = '';
                       
                       const teamImg = document.createElement('img');
                       teamImg.classList.add('w-[30px]');
                       teamImg.src = 'https://cdn.sofifa.net/meta/team/3468/120.png';
                       teamImg.alt = '';
                       
                       flexColumn.appendChild(positionText);
                       flexColumn.appendChild(positionSpan);
                       flexColumn.appendChild(flagImg);
                       flexColumn.appendChild(teamImg);
                       
                       const playerImg = document.createElement('img');
                       playerImg.classList.add('w-[76px]');
                       playerImg.src = arr[i].imageInput;
                       playerImg.alt = '';
                       
                       flex1.appendChild(flexColumn);
                       flex1.appendChild(playerImg);
                       
                       const flex2 = document.createElement('div');
                       flex2.classList.add('flex', 'flex-col', 'justify-center', 'items-center', 'w-full');
                       
                       const playerName = document.createElement('h4');
                       playerName.classList.add('font-bold');
                       playerName.textContent = arr[i].nameInput;
                       
                       const statContainer = document.createElement('div');
                       statContainer.classList.add('flex', 'w-full', 'flex', 'justify-around');
                       
                       const statColumn1 = document.createElement('div');
                       statColumn1.classList.add('flex', 'flex-col');
                       
                       const statColumn2 = document.createElement('div');
                       statColumn2.classList.add('flex', 'flex-col');
                       
                        const statBox1 = document.createElement('div');
                       statBox1.classList.add('flex', 'spanBox');
                       const statValue1 = document.createElement('span');
                       statValue1.textContent = arr[i].paceInput;
                       statValue1.classList.add('test');
       
                       const statLabel1 = document.createElement('span');
                       statLabel1.textContent = 'PAC';
                       statBox1.appendChild(statValue1);
                       statBox1.appendChild(statLabel1);
                       
                       const statBox2 = document.createElement('div');
                       statBox2.classList.add('flex', 'spanBox');
                       const statValue2 = document.createElement('span');
                    //    statValue2 = document.classList.add("rates")
                       statValue2.textContent = arr[i].shootingInput;
                       const statLabel2 = document.createElement('span');
                       statLabel2.textContent = 'SHO';
                       statBox2.appendChild(statValue2);
                       statBox2.appendChild(statLabel2);
                       
                       const statBox3 = document.createElement('div');
                       statBox3.classList.add('flex', 'spanBox');
                       const statValue3 = document.createElement('span');
                       statValue3.textContent = arr[i].passingInput;
                       const statLabel3 = document.createElement('span');
                       statLabel3.textContent = 'PAS';
                       statBox3.appendChild(statValue3);
                       statBox3.appendChild(statLabel3);
                       
                       const statBox4 = document.createElement('div');
                       statBox4.classList.add('flex', 'spanBox');
                       const statValue4 = document.createElement('span');
                       statValue4.textContent = arr[i].dribblingInput;
                       const statLabel4 = document.createElement('span');
                       statLabel4.textContent = 'DRI';
                       statBox4.appendChild(statValue4);
                       statBox4.appendChild(statLabel4);
                       
                       const statBox5 = document.createElement('div');
                       statBox5.classList.add('flex', 'spanBox');
                       const statValue5 = document.createElement('span');
                       statValue5.textContent = arr[i].clubInput;
                       const statLabel5 = document.createElement('span');
                       statLabel5.textContent = 'CLUB';
                       statBox5.appendChild(statValue5);
                       statBox5.appendChild(statLabel5);
                       
                       const statBox6 = document.createElement('div');
                       statBox6.classList.add('flex', 'spanBox');
                       const statValue6 = document.createElement('span');
                       statValue6.textContent = arr[i].defendingInput;
                       const statLabel6 = document.createElement('span');
                       statLabel6.textContent = 'DEF';
                       statBox6.appendChild(statValue6);
                       statBox6.appendChild(statLabel6);
                       
                       const statBox7 = document.createElement('div');
                       statBox7.classList.add('flex', 'spanBox');
                       const statValue7 = document.createElement('span');
                       statValue7.textContent =arr[i].physicalInput;
                       const statLabel7 = document.createElement('span');
                       statLabel7.textContent = 'PHY';
                       statBox7.appendChild(statValue7);
                       statBox7.appendChild(statLabel7);
                       
                       const statBox8 = document.createElement('div');
                       statBox8.classList.add('flex', 'spanBox');
                       const statValue8 = document.createElement('span');
                       statValue8.textContent = arr[i].paceInput;
                       const statLabel8 = document.createElement('span');
                       statLabel8.textContent = 'PAC';
                       statBox8.appendChild(statValue8);
                       statBox8.appendChild(statLabel8);
                       
                       statColumn1.appendChild(statBox1);
                       statColumn1.appendChild(statBox2);
                       statColumn1.appendChild(statBox3);
                       statColumn1.appendChild(statBox4);
                       
                       statColumn2.appendChild(statBox5);
                       statColumn2.appendChild(statBox6);
                       statColumn2.appendChild(statBox7);
                       statColumn2.appendChild(statBox8);
                       
                       statContainer.appendChild(statColumn1);
                       statContainer.appendChild(statColumn2);
                       
                       flex2.appendChild(playerName);
                       flex2.appendChild(statContainer);
                       
                       boxStats.appendChild(flex1);
                       boxStats.appendChild(flex2);
                       
                       const position = document.createElement('div');
                       position.classList.add('rounded-[60%]', 'positionCss');
                       position.textContent = arr[i].positionInput;
                       
                       box.appendChild(btnCss);
                       box.appendChild(boxImg);
                       box.appendChild(boxStats);
                       box.appendChild(position);
                       
                       boxCheck.appendChild(box)
                        console.log("empty");
                   } 
                    else {
                        console.log("else=========")
                        const remplcementBox = document.querySelector(".playersBox")
                        const box = document.createElement('div');
                        box.classList.add('suggBox');
                        // box.setAttribute('player-id', i);
                        
                        const btnCss = document.createElement('div');
                        btnCss.classList.add('btnCss', 'hidden');
                        
                        const updateBtn = document.createElement('i');
                        updateBtn.classList.add('updatePlayer', 'btnU', 'fa-solid', 'fa-pen');
                        updateBtn.setAttribute('player-id', arr[i].nameInput);
                        
                        const deleteBtn = document.createElement('i');
                        deleteBtn.classList.add('deletePlayer', 'btnU', 'fa-solid', 'fa-trash');
                        deleteBtn.setAttribute('player-id', arr[i].nameInput);
                        
                        btnCss.appendChild(updateBtn);
                        btnCss.appendChild(deleteBtn);
                        
                        const boxImg = document.createElement('img');
                        boxImg.classList.add('boxImg');
                        boxImg.src = './src/assets/img/badge_gold.webp';
                        boxImg.alt = '';
                        
                        const boxStats = document.createElement('div');
                        boxStats.classList.add('absolute', 'top-0', 'boxStats');
                        
                        const flex1 = document.createElement('div');
                        flex1.classList.add('flex');
                        
                        const flexColumn = document.createElement('div');
                        flexColumn.classList.add('flex', 'flex-col', 'font-bold', 'justify-center', 'items-center');
                        
                        const positionText = document.createElement('span');
                        const positionSpan = document.createElement('span');
                        positionSpan.classList.add('font-medium');
                        positionSpan.textContent = arr[i].positionInput;
                        
                        const flagImg = document.createElement('img');
                        flagImg.classList.add('w-[30px]');
                        flagImg.src = 'https://cdn.sofifa.net/flags/br.png';
                        flagImg.alt = '';
                        
                        const teamImg = document.createElement('img');
                        teamImg.classList.add('w-[30px]');
                        teamImg.src = 'https://cdn.sofifa.net/meta/team/3468/120.png';
                        teamImg.alt = '';
                        
                        flexColumn.appendChild(positionText);
                        flexColumn.appendChild(positionSpan);
                        flexColumn.appendChild(flagImg);
                        flexColumn.appendChild(teamImg);
                        
                        const playerImg = document.createElement('img');
                        playerImg.classList.add('w-[76px]');
                        playerImg.src = arr[i].imageInput;
                        playerImg.alt = '';
                        
                        flex1.appendChild(flexColumn);
                        flex1.appendChild(playerImg);
                        
                        const flex2 = document.createElement('div');
                        flex2.classList.add('flex', 'flex-col', 'justify-center', 'items-center', 'w-full');
                        
                        const playerName = document.createElement('h4');
                        playerName.classList.add('font-bold');
                        playerName.textContent = arr[i].nameInput;
                        
                        const statContainer = document.createElement('div');
                        statContainer.classList.add('flex', 'w-full', 'flex', 'justify-around');
                        
                        const statColumn1 = document.createElement('div');
                        statColumn1.classList.add('flex', 'flex-col');
                        
                        const statColumn2 = document.createElement('div');
                        statColumn2.classList.add('flex', 'flex-col');
                        
                         const statBox1 = document.createElement('div');
                        statBox1.classList.add('flex', 'spanBox');
                        const statValue1 = document.createElement('span');
                        statValue1.textContent = arr[i].paceInput;
                        statValue1.classList.add('test');
        
                        const statLabel1 = document.createElement('span');
                        statLabel1.textContent = 'PAC';
                        statBox1.appendChild(statValue1);
                        statBox1.appendChild(statLabel1);
                        
                        const statBox2 = document.createElement('div');
                        statBox2.classList.add('flex', 'spanBox');
                        const statValue2 = document.createElement('span');
                        statValue2.textContent = arr[i].shootingInput;
                        const statLabel2 = document.createElement('span');
                        statLabel2.textContent = 'SHO';
                        statBox2.appendChild(statValue2);
                        statBox2.appendChild(statLabel2);
                        
                        const statBox3 = document.createElement('div');
                        statBox3.classList.add('flex', 'spanBox');
                        const statValue3 = document.createElement('span');
                        statValue3.textContent = arr[i].passingInput;
                        const statLabel3 = document.createElement('span');
                        statLabel3.textContent = 'PAS';
                        statBox3.appendChild(statValue3);
                        statBox3.appendChild(statLabel3);
                        
                        const statBox4 = document.createElement('div');
                        statBox4.classList.add('flex', 'spanBox');
                        const statValue4 = document.createElement('span');
                        statValue4.textContent = arr[i].dribblingInput;
                        const statLabel4 = document.createElement('span');
                        statLabel4.textContent = 'DRI';
                        statBox4.appendChild(statValue4);
                        statBox4.appendChild(statLabel4);
                        
                        const statBox5 = document.createElement('div');
                        statBox5.classList.add('flex', 'spanBox');
                        const statValue5 = document.createElement('span');
                        statValue5.textContent = arr[i].clubInput;
                        const statLabel5 = document.createElement('span');
                        statLabel5.textContent = 'CLUB';
                        statBox5.appendChild(statValue5);
                        statBox5.appendChild(statLabel5);
                        
                        const statBox6 = document.createElement('div');
                        statBox6.classList.add('flex', 'spanBox');
                        const statValue6 = document.createElement('span');
                        statValue6.textContent = arr[i].defendingInput;
                        const statLabel6 = document.createElement('span');
                        statLabel6.textContent = 'DEF';
                        statBox6.appendChild(statValue6);
                        statBox6.appendChild(statLabel6);
                        
                        const statBox7 = document.createElement('div');
                        statBox7.classList.add('flex', 'spanBox');
                        const statValue7 = document.createElement('span');
                        statValue7.textContent = arr[i].physicalInput;
                        const statLabel7 = document.createElement('span');
                        statLabel7.textContent = 'PHY';
                        statBox7.appendChild(statValue7);
                        statBox7.appendChild(statLabel7);
                        
                        const statBox8 = document.createElement('div');
                        statBox8.classList.add('flex', 'spanBox');
                        const statValue8 = document.createElement('span');
                        statValue8.textContent = arr[i].paceInput;
                        const statLabel8 = document.createElement('span');
                        statLabel8.textContent = 'PAC';
                        statBox8.appendChild(statValue8);
                        statBox8.appendChild(statLabel8);
                        
                        statColumn1.appendChild(statBox1);
                        statColumn1.appendChild(statBox2);
                        statColumn1.appendChild(statBox3);
                        statColumn1.appendChild(statBox4);
                        
                        statColumn2.appendChild(statBox5);
                        statColumn2.appendChild(statBox6);
                        statColumn2.appendChild(statBox7);
                        statColumn2.appendChild(statBox8);
                        
                        statContainer.appendChild(statColumn1);
                        statContainer.appendChild(statColumn2);
                        
                        flex2.appendChild(playerName);
                        flex2.appendChild(statContainer);
                        
                        boxStats.appendChild(flex1);
                        boxStats.appendChild(flex2);
                        
                        const position = document.createElement('div');
                        position.classList.add('rounded-[60%]', 'positionCss');
                        position.textContent = arr[i].positionInput;
                        
                        box.appendChild(btnCss);
                        box.appendChild(boxImg);
                        box.appendChild(boxStats);
                        box.appendChild(position);
                        
                        remplcementBox.appendChild(box)
                     
                    }
                }
            });
           }else{
                 console.log("bnodfdfdf")
           }
               
            }
        }
     }

//  add
 function addPlayer(positionValue) {
    const boxCheck = document.querySelector(`.${positionValue}`);
 
     Array.from(boxs).filter((item, i) => {
        if (item.classList.contains(positionValue)) {
            const test = item.querySelector('.test');
            console.log("test", test);
            if (test.textContent == "") {
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
                localStorage.setItem('players', JSON.stringify(arr));

                boxCheck.textContent = ""
                const box = document.createElement('div');
                box.classList.add('box');

           
                const btnCss = document.createElement('div');
                btnCss.classList.add('btnCss', 'hidden');
                
                const updateBtn = document.createElement('i');
                updateBtn.classList.add('updatePlayer', 'btnU', 'fa-solid', 'fa-pen');
                updateBtn.setAttribute('player-id', nameInput.value);
                
                const deleteBtn = document.createElement('i');
                deleteBtn.classList.add('deletePlayer', 'btnU', 'fa-solid', 'fa-trash');
                deleteBtn.setAttribute('player-id', nameInput.value);
                
                btnCss.appendChild(updateBtn);
                btnCss.appendChild(deleteBtn);
                
                const boxImg = document.createElement('img');
                boxImg.classList.add('boxImg');
                boxImg.src = './src/assets/img/badge_gold.webp';
                boxImg.alt = '';
                
                const boxStats = document.createElement('div');
                boxStats.classList.add('absolute', 'top-0', 'boxStats');
                
                const flex1 = document.createElement('div');
                flex1.classList.add('flex');
                
                const flexColumn = document.createElement('div');
                flexColumn.classList.add('flex', 'flex-col', 'font-bold', 'justify-center', 'items-center');
                
                const positionText = document.createElement('span');
                const positionSpan = document.createElement('span');
                positionSpan.classList.add('font-medium');
                positionSpan.textContent = positionValue;
                
                const flagImg = document.createElement('img');
                flagImg.classList.add('w-[30px]');
                flagImg.src = 'https://cdn.sofifa.net/flags/br.png';
                flagImg.alt = '';
                
                const teamImg = document.createElement('img');
                teamImg.classList.add('w-[30px]');
                teamImg.src = 'https://cdn.sofifa.net/meta/team/3468/120.png';
                teamImg.alt = '';
                
                flexColumn.appendChild(positionText);
                flexColumn.appendChild(positionSpan);
                flexColumn.appendChild(flagImg);
                flexColumn.appendChild(teamImg);
                
                const playerImg = document.createElement('img');
                playerImg.classList.add('w-[76px]');
                playerImg.src = imageInput.value;
                playerImg.alt = 'player image';
                
                flex1.appendChild(flexColumn);
                flex1.appendChild(playerImg);
                
                const flex2 = document.createElement('div');
                flex2.classList.add('flex', 'flex-col', 'justify-center', 'items-center', 'w-full');
                
                const playerName = document.createElement('h4');
                playerName.classList.add('font-bold');
                playerName.textContent = nameInput.value;
                
                const statContainer = document.createElement('div');
                statContainer.classList.add('flex', 'w-full', 'flex', 'justify-around');
                
                const statColumn1 = document.createElement('div');
                statColumn1.classList.add('flex', 'flex-col');
                
                const statColumn2 = document.createElement('div');
                statColumn2.classList.add('flex', 'flex-col');
                
                 const statBox1 = document.createElement('div');
                statBox1.classList.add('flex', 'spanBox');
                const statValue1 = document.createElement('span');
                statValue1.textContent = paceInput.value;
                statValue1.classList.add('test');

                const statLabel1 = document.createElement('span');
                statLabel1.textContent = 'PAC';
                statBox1.appendChild(statValue1);
                statBox1.appendChild(statLabel1);
                
                const statBox2 = document.createElement('div');
                statBox2.classList.add('flex', 'spanBox');
                const statValue2 = document.createElement('span');
                statValue2.textContent = shootingInput.value;
                const statLabel2 = document.createElement('span');
                statLabel2.textContent = 'SHO';
                statBox2.appendChild(statValue2);
                statBox2.appendChild(statLabel2);
                
                const statBox3 = document.createElement('div');
                statBox3.classList.add('flex', 'spanBox');
                const statValue3 = document.createElement('span');
                statValue3.textContent = passingInput.value;
                const statLabel3 = document.createElement('span');
                statLabel3.textContent = 'PAS';
                statBox3.appendChild(statValue3);
                statBox3.appendChild(statLabel3);
                
                const statBox4 = document.createElement('div');
                statBox4.classList.add('flex', 'spanBox');
                const statValue4 = document.createElement('span');
                statValue4.textContent = dribblingInput.value;
                const statLabel4 = document.createElement('span');
                statLabel4.textContent = 'DRI';
                statBox4.appendChild(statValue4);
                statBox4.appendChild(statLabel4);
                
                const statBox5 = document.createElement('div');
                statBox5.classList.add('flex', 'spanBox');
                const statValue5 = document.createElement('span');
                statValue5.textContent = clubInput.value;
                const statLabel5 = document.createElement('span');
                statLabel5.textContent = 'CLUB';
                statBox5.appendChild(statValue5);
                statBox5.appendChild(statLabel5);
                
                const statBox6 = document.createElement('div');
                statBox6.classList.add('flex', 'spanBox');
                const statValue6 = document.createElement('span');
                statValue6.textContent = defendingInput.value;
                const statLabel6 = document.createElement('span');
                statLabel6.textContent = 'DEF';
                statBox6.appendChild(statValue6);
                statBox6.appendChild(statLabel6);
                
                const statBox7 = document.createElement('div');
                statBox7.classList.add('flex', 'spanBox');
                const statValue7 = document.createElement('span');
                statValue7.textContent = physicalInput.value;
                const statLabel7 = document.createElement('span');
                statLabel7.textContent = 'PHY';
                statBox7.appendChild(statValue7);
                statBox7.appendChild(statLabel7);
                
                const statBox8 = document.createElement('div');
                statBox8.classList.add('flex', 'spanBox');
                const statValue8 = document.createElement('span');
                statValue8.textContent = paceInput.value;
                const statLabel8 = document.createElement('span');
                statLabel8.textContent = 'PAC';
                statBox8.appendChild(statValue8);
                statBox8.appendChild(statLabel8);
                
                statColumn1.appendChild(statBox1);
                statColumn1.appendChild(statBox2);
                statColumn1.appendChild(statBox3);
                statColumn1.appendChild(statBox4);
                
                statColumn2.appendChild(statBox5);
                statColumn2.appendChild(statBox6);
                statColumn2.appendChild(statBox7);
                statColumn2.appendChild(statBox8);
                
                statContainer.appendChild(statColumn1);
                statContainer.appendChild(statColumn2);
                
                flex2.appendChild(playerName);
                flex2.appendChild(statContainer);
                
                boxStats.appendChild(flex1);
                boxStats.appendChild(flex2);
                
                const position = document.createElement('div');
                position.classList.add('rounded-[60%]', 'positionCss');
                position.textContent = positionInput.value;
                
                box.appendChild(btnCss);
                box.appendChild(boxImg);
                box.appendChild(boxStats);
                box.appendChild(position);
                
                boxCheck.appendChild(box)
                return console.log("empty");
            } 
            else {
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
                localStorage.setItem('players', JSON.stringify(arr));

                const remplcementBox = document.querySelector(".playersBox")
                 const box = document.createElement('div');
                box.classList.add('suggBox');
                 
                const btnCss = document.createElement('div');
                btnCss.classList.add('btnCss', 'hidden');
                
                const updateBtn = document.createElement('i');
                updateBtn.classList.add('updatePlayer', 'btnU', 'fa-solid', 'fa-pen');
                updateBtn.setAttribute('player-id', nameInput.value);
                
                const deleteBtn = document.createElement('i');
                deleteBtn.classList.add('deletePlayer', 'btnU', 'fa-solid', 'fa-trash');
                deleteBtn.setAttribute('player-id', nameInput.value);
                
                btnCss.appendChild(updateBtn);
                btnCss.appendChild(deleteBtn);
                
                const boxImg = document.createElement('img');
                boxImg.classList.add('boxImg');
                boxImg.src = './src/assets/img/badge_gold.webp';
                boxImg.alt = '';
                
                const boxStats = document.createElement('div');
                boxStats.classList.add('absolute', 'top-0', 'boxStats');
                
                const flex1 = document.createElement('div');
                flex1.classList.add('flex');
                
                const flexColumn = document.createElement('div');
                flexColumn.classList.add('flex', 'flex-col', 'font-bold', 'justify-center', 'items-center');
                
                const positionText = document.createElement('span');
                const positionSpan = document.createElement('span');
                positionSpan.classList.add('font-medium');
                positionSpan.textContent = positionValue;
                
                const flagImg = document.createElement('img');
                flagImg.classList.add('w-[30px]');
                flagImg.src = 'https://cdn.sofifa.net/flags/br.png';
                flagImg.alt = '';
                
                const teamImg = document.createElement('img');
                teamImg.classList.add('w-[30px]');
                teamImg.src = 'https://cdn.sofifa.net/meta/team/3468/120.png';
                teamImg.alt = '';
                
                flexColumn.appendChild(positionText);
                flexColumn.appendChild(positionSpan);
                flexColumn.appendChild(flagImg);
                flexColumn.appendChild(teamImg);
                
                const playerImg = document.createElement('img');
                playerImg.classList.add('w-[76px]');
                playerImg.src =  imageInput.value;
                playerImg.alt = '';
                
                flex1.appendChild(flexColumn);
                flex1.appendChild(playerImg);
                
                const flex2 = document.createElement('div');
                flex2.classList.add('flex', 'flex-col', 'justify-center', 'items-center', 'w-full');
                
                const playerName = document.createElement('h4');
                playerName.classList.add('font-bold');
                playerName.textContent = nameInput.value;
                
                const statContainer = document.createElement('div');
                statContainer.classList.add('flex', 'w-full', 'flex', 'justify-around');
                
                const statColumn1 = document.createElement('div');
                statColumn1.classList.add('flex', 'flex-col');
                
                const statColumn2 = document.createElement('div');
                statColumn2.classList.add('flex', 'flex-col');
                
                 const statBox1 = document.createElement('div');
                statBox1.classList.add('flex', 'spanBox');
                const statValue1 = document.createElement('span');
                statValue1.textContent = paceInput.value;
                statValue1.classList.add('test');

                const statLabel1 = document.createElement('span');
                statLabel1.textContent = 'PAC';
                statBox1.appendChild(statValue1);
                statBox1.appendChild(statLabel1);
                
                const statBox2 = document.createElement('div');
                statBox2.classList.add('flex', 'spanBox');
                const statValue2 = document.createElement('span');
                statValue2.textContent = shootingInput.value;
                const statLabel2 = document.createElement('span');
                statLabel2.textContent = 'SHO';
                statBox2.appendChild(statValue2);
                statBox2.appendChild(statLabel2);
                
                const statBox3 = document.createElement('div');
                statBox3.classList.add('flex', 'spanBox');
                const statValue3 = document.createElement('span');
                statValue3.textContent = passingInput.value;
                const statLabel3 = document.createElement('span');
                statLabel3.textContent = 'PAS';
                statBox3.appendChild(statValue3);
                statBox3.appendChild(statLabel3);
                
                const statBox4 = document.createElement('div');
                statBox4.classList.add('flex', 'spanBox');
                const statValue4 = document.createElement('span');
                statValue4.textContent = dribblingInput.value;
                const statLabel4 = document.createElement('span');
                statLabel4.textContent = 'DRI';
                statBox4.appendChild(statValue4);
                statBox4.appendChild(statLabel4);
                
                const statBox5 = document.createElement('div');
                statBox5.classList.add('flex', 'spanBox');
                const statValue5 = document.createElement('span');
                statValue5.textContent = clubInput.value;
                const statLabel5 = document.createElement('span');
                statLabel5.textContent = 'CLUB';
                statBox5.appendChild(statValue5);
                statBox5.appendChild(statLabel5);
                
                const statBox6 = document.createElement('div');
                statBox6.classList.add('flex', 'spanBox');
                const statValue6 = document.createElement('span');
                statValue6.textContent = defendingInput.value;
                const statLabel6 = document.createElement('span');
                statLabel6.textContent = 'DEF';
                statBox6.appendChild(statValue6);
                statBox6.appendChild(statLabel6);
                
                const statBox7 = document.createElement('div');
                statBox7.classList.add('flex', 'spanBox');
                const statValue7 = document.createElement('span');
                statValue7.textContent = physicalInput.value;
                const statLabel7 = document.createElement('span');
                statLabel7.textContent = 'PHY';
                statBox7.appendChild(statValue7);
                statBox7.appendChild(statLabel7);
                
                const statBox8 = document.createElement('div');
                statBox8.classList.add('flex', 'spanBox');
                const statValue8 = document.createElement('span');
                statValue8.textContent = paceInput.value;
                const statLabel8 = document.createElement('span');
                statLabel8.textContent = 'PAC';
                statBox8.appendChild(statValue8);
                statBox8.appendChild(statLabel8);
                
                statColumn1.appendChild(statBox1);
                statColumn1.appendChild(statBox2);
                statColumn1.appendChild(statBox3);
                statColumn1.appendChild(statBox4);
                
                statColumn2.appendChild(statBox5);
                statColumn2.appendChild(statBox6);
                statColumn2.appendChild(statBox7);
                statColumn2.appendChild(statBox8);
                
                statContainer.appendChild(statColumn1);
                statContainer.appendChild(statColumn2);
                
                flex2.appendChild(playerName);
                flex2.appendChild(statContainer);
                
                boxStats.appendChild(flex1);
                boxStats.appendChild(flex2);
                
                const position = document.createElement('div');
                position.classList.add('rounded-[60%]', 'positionCss');
                position.textContent = positionInput.value;
                
                box.appendChild(btnCss);
                box.appendChild(boxImg);
                box.appendChild(boxStats);
                box.appendChild(position);
                
                remplcementBox.appendChild(box)
             
            }
        }
    });
}

butnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
  
    regexCheck()
    if (butnSubmit.textContent == "modifier le joueur") {
        const positionValue = positionInput.value;
        updatePlayer(positionValue);
        const gktest = Array.from(boxs).filter((item, i) => {
            if (item.classList.contains(positionValue)) {
                const test = item.querySelector('.test');
                const boxCheck = document.querySelector(`.${positionValue}`);
                console.log("boxCheck", boxCheck);
                console.log("test", test);
             
                boxCheck.textContent = ""
                const box = document.createElement('div');
                box.classList.add('box');
                box.setAttribute('player-id', i);
                
                const btnCss = document.createElement('div');
                btnCss.classList.add('btnCss', 'hidden');
                
                const updateBtn = document.createElement('i');
                updateBtn.classList.add('updatePlayer', 'btnU', 'fa-solid', 'fa-pen');
                updateBtn.setAttribute('player-id', nameInput.value);
                
                const deleteBtn = document.createElement('i');
                deleteBtn.classList.add('deletePlayer', 'btnU', 'fa-solid', 'fa-trash');
                deleteBtn.setAttribute('player-id', nameInput.value);
                
                btnCss.appendChild(updateBtn);
                btnCss.appendChild(deleteBtn);
                
                const boxImg = document.createElement('img');
                boxImg.classList.add('boxImg');
                boxImg.src = './src/assets/img/badge_gold.webp';
                boxImg.alt = '';
                
                const boxStats = document.createElement('div');
                boxStats.classList.add('absolute', 'top-0', 'boxStats');
                
                const flex1 = document.createElement('div');
                flex1.classList.add('flex');
                
                const flexColumn = document.createElement('div');
                flexColumn.classList.add('flex', 'flex-col', 'font-bold', 'justify-center', 'items-center');
                
                const positionText = document.createElement('span');
                const positionSpan = document.createElement('span');
                positionSpan.classList.add('font-medium');
                positionSpan.textContent = positionValue;
                
                const flagImg = document.createElement('img');
                flagImg.classList.add('w-[30px]');
                flagImg.src = 'https://cdn.sofifa.net/flags/br.png';
                flagImg.alt = '';
                
                const teamImg = document.createElement('img');
                teamImg.classList.add('w-[30px]');
                teamImg.src = 'https://cdn.sofifa.net/meta/team/3468/120.png';
                teamImg.alt = '';
                
                flexColumn.appendChild(positionText);
                flexColumn.appendChild(positionSpan);
                flexColumn.appendChild(flagImg);
                flexColumn.appendChild(teamImg);
                
                const playerImg = document.createElement('img');
                playerImg.classList.add('w-[76px]');
                playerImg.src = imageInput.value;
                playerImg.alt = '';
                
                flex1.appendChild(flexColumn);
                flex1.appendChild(playerImg);
                
                const flex2 = document.createElement('div');
                flex2.classList.add('flex', 'flex-col', 'justify-center', 'items-center', 'w-full');
                
                const playerName = document.createElement('h4');
                playerName.classList.add('font-bold');
                playerName.textContent = nameInput.value;
                
                const statContainer = document.createElement('div');
                statContainer.classList.add('flex', 'w-full', 'flex', 'justify-around');
                
                const statColumn1 = document.createElement('div');
                statColumn1.classList.add('flex', 'flex-col');
                
                const statColumn2 = document.createElement('div');
                statColumn2.classList.add('flex', 'flex-col');
                
                 const statBox1 = document.createElement('div');
                statBox1.classList.add('flex', 'spanBox');
                const statValue1 = document.createElement('span');
                statValue1.textContent = paceInput.value;
                statValue1.classList.add('test');

                const statLabel1 = document.createElement('span');
                statLabel1.textContent = 'PAC';
                statBox1.appendChild(statValue1);
                statBox1.appendChild(statLabel1);
                
                const statBox2 = document.createElement('div');
                statBox2.classList.add('flex', 'spanBox');
                const statValue2 = document.createElement('span');
                statValue2.textContent = shootingInput.value;
                const statLabel2 = document.createElement('span');
                statLabel2.textContent = 'SHO';
                statBox2.appendChild(statValue2);
                statBox2.appendChild(statLabel2);
                
                const statBox3 = document.createElement('div');
                statBox3.classList.add('flex', 'spanBox');
                const statValue3 = document.createElement('span');
                statValue3.textContent = passingInput.value;
                const statLabel3 = document.createElement('span');
                statLabel3.textContent = 'PAS';
                statBox3.appendChild(statValue3);
                statBox3.appendChild(statLabel3);
                
                const statBox4 = document.createElement('div');
                statBox4.classList.add('flex', 'spanBox');
                const statValue4 = document.createElement('span');
                statValue4.textContent = dribblingInput.value;
                const statLabel4 = document.createElement('span');
                statLabel4.textContent = 'DRI';
                statBox4.appendChild(statValue4);
                statBox4.appendChild(statLabel4);
                
                const statBox5 = document.createElement('div');
                statBox5.classList.add('flex', 'spanBox');
                const statValue5 = document.createElement('span');
                statValue5.textContent = clubInput.value;
                const statLabel5 = document.createElement('span');
                statLabel5.textContent = 'CLUB';
                statBox5.appendChild(statValue5);
                statBox5.appendChild(statLabel5);
                
                const statBox6 = document.createElement('div');
                statBox6.classList.add('flex', 'spanBox');
                const statValue6 = document.createElement('span');
                statValue6.textContent = defendingInput.value;
                const statLabel6 = document.createElement('span');
                statLabel6.textContent = 'DEF';
                statBox6.appendChild(statValue6);
                statBox6.appendChild(statLabel6);
                
                const statBox7 = document.createElement('div');
                statBox7.classList.add('flex', 'spanBox');
                const statValue7 = document.createElement('span');
                statValue7.textContent = physicalInput.value;
                const statLabel7 = document.createElement('span');
                statLabel7.textContent = 'PHY';
                statBox7.appendChild(statValue7);
                statBox7.appendChild(statLabel7);
                
                const statBox8 = document.createElement('div');
                statBox8.classList.add('flex', 'spanBox');
                const statValue8 = document.createElement('span');
                statValue8.textContent = paceInput.value;
                const statLabel8 = document.createElement('span');
                statLabel8.textContent = 'PAC';
                statBox8.appendChild(statValue8);
                statBox8.appendChild(statLabel8);
                
                statColumn1.appendChild(statBox1);
                statColumn1.appendChild(statBox2);
                statColumn1.appendChild(statBox3);
                statColumn1.appendChild(statBox4);
                
                statColumn2.appendChild(statBox5);
                statColumn2.appendChild(statBox6);
                statColumn2.appendChild(statBox7);
                statColumn2.appendChild(statBox8);
                
                statContainer.appendChild(statColumn1);
                statContainer.appendChild(statColumn2);
                
                flex2.appendChild(playerName);
                flex2.appendChild(statContainer);
                
                boxStats.appendChild(flex1);
                boxStats.appendChild(flex2);
                
                const position = document.createElement('div');
                position.classList.add('rounded-[60%]', 'positionCss');
                position.textContent = positionInput.value;
                
                box.appendChild(btnCss);
                box.appendChild(boxImg);
                box.appendChild(boxStats);
                box.appendChild(position);
                
                boxCheck.appendChild(box)
                    return console.log("empty");
             
             
            }
        });


        console.log("arr log",arr)
        return;
    }

    // return an boolean 
    const playerExists = arr.some((existingPlayer) => existingPlayer.nameInput == nameInput.value);
    // return new array 
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

 
// update and delete
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
                localStorage.setItem('players', JSON.stringify(arr));

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
 
let ReservePlayer = document.querySelector(".players") 

ReservePlayer.addEventListener("click",(e) => {
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
                   localStorage.setItem('players', JSON.stringify(arr));
   
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

// regex
function regexCheck(){
    const nameRegex = /^[a-zA-Z\s]+$/; 
    const positionRegex = /^(GK|ST1|ST2|CM1|CM2|LM|RM|LB|RB|CB2|CB1)$/;  
     const statsRegex = /^(?:([2-9][0-9]|100))$/;

    if (!nameRegex.test(nameInput.value)) {
        console.log("no availble name")
        notie.alert({
            type: "warning",  
            text: "Nom non disponible",
            stay: false,  
            time: 3,  
            position: "top"  
          })
        return
    }
    if (!positionRegex.test(positionInput.value)) {
        console.log("no availble position")
        notie.alert({
            type: "warning",  
            text: "Nom non disponible",
            stay: false,  
            time: 3,  
            position: "top"  
          })
        return
    }
 
    if (!statsRegex.test(paceInput.value)) {
        console.log("Invalid pace");
        notie.alert({
            type: "warning",  
            text: "Invalid Pace. Must be between 20 and 100",
            stay: false,  
            time: 3,  
            position: "top"  
        });
        return;
    }
    
    if (!statsRegex.test(shootingInput.value)) {
        console.log("Invalid shooting");
        notie.alert({
            type: "warning",  
            text: "Invalid Shooting. Must be between 20 and 100",
            stay: false,  
            time: 3,  
            position: "top"  
        });
        return;
    }
    
    if (!statsRegex.test(passingInput.value)) {
        console.log("Invalid passing");
        notie.alert({
            type: "warning",  
            text: "Invalid Passing. Must be between 20 and 100",
            stay: false,  
            time: 3,  
            position: "top"  
        });
        return;
    }
    
    if (!statsRegex.test(dribblingInput.value)) {
        console.log("Invalid dribbling");
        notie.alert({
            type: "warning",  
            text: "Invalid Dribbling. Must be between 20 and 100",
            stay: false,  
            time: 3,  
            position: "top"  
        });
        return;
    }
    
    if (!statsRegex.test(clubInput.value)) {
        console.log("Invalid club");
        notie.alert({
            type: "warning",  
            text: "Invalid Club. Must be between 20 and 100",
            stay: false,  
            time: 3,  
            position: "top"  
        });
        return;
    }
    
    if (!statsRegex.test(defendingInput.value)) {
        console.log("Invalid defending");
        notie.alert({
            type: "warning",  
            text: "Invalid Defending. Must be between 20 and 100",
            stay: false,  
            time: 3,  
            position: "top"  
        });
        return;
    }
    
    if (!statsRegex.test(physicalInput.value)) {
        console.log("Invalid physical");
        notie.alert({
            type: "warning",  
            text: "Invalid Physical. Must be between 20 and 100",
            stay: false,  
            time: 3,  
            position: "top"  
        });
        return;
    }
    
    if (!statsRegex.test(paceInput.value)) {
        console.log("Invalid pace");
        notie.alert({
            type: "warning",  
            text: "Invalid Pace. Must be between 20 and 100",
            stay: false,  
            time: 3,  
            position: "top"  
        });
        return;
    }
}

 

function moy() {
    let sum  = 0;
    let moyenne = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].game == "bsasic" && arr[i].shootingInput != "") {
            console.log( arr[i].shootingInput) 
            sum += parseInt(arr[i].shootingInput)
        }
        
    }
    moyenne = sum / 11
    console.log(moyenne)
}

 

 moy()