function colors(red, green, blue) {
    red = this.process.argv[2];
    green = this.process.argv[3];
    blue = this.process.argv[4];

    console.log(red + "," + green + "," + blue);
}


colors();
