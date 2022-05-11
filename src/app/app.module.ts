import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementsModule } from './elements/elements.module';
import { CollectionsModule } from './collections/collections.module';

//process to show another module. first create module with ng generate component nameofthenmodule/nameofthecomponent
// then export the module, then import it on appModule and add it to the imports array, finally add it to the app.component template

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElementsModule,
    CollectionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
