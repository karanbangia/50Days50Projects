const progess = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 0;

next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
})
prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 0) {
        currentActive = 0;
    }
    update();
})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
        const actives = document.querySelectorAll('.active');
        console.log(actives.length)
        progess.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
    })
    if (currentActive === 0) {
        document.getElementById('prev').disabled = true;
    } else if (currentActive > 0 && currentActive < circles.length) {
        document.getElementById('prev').disabled = false;
        document.getElementById('next').disabled = false;

    } else {
        document.getElementById('next').disabled = true;
    }
}
