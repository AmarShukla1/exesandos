//implementing the basics

const player = (name,score) => {
  return {name,score};
};

const gameboard = () => {
  let mygameboard = [];
  const container=document.querySelector('.container');
  
  for (let i = 0; i < 3; i++) {
    mygameboard[i] = [];
  }
  for (let i = 0; i < 3; i++) {
    const row = document.createElement("div");
    row.className = "row";
    container.append(row);
    for (let j = 0; j < 3; j++) {
      const col = document.createElement("div");
      col.className = "col";
      col.setAttribute("i", i);
      col.setAttribute("j", j);
      row.append(col);
      mygameboard[i].push(-1);
    }
  }
  return mygameboard;
};

first = player(prompt('enter your name'),0);
//alert('do you want to play computer or a human opponent')
second = player(prompt("enter opponent name"),0);
board = gameboard();
let turn = 1;
let blocks_filled = 0;
function checker(k) {
    
  for (let i = 0; i < 3; i++) {
    let cnt1=0,cnt2=0;
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == k) {
        cnt1++;
      }
      if (board[j][i] == k) {
        cnt2++;
      }
    }
    if (cnt1 == 3 || cnt2 == 3) {
      return true;
    }
  }
  if (board[0][0] == k && board[1][1] == k && board[2][2] == k) {
    return true;
  }
  if (board[0][2] == k && board[1][1] == k && board[2][0] == k) {
    return true;
  }
  return false;
}
const gamehandler = (e) => {
    let a=e.target.getAttribute('i');
    let b=e.target.getAttribute('j');
  if (board[a][b] == -1) {
    
    blocks_filled++;
    board[a][b] = turn;
    //show in ui..
    if(turn==1){
        e.target.innerText='X';
    }
    else{
        e.target.innerText='O';
    }
  
  if (checker(turn)) {
    if(turn==1){kl=first}else{kl=second}
    kl.score++;  
    alert(`${kl.name} won and score is ${first.score}-${second.score}`);
    reset();
    return;
  }
  turn=1-turn;
  if (blocks_filled == 9) {
    alert("tie");
    reset();
  }
}
};


function reset(){
    for (let i = 0; i < 3; i++) {
        for(let j=0;j<3;j++){
        board[i][j] =-1;
        }
      }
      const buttons=document.querySelectorAll('.col');
      buttons.forEach(function(button){
          button.innerText='';
      });
      blocks_filled=0;turn=1;
}

//UI

const buttons = document.querySelectorAll(".col");

buttons.forEach(function (button) {
  button.addEventListener("click", gamehandler);
});

//TO DO:
//minimax algo implement,its like recursion only...
//work on display ui cause currently it is in alert mode.
//refactor some code to make it clean as well

