import { Routes } from '@angular/router';
import {RegisterComponent} from './pages/register/register.component';
import {LoginComponent} from './pages/login/login.component';
import {AppComponent} from './app.component';
import { CreateComponent } from './pages/create/create.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { ViewAllComponent } from './pages/ViewAll/ViewAll.component';
import { ViewOneComponent } from './pages/ViewOne/ViewOne.component';
import { EditComponent } from './pages/edit/Edit.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'student',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'student',
    component: ViewAllComponent
  },
  {
    path:'student/:id',
    component: ViewOneComponent
  },
  {
    path: 'student/:id/edit',
    component: EditComponent
  },
  {
    path: 'student/:id/delete',
    component: DeleteComponent
  }

];
