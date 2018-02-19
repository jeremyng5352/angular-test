import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: Array<Question>;

  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = this.generateForm(this.questions);
  }

  private generateForm(questions: Array<Question>): FormGroup {
    return new FormGroup({});
  }
}
