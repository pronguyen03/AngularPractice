import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here
import { AppComponent } from "./app.component";
import { ButtonComponent } from "./button/button.component";
import { LoginComponent } from "./login/login.component";
import { AppRoutingModule } from "./app-routing.module";
//communicating with a remote server
import { HttpClientModule } from "@angular/common/http";
import { SignUpComponent } from './sign-up/sign-up.component';
import { AccountsComponent } from './accounts/accounts.component';
@NgModule({
  declarations: [AppComponent, ButtonComponent, LoginComponent, SignUpComponent, AccountsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
