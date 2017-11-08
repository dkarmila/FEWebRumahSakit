import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuanginapdetailComponent } from './ruanginapdetail.component';

describe('RuanginapdetailComponent', () => {
  let component: RuanginapdetailComponent;
  let fixture: ComponentFixture<RuanginapdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuanginapdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuanginapdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
