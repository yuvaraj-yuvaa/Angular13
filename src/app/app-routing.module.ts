import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ListproductsComponent } from './Products/listproducts/listproducts.component';

const routes: Routes = [
  {  path: '', component: ListproductsComponent},
  {  path: 'login', component: LoginComponent },
  {  path: '**', component: PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
