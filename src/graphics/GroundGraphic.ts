import { Graphics, GraphicsContext, Texture, Ticker } from "pixi.js";
import { IGraphics, Manager } from "../Manager";

export class GroundGraphic extends Graphics implements IGraphics {
    private readonly SCROLL_SPEED = 0.06
    constructor() {
        const texture = Texture.from("ground")
        const context = new GraphicsContext()
            .texture(texture)
            .translate(texture.width, 0)
            .texture(texture)

        super(context)
        this.x = 0
        this.y = Manager.height - this.height
    }

    update(ticker: Ticker): void {
        const xScroll = (-this.position.x + ticker.deltaMS * this.SCROLL_SPEED) % (this.width / 2)
        this.position.x = -xScroll
    }
}