let gridNumber = 16;
const container = document.createElement('div');
container.setAttribute('style', 'height:100%;display:flex;flex-direction:column');

document.body.style.overflow='hidden';

let newGrid = document.createElement('button');
newGrid.style.textAlign = 'center';
newGrid.setAttribute('style','width:80px;height:50px');
newGrid.innerText = "New grid number";
container.appendChild(newGrid);


let createGrid = (gridNumber) =>{
    for(let i=0;i<gridNumber;i++){
    const row = document.createElement('div');
    row.setAttribute('style', 'display:flex;flex:1');
    for(let j=0;j<gridNumber;j++){
        const div = document.createElement('div');
        div.setAttribute('style','flex:1;padding:5px');
        div.classList.add('grid');
        row.appendChild(div);
    }
    container.appendChild(row);
}



document.body.appendChild(container);

const divs = document.querySelectorAll('.grid');
divs.forEach(div => {
    div.addEventListener('mouseover', ()=>{
        const randomNum = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        const r = randomNum(0, 255);
        const g = randomNum(0, 255);
        const b = randomNum(0, 255);
        const rgb = `rgb(${r},${g},${b})`; 
        div.style.backgroundColor = rgb;
    })
})
}

createGrid(gridNumber);

let eraseGrid = () => {
    const divs = document.querySelectorAll('div');
    divs.forEach(div => {
        div.remove();
    })
}

newGrid.addEventListener('click', ()=>{
    let newNum = prompt('Enter a new grid number: ');
    if(newNum<=100){
        eraseGrid();
        createGrid(newNum);
    } 
    else{
        alert('Enter a number less than 100!');
    }
    
})

