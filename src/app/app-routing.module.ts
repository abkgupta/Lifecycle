import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntervalcComponent } from './intervalc/intervalc.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent,
  // },
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
