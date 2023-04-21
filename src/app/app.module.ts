import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomComponent } from '.d:/repos/Quizz_App_Angular/Quizz_APP_Angular/src/welcom/welcom.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [		
    AppComponent,
      WelcomComponent,
      QuestionComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
