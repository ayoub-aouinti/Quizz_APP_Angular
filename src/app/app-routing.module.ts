import { QuestionComponent } from './question/question.component';
import { WelcomComponent } from './welcom/welcom.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", redirectTo:'welcom', pathMatch:'full'},
  {path: "welcom", component: WelcomComponent},
  {path: "question", component: QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
