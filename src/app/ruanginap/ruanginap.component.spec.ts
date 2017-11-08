import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuanginapComponent } from './ruanginap.component';

describe('RuanginapComponent', () => {
  let component: RuanginapComponent;
  let fixture: ComponentFixture<RuanginapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuanginapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuanginapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
