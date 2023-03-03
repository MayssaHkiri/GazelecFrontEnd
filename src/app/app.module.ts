import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBar1Component } from './components/nav-bar1/nav-bar1.component';
import { NavBar2Component } from './components/nav-bar2/nav-bar2.component';
import { IntroSectionComponent } from './components/intro-section/intro-section.component';
import { AproposSectionComponent } from './components/apropos-section/apropos-section.component';
import { EventSectionComponent } from './components/event-section/event-section.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { DisciplinesSectionComponent } from './components/disciplines-section/disciplines-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { TeamSectionComponent } from './components/team-section/team-section.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AproposPageComponent } from './components/apropos-page/apropos-page.component';
import { EventsPageComponent } from './components/events-page/events-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavBar1Component,
    NavBar2Component,
    IntroSectionComponent,
    AproposSectionComponent,
    EventSectionComponent,
    LoginPageComponent,
    SignUpPageComponent,
    DisciplinesSectionComponent,
    ContactSectionComponent,
    TeamSectionComponent,
    HomePageComponent,
    ContactPageComponent,
    AproposPageComponent,
    EventsPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
