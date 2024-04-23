import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent {
  //bind to home
  @Input() title: string = '';
  @Input() finished: boolean = false;

  //bind to component questions and home
  @Input() questions: any = "";
  @Input() questionSelected: any = "";

  //bind to component options and home
  optionName: any = "";
  @Output() optionSelected = new EventEmitter<string>();

  //bind to component results and home
  @Input() answerSelected: string = "";

  handleOptionEmit(optionAlias: string) {
    this.optionSelected.emit(optionAlias);
  }
}
