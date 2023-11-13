import '../styles/main.css'
import { setupJoke } from './jokes'

setupJoke(document.querySelector('#joke-button'), document.querySelector('#joke-output'))
