import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { NgxTypeaheadModule } from 'ngx-typeahead';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserResolver, PlantsResolver } from './services/user.resolver';
import { SearchComponent } from './search/search.component';
import { TypeaheadModule, AlertModule } from 'ngx-bootstrap';
import { PlanetComponent } from './planet/planet.component';
const appRoutes: Routes = [
  {
    path: '', component: LoginComponent, resolve: {
      users: UserResolver
    }
  },
  {
    path: 'search', component: SearchComponent,
    resolve: {
      plants: PlantsResolver
    }
  },
  {
    path: 'planet', component: PlanetComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    PlanetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TypeaheadModule.forRoot(),
    AlertModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [UserResolver, PlantsResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
