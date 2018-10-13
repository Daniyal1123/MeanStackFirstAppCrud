import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'create', component: CreateComponent },
  { path: 'update/:id', component: UpdateComponent }
  // { path: 'heroes', component: HeroesComponent }
];

@NgModule({
   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]

})
export class AppRoutingModule { }
