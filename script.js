const startButton = document.getElementById('start-btn');
const container = document.getElementById('container');
const header = document.getElementById('header');
const context = document.getElementById('context');
const choices = document.getElementById('choices');

startButton.addEventListener('click', startGame);

let storyIndex = 0;
let restartButton;

function startGame(e) {
    container.removeChild(startButton);
    setNextScene(e);
}

function setNextScene(e) {
    if (e.target != startButton && e.target != restartButton) {
        storyIndex = e.target.dataset.nextIdx;
    }
    else if (e.target === restartButton) {
        container.removeChild(restartButton);
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

    if (!story[storyIndex].playing) {
        storyIndex = 0;

        restartButton = document.createElement('button');
        restartButton.innerText = "Play again?"
        restartButton.classList.add('btn');
        restartButton.classList.add('start-btn');
        restartButton.addEventListener('click', setNextScene);
        container.appendChild(restartButton);
    }
}

const story = [
    {
        "header": "Welcome, Adventurer",
        "content": "You are a knight who has been unjustly imprisoned by the evil wizard Maglarovich! Your cell is tiny, dark, foul-smelling, and worst of all, quite dank! What do you do?",
        "choices": [
            {"text": "Use your natural strength to bust out!", "nextIdx": 1},
            {"text": "Dig your way out with the spoon they gave you!", "nextIdx": 2}
        ],
        "playing": true
    },
    {
        "header": "You bust out!",
        "content": "You use your rippling muscles to bend the bars wide enough to simply walk out of your cell. But ho! A guard has seen you! He lets out a shout, and draws his sword before you. Unfortunately, he stands between you and the only exit.",
        "choices": [
            {"text": "Attack like a crazy person.", "nextIdx": 3},
            {"text": "Try to intimidate him.", "nextIdx": 4}
        ],
        "playing": true
    },
    {
        "header": "What a chore!",
        "content": "You are a knight who has been unjustly imprisoned by the evil wizard Maglarovich! Your cell is tiny, dark, foul-smelling, and worst of all, quite dank! What do you do?",
        "choices": [
            {"text": "Jump down", "nextIdx": 5},
            {"text": "Make a rope out of bedsheets", "nextIdx": 6}
        ],
        "playing": true
    },
    {
        "header": "Weelll...",
        "content": "You are a knight who has been unjustly imprisoned by the evil wizard Maglarovich! Your cell is tiny, dark, foul-smelling, and worst of all, quite dank! What do you do?",
        "choices": [],
        "playing": false
    },
    {
        "header": "How did that work?",
        "content": "You are a knight who has been unjustly imprisoned by the evil wizard Maglarovich! Your cell is tiny, dark, foul-smelling, and worst of all, quite dank! What do you do?",
        "choices": [],
        "playing": false
    },
    {
        "header": "Oh, boy...",
        "content": "You jump down, and instantly die upon impact. What were you thinking?",
        "choices": [],
        "playing": false
    },
    {
        "header": "You win!",
        "content": "You are a knight who has been unjustly imprisoned by the evil wizard Maglarovich! Your cell is tiny, dark, foul-smelling, and worst of all, quite dank! What do you do?",
        "choices": [],
        "playing": false
    }
]