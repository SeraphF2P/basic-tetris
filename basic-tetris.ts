let grid = document.querySelector('.grid');
const width = 10
let gridBoxs = []
for (let i = 0; i < 150; i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    box.setAttribute('data-id', i.toString());
    gridBoxs.push(box)
    grid?.appendChild(box)

}
for (let i = 150; i < 160; i++) {
    let box = document.createElement('div');
    box.classList.add('lowerBorder');
    box.setAttribute('data-id', i.toString())
    box.classList.add('box');
    gridBoxs.push(box)
    grid?.appendChild(box)

}
const lTetromino = [
    [1 + width, width * 2 + 1, width * 3 + 1, 2 + width],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2]
]
const zTetromino = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1]
]
const tTetromino = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1]
]
const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1]
]
const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3]
]
const tetrominos = [iTetromino, zTetromino, oTetromino, tTetromino, lTetromino];
const w = 4;
const lTetrominoMini = [
    [1 + w, w * 2 + 1, w * 3 + 1, 2 + w],
    [w, w + 1, w + 2, w * 2 + 2],
    [1, w + 1, w * 2 + 1, w * 2],
    [w, w * 2, w * 2 + 1, w * 2 + 2]
]
const zTetrominoMini = [
    [0, w, w + 1, w * 2 + 1],
    [w + 1, w + 2, w * 2, w * 2 + 1],
    [0, w, w + 1, w * 2 + 1],
    [w + 1, w + 2, w * 2, w * 2 + 1]
]
const tTetrominoMini = [
    [1, w, w + 1, w + 2],
    [1, w + 1, w + 2, w * 2 + 1],
    [w, w + 1, w + 2, w * 2 + 1],
    [1, w, w + 1, w * 2 + 1]
]
const oTetrominoMini = [
    [5, 6, w +5, w + 6],
    [5, 6, w +5, w + 6],
    [5, 6, w +5, w + 6],
    [5, 6, w +5, w + 6]
]
const iTetrominoMini = [
    [1, w + 1, w * 2 + 1, w * 3 + 1],
    [w, w + 1, w + 2, w + 3],
    [1, w + 1, w * 2 + 1, w * 3 + 1],
    [w, w + 1, w + 2, w + 3]
]
const tetrominosMini = [iTetrominoMini, zTetrominoMini, oTetrominoMini, tTetrominoMini, lTetrominoMini];
let nextTetrisDiplay = document.querySelector('.nextTetris')
let nextTetrisDiplayBoxs : HTMLDivElement[] = []
for (let i = 0; i < 16; i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    nextTetrisDiplayBoxs.push(box)
    nextTetrisDiplay?.appendChild(box)
}
function setBoard(){
    for (let i = 0; i < 160; i++) {
        gridBoxs[i].setAttribute('data-id', i.toString());
    }
}
const leftSide =[0,10,20,30,40,50,60,70,80,90,100,110,120,130,140];
const rightSide = [9,19,29,39,49,59,69,79,89,99,109,119,129,139,149];
function movingTet(e: { key: any; }) {
    removeTet(movment);
    if (tetro[posision].every((a: number) => { return !taken.includes(startIndex + a + movment )})
       ){
    switch (e.key) {
        case 'ArrowLeft':
            if(tetro[posision].every((a: number) => { return !taken.includes(startIndex + a + movment -1)})
            && tetro[posision].every((a: number) => { return !leftSide.includes(startIndex + a + movment )})
            ){
                movment--;
            }
            break;
        case 'ArrowRight':
            if(tetro[posision].every((a: number) => { return !taken.includes(startIndex + a + movment +1)})
            && tetro[posision].every((a: number) => { return !rightSide.includes(startIndex + a + movment)})
            ){
                movment++;
            }
            break;
        case 'ArrowUp':
            if(tetro[posision].every((a: number) => { return !leftSide.includes(startIndex + a + movment )})
            && tetro[posision].every((a: number) => { return !taken.includes(startIndex + a + movment)})
            && tetro[posision].every((a: number) => { return !rightSide.includes(startIndex + a + movment+1)})){
            posision++
            if(posision > 3){
                posision=0
            }
        }
            break;
        case 'ArrowDown':
            if(tetro[posision].every((a: number) => { return !taken.includes(startIndex + a + movment )})
            && tetro[posision].every((a: number) => { return !leftSide.includes(startIndex + a + movment+1)})
            && tetro[posision].every((a: number) => { return !rightSide.includes(startIndex + a + movment)})){
            posision--
            if(posision < 0){
                posision=3
            }
        }
            break;
    } 
}
    spawnNextTet(movment)
}
document.addEventListener('keydown', movingTet);

let movment = 0;
let taken  = [150, 151, 152, 153, 154, 155, 156, 157, 158, 159]  ;
const firstRow = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const tetrominosName = ['iTetromino', 'zTetromino', 'oTetromino', 'tTetromino', 'lTetromino'];
const startIndex = 4;
let randowmaizer: number; 
let nextRandowmaizer: number;
let posision: number;
let tetro: any[] ;
let tetroName: string;
let tetroNameMini: string;
nextRandowmaizer = Math.floor(Math.random() * tetrominosName.length);

let tetroMini: number[][];
function showNext(){
    nextRandowmaizer = Math.floor(Math.random() * tetrominosName.length);
    tetroMini = tetrominosMini[nextRandowmaizer];
    tetroNameMini = tetrominosName[nextRandowmaizer];
  
    posision = Math.floor(Math.random() * 4);

    tetroMini[posision].map((a: number)=>{
    nextTetrisDiplayBoxs[a].classList.add(tetroNameMini)
    })
}
function removeNext(){
    nextTetrisDiplayBoxs.map(a=>{
     a.classList.remove(tetroName)
     })
 }
function changeTet() {
       let randowmaizer = nextRandowmaizer;
        tetro = tetrominos[randowmaizer];
        tetroName = tetrominosName[randowmaizer];
    }
function spawnNextTet(num = 0) {
    
    tetro[posision].forEach((a: number) => {
        gridBoxs[startIndex + a + num ].classList.add(tetroName)
    })
}
function removeTet(num = 0) {

    tetro[posision].forEach((a: number) => {
        gridBoxs[startIndex + a + num ].classList.remove(tetroName)
    })
}
function youLose() {
    for (let i = 0; i < 10; i++) {
        if (gridBoxs[i].classList.contains('taken') ) {
            clearInterval(timerId);
        }
    }
}

