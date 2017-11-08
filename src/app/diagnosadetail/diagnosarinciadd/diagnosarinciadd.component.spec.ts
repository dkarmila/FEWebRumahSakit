import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosarinciaddComponent } from './diagnosarinciadd.component';

describe('DiagnosarinciaddComponent', () => {
  let component: DiagnosarinciaddComponent;
  let fixture: ComponentFixture<DiagnosarinciaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosarinciaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosarinciaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
