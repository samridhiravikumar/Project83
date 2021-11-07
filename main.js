var mouseEvent = "empty";
var lpx, lpy;
var cpx, cpy;
canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
color = "black";
width = 10;
var color;
var width_of_line;


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown() {
    color=document.getElementById("color1").value;
    width_of_line=document.getElementById("WidthOfLine1").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseUp", my_mouseUp);
function my_mouseUp() {
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave() {
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    mouseEvent = "mousemove";
   current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        console.log("current position of x and y =");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;


}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e) {
    last_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e) {
    current_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;
    console.log("current position of touch x and y =");
    console.log("x = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_touch_x,last_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
    ctx.stroke();

last_position_of_touch_x=current_position_of_touch_x;
last_position_of_touch_y=current_position_of_touch_y;
}
