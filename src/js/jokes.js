import { getFace } from "./faces";

export const jokes = [
    'Did you hear about the cheese factory explosion? There was nothing left but de-brie.',
    'Did you hear about the mathematician who\'s afraid of negative numbers? He\'ll stop at nothing to avoid them!',
    'How do you organize a fantastic space party? You planet.',
    'How do you organize a space party? You planet!',
    'How does a penguin build its house? Igloos it together!',
    'I asked my dog what\'s two minus two. He said nothing.',
    'I only know 25 letters of the alphabet. I don\'t know y.',
    'I told my computer I needed a break, and now it won\'t stop sending me vacation ads.',
    'I told my wife she was drawing her eyebrows too high. She looked surprised.',
    'I used to play piano by ear, but now I use my hands and fingers.',
    'What did one hat say to the other? Stay here, I\'m going on ahead!',
    'What did the coffee report to the police? It got mugged.',
    'What did the janitor say when he jumped out of the closet? Supplies!',
    'What did the janitor say when he jumped out of the closet? Supplies!',
    'What did the ocean say to the shore? Nothing, it just waved.',
    'What do you call a can opener that doesn\'t work? A can\'t opener!',
    'What do you call fake spaghetti? An impasta!',
    'What\'s brown and sticky? A stick.',
    'Why did the bicycle fall over? Because it was two-tired.',
    'Why did the math book look sad? Because it had too many problems.',
    'Why did the scarecrow win an award? Because he was outstanding in his field!',
    'Why did the tomato turn red? Because it saw the salad dressing!',
    'Why don\'t oysters donate to charity? Because they are shellfish.',
    'Why don\'t scientists trust atoms? Because they make up everything!',
    'Why don\'t skeletons fight each other? They don\'t have the guts!',
];

export function getJoke() {
    const key = Math.floor(Math.random() * jokes.length);
    return jokes[key];
}

export function setupJoke(buttonElement, outputElement) {
    buttonElement.addEventListener('click', () => {
        // Get two unique faces
        const firstFace = getFace();
        let secondFace = getFace();
        while (firstFace === secondFace) {
            secondFace = getFace();
        }

        // Display the joke for massive laughs
        outputElement.innerText = `${firstFace} ${getJoke()} ${secondFace}`;
    });
}
