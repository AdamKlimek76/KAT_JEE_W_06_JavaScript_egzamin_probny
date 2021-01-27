const divCont=document.getElementById("container");
const buttons=document.querySelectorAll("button");

for (let i = 0; i <buttons.length ; i++) {
    buttons[i].addEventListener("click", function () {
        const text=this.dataset.text;
        divCont.innerText=text;
    });
}