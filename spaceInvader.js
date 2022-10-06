"use strict";

alert("Draw your space invader here");

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawSpaceinvader();
function drawSpaceinvader() {
    //blackbox
    context.lineWidth =1;
    context.strokeStyle ="black";
    context.beginPath();
    context.rect(0,0,300,300);
    context.stroke();
    context.fillStyle ="black";
    context.fill();


    //middlegreenbox
    context.lineWidth =1;
    context.strokeStyle ="#3FDE10";
    context.beginPath();
    context.rect(125,175,50,50);
    context.stroke();
    context.fillStyle ="#3FDE10";
    context.fill();


    //leftbottomgreenbox
    context.lineWidth =1;
    context.strokeStyle ="#3FDE10";
    context.beginPath();
    context.rect(75,225,50,50);
    context.stroke();
    context.fillStyle ="#3FDE10";
    context.fill();


    //rightbottomgreenbox
    context.lineWidth =1;
    context.strokeStyle ="#3FDE10";
    context.beginPath();
    context.rect(175,225,50,50);
    context.stroke();
    context.fillStyle ="#3FDE10";
    context.fill();


    //leftgreenrect
    context.lineWidth =1;
    context.strokeStyle ="#3FDE10";
    context.beginPath();
    context.rect(25,125,100,50);
    context.stroke();
    context.fillStyle ="#3FDE10";
    context.fill();


    //rightgreenrect
    context.lineWidth =1;
    context.strokeStyle ="#3FDE10";
    context.beginPath();
    context.rect(175,125,100,50);
    context.stroke();
    context.fillStyle ="#3FDE10";
    context.fill();


    //biggreenbox
    context.lineWidth =1;
    context.strokeStyle ="#3FDE10";
    context.beginPath();
    context.rect(25,25,250,100);
    context.stroke();
    context.fillStyle ="#3FDE10";
    context.fill();



}