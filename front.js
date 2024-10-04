let text = document.getElementById("text");
let button = document.getElementById("batan");
let btn = document.getElementById("check");

button.onclick = () => {
    window.open('hint.html','__blank');
}
function order() {
    const order = text.value.split("").sort().join("");
    if (text.value.length <= 3) {
        alert('More values!');
    } else if (text.value === order) {
        window.alert('Congratulation see your result');
        window.open('https://www.youtube.com/watch?v=1uYn6qTANrE','__blank');
    } else {
        window.alert(`This is not palindome look: "${order}" you missed!`);
        window.close();
    }
}
text.onmouseenter = () => {
    text.style.color = 'hsl(0, 0%, 65%)';
    text.style.borderRadius = '50px';
    text.style.paddingLeft = '10px';
    text.style.paddingBottom = '2px';
    text.style.transition = '1s';
}
text.onmouseleave = () => {
    text.style.color = 'white';
    text.style.borderRadius = '0';
    text.style.paddingLeft = '0';
    text.style.paddingBottom = '0';
    text.style.transition = '1s';
}
window.onload = () => {
    btn.style.animationName = 'filip-infini';
    btn.style.transition = '1s';
}
btn.onmouseenter = () => {
    btn.style.animationName = '';
    btn.style.transition = '1s';
}
btn.onmouseout = () => {
    btn.style.animationName = 'filip-infini';
    btn.style.transition = '1s';
}