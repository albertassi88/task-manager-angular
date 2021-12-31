import { Routes } from '@angular/router';

import { ListarComponent } from './listar';

export const TarefasRouting: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar'
  },
  {
    path: 'tarefas/listar',
    component: ListarComponent
  },
];

