import { Ticker } from "pixi.js";
import { IState, NullState } from "./states";

export class StateMachine {
    private static states: Record<string, () => IState> = {
        'null': () => new NullState()
    }
    private static currentstate: IState

    public static change(stateName: string) {
        if (this.currentstate) {
            this.currentstate.exit()
        }

        if (!(stateName in this.states)) {
            this.currentstate = this.states['null']()
        } else {

            this.currentstate = this.states[stateName]()
        }

        this.currentstate.enter()
    }

    public static update(ticker: Ticker) {
        this.currentstate.update(ticker)
    }
}