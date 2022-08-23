import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectoComponent} from './components/proyecto/edit-proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyecto/new-proyecto/new-proyecto.component';
import {EditHysComponent} from './components/hys/edit-hys/edit-hys.component';

import {NewHysComponent} from './components/hys/new-hys/new-hys.component';


import {EditYoComponent} from './components/yo/edit-yo/edit-yo.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},

  { path: 'nuevaeduc', component: NewEducacionComponent},
  

  { path: 'editeduc/:id', component: EditEducacionComponent},

  { path: 'editpro/:id', component: EditProyectoComponent},

  { path: 'nuevopro', component: NewProyectoComponent},

  { path: 'edithys/:id', component: EditHysComponent},

  { path: 'nuevohys', component: NewHysComponent},


  { path: 'edityo/:id', component: EditYoComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
