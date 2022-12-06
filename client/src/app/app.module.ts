import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpService } from './commonServices/http-service'
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

// Angular material
// button
import { MatButtonModule } from '@angular/material/button';
// table
import { MatTableModule } from '@angular/material/table';
// input
import { MatInputModule } from '@angular/material/input';
// icon
import { MatIconModule } from '@angular/material/icon';
// form
import {MatFormFieldModule} from '@angular/material/form-field';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
// toolbar
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegisterComponent } from './register/register.component';
import { UnauthenticatedUserComponent } from './unauthenticated-user/unauthenticated-user.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AuthUserComponent } from './auth-user/auth-user.component';


@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    LoginComponent,
    RegisterComponent,
    UserInfoComponent,
    AdminManageComponent,
    UnauthenticatedUserComponent,
    AuthUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    RouterModule,
    MatToolbarModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
