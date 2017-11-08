import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosadetailComponent } from './diagnosadetail.component';

describe('DiagnosadetailComponent', () => {
  let component: DiagnosadetailComponent;
  let fixture: ComponentFixture<DiagnosadetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosadetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosadetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
