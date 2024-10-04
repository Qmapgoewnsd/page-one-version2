let btn = document.getElementById("btn");

btn.onclick = () => {
    history.back();
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
