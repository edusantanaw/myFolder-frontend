import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  _title: string = '';
  @Input()
  set title(title: string) {
    this._title = title;
  }
}
