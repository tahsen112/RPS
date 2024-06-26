/* let count = 0;

document.getElementById("d-btn").onclick = function () {

     count -= 1;
     document.getElementById("counter").textContent = count;
}

document.getElementById("r-btn").onclick = function () {

     count = 0;
     document.getElementById("counter").textContent = count;
}

document.getElementById("i-btn").onclick = function () {

     count += 1;
     document.getElementById("counter").textContent = count;
} */

let contaner = document.getElementById(`contaner`);
let computerMod = document.getElementById(`computerMod`);
let frindMod = document.getElementById(`frindMod`);
let contentCom = document.getElementById(`contentCom`);
let contentFrn = document.getElementById(`contentFrn`);
let cc = document.getElementById(`cc`);
let count = 0;
let hands = [`✋`, `✌`, `👊`, `✋`, `✌`, `👊`];
let rand;
let x;
let y;

function computerModShow() {

     frindMod.style.display = `none`;
     computerMod.style.display = `none`;
     document.getElementById(`btnP`).style.display = `none`;
     document.getElementById(`shapes`).style.display = `none`;
     document.getElementById(`blurEff`).style.display = `none`;

     contentCom.style.display = `flex`;
     contaner.style.maxWidth = `100%`;
     contaner.style.height = `100%`;
     contaner.style.borderRadius = `0`;
     contaner.style.backgroundColor = `#111111`;
     contaner.style.color = `white`;
     contaner.style.boxShadow = `none`;

     // console.log(window.screen.width);

}

function frindModSow() {

     frindMod.style.display = `none`;
     computerMod.style.display = `none`;
     document.getElementById(`btnP`).style.display = `none`;

     document.getElementById(`shapes`).style.display = `none`;
     document.getElementById(`blurEff`).style.display = `none`;

     contentFrn.style.display = `flex`;
     contaner.style.maxWidth = `100%`;
     contaner.style.height = `100dvh`;
     contaner.style.borderRadius = `0`;
     contaner.style.backgroundColor = `#111111`;
     contaner.style.color = `white`;
     contaner.style.boxShadow = `none`;
     contaner.style.margin = `0`;


}

function getChoice(choice) {

     if (count === 0) {

          x = document.getElementById(`hand${choice}`);
          x.style.border = `4px white solid`;
          x.style.boxShadow = `0px 0px 15px #37a0c2`;
          count = 1;
          rand = randNum(0, 5);
     }

     setTimeout(() => { cc.innerText = `${hands[rand]}` }, 500)

     // equal case
     if (x.innerText === hands[rand]) {

          setTimeout(() => { document.getElementById(`endScen`).style.display = `flex` }, 1600);
          document.getElementById(`h3End`).innerText = `Equal`;

     }
     // win cases
     else if (x.innerText === `👊` && hands[rand] === `✌` ||
          x.innerText === `✌` && hands[rand] === `✋` ||
          x.innerText === `✋` && hands[rand] === `👊`
     ) {

          setTimeout(() => { document.getElementById(`endScen`).style.display = `flex` }, 1600);
          document.getElementById(`h3End`).innerText = `you are Win!`;

     }
     // lose cases
     else {

          setTimeout(() => { document.getElementById(`endScen`).style.display = `flex` }, 1600);
          document.getElementById(`h3End`).innerText = `you are LOSE🤣`;

     }


}

function playAgin() {

     count = 0;
     countP1 = 0;
     countP2 = 0;

     cc.innerText = ``;
     document.getElementById(`endScen`).style.display = `none`;
     x.style.border = `0`;
     x.style.boxShadow = `none`;
     y.style.border = `0`;
     y.style.boxShadow = `none`;

}


function exit() {

     document.getElementById(`endScen`).style.display = `none`;

     count = 0;
     countP1 = 0;
     countP2 = 0;

     if (window.screen.width > 400) {

          contaner.style.maxWidth = `50%`;
          contaner.style.minHeight = `50vh`;
          contaner.style.height = `auto`;
          contaner.style.borderRadius = `25px`;
          contaner.style.backgroundColor = `#196693`;
          contaner.style.color = `white`;
          contaner.style.boxShadow = `inset 0px 0px 10px white`;
          contaner.style.margin = `10% auto 0px auto`;
     }
     else {

          contaner.style.minHeight = `70vh`;
          contaner.style.height = `auto`;
          contaner.style.maxWidth = `70%`;
          contaner.style.margin = `25% auto 0px auto`;
          contaner.style.flexDirection = `column`;
          contaner.style.borderRadius = `25px`;
          contaner.style.backgroundColor = `#196693`;
          contaner.style.boxShadow = `inset 0px 0px 10px white`;

     }

     frindMod.style.display = `flex`;
     computerMod.style.display = `flex`;
     document.getElementById(`btnP`).style.display = `block`;

     document.getElementById(`shapes`).style.display = `block`;
     document.getElementById(`blurEff`).style.display = `block`;



     contentCom.style.display = `none`;
     contentFrn.style.display = `none`;

     cc.innerText = ``;

     x.style.border = `0`;
     x.style.boxShadow = `none`;
     y.style.border = `0`;
     y.style.boxShadow = `none`;


}



let array = [`P`, `C`, `R`];

let countP1 = 0;
let countP2 = 0;

function randChoice(player) {

     if (countP1 === 0) {

          if (player === `player1`) {
               rand = randNum(0, 2);
               x = document.getElementById(`hand${array[rand]}1`);
               x.style.border = `4px white solid`;
               x.style.boxShadow = `0px 0px 15px #37a0c2`;
               countP1 = 1;
          }



     }


     if (countP2 === 0) {

          if (player === `player2`) {
               rand = randNum(0, 2);
               y = document.getElementById(`hand${array[rand]}2`);
               y.style.border = `4px white solid`;
               y.style.boxShadow = `0px 0px 15px #37a0c2`;
               countP2 = 1;

          }


     }

     // the cases
     if (countP1 === 1 && countP2 === 1) {
          // even cases 
          if (x.innerText === y.innerText) {

               setTimeout(() => { document.getElementById(`endScen`).style.display = `flex` }, 1600);
               document.getElementById(`h3End`).innerText = `You are even`;

          }
          // player1 win cases
          else if (x.innerText === `👊` && y.innerText === `✌` ||
               x.innerText === `✌` && y.innerText === `✋` ||
               x.innerText === `✋` && y.innerText === `👊`
          ) {

               setTimeout(() => { document.getElementById(`endScen`).style.display = `flex` }, 1600);
               document.getElementById(`h3End`).innerText = `player1 Win!`;

          }
          // player2 win cases
          else {

               setTimeout(() => { document.getElementById(`endScen`).style.display = `flex` }, 1600);
               document.getElementById(`h3End`).innerText = `player2 Win!`;

          }


     }




}









function randNum(firstNum, secNum) {

     firstNum = Math.ceil(firstNum);
     secNum = Math.floor(secNum);

     return Math.floor(Math.random() * (secNum - firstNum + 1) + firstNum);

}
