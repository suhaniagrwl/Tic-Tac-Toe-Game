let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#rtnbtn");
let newbtn=document.querySelector("#newbtn");
let msg =document.querySelector("#msg");
let msgcontainer=document.querySelector(".msgcontainer")


let turn0=true;
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetgame=()=>{
    turn0=true;
    enablebox ();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0===true){
            box.innerText="o";
            box.style.color="blue";
            turn0=false;
        }else{
            box.innerText="x";
            box.style.color = "red"; 
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const disablebox = () =>{
    for( let box of boxes){
        box.disabled=true;
    }
};
const enablebox = () =>{
    for( let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showwinner=(winner)=>{
    msg.innerText=`congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
};
const checkwinner=()=>{
    for( let pattern of winpatterns ){
            let pos1val= boxes[pattern[0]].innerText;
            let pos2val= boxes[pattern[1]].innerText;
            let pos3val= boxes[pattern[2]].innerText;
        if(pos1val !="",pos2val !="",pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner")
                showwinner(pos1val);
            }
        }
    }
}
newbtn.addEventListener("click",resetgame)
resetbtn.addEventListener("click",resetgame)