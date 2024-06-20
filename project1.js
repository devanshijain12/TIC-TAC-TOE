let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset")
let newbtn = document.querySelector("#new")
let msg = document.querySelector("#msg")
let div1 = document.querySelector("#div1")
let main = document.querySelector("#main-content")

let winningseq = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let playerO = true
let count = 0

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (playerO){
            box.textContent =  "O"
            playerO = false
        } else {
            box.textContent =  "X"
            playerO = true
        }
        box.disabled = true;
        count++
        let iswinner = checkwinner()
        if (count === 9 && !checkwinner()){
            gamedraw()
        }

    })
})

let resetfunc = ()=>{
    boxes.forEach((box)=>{
        box.innerText = ""
        box.disabled = false
    })
    playerO = true
    count = 0
}

reset.addEventListener("click",resetfunc)
newbtn.addEventListener("click",resetfunc)
newbtn.addEventListener("click",()=>{
    main.classList.remove("hide")
    div1.classList.add("hide")
})

let showwinner = (winner)=>{
    msg.innerText = `Congratulations!\nWinner is ${winner}`
    div1.classList.remove("hide")
    main.classList.add("hide")

}

let checkwinner = ()=> {
    for (let seq of winningseq){
        let pos1val = boxes[seq[0]].innerText
        let pos2val = boxes[seq[1]].innerText
        let pos3val = boxes[seq[2]].innerText

        if (pos1val != "" && pos2val != "" && pos3val != ""){
            if (pos1val === pos2val && pos2val === pos3val){
                showwinner(pos1val)
            }
        }
    }
}

let gamedraw = ()=> {
    msg.innerText = `It's a Draw!`
    div1.classList.remove("hide")
    main.classList.add("hide")

}