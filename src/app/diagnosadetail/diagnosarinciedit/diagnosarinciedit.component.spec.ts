import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosarincieditComponent } from './diagnosarinciedit.component';

describe('DiagnosarincieditComponent', () => {
  let component: DiagnosarincieditComponent;
  let fixture: ComponentFixture<DiagnosarincieditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosarincieditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosarincieditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
