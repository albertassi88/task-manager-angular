import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TarefaService, Tarefa } from '..';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute,  //para obter o paramêtro id
    private router: Router
  ) { }

  ngOnInit(): void  {
    const id = +this.route.snapshot.params['id']; //o sinal de + converte o id que uma string para number
    this.tarefa = this.tarefaService.buscarPorId(id);
  }

  atualizar() {
    if (this.formTarefa.form.valid) {
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }
}
