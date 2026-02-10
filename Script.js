const boxes = document.querySelectorAll(".box");
const Reset = document.getElementById("Reset");

let trunX = true;

let WinPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
];

function CheckWinner() {
  for (let pattrn of WinPatterns) {
    let pos1 = boxes[pattrn[0]].innerText;
    let pos2 = boxes[pattrn[1]].innerText;
    let pos3 = boxes[pattrn[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        alert(`Player ${pos1} is Winner`);

        boxes.forEach((box) => {
          box.disabled = true;
        });
        return;
      }
    }
  }
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (trunX) {
      box.innerText = "X";
      trunX = false;
    } else {
      box.innerText = "O";
      trunX = true;
    }
    box.disabled = true;
    CheckWinner();
  });
});


Reset.addEventListener('click',()=>{
  boxes.forEach((box)=>{
    box.innerText = ''
    box.disabled = false;
  })
  trunX = true;
})
