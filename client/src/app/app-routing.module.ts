import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { UnauthenticatedUserComponent } from './unauthenticated-user/unauthenticated-user.component';
import { UserInfoComponent } from './user-info/user-info.component'
import { AdminManageComponent } from './admin-manage/admin-manage.component'


const routes: Routes = [
  // default page
  {
    path: '',
    redirectTo: 'example', 
    pathMatch: 'full'
  },
  //login page
  {
    path: 'login',
    component: LoginComponent
  },
  //register page
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'example',
    component: ExampleComponent
  },
  {
    path: 'adminManage',
    component: AdminManageComponent
  },
  {
    path: 'userInfo',
    component: UserInfoComponent
  },
  {
    path: 'unauthenticated-user',
    component: UnauthenticatedUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
