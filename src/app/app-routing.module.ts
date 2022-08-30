import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {path:"", redirectTo: "Login", pathMatch: 'full'},
  {path:"Login", component: LoginComponent},
  {path:"Home", component: HomeComponent},
  {path:"Quiz", component: QuizComponent},
  {path:"Results", component:ResultsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

