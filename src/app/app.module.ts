import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ElementsModule } from './elements/elements.module';
//import { CollectionsModule } from './collections/collections.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

//process to show another module. first create module with ng generate component nameofthenmodule/nameofthecomponent
// then export the module, then import it on appModule and add it to the imports array, finally add it to the app.component template

/* things you can find in @ngModule
declarations: tells angular what components, pipes, directives are in the module
imports: tells angular what other modules are needed to run the module
exports: tells angular what components, pipes, directives this module makes available to other modules
providers: Old way of connecting modules and services in angular
bootstrap: used by the appModule only to declare what component will be displayed first
*/

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
