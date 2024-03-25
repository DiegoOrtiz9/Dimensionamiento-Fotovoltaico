import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosComponent } from './parametros/parametros.component';


@NgModule({
  declarations: [
    ParametrosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ParametrosComponent
  ]
})
export class ComponentsModule { }
