canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2D");
var mouseEvent="empty";
var lastpostitionofx,lastpostitionofy;
var color="black";
var widthoftheline=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    widthoftheline=document.getElementById("width_of_the_line").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
if (mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthoftheline;
    console.log("last position of x and y cordinates=");
    console.log("x="+ lastpostitionofx + "y=" + lastpostitionofy);
    ctx.moveTo(lastpostitionofx,lastpostitionofy);
    console.log("current position of mouse x and y cordinates=");
    console.log("x="+ currentpostitionofmousex + "y=" + currentpostitionofmousey);
    ctx.lineTo(currentpostitionofmousex,currentpostitionofmousey);
    ctx.stroke();
}
lastpostitionofx=currentpostitionofmousex;
lastpostitionofy=currentpostitionofmousey;
}
function clear_area(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}













