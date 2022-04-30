let num

function createGrid(num) {
  
    for(let i = 1; i < num*num +1; i++) {
        let newBox = document.createElement("div");
        newBox.classList.add("singleBox");
        document.getElementById("container").style.gridTemplateColumns = `repeat(${num}, auto)`
        document.getElementById("container").style.gridTemplateRows = `repeat(${num}, auto)`
        document.getElementById("container").append(newBox)

        document.querySelectorAll(".singleBox").forEach(oneBox => {
            oneBox.addEventListener("mouseover", () => {
                oneBox.style.backgroundColor = "black"
                oneBox.style.border = "1px solid white"
            })
        })
            
        
    }
    
  
    
    
}







