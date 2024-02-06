import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { TableComponent } from './auth/table/table.component';
// import { HomeComponent } from './user/home/home.component';

const routes: Routes = [
  { "path": '', component: HomeComponent },
  { "path": 'login', component: LoginComponent },
  { "path": 'table', component: TableComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
