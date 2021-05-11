//console.log("hello");

const body=document.body;
//const head=document.head;
//console.log(head.getBoundingClientRect());

const div = document.createElement("div");
div.setAttribute("id", "wrapper");
div.style.borderColor="#FF0000FF";
div.style.borderStyle="solid";
// div.style.left="10px";
// div.style.top="10px";
div.style.width='500px';
div.style.height='200px';
div.style.borderWidth='2px';
div.style.boxSizing='border-box';

//div.setAttribute("style", "width:500px;height:200px;border-style:solid;border-color:red;border-width:1px;");
div.textContent="Hello world";

body.append(div);
const rect=div.getBoundingClientRect();
console.log(rect);


//console.log(body);