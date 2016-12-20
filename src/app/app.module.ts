import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';
import {HomeComponent,LessonHash,LessonBlock,LessonBlockchain,LessonDistributed, LessonTokens, LessonThanks} from './home/home.component';
import {AboutComponent} from './about/about.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
	AboutComponent,
	LessonHash,
	LessonBlock,
	LessonBlockchain,
	LessonDistributed,
	LessonTokens,
	LessonThanks
    ],
    imports: [
    	FormsModule,
    	BrowserModule,
        routing
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})

export class AppModule {
}
