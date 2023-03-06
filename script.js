const startButton = document.getElementById('start-btn');
const container = document.getElementById('container');
const header = document.getElementById('header');
const context = document.getElementById('context');
const choices = document.getElementById('choices');

startButton.addEventListener('click', startGame);

let storyIndex = 0;

function startGame(e) {
    container.removeChild(startButton);
    setNextScene(e);
}

function setNextScene(e) {
    if (e.target != startButton) {
        storyIndex = e.target.dataset.nextIdx;
    }
    

    while (choices.firstChild) {
        choices.removeChild(choices.firstChild);
    }

    header.innerText = story[storyIndex].header;
    context.innerText = story[storyIndex].content;

    story[storyIndex].choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.dataset.nextIdx = choice.nextIdx;
        button.addEventListener('click', setNextScene);
        button.classList.add('btn');
        choices.appendChild(button);
    });    
}

const story = [
    {
        header: "Welcome, Adventurer",
        content: "some cool story stuff",
        choices: [
            {text: "choice 1", nextIdx: 1},
            {text: "choice 2", nextIdx: 2}
        ]
    },
    { // story[0], choice 1
        header: "Oh nooooo...",
        content: "something happened!",
        choices: [
            {text: "choice 1", nextIdx: 3},
            {text: "choice 2", nextIdx: 4}
        ]
    },
    { // story[0], choice 2
        header: "Yay!",
        content: "something good happened!",
        choices: [
            {text: "choice 1", nextIdx: 5},
            {text: "choice 2", nextIdx: 6}
        ]
    },
    { // story[1], choice 1
        header: "Aww crap",
        content: "something else happened!",
        choices: [
            {text: "choice 1", nextIdx: 7},
            {text: "choice 2", nextIdx: 8}
        ]
    },
    { // story[1], choice 2
        header: "Let's goooo!",
        content: "something else good happened!",
        choices: [
            {text: "choice 1", nextIdx: 9},
            {text: "choice 2", nextIdx: 10}
        ]
    }
];