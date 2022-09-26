const inputbox = document.getElementById('inputbox');
const divbox = document.querySelector('button');

divbox.addEventListener('click', ()=> {
    inputbox.focus();
})

divbox.style.backgroundColor = "red";
divbox.style.height = "10vh";
inputbox.style.height = "10vh";
