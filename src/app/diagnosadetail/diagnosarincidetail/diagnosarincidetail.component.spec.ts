import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosarincidetailComponent } from './diagnosarincidetail.component';

describe('DiagnosarincidetailComponent', () => {
  let component: DiagnosarincidetailComponent;
  let fixture: ComponentFixture<DiagnosarincidetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosarincidetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosarincidetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
