// Process code

const inputTitle = document.querySelector("#inputTitle");
const inputBody = document.querySelector("#inputText");
const container = document.querySelector(".doc-body");
const titleBox = document.querySelector('.doc-title');
const btn = document.querySelector("#btn");
//   const loader = document.querySelector("#loader");

const notesUI = document.querySelector('.notes-interface');

let index = 0;
let arr = [];
function process() {
//   const title = document.createElement("h3");
//   title.classList.add('title');
  const title = document.querySelector('.title');
  title.innerHTML = "Give A Title...";
//   const para = document.createElement("p");
//   para.classList.add('para');
  const para = document.querySelector('.para');
  para.innerHTML = "Write Your Note Here...";

//   titleBox.appendChild(title);
//   container.appendChild(para);
  titleBox.addEventListener('click', ()=> {
    inputTitle.focus();
    title.style.opacity = '1';
  });
  container.addEventListener('click', ()=> {
    inputBody.focus();
    para.style.opacity = '1';
  });
  inputTitle.addEventListener("keyup", (event) => {
    title.innerHTML = event.target.value;
  });
  inputBody.addEventListener("keyup", (event) => {
    para.innerHTML = event.target.value;
  });
  btn.addEventListener("click", (event) => {
      //   loading();
      saveNote();
      inputBody.value = "";
      inputTitle.value = "";
      process();
  });
}

function saveNote() {
    notesUI.innerContent = '';
    const title = document.querySelector('.title').innerHTML;
    const para = document.querySelector('.para').innerHTML;
    const obj = { header: title, content: para, key: index };
    index = index + 1;
    console.log(index);
    arr.push(obj);
    arr.forEach((entry)=> {
        const note = document.createElement('a');
        const header = document.createElement('h3');
        note.appendChild(header);
        note.classList.add('note');
        note.innerHTML = `Note ${index}`;
        notesUI.appendChild(note);
        return index;
    });
}

//   function loading() {
//     loader.style.display = "block";
//     setTimeout(() => {
//       loader.style.zIndex = "1";
//       loader.style.opacity = "1";
//     }, 1000);
//     setTimeout(() => {
//       loader.style.zIndex = "-1";
//       loader.style.opacity = "0";
//     }, 3000);
//     setTimeout(() => {
//       loader.style.display = "none";
//     }, 5000);
//   }

document.addEventListener("DOMContentLoaded", () => {
  process();
});

// Pick or Reset fuction 
function variousOptions(){
    var opts = document.getElementById("selection").selectedIndex;
    var pick_btn=document.getElementById('pick');
    var optns=document.getElementsByTagName('option')[opts];

    if(optns.value==='Read'){
        document.getElementById('inputText').addEventListener('keypress',function blockInput(e){
            e.preventDefault();
            e.stopPropagation();})
            inputText.onpaste = function(event) {
            alert("Pasting isnt allowed while in Read Mode");
            event.preventDefault();
          };
        
          inputText.oncut = inputText.oncopy = function(event) {
            alert("Cutting/Copying isn't allowed while in Read Mode");
            event.preventDefault();
        }
        pick_btn.textContent='Pick Again';

        cpy_btn.textContent="Reset Mode";
   }
   else if(optns.value==="Write"){
    pick_btn.setAttribute('type','reset');
    pick_btn.textContent="Reset Content";

    document.querySelector('#pick').addEventListener('click',function(){
        document.querySelector('.para').textContent=''
    });
   }
}

// Copy function
let cpy_btn=document.getElementById('cpy-btn');
cpy_btn.addEventListener('click',copy);

function copy(event){
    const title = document.querySelector('.title').innerHTML;
    const body = document.querySelector('.para').innerHTML;
    const copy = `${title} - ${body}`;
    console.log(copy);
    copy.select();
    copy.setSelectionRange(0,99999);
    navigator.clipboard.writeText(copy.value);
}

// Bold/Italics/Underline function
let text='';

document.querySelector('.para').addEventListener('mouseup',function(){

    if(window.getSelection){
        text= window.getSelection().toString();
    }
    document.getElementById('bold').addEventListener('click',function bold(){
        var para_content=document.querySelector('.para').textContent;
        let bold_font = " <b>"+text+"</b> " ; 
        document.querySelector('.para').innerHTML=para_content.replace(text,bold_font);
    });
    document.getElementById('italics').addEventListener('click',function italics(){
        var para_content=document.querySelector('.para').textContent;
        let italics = "<i>"+text+"</i>"  ;
        document.querySelector('.para').innerHTML=para_content.replace(text,italics);
    });
    document.getElementById('underline').addEventListener('click',function underline(){
        var para_content=document.querySelector('.para').textContent;
        let underline = " <u>"+text+"</u> "  ;
        document.querySelector('.para').innerHTML=para_content.replace(text,underline);
    });
})

//Landing page animation function
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
