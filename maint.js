let btn = document.getElementById("btn");
btn.onclick = () => {
    window.open('index.html');
    window.close();
}
btn.onmouseenter = () => {
    btn.style.border = '2px solid blue';
    btn.style.color = 'blue';
    btn.style.transition = '1s';
}
btn.onmouseleave = () => {
    btn.style.border = '2px solid white';
    btn.style.color = 'white';
    btn.style.transition = '1s';
}