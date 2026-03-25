import { Component, Input, Output, EventEmitter, input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.html',
  styleUrls: ['./child.scss']
})
export class ChildComponent {
  @Input() question: string = '';
  @Output() answerEvent = new EventEmitter<string>();

  answer: string = 'თბილისი';
  // ან
  // answer:any = prompt("შეიყვანე პასუხი")
 
  sendAnswer() {
    this.answerEvent.emit(this.answer);
  }
}
