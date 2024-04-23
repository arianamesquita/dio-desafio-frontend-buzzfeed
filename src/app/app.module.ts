import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizzComponent } from './pages/components/quizz/quizz.component';
import { HomeComponent } from './pages/containers/home/home.component';
import { QuestionsComponent } from './pages/components/questions/questions.component';
import { OptionsComponent } from './pages/components/options/options.component';
import { ResultsComponent } from './pages/components/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizzComponent,
    HomeComponent,
    QuestionsComponent,
    OptionsComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
