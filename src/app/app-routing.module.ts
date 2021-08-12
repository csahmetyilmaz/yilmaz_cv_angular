import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)},
  {path: 'contact', loadChildren: () => import('./views/contact/contact.module').then(m => m.ContactModule)},
  {path: 'skills', loadChildren: () => import('./views/skills/skills.module').then(m => m.SkillsModule)},
  {path: 'experiences', loadChildren: () => import('./views/experiences/experiences.module').then(m => m.ExperiencesModule)},
  { path: 'education', loadChildren: () => import('./views/education/education.module').then(m => m.EducationModule) },
  { path: 'portfolio', loadChildren: () => import('./views/portfolio/portfolio.module').then(m => m.PortfolioModule) },
  { path: 'references', loadChildren: () => import('./views/references/references.module').then(m => m.ReferencesModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
