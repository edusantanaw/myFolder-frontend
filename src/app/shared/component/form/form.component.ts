import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  imports: [ReactiveFormsModule]
})
export class FormComponent {
  @Input() title: string = '';
  @Input() formGroup!: FormGroup;
}
