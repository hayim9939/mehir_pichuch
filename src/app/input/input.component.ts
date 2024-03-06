import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgModel } from "@angular/forms"
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})

export class InputComponent {
  @Output() onChange = new EventEmitter<string>();
  @Input() value: string = "";

  updateValue(): void {
    console.log(this.value, "value");
    this.onChange.emit(this.value);
  };
}
