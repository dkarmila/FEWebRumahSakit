import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosaaddComponent } from './diagnosaadd.component';

describe('DiagnosaaddComponent', () => {
  let component: DiagnosaaddComponent;
  let fixture: ComponentFixture<DiagnosaaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosaaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosaaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
