const MIN_PARTICLE_SIZE = 10;
const MIN_SPEED_X = 1;
const MIN_SPEED_Y = 1;
const NUM_OF_PARTICLES = 3;
const canvas = document.getElementById("smoke-canvas")
console.log(canvas)
const ctx = canvas.getContext("2d")
//define the color that we want to use for our drawings
ctx.fillStyle = 'rgb(34,56,78)';
//prepare to draw a path
ctx.beginPath();
//draw a circle with the arc method
ctx.arc(2, 3, 10, 0, Math.PI * 2);
//fill the object that we have drawn
ctx.fill();
function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
window.dispatchEvent(new Event('resize'));
resize();
class Smoke {
    constructor() {

        this.particles = [];
    }

    add(particle) {
        this.particles.push(particle)
    }

    animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let index = 0; index < this.particles.length; index++) {
            this.particles[index].update();
            if(this.particles[index].size <= 0.2){
                this.particles.splice(index, 1);
                index--;
            }

        }

        requestAnimationFrame(() => this.animate());
    }

}
class Particle {
    constructor(x, y) {
        this.size = Math.random() * 2 + MIN_PARTICLE_SIZE
        this.color = 'rgb(196, 200, 232)';
        this.speedX = Math.random() * 2 + MIN_SPEED_X;
        this.speedY = Math.random() * 2 + MIN_SPEED_Y;
        this.x = Math.random() * 2 + x;
        this.y = Math.random() * 2 + y;
    }

    update() {
        this.size -= 0.1;
        this.x += this.speedX;
        //this.size = this.size

        this.draw();
    }
    draw() {
        ctx.fillStyle = 'rgb(255, 0, 128)'
        //prepare to draw a path
        ctx.beginPath();
        //draw a circle with the arc method
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        //fill the object that we have drawn
        ctx.fill();


    }
}
const smoke = new Smoke()
console.log(Smoke)
window.addEventListener('mousemove', (e) => {
    console.log(e);
    console.log(e.clientX);
    console.log(e.clientY);

    //create and add them to the smoke object
    for (let index = 0; index < NUM_OF_PARTICLES; index++) {
        const particle = new Particle(e.clientX, e.clientY);
        smoke.add(particle)
        console.log(smoke.particles)
    }

});


smoke.animate();