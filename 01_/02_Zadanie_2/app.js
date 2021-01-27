const colorDiv=document.querySelectorAll(".color");
console.log(colorDiv);

for (let i = 0; i <colorDiv.length ; i++) {
    colorDiv[i].addEventListener("mouseover", function () {
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor=randomColor;
        const text = this.dataset.text;
        this.innerText=text;
    });
}

for (let i = 0; i <colorDiv.length ; i++) {
    colorDiv[i].addEventListener("mouseout", function () {
        this.innerText="";

    });
}