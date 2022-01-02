import { Routes } from '@angular/router';

import { ListarComponent } from './';
import { CadastrarComponent } from './';

export const TarefasRouting: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar'
  },
  {
    path: 'tarefas/listar',
    component: ListarComponent
  },
  {
    path: 'tarefas/cadastrar',
    component: CadastrarComponent
  },
];

