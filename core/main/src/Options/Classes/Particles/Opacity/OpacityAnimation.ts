import type { IOpacityAnimation } from "../../../Interfaces/Particles/Opacity/IOpacityAnimation";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";

/**
 * @category Options
 */
export class OpacityAnimation implements IOpacityAnimation, IOptionLoader<IOpacityAnimation> {
    /**
     *
     * @deprecated this property is obsolete, please use the new minimumValue
     */
    public get opacity_min(): number {
        return this.minimumValue;
    }

    /**
     *
     * @deprecated this property is obsolete, please use the new minimumValue
     * @param value
     */
    public set opacity_min(value: number) {
        this.minimumValue = value;
    }

    public enable;
    public minimumValue;
    public speed;
    public sync;

    constructor() {
        this.enable = false;
        this.minimumValue = 0;
        this.speed = 2;
        this.sync = false;
    }

    public load(data?: RecursivePartial<IOpacityAnimation>): void {
        if (data === undefined) {
            return;
        }

        if (data.enable !== undefined) {
            this.enable = data.enable;
        }

        const minimumValue = data.minimumValue ?? data.opacity_min;

        if (minimumValue !== undefined) {
            this.minimumValue = minimumValue;
        }

        if (data.speed !== undefined) {
            this.speed = data.speed;
        }

        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}
