/**
 * Created by mark on 12/22/2016.
 */
import { NgModule } from  '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//application components
import { AppComponent } from './app.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
