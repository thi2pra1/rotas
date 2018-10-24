import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
/* import { AlunosGuard } from './guards/alunos.guard'; */
/* import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoNotFoundComponent } from './cursos/curso-not-found/curso-not-found.component'; */

const appRoutes: Routes = [
    { path: 'cursos',
        loadChildren: '../app/cursos/cursos.module#CursosModule',
        canActivate: [AuthGuard],
        canActivateChild: [CursosGuard],
        canLoad: [AuthGuard]
    },
    { path: 'alunos',
        loadChildren: '../app/alunos/alunos.module#AlunosModule',
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]/* ,
        canActivateChild: [AlunosGuard] */
    },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent,
        canActivate: [AuthGuard]
    }/* ,
    { path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'notFound', component: CursoNotFoundComponent } */
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
