class GameObject {
  constuctor(x, y, sprite_src) {
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = sprite_src || null;
    this.image.onload = () => {
      this.isLoaded = true;
    };
  }

  draw(ctx) {
    if (this.isLoaded) {
      ctx.drawImage(this.image, this.x, this.y);
    }
  }
}
