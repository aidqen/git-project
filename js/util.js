function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  
    const color = `rgb(${red}, ${green}, ${blue})`;
  
    return color;
  }