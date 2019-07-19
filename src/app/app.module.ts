import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsComponent } from './components/pet/pets/pets.component';
import { PetDetailComponent } from './components/pet/pet-detail/pet-detail.component';
import { PetAddComponent } from './components/pet/pet-add/pet-add.component';
import { PetEditComponent } from './components/pet/pet-edit/pet-edit.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetDetailComponent,
    PetAddComponent,
    PetEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

const routes: Routes = [
  {
    path: 'pets',
    component: PetsComponent,
    data: { title: 'Lista de Pets' }
  },
  {
    path: 'pet-details/:id',
    component: PetDetailComponent,
    data: { title: 'Detalhe do Pet' }
  },
  {
    path: 'pet-add',
    component: PetAddComponent,
    data: { title: 'Adicionar um Pet' }
  },
  {
    path: 'pet-edit/:id',
    component: PetEditComponent,
    data: { title: 'Editar um Pet' }
  },
  {
    path: '',
    redirectTo: '/pets',
    pathMatch: 'full'
  }
];
