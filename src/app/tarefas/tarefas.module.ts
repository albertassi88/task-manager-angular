import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefaService } from './shared';
import { ListarComponent } from './listar';
import { CadastrarComponent } from './cadastrar';
import { EditarComponent } from './editar/editar.component';

@NgModule({
  declarations: [
    ListarComponent,
    CadastrarComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
