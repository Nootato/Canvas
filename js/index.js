const square = document.querySelector(".square");

square.addEventListener("click", () => {
    createElement("newSquare"); 
});

function createElement(shapeClass) {
    const newShape = document.createElement('div'); 
    newShape.classList.add(shapeClass); 

    document.body.appendChild(newShape); 
}
