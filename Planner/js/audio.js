const sound = require("../media/rickandmortysun.mp3");

let audioTimer = new Audio(sound);

export function audio() {
    audioTimer.play();
}