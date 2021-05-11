const body=document.body;
const head=document.head;
//console.log(head.getBoundingClientRect());

//var sheet = document.createElement('style');
//sheet.innerHTML = "div:hover {border: 2px solid gold; background-color: gray;}";
//sheet.innerHTML= "div:hover{border: 2px solid gold;}";
//document.head.appendChild(sheet);

const div = document.createElement("div");
div.setAttribute("id", "wrapper");
div.style.borderColor="#FF0000FF";
div.style.borderStyle="solid";
div.style.boxSizing='border-box';
div.style.position="absolute";//moving div
div.style.left='500px';//moving div
div.style.top='200px';//moving div
div.style.width='500px';
div.style.height='200px';
div.style.borderWidth='2px';


//div.setAttribute("style", "width:500px;height:200px;border-style:solid;border-color:red;border-width:1px;");
div.textContent="Hello world";

body.append(div);
const rect=div.getBoundingClientRect();
console.log(rect);

const wrapper= document.getElementById("wrapper");
// const wrapper = document.querySelector(".item");
// console.log(wrapper);
wrapper.addEventListener("mousedown", mousedown);

function mousedown(e){

    //console.log(e.clientX);
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);

    let prevX = e.clientX;
    let prevY = e.clientY;

    function mousemove(e){

        let newX = prevX-e.clientX;
        let newY = prevY-e.clientY;

        const rect = wrapper.getBoundingClientRect();
        wrapper.style.left = rect.left - newX + 'px'; 
        wrapper.style.top = rect.top - newY + 'px'; 

        //console.log(rect);
        prevX= e.clientX;
        prevY = e.clientY;

    }

    function mouseup() {
        window.removeEventListener("mousemove", mousemove);
        window.removeEventListener("mouseup", mouseup);
      }

}


//console.log(body);