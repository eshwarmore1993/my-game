import { Injectable } from '@angular/core';

@Injectable()
export class DynamicColorService {

    private color = '#ffebcd';

    constructor() { }

    public getColorForValue(value: number) {
        if (value <= 2) {
            return this.color;
        }
        // const percent = (value / 40) * -100;

        // let R = parseInt(this.color.substring(1, 3), 16);
        // let G = parseInt(this.color.substring(3, 5), 16);
        // let B = parseInt(this.color.substring(5, 7), 16);

        // R = R * (100 + percent) / 100;
        // G = G * (100 + percent) / 100;
        // B = B * (100 + percent) / 100;

        // R = (R < 255) ? R : 255;
        // G = (G < 255) ? G : 255;
        // B = (B < 255) ? B : 255;

        // const RR = ((R.toString(16).length === 1) ? '0' + R.toString(16) : R.toString(16));
        // const GG = ((G.toString(16).length === 1) ? '0' + G.toString(16) : G.toString(16));
        // const BB = ((B.toString(16).length === 1) ? '0' + B.toString(16) : B.toString(16));

        // return '#' + RR + GG + BB;
        // const num = parseInt(this.color.substring(1, 6), 16);
        // const r = (num >> 16) + value;
        // const b = ((num >> 8) & 0x00FF) + value;
        // const g = (num & 0x0000FF) + value;
        // const newColor = g | (b << 8) | (r << 16);
        // return '#' + newColor.toString(16);
        let col = this.color;
        const amt = value / 128;
        let usePound = false;
        if (col[0] === '#') {
            col = col.slice(1);
            usePound = true;
        }

        const num = parseInt(col, 16);

        let r = (num << 16) + amt;

        if (r > 255) { r = 255; } else if (r < 0) { r = 0; }

        let b = ((num >> 8) & 0x00FF) + amt;

        if (b > 255) { b = 255; } else if (b < 0) { b = 0; }

        let g = (num & 0x0000FF) + amt;

        if (g > 255) { g = 255; } else if (g < 0) { g = 0; }

        return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
    }

}
