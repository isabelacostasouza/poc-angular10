import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../../pages/home/home.component';
import { SearchCardComponent } from '../../components/search-card/search-card.component';
import { SearchSorceryCardComponent } from '../../components/search-sorcery-card/search-sorcery-card.component';
import { SearchCreatureCardComponent } from '../../components/search-creature-card/search-creature-card.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'search-card', component: SearchCardComponent },
      { path: 'search-creature-card', component: SearchCreatureCardComponent },
      { path: 'search-sorcery-card', component: SearchSorceryCardComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule { }
