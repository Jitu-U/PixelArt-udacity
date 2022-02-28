// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


//variables with dom objects 
const heightInput = document.getElementById("inputHeight");
const widthInput = document.getElementById("inputWidth");
const colorPicker = document.getElementById("colorPicker");
const canvas = document.getElementById("pixelCanvas");
const form = document.getElementById("sizePicker");

//Width and Height of Grid
let width;
let height;


//Table 
let table = "";

// For width and Height value 
form.addEventListener('submit', (event) => {
    width = widthInput.value;
    height = heightInput.value;
    makeGrid(width, height);
})



//Function which returns the colorpicker value which will colorise the cell
function color(val) {
    console.log(val);
    return val
}


function makeGrid(height, width) {
    table = "";
    let id = 0;
    for (let i = 0; i < width; i++) {
        table += "<tr>"                  // Row starting tag
        for (let j = 0; j < height; j++) {

            //The onclick event changes the backhround color value here, I just want one suggestion for like ,
            //how i can use this long line as seperate function and still can do the same funcionality. I tried but it didn't work 
            //Thanks 

            //One more thing: It requires double click to change color first time on each cell

            table += `<th class="cell" id="${id}" onclick="(this.style.backgroundColor = color(colorPicker.value));"></th>`;
            id++;
        }
        table += "</tr>" // End Tag to create new row with loop
    }


    canvas.innerHTML = table; //pusing the stringf as inner HTML to table 
}
