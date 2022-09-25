document.addEventListener('DOMContentLoaded', () => {
    const textField = document.querySelector('#inputText');
    const para = document.querySelector('.para');
    textField.focus();
    textField.addEventListener('keypress', (event) => {
        textField.focus();
        para.innerHTML = event.target.value;
    });
});

function focus() {
    const para = document.querySelector('.para');
    textField.focus();
}

function curtain() {
    const curtain = document.querySelector("#landing-page");
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    setTimeout(() => {
        footer.style.display = "block";
        main.style.display = "block";
        header.style.display = "block";
    }, 2000);
    setTimeout(() => {
        footer.style.opacity = "100";
        main.style.opacity = "100";
        header.style.opacity = "100";
        curtain.style.display = "none";
    }, 3000);
    curtain.style.top = "-100%";
}