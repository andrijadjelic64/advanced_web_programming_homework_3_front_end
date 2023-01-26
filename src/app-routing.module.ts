import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./app/components/login/login.component";
import {AllUsersComponent} from "./app/components/all-users/all-users.component";
import {EditUserComponent} from "./app/components/edit-user/edit-user.component";
import {CreateUserComponent} from "./app/components/create-user/create-user.component";


const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "all-users",
    component: AllUsersComponent
  },
  {
    path: "user-edit",
    component: EditUserComponent
  },
  {
    path: "user-new",
    component: CreateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
