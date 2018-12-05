let stars = new Array(700)

function setup() {
    createCanvas(window.outerWidth,window.outerHeight)
    for(let i = 0;i < stars.length;i++) {
        stars[i] = new Star();
    }
}

function draw(){
    background(18,19,30)
    translate(width / 2, height / 2)

    for (let i = 0; i < stars.length; i++) {
        stars[i].update()
        stars[i].show()
    }
}