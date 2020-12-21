const textBox = document.querySelector('.text-box');
// const array = textBox.value.split(',');
// console.log(array);
const choiceContainer = document.querySelector('.choice-container');

textBox.focus();

function PickRandomChoice() {
    const choices = document.querySelectorAll('.choice');
    return randomNumber = Math.floor(Math.random() * choices.length);
}

function highlight(randomChoice) {
    const choices = document.querySelectorAll('.choice');
    choices[randomChoice].classList.add('highlight');
}

function unHighlightChoice(randomChoice) {
    const choices = document.querySelectorAll('.choice');
    choices[randomChoice].classList.remove('highlight');
}

function randomSelect() {
    const times = 30;
    const interval = setInterval(() => {
        const randomChoice = PickRandomChoice();
        highlight(randomChoice);
        setTimeout(() => {
            unHighlightChoice(randomChoice);
        }, 100)

    }, 100)
    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomChoice = PickRandomChoice();
            highlight(randomChoice);
        })
    }, times * 100)

}

textBox.addEventListener('keyup', (e) => {
    createChoices(e.target.value);
    if (e.key == 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10)
        randomSelect();
    }
})

function createChoices(value) {
    const choices = value.split(',').filter(choice => choice.trim() != '').map(choice => choice.trim());
    choiceContainer.innerHTML = '';
    choices.forEach(choice => {
        const choicespan = document.createElement('span');
        choicespan.classList.add('choice');
        choicespan.innerText = choice;
        choiceContainer.appendChild(choicespan);
    })

}

