import { Component } from '@angular/core';
import { ChildComponent } from "./child/child";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.html',
  styleUrls: ['./parent.scss'],
  imports: [ChildComponent]
})
export class ParentComponent {
  question: string = 'რა არის საქართველოს დედაქალაქი?';
  studentAnswer: string = '';

  receiveAnswer(ans: string) {
    this.studentAnswer = ans;
  }
}
