import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent {

  @Input() optionName: any = "";
  @Output() emitOption = new EventEmitter<string>();

  playerChoose(optionAlias: string){
    this.emitOption.emit(optionAlias);
  }
}
