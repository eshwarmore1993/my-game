import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';
import { DynamicColorService } from './dynamic-color.service';
import { GameService } from './game.service';


@NgModule({
    declarations: [
        AppComponent,
        BlockComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        FormsModule
    ],
    providers: [DynamicColorService, GameService],
    bootstrap: [AppComponent]
})
export class AppModule { }
