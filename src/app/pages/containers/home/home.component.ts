import { Component } from '@angular/core';
import quizz_questions from '../../../../assets/data/quizz_questions.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  title: string = '';
  answers: string[] = [];
  answerSelected: string = "";
  finished: boolean = false;

  //bind to component quizz
  questions: any = "";
  questionSelected: any = "";

  questionIndex: number = 0;
  questionMaxIndex: number = 0;


  ngOnInit(): void {
    if(quizz_questions){
      this.finished = false;
      this.title = quizz_questions.title;

      this.questions = quizz_questions.questions;
      this.questionSelected = this.questions[this.questionIndex];
      this.questionIndex = 0;
      this.questionMaxIndex = this.questions.length;
    }
  }

  handleOptionSelected(optionSelected: string){
    this.answers.push(optionSelected);
    this.nextStep();
  }

  async nextStep(){
    this.questionIndex += 1;
    if(this.questionMaxIndex > this.questionIndex){
      this.questionSelected = this.questions[this.questionIndex];
    } else {
      this.finished = true;
      const finalAnswer: string = await this.checkResult(this.answers);
      this.answerSelected = quizz_questions.results[finalAnswer as keyof typeof quizz_questions.results];
    }
  }

  async checkResult(answers: string[]) {
    const result = answers.reduce((previous, current, index, arr) => {
      if(
        arr.filter(item => item === previous).length >
        arr.filter(item => item === current).length
      ){
        return previous
      }else {
        return current
      }
    });
    return result;
  }
}
