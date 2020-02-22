import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { WhyusComponent } from './components/whyus/whyus.component';
import { CtaComponent } from './components/cta/cta.component';
import { FeaturesComponent } from './components/features/features.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ClientsComponent } from './components/clients/clients.component';
import { TeamComponent } from './components/team/team.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    ServicesComponent,
    WhyusComponent,
    CtaComponent,
    FeaturesComponent,
    PortfolioComponent,
    ClientsComponent,
    TeamComponent,
    TestimonialsComponent,
    PricingComponent,
    FaqsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
