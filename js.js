

document.getElementById("ten").addEventListener("click", start);
document.getElementById("clear").addEventListener("click", clearBoard);
document.getElementById("black").addEventListener("click", changeColorBlack)
// document.getElementById("red").addEventListener("click", changeColorRed)
// document.getElementById("green").addEventListener("click", changeColorGreen)
// document.getElementById("blue").addEventListener("click", changeColorBlue)

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
    changeColorBlack();
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




function changeColorBlack() {

    document.querySelectorAll(".singleBox").forEach(oneBox => {
        oneBox.addEventListener("mouseover", () => {
            oneBox.style.backgroundColor = "black"
        })
    })
    document.getElementById("black").style.backgroundColor = "black"
    document.getElementById("black").style.color = "white"
}


// function changeColorRed() {

//     document.querySelectorAll(".singleBox").forEach(oneBox => {
//         oneBox.addEventListener("mouseover", () => {
//             oneBox.style.backgroundColor = "red"
//         })
//     })
//     document.getElementById("red").style.backgroundColor = "red"
//     document.getElementById("red").style.color = "white"
// }


// function changeColorGreen() {

//     document.querySelectorAll(".singleBox").forEach(oneBox => {
//         oneBox.addEventListener("mouseover", () => {
//             oneBox.style.backgroundColor = "green"
//         })
//     })
//     document.getElementById("green").style.backgroundColor = "green"
//     document.getElementById("green").style.color = "white"
// }


// function changeColorBlue() {

//     document.querySelectorAll(".singleBox").forEach(oneBox => {
//         oneBox.addEventListener("mouseover", () => {
//             oneBox.style.backgroundColor = "blue"
//         })
//     })
//     document.getElementById("blue").style.backgroundColor = "blue"
//     document.getElementById("blue").style.color = "white"
// }

