<<<<<<< HEAD
import '../styles/tailwind.css'
import '../styles/main.css'
import { setupJoke } from './jokes'
=======
import '../styles/main.css';
import { setupJoke } from './jokes';
>>>>>>> main

setupJoke(
    document.querySelector('#joke-button'),
    document.querySelector('#joke-output'),
);
