const MIN_PARTICLE_SIZE = 0.2;
const MIN_SPEED_X = 1;
const MIN_SPEED_Y = 1;
const NUM_OF_PARTICLES = 10;
const canvas = document.getElementById("smoke-canvas")
console.log(canvas)
const ctx = canvas.getContext("id")
//define the color that we want to use for our drawings
ctx.fillStyle = 'rgb(34,56,78)'
//prepare to draw a path
ctx.beginPath();
//draw a circle with the arc method
ctx.arc(2, 3, 10, 0, Math.PI * 2);
//fill the object that we have drawn
ctx.fill();


class Smoke{
    constructor(){

        this.partcles = [];
    }

    add(particle){
        this.partcles.push(particle)
    }

}
class Particle{
    constructor(){
        this.size = Math.random() * 2 + MIN_PARTICLE_SIZE
        this.color = 'rgb(196, 200, 232)';
        this.speedX = Math.random() * 2 + MIN_SPEED_X;
        this.speedY = Math.random() * 2 + MIN_SPEED_Y;
        this.x = x;
        this.y = y;
    }
}
const smoke = new Smoke()
console.log(Smoke)
window.addEventListener('mousemove', (e)=>{
    console.log(e);
    console.log(e.clientX);
    console.log(e.clientY);

    //create and add them to the smoke object
    for (let index = 0; index < NUM_OF_PARTICLES; index++) {
        const particle = new Particle(e.clientX, e.clientY);
        smoke.add(particle)
        console.log(smoke.partcles)
    }







});



