let gridNumber = 16;
const container = document.createElement('div');
container.setAttribute('style', 'height:100%;display:flex;flex-direction:column;padding:5px auto');



for(let i=0;i<gridNumber;i++){
    const row = document.createElement('div');
    row.setAttribute('style', 'display:flex;flex:1;padding:0 auto');
    for(let j=0;j<gridNumber;j++){
        const div = document.createElement('div');
        div.style.flex = '1';
        div.style.border = '5px red';
        div.style.padding = '5px';
        row.appendChild(div);
    }
    container.appendChild(row);
}



document.body.appendChild(container);

