import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuanginapeditComponent } from './ruanginapedit.component';

describe('RuanginapeditComponent', () => {
  let component: RuanginapeditComponent;
  let fixture: ComponentFixture<RuanginapeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuanginapeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuanginapeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
