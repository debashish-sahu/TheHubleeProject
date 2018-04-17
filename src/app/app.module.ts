import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';


import { DooshCollectComponent } from './doosh/doosh.collect';
import { DooshResultComponent } from './doosh/doosh.result';



@NgModule({
  declarations: [
    AppComponent,DooshCollectComponent,DooshResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'collect',component: DooshCollectComponent },
      {path: 'result',component: DooshResultComponent },
      {path: '', redirectTo: '/collect', pathMatch: 'full'}    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
