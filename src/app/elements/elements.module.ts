import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module'
import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimesDirective } from './times.directive';

//when using routers there is no need to export the ElementsHomeComponent
//just set the path and the component in the elements-routing.module.ts
//we need to import the Shared module if we want access to it
@NgModule({
  declarations: [
    ElementsHomeComponent,
    PlaceholderComponent,
    TimesDirective
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ],
  exports: [
    ElementsHomeComponent
  ]
})
export class ElementsModule { }
