import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [SecondComponent],
  imports: [
    CommonModule
  ]
})
export class LazyModule { }
