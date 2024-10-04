let numbers = document.getElementById("numbers");
let btn = document.getElementById("check");
function palindrome() {
    const important =  numbers.value.split("").reverse().join("");
    if (numbers.value === '') {
        alert('Enter a Number until next time!');
        window.close()
    } else if (numbers.value.length === 1) {
        alert('More values!');
    } else if (numbers.value === important) {
        window.alert('Level 2 clear!!');
        window.open('front.html','__blank');
    } else {
        alert('You missed!');
        location.reload();
    }
    numbers.onmouseenter = () => {
        numbers.style.color = 'hsl(0, 0%, 65%)';
        numbers.style.borderRadius = '50px';
        numbers.style.paddingLeft = '10px';
        numbers.style.paddingBottom = '2px';
        numbers.style.transition = '1s';
    }
    numbers.onmouseleave = () => {
        numbers.style.color = 'white';
        numbers.style.borderRadius = '0';
        numbers.style.paddingLeft = '0';
        numbers.style.paddingBottom = '0';
        numbers.style.transition = '1s';
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
}