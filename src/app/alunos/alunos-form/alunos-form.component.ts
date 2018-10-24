import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlunosService } from '../alunos.service';
import { IFormCanDeactivate } from '../../guards/iform.candeactivate';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit, IFormCanDeactivate {

  aluno: any = {};
  inscricao: Subscription;
  formMudou = false;

  constructor(
    private _alunosService: AlunosService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.inscricao = this._activatedRoute.params.subscribe(
      (params: any) => {
        const id = params['id'];
        this.aluno = this._alunosService.getAluno(id);
        if (this.aluno == null) {
          this.aluno = {};
        }
      });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
    console.log('mudou');
  }

  podeMudarRota() {

    if (this.formMudou) {
      confirm('Tem certeza que deseja sair dessa página?');
    }

    return true;

  }

  podeDesativar() {
    return this.podeMudarRota();
  }

}
