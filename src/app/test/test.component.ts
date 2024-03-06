import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  @Output() clickButton = new EventEmitter<void>();

  changeColor() {
    this.clickButton.emit()
    console.log("momo");
  }
}
