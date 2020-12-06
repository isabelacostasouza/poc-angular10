import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadingRoutingModule } from './lazyloading-routing.module';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LazyloadingComponent } from './lazyloading.component';
import { HomeComponent } from '../../pages/home/home.component';
import { SearchCardComponent } from '../../components/search-card/search-card.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SearchCreatureCardComponent } from '../../components/search-creature-card/search-creature-card.component';
import { SearchSorceryCardComponent } from '../../components/search-sorcery-card/search-sorcery-card.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatListModule } from "@angular/material/list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";

@NgModule({
  declarations: [
    LazyloadingComponent,
    HomeComponent,
    SearchCardComponent,
    HeaderComponent,
    FooterComponent,
    SearchCreatureCardComponent,
    SearchSorceryCardComponent,
  ],
  imports: [
    CommonModule,
    LazyloadingRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [HttpClient],
  bootstrap: [LazyloadingComponent]
})
export class LazyloadingModule { }
