import { Graphics, GraphicsContext, Texture, Ticker } from "pixi.js";
import { IGraphics } from "../Manager";

export class BackgroundGraphic extends Graphics implements IGraphics {
    private readonly SCROLL_SPEED = 0.03
    constructor() {
        const texture = Texture.from("background")
        const context = new GraphicsContext()
            .texture(texture)
            .translate(texture.width, 0)
            .texture(texture)

        super(context)
        this.x = 0
        this.y = 0

    }

    update(ticker: Ticker): void {
        const xScroll = (-this.position.x + ticker.deltaMS * this.SCROLL_SPEED) % (this.width / 2)
        this.position.x = -xScroll
    }

}