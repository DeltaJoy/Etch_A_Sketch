

document.getElementById("ten").addEventListener("click", start);
document.getElementById("clear").addEventListener("click", clearBoard);



function start () {
    createGrid()
    changeColor();

}


function createGrid() {
    let totalSize = prompt("gridsize?")
    if (totalSize > 60) {
        prompt("sorry thats too many to load, choose a smaller number")
    } else if (totalSize < 61) {

    
    
        for(let i = 1; i < totalSize*totalSize +1; i++) {
            let newBox = document.createElement("div");
            newBox.classList.add("singleBox");
            document.getElementById("container").style.gridTemplateColumns = `repeat(${totalSize}, auto)`
            document.getElementById("container").style.gridTemplateRows = `repeat(${totalSize}, auto)`
            document.getElementById("container").append(newBox)

            // document.querySelectorAll(".singleBox").forEach(oneBox => {
            //     oneBox.addEventListener("mouseover", () => {
            //         oneBox.style.backgroundColor = "black"
            //     })
            // })
            
        }
    }
    

    
    
}


function clearBoard (container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }

    let removing = document.querySelector("#container")
    clearBoard(removing)
    // document.querySelectorAll(".singleBox").forEach(box => {
    //     box.style.backgroundColor = "white"
    // })
}




function changeColor() {

    document.querySelectorAll(".singleBox").forEach(oneBox => {
        oneBox.addEventListener("mouseover", () => {
            oneBox.style.backgroundColor = "black"
        })
    })
}

