import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BilletsComponent } from './main/billets/billets.component';

const routes: Routes = [
  {path: "destination/:name", component: BilletsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
