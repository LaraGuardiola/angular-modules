import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';

//when using routers there is no need to export the ElementsHomeComponent
//just set the path and the component in the elements-routing.module.ts

@NgModule({
  declarations: [
    ElementsHomeComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  exports: [
    ElementsHomeComponent
  ]
})
export class ElementsModule { }
