import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuLinkComponent } from './menu-link/menu-link.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { RegisterPageComponent } from './login/register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuLinkComponent,
    LoginPageComponent,
    RegisterPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, routing],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