let matched =[];
for (let i = 140; i > 0; i-=width) {
    let line =[];
    for (let j = 0; j < width; j++) {
        line.push(gridBoxs[i + j]) 
         
    }
    matched.push(line)
}
const score_board = document.querySelector('.score');
let score : number = 0;
function checkForMatch(){
    for (let k = 0; k < matched.length; k++) {
       if(matched[k].every((a: { classList: { contains: (arg0: string) => any; }; }) => a.classList.contains('taken'))){
        score += 100;
        score_board.innerHTML = score.toString();
               matched[k].forEach((a: { setAttribute: (arg0: string, arg1: string) => void; getAttribute: (arg0: string) => string | number; }) => {
                a.setAttribute('class','box');
                for (let i = 0; i < taken.length; i++) {
                    if(taken[i] == +a.getAttribute('data-id')){
                    taken[i] = null;
                    }
                    } 
               }); 
               row_fall_down()
            //    setBoard()
       } 
    }
}
function check_for_taken(){
    taken = [150, 151, 152, 153, 154, 155, 156, 157, 158, 159] ;
    for (let i = 0; i < matched.length; i++) {
        matched[i].forEach((a: { classList: { contains: (arg0: string) => any; }; getAttribute: (arg0: string) => any; })=>{
            if(a.classList.contains('taken')){
            
             taken.push(Number(a.getAttribute('data-id')));
            } 
         })
        
    }
}
function row_fall_down(){
    for (let i = 0; i < matched.length - 7; i++) {
    if(matched[i].every((a: { getAttribute: (arg0: string) => string; })=> {return a.getAttribute('class') == 'box'}) && matched[i + 1].every((a: { getAttribute: (arg0: string) => string; })=> {return a.getAttribute('class') == 'box'}) == false){
        matched[i].forEach((div: { setAttribute: (arg0: string, arg1: string) => void; },index: string | number) => {
            div.setAttribute('class',`${matched[i+1][index].getAttribute('class')}`);
        });
        matched[i+1].forEach((div: { setAttribute: (arg0: string, arg1: string) => void; },index: string | number) => {
            div.setAttribute('class',`${matched[i+2][index].getAttribute('class')}`);
        });
        matched[i+2].forEach((div: { setAttribute: (arg0: string, arg1: string) => void; },index: string | number) => {
            div.setAttribute('class',`${matched[i+3][index].getAttribute('class')}`);
        });
        matched[i+3].forEach((div: { setAttribute: (arg0: string, arg1: string) => void; },index: string | number) => {
            div.setAttribute('class',`${matched[i+4][index].getAttribute('class')}`);
        });
        matched[i+4].forEach((div: { setAttribute: (arg0: string, arg1: string) => void; },index: string | number) => {
            div.setAttribute('class',`${matched[i+5][index].getAttribute('class')}`);
        });
        matched[i+5].forEach((div: { setAttribute: (arg0: string, arg1: string) => void; },index: string | number) => {
            div.setAttribute('class',`${matched[i+6][index].getAttribute('class')}`);
        });
        matched[i+6].forEach((div: { setAttribute: (arg0: string, arg1: string) => void; },index: string | number) => {
            div.setAttribute('class',`${matched[i+7][index].getAttribute('class')}`);
        });
    }
        
    }
}

const scoreDisplay = document.querySelector('.score')
function addScore() {
    for (let i = 0; i < 150; i +=width) {
      let row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9]

      if(row.every(index => gridBoxs[index].classList.contains('taken'))) {
        score +=10
        scoreDisplay.innerHTML = score.toString()
        row.forEach(index => {
          gridBoxs[index].setAttribute('class','box');
          for (let i = 0; i < taken.length; i++) {
            if(taken[i] == row[index]){
            taken[i] = null;
            }
            } 
        })
        let gridBoxsRemoved = gridBoxs.splice(i, width)
        gridBoxs = gridBoxsRemoved.concat(gridBoxs)
        gridBoxs.forEach(cell => grid.appendChild(cell))
        setBoard()
     
        
      }
    }
  }

function fullDown(dir: number) {
    if (!tetro[dir].some((a: number) => { return taken.includes(startIndex + a + movment + width) && !firstRow.includes(startIndex + a + movment) })) {
        removeTet(movment);
        movment += 10;
        spawnNextTet(movment);

    } else if (tetro[dir].some((a: number) => { return taken.includes(startIndex + a + movment + width) && !firstRow.includes(startIndex + a + movment) })) {
        tetro[dir].forEach((a: number) => {
            gridBoxs[startIndex + a + movment].classList.add('taken')
            taken.push(startIndex + a + movment)
        })
        movment = 0;
        removeNext()
        changeTet()
        removeNext()
        showNext()
        checkForMatch()
        check_for_taken()
        spawnNextTet(movment);
        youLose()
    }


}
showNext()
changeTet()
let timerId: number;
const start_pause = document.querySelector('.start');
start_pause.addEventListener('click',()=>{
    if(timerId == null){
     timerId = setInterval(() => {
            fullDown(posision) 
        }, 200)
        document.addEventListener('keydown', movingTet);
    }else{
        clearInterval(timerId)
        timerId = null
        document.removeEventListener('keydown', movingTet);
    }
    
})

