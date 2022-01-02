import { Routes } from '@angular/router';

import { ListarComponent } from './';
import { CadastrarComponent } from './';
import { EditarComponent } from './';

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
  {
    path: 'tarefas/editar/:id',
    component: EditarComponent
  },
];

