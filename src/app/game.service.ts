import { Injectable } from '@angular/core';
import { Block } from './block';

const MAX_ROW = 4;
const MAX_COLUMN = 4;
const MAX_NUM = 2;

@Injectable()
export class GameService {

    public blocks: Block[][];

    constructor() {
        this.blocks = [];
    }

    public start() {
        this.initialise();
        const row = this.getRandomInRange(MAX_ROW);
        const col = this.getRandomInRange(MAX_ROW);
        const value = this.getRandomInRange(MAX_NUM);
        this.blocks[row][col].value = value === 0 ? 2 : 4;
    }

    playDown(): void {
        let played = false;
        for (let i = MAX_ROW - 1; i >= 0; i--) {
            for (let j = 0; j < MAX_COLUMN; j++) {
                let temp_row = i;
                while (temp_row + 1 < MAX_ROW) {
                    if (this.blocks[temp_row + 1][j].value === 0
                        || this.blocks[temp_row][j].value === this.blocks[temp_row + 1][j].value) {
                        this.blocks[temp_row + 1][j].value += this.blocks[temp_row][j].value;
                        this.blocks[temp_row][j].value = 0;
                        temp_row++;
                        played = true;
                    } else {
                        break;
                    }
                }
            }
        }
        if (played) {
            this.fillRandomPosition();
        }
    }

    playUp(): void {
        let played = false;
        for (let i = 0; i < MAX_ROW; i++) {
            for (let j = 0; j < MAX_COLUMN; j++) {
                let temp_row = i;
                while (temp_row - 1 >= 0) {
                    if (this.blocks[temp_row - 1][j].value === 0
                        || this.blocks[temp_row][j].value === this.blocks[temp_row - 1][j].value) {
                        this.blocks[temp_row - 1][j].value += this.blocks[temp_row][j].value;
                        this.blocks[temp_row][j].value = 0;
                        temp_row--;
                        played = true;
                    } else {
                        break;
                    }
                }
            }
        }
        if (played) {
            this.fillRandomPosition();
        }
    }

    playLeft(): void {
        let played = false;
        for (let i = 0; i < MAX_ROW; i++) {
            for (let j = 0; j < MAX_COLUMN; j++) {
                let temp_col = j;
                while (temp_col - 1 >= 0) {
                    if (this.blocks[i][temp_col - 1].value === 0
                        || this.blocks[i][temp_col - 1].value === this.blocks[i][temp_col].value) {
                        this.blocks[i][temp_col - 1].value += this.blocks[i][temp_col].value;
                        this.blocks[i][temp_col].value = 0;
                        temp_col--;
                        played = true;
                    } else {
                        break;
                    }
                }
            }
        }
        if (played) {
            this.fillRandomPosition();
        }
    }

    playRight(): void {
        let played = false;
        for (let i = 0; i < MAX_ROW; i++) {
            for (let j = MAX_COLUMN - 1; j >= 0; j--) {
                let temp_col = j;
                while (temp_col + 1 < MAX_COLUMN) {
                    if (this.blocks[i][temp_col + 1].value === 0
                        || this.blocks[i][temp_col + 1].value === this.blocks[i][temp_col].value) {
                        this.blocks[i][temp_col + 1].value += this.blocks[i][temp_col].value;
                        this.blocks[i][temp_col].value = 0;
                        temp_col++;
                        played = true;
                    } else {
                        break;
                    }
                }
            }
        }
        if (played) {
            this.fillRandomPosition();
        }
    }

    private fillRandomPosition() {
        for (let i = 0; i < MAX_ROW; i++) {
            for (let j = 0; j < MAX_COLUMN; j++) {
                if (this.blocks[i][j].value === 0) {
                    const value = this.getRandomInRange(MAX_NUM);
                    this.blocks[i][j].value = value === 0 ? 2 : 4;
                    return;
                }
            }
        }
    }

    private initialise() {
        for (let i = 0; i < MAX_ROW; i++) {
            this.blocks[i] = [];
            for (let j = 0; j < MAX_COLUMN; j++) {
                this.blocks[i][j] = new Block(0);
            }
        }
    }

    private getRandomInRange(range: number): number {
        return Math.floor(Math.random() * range);
    }

}
