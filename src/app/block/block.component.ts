import { Component, OnInit, Input } from '@angular/core';
import { Block } from '../block';
import { DynamicColorService } from '../dynamic-color.service';

@Component({
    selector: 'app-block',
    templateUrl: './block.component.html',
    styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

    @Input()
    block: Block;
    color: string;

    constructor(private dynamicColor: DynamicColorService) { }

    ngOnInit() {
        this.color = this.dynamicColor.getColorForValue(this.block.value);
        console.dir(this.color);
    }

}
