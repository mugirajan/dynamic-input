import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedComponentComponent } from './red-component/red-component.component';
import { GreenComponentComponent } from './green-component/green-component.component';
import { BlueComponentComponent } from './blue-component/blue-component.component';

const routes: Routes = [
  {path:"red",component:  RedComponentComponent},
  {path:"green",component:  GreenComponentComponent},
  {path:"blue",component: BlueComponentComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[RedComponentComponent,GreenComponentComponent,BlueComponentComponent]
