
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.zIndex = '-1';
canvas.style.pointerEvents = 'none';
const ctx = canvas.getContext('2d');
let width, height;
function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);
const numFlakes = 100;
const flakes = Array.from({ length: numFlakes }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 4 + 1,
    d: Math.random() + 1
}));
function drawFlakes() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'white';
    ctx.beginPath();
    for (const f of flakes) {
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
    }
    ctx.fill();
    moveFlakes();
}
function moveFlakes() {
    for (const f of flakes) {
        f.y += Math.pow(f.d, 2) + 1;
        if (f.y > height) {
            f.y = 0;
            f.x = Math.random() * width;
        }
    }
}
setInterval(drawFlakes, 30);
