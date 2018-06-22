import { Component, OnInit, Input } from '@angular/core';
import { Block } from '../block';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-block',
    templateUrl: './block.component.html',
    styleUrls: ['./block.component.css'],
    animations: [
        trigger('blockState', [
            transition('inactive => active', animate('.3s 100ms ease-in-out', style({
                transform: 'scale(1.1)'
            }))),
        ])
    ]
})
export class BlockComponent implements OnInit {

    @Input()
    block: Block;

    constructor() { }

    ngOnInit() {
    }

}
