import { Component, OnInit, HostListener } from '@angular/core';
import { GameService } from './game.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

    constructor(public gameService: GameService) {
    }

    ngOnInit(): void {
        this.gameService.start();
    }

    @HostListener('document:keyup', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        const key = event.key;
        if (key === 'ArrowDown') {
            this.gameService.playRight();
        } else if (key === 'ArrowUp') {
            this.gameService.playLeft();
        } else if (key === 'ArrowLeft') {
            this.gameService.playUp();
        } else if (key === 'ArrowRight') {
            this.gameService.playDown();
        }
        console.log(event);
    }
}
