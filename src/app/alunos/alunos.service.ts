import { Injectable } from '@angular/core';

import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Aluno[] = [
    {id: 1, nome: 'Thiago', email: 'teste01@teste.com.br'},
    {id: 2, nome: 'Isaac', email: 'teste02@teste.com.br'},
    {id: 3, nome: 'Jaqueline', email: 'teste03@teste.com.br'},
    {id: 4, nome: 'Megan', email: 'teste04@teste.com.br'},
    {id: 5, nome: 'João', email: 'teste05@teste.com.br'},
    {id: 6, nome: 'Maria', email: 'teste06@teste.com.br'},
    {id: 7, nome: 'Dalva', email: 'teste07@teste.com.br'}
  ];

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    for (let i = 0; i < this.alunos.length; i++) {
      const aluno = this.alunos[i];
      // tslint:disable-next-line:triple-equals
      if (aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }

  constructor() { }
}
