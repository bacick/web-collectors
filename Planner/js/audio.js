const sound = require("../media/rickandmortysun.mp3");

let audioTimer = new Audio("./media/rickandmortysun.mp3");

export function audio() {
    audioTimer.play();
}