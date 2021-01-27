const list = document.querySelectorAll("li");
const ulElement = document.querySelector("ul");
const buttons = document.querySelectorAll("button");

buttons[0].addEventListener("click", function () {
    const listElement = document.createElement("li");
    listElement.innerText = "chleb";
    ulElement.appendChild(listElement);

});

buttons[1].addEventListener("click", function () {

    ulElement.lastElementChild.remove();
    list.remove(list.length-1);

});

buttons[2].addEventListener("click", function () {
    if (list.length > 1) {
        const clone=list[1].cloneNode(true);
        ulElement.appendChild(clone);

    }
});