class Sprite {
  constructor({ position = { x: 0, y: 0 } }) {
    this.position = position
    this.image = new Image()
    this.image.src = 'img/projectile.png'
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }
}
