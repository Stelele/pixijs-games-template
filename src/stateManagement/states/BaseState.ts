import { Ticker } from "pixi.js";

export interface IState {
    enter: () => void
    exit: () => void
    update: (ticker: Ticker) => void
}

export class NullState implements IState {
    public enter() { }
    public exit() { }
    public update(_ticker: Ticker) { }

}