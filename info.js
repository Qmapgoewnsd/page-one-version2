let btn = document.getElementById("btn");
let section = document.getElementById("section");

btn.onclick = () => {
    history.back();
}
btn.onmouseenter = () => {
    section.style.marginRight = '430px';
    section.style.marginTop = '-60px';
    section.style.transition = '.4s';
}
btn.onmouseleave = () => {
    section.style.marginRight = '0';
    section.style.marginTop = '0';
    section.style.transition = '.4s';
}