import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

//added home route '' (means root, localhost), and ** route (means anything different than root)

//IMPLEMENTING LAZY LOADING:
/*
- Choose which modules should be lazy loaded before
- for each module, remove any import statements for those modules anywhere else in the project
- in the AppRoutingModule(here) we need to define the path like below
- in the lazy loaded module routing file, edit the path to be relative to the path specified here (otherwise its cumulative)
*/

const routes: Routes = [
  { 
    path: 'elements', 
    loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule ) 
  },
  { 
    path: 'collections', 
    loadChildren: () => import('./collections/collections.module').then(m => m.CollectionsModule )  
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
