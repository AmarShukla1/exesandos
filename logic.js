//implementing the basics

const player = (name, turn) => {
  return { name, turn };
};

const gameboard = () => {
  let mygameboard = [];
  
  for (let i = 0; i < 3; i++) {
      mygameboard[i]=[];
  }
  for(let i=0;i<3;i++){
    for (let j = 0; j < 3; j++) {
      mygameboard[i].push(0);
    }
}
  return mygameboard;
};

first = player("first");
second = player("second");
board = gameboard();
const gamehandler = () => 
{
    
};

//UI

const buttons = document.querySelectorAll(".col");

buttons.forEach(function (button) {
  button.addEventListener("click", gamehandler);
});

//TO DO:
//minimax algo implement
