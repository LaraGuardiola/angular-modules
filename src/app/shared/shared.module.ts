import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';



@NgModule({
  declarations: [
    DividerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DividerComponent]
})
export class SharedModule { }

//if we want to give access to other modules first we need to export the component, this case DividerComponent, and import it on the wished module ()