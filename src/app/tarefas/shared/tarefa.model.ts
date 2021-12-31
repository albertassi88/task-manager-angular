//Model é uma representação do objeto tarefas

export class Tarefa {
  constructor(
    public id?: number,  // ? serve para deixar o atributo opcional
    public nome?: string,
    public concluida?: boolean
  ) {}
}
