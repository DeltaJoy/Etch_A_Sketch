

document.getElementById("ten").addEventListener("click", start);
document.getElementById("clear").addEventListener("click", clearBoard);

// function adding(x,y){
//     let total = (x) + y 
//     return total
// }

// function finalAdd (returnValue) {
//     console.log(returnValue + 2)
// }

// function make(x,y) {
//     let results = adding(x,y)
//     finalAdd(results)

// }



function start () {
    let num = createGrid();
    grid (num);
    changeColor();
}


function createGrid() {
    let totalSize = prompt("gridsize?")
    if (totalSize < 61) {
        return totalSize
        // let parseToInto = parseInt(totalSize)
        // return parseToInto;


        // for(let i = 1; i < totalSize*totalSize +1; i++) {
        //     let newBox = document.createElement("div");
        //     newBox.classList.add("singleBox");
        //     document.getElementById("container").style.gridTemplateColumns = `repeat(${totalSize}, auto)`
        //     document.getElementById("container").style.gridTemplateRows = `repeat(${totalSize}, auto)`
        //     document.getElementById("container").append(newBox)
        // }
    }   
    else {
        let askAgain = prompt("sorry thats too many to load, choose a smaller number")
        if (askAgain > 60) {
            alert("maybe play later")
        } else {
            return askAgain
        }
        
       
        
    } 
    
}

function grid (num) {
    for(let i = 1; i < num*num +1; i++) {
        let newBox = document.createElement("div");
        newBox.classList.add("singleBox");
        document.getElementById("container").style.gridTemplateColumns = `repeat(${num}, auto)`
        document.getElementById("container").style.gridTemplateRows = `repeat(${num}, auto)`
        document.getElementById("container").append(newBox)
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

