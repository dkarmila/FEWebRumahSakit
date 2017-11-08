import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosaeditComponent } from './diagnosaedit.component';

describe('DiagnosaeditComponent', () => {
  let component: DiagnosaeditComponent;
  let fixture: ComponentFixture<DiagnosaeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosaeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosaeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
