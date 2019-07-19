import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetsComponent } from './components/pet/pets/pets.component';
import { PetDetailComponent } from './components/pet/pet-detail/pet-detail.component';
import { PetAddComponent } from './components/pet/pet-add/pet-add.component';
import { PetEditComponent } from './components/pet/pet-edit/pet-edit.component';


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


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
