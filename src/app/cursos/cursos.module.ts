import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* import { RouterModule } from '@angular/router'; */

import { CursosRoutingModule } from './cursos.routing.module';
import { CursoNotFoundComponent } from './curso-not-found/curso-not-found.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';

@NgModule({
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        CursoNotFoundComponent
    ],
    imports: [
        CommonModule,
        CursosRoutingModule
        /* RouterModule */
     ],
    exports: [],
    providers: [CursosService],
})
export class CursosModule { }
