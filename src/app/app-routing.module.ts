import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntervalcComponent } from './intervalc/intervalc.component';
import { AppComponent } from './app.component';
import { ComchComponent } from './comch/comch.component';

const routes: Routes = [
  {
    path: 'comch',
    component:ComchComponent ,
  },
  {
    path:  'intervalc',
    component: IntervalcComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
