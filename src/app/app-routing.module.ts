// Rotas de Navegação no componente principal

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TarefasRouting } from './tarefas';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tarefas/listar',
    pathMatch: 'full'
  },
  ...TarefasRouting   //passando todas as rotas das tarefas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

