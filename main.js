import { say } from 'cowsay';
import moo from './moo.js';


const name = "there";
console.log(say({ text: moo(name) }));