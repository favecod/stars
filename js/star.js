class Star {
    constructor() {
        this.init()
    }

    init() {
        this.z = random(width)
        this.x = random(-width, width)
        this.y = random(-height, height)
    }

    update() {
        this.z -= 5
        if (this.z < 1) {
            this.init()
        }
    }

    show() {
        fill(255, 140, 46)
        noStroke()

        this.sx = map(this.x / this.z, 0, 1, 0, width)
        this.sy = map(this.y / this.z, 0, 1, 0, height)

        let r = map(this.z, 0, width, 12, 0)
        ellipse(this.sx, this.sy, r, r)
    }
}