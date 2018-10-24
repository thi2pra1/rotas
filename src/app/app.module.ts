import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
/* import { CursosComponent } from './cursos/cursos.component';
import { routing } from './app.routing';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos/cursos.service';
import { CursoNotFoundComponent } from './cursos/curso-not-found/curso-not-found.component'; */
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
/* import { CursosModule } from './cursos/cursos.module'; */
/* import { AlunosModule } from './alunos/alunos.module'; */

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent/* ,
    CursosComponent,
    CursoDetalheComponent,
    CursoNotFoundComponent */
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    /* CursosModule, */
    /* AlunosModule, */
    AppRoutingModule
    /* routing */
  ],
  providers: [
    AuthService,
    AuthGuard,
    CursosGuard,
    AlunosGuard
  ],
  /* providers: [CursosService], */
  bootstrap: [AppComponent]
})
export class AppModule { }
