import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { ArrayComponent } from './array/array.component';
import { StackComponent } from './stack/stack.component';

const routes: Routes = [
  {
    path: '',
    component: ViewComponent,
    children: [
      { path: '/array', component: ArrayComponent },
      { path: '/stack', component: StackComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DsaRoutingModule {}
