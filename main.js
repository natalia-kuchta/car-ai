const carCanvas = document.querySelector('canvas#carCanvas');

carCanvas.width=200;
const carCtx= carCanvas.getContext('2d')
const car = new Car(100, 100, 30, 50);


animate()


function animate(){
    carCanvas.height = window.innerHeight
    car.update()
    car.draw(carCtx, 'turquoise');
    requestAnimationFrame(animate)
}