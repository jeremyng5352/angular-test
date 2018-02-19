import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormComponent } from './dynamic-form.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

fdescribe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a `FormGroup` comprised of `FormControl`s', () => {
    component.ngOnInit();
    expect(component.formGroup instanceof FormGroup).toBe(true);
  });

});
