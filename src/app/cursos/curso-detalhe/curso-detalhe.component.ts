import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CursosService } from './../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _cursosService: CursosService,
    private _router: Router
  ) {
    /* console.log(_activatedRoute);
    this.id = _activatedRoute.snapshot.params['id']; */
   }

  ngOnInit() {
    this.inscricao = this._activatedRoute.params.subscribe((params: any) => {
      this.id = params['id'];
      this.curso = this._cursosService.getCurso(this.id);
      if (this.curso == null) {
        this._router.navigate(['/cursos/notFound']);
      }
    });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
