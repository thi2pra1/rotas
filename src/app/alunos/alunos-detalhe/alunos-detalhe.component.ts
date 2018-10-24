import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { AlunosService } from './../alunos.service';
import { Aluno } from './../aluno';

@Component({
  selector: 'app-alunos-detalhe',
  templateUrl: './alunos-detalhe.component.html',
  styleUrls: ['./alunos-detalhe.component.css']
})
export class AlunosDetalheComponent implements OnInit, OnDestroy {

  aluno: Aluno;
  inscricao: Subscription;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _alunosService: AlunosService,
    private _router: Router
  ) { }

  ngOnInit() {
    /* this.inscricao = this._activatedRoute.params.subscribe((params: any) => {
      const id = params['id'];
      this.aluno = this._alunosService.getAluno(id);
    }); */
    console.log('ngOnInit: AlunosDetalheComponent');
    this.inscricao = this._activatedRoute.data.subscribe(
      (info: {aluno: Aluno}) => {
        console.log('Recebendo o Objeto Aluno do resolver');
        this.aluno = info.aluno;
      }
    );
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  editarContato() {
    this._router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

}
