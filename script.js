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
        content: `You are a knight who has been unjustly imprisoned by the evil wizard Maglarovich! Your cell is tiny, dark, foul-smelling, and worst of all, quite dank! What do you do?`,
        choices: [
            {text: "Use your natural strength to bust out!", nextIdx: 1},
            {text: "Dig your way out with the spoon they gave you!", nextIdx: 2}
        ]
    },
    { // story[0], choice 1
        header: "You bust out!",
        content: `You use your rippling muscles to bend the bars wide enough to simply walk out of your cell. But ho! A guard has seen you! He lets out a shout, and draws his sword before you. Unfortunately, he stands between you and the only exit.`,
        choices: [
            {text: "Attack like a crazy person.", nextIdx: 3},
            {text: "Try to intimidate him.", nextIdx: 4}
        ]
    },
    { // story[0], choice 2
        header: "What a chore!",
        content: `For a solid two weeks, you slave away into the deep hours of the night. Chipping, chipping, chipping away at the tough stone behind your bed. It hardly seems like you've made any progress... A month later, just as you were ready to give up, you break through the outer wall- only to find that you're 75 feet above ground level.`,
        choices: [
            {text: "Jump down", nextIdx: 5},
            {text: "Make a rope out of bedsheets", nextIdx: 6}
        ]
    },
    { // story[1], choice 1
        header: "Weelll...",
        content: `You run at the guard, yelling like a crazy person. You see momentary fear in his eyes, before he steels himself, draws his sword, and runs you through with his blade. What did you think would happen?`,
        choices: [
            {text: "Play again?", nextIdx: 0},
        ]
    },
    { // story[1], choice 2
        header: "How did that work?",
        content: `You tell the guard that you were visited by some kind of demon, and learned all sorts of black magic. He scoffs, but there's a look of self-doubt in his body language. Emboldened, you begin chanting in a made-up language, spreading your hands wide as if you're summoning some kind of demon. The guard slowly begins to back away, and then runs away. You follow after him, chanting all the more, until he eventually leads you out, screaming and crying. You're free!`,
        choices: [
            {text: "Play again?", nextIdx: 0},
        ]
    },
    { // story[2], choice 1
        header: "Oh, boy...",
        content: "You jump down, and instantly die upon impact. What were you thinking?",
        choices: [
            {text: "Play Again?", nextIdx: 0}
        ]
    },
    { // story[2], choice 2
        header: "You win!",
        content: `You didn't think it would work, but somehow your bedsheets are 75 feet long! You gently climb down and escape the dark wizard's tower.`,
        choices: [
            {text: "Play again?", nextIdx: 0}
        ]
    }
];