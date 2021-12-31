import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefaService } from './shared';
import { ListarComponent } from './listar/listar.component';

@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
