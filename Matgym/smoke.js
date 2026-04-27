const MIN_PARTICLE_SIZE = 0.2;
const MIN_SPEED_X = 1;
const MIN_SPEED_Y = 1;

window.addEventListener('mousemove', (e)=>{});


class Smoke{

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