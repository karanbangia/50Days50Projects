let boxes = document.querySelectorAll('.content');
const boxContainer=document.querySelector('.container');
window.addEventListener('scroll', checkBoxes);
checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach((box,idx) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            // if(idx===boxes.length-2)
            // {
            //     let divElement=document.createElement('div');
            //     divElement.className='container';
            //     boxContainer.appendChild(divElement);
            //     boxes=document.querySelectorAll('.content');
            // }
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}