const toggleButtons=document.querySelectorAll('.faq-toggle');
const faq=document.querySelectorAll('.faq');
toggleButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        button.parentNode.classList.toggle('active');
    })
})