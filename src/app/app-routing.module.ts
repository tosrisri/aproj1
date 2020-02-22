import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
import { ContactusComponent } from './components/contactus/contactus.component';
// import { HeaderComponent } from './components/header/header.component';
// import { FooterComponent } from './components/footer/footer.component';


const routes: Routes = [
  { path: '',
    redirectTo: '/Intro',
    pathMatch: 'full'
  },
  { path: 'Intro', component: IntroComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Services', component: ServicesComponent },
  { path: 'Whyus', component: WhyusComponent },
  { path: 'Cta', component: CtaComponent },
  { path: 'Features', component: FeaturesComponent },
  { path: 'Portfolio', component: PortfolioComponent },
  { path: 'Clients', component: ClientsComponent },
  { path: 'Team', component: TeamComponent },
  { path: 'Testimonials', component: TestimonialsComponent },
  { path: 'Pricing', component: PricingComponent },
  { path: 'Faqs', component: FaqsComponent },
  { path: 'Contactus', component: ContactusComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export class AppModule { }