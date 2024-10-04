let text = document.getElementById("text");
let btn = document.getElementById("btn");
function check() {
    const idk = text.value.split("").reverse().join("");
    if (text.value === '') {
        alert('Why you bully me? Enter a Text!');
        location.reload();
    } else if (text.value.length <= 2) {
        alert('More values!');
    } else if (text.value === idk) {
            window.alert('Level one clear!');
            window.open('tindex.html','__blank');
            window.close();
        } else {
        window.alert('Try again');
        location.reload();
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