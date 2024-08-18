

const sizeButton = document.createElement("button");
sizeButton.textContent = "Choose Size"
document.getElementById("button-container").appendChild(sizeButton);
sizeButton.addEventListener("click", () => {
    size = prompt("Choose the grid size smaller than 100", 16);
    gridSize = Number(size);
    if (gridSize > 100) {
        gridSize = 100
      }
    gridContainer.innerHTML = '';
    GetGrid();
})

const gridContainer = document.getElementById('grid-container');
let gridSize = 16;
GetGrid();

function GetGrid() {

    for (let i = 0; i < gridSize * gridSize; i++) {
        
        const gridItem = document.createElement('div');
        gridItem.style.width = `${100 / gridSize}%`;
        gridItem.style.height = `${100 / gridSize}%`;
        gridItem.style.boxSizing = 'border-box';
        gridItem.style.border = '1px solid #ccc';
        gridContainer.appendChild(gridItem);
      
        // Add event listeners for hover effect
        gridItem.addEventListener('mouseover', () => {
          gridItem.style.backgroundColor = '#fffc20'; // Change to desired hover color
        });
      }
} 


