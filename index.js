let kitten = document.getElementById('kitten');

kitten.style.position = 'fixed';

document.onmousemove = (event) => {
    kitten.style.left = event.clientX - 150 + 'px';
    kitten.style.top = event.clientY - 170 + 'px';
}

kitten.onmouseover = () => confirm('kitten ate the catfood!! wanna play more?');