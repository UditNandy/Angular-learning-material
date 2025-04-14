import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayComponent } from './array/array.component';
import { StackComponent } from './stack/stack.component';
import { ViewComponent } from './view/view.component';
import { DsaRoutingModule } from './dsa-routing.module';

@NgModule({
  declarations: [ArrayComponent, StackComponent, ViewComponent],
  imports: [CommonModule, DsaRoutingModule],
})
export class DsaModule {}
