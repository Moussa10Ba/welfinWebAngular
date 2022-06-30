import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionInscriptionComponent } from './connexion-inscription/connexion-inscription.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component:LandingPageComponent},
  {path: 'connexion', component:ConnexionInscriptionComponent},
  {path: 'inscription', component:ConnexionInscriptionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
