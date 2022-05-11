import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsHomeComponent} from './elements-home/elements-home.component';

//when setting a route, put the path and the component (and of course import the component)

const routes: Routes = [
  { path: '', component: ElementsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
