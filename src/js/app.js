import Box from "./box";
import Goblin from "./goblin";
import Cursor from "./components/cursor/cursor";

let board = new Box();
const goblin = new Goblin();
const cursor = new Cursor(".container");

board.draw();
goblin.changePosition();
goblin.gotCaught();
