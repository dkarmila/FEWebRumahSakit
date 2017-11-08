import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosadtlComponent } from './diagnosadtl.component';

describe('DiagnosadtlComponent', () => {
  let component: DiagnosadtlComponent;
  let fixture: ComponentFixture<DiagnosadtlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosadtlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosadtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
