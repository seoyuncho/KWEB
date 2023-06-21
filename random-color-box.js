const setRandomBgColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = 'rgb(' + r + ',' + b + ',' + g + ')';
    document.getElementById('color-box').style.backgroundColor = color;
}