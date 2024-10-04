let btn = document.getElementById("btn");
let section = document.getElementById("section");

btn.onmouseenter = () => {
    section.style.marginLeft = '300px';
    section.style.marginTop = '-50px';
    section.style.transition = '.4s';
}
btn.onmouseleave = () => {
    section.style.marginLeft = '0';
    section.style.marginTop = '0px';
    section.style.transition = '.4s';
}
btn.onclick = () => {
    window.open('main.html');
}