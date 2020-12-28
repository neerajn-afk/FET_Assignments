function drawSmiley() {
    var c = document.getElementById("smiley");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle= 'yellow';
    ctx.fill();
    ctx.arc(150, 80, 50, 0, Math.PI *2, true); // Outer circle
    ctx.fillStyle= 'yellow';
    ctx.fill();
    ctx.moveTo(185, 80);
    ctx.arc(150, 80, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(175, 65);
    ctx.arc(170, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(135, 65);
    ctx.arc(130, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();
}