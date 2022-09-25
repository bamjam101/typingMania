document.addEventListener('DOMContentLoaded', () => {
    let elementTray =document.getElementById('titlebar')
    const textField = document.querySelector('#inputText');
    const para = document.querySelector('.para');
    textField.focus();
    textField.addEventListener('keypress', (event) => {
        textField.focus();
        para.innerHTML = event.target.value;
    });


    document.getElementById('add').addEventListener('click',function(){
    var titleTrayTab=document.createElement('div')
    var workspaceTab=document.createElement('p')
    titleTrayTab.setAttribute('class','worktitle')
    titleTrayTab.textContent="Workspace"
    elementTray.appendChild(titleTrayTab)

    })
    // document.querySelector()
});
//Process code
// const typeField = document.querySelector('#typeField');
// const container = document.querySelector('#container');
// const typed = document.querySelector('#typed');
// const btn = document.querySelector('#btn');
// const loader = document.querySelector('#loader');

// let index = 0;
// let arr = [];
//  function process() {
//      const para= document.createElement('p');
//      typed.appendChild(para);
//      typeField.innerText = '';
//      typeField.focus();
//      typeField.addEventListener('keydown', (event)=>{
//          para.innerHTML = event.target.value;
//      });
//      btn.addEventListener('onclick', (event)=>{
//          loading();
//          console.log(event.target);
//  	    const content = para.innerHTML;
//          const obj = {title:'docName', content: content, key: index}
//          arr.append(obj);
//          para.innerHTML ='';
//          process();
//      })
//  }

//  function loading() {
//      loader.style.display = 'block';
//      setTimeout(()=>{
//          loader.style.zIndex = '1';
//          loader.style.opacity = '1';
//      }, 1000)
//      setTimeout(()=>{
//          loader.style.zIndex = '-1';
//          loader.style.opacity = '0';
//      }, 3000)
//      setTimeout(()=>{
//          loader.style.display = 'none';
//      }, 5000)
//  }

//  document.addEventListener('DOMContentLoaded', ()=>{
//      process();
//  })
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
// -----------------------------------------------------
let cpy_btn=document.getElementById('cpy-btn')
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
            event.preventDefault();}

        // pick_btn.setAttribute('type','button')
        pick_btn.textContent='Pick Again'

        cpy_btn.textContent="Reset Mode"
   }
   else if(optns.value==="Write"){
    pick_btn.setAttribute('type','reset')
    pick_btn.textContent="Reset Content"

    document.querySelector('#pick').addEventListener('click',function(){
        document.querySelector('.para').textContent=''
    })
   }
   
}
function copy(){
    var copy= document.getElementById('inputText');
    copy.select();
    copy.setSelectionRange(0,99999);
    navigator.clipboard.writeText(copy.value);
    alert("The text"+navigator.clipboardData);
}
cpy_btn.addEventListener('click',copy);

var text='';

document.querySelector('.para').addEventListener('mouseup',function(){

    if(window.getSelection){
        text= window.getSelection().toString()

    }
    document.getElementById('bold').addEventListener('click',function bold(){
        var para_content=document.querySelector('.para').textContent
        let bold_font = " <b>"+text+"</b> "  
        document.querySelector('.para').innerHTML=para_content.replace(text,bold_font)
    })
    document.getElementById('italics').addEventListener('click',function italics(){
        var para_content=document.querySelector('.para').textContent
        let italics = "<i>"+text+"</i>"  
        document.querySelector('.para').innerHTML=para_content.replace(text,italics)
    })
    document.getElementById('underline').addEventListener('click',function underline(){
        var para_content=document.querySelector('.para').textContent
        let underline = " <u>"+text+"</u> "  
        document.querySelector('.para').innerHTML=para_content.replace(text,underline)
    })
})
