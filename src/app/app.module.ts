import { NgModule } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';

import { provideStore, StoreModule } from '@ngrx/store';
import { userReducer } from './store/user/user.reducer';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  imports: [RouterOutlet, StoreModule.forRoot({ user: userReducer }), BrowserModule],
  bootstrap: [AppComponent],
  providers: [provideRouter(routes), provideHttpClient(withFetch()), provideStore()],
})
export class AppModule {}
