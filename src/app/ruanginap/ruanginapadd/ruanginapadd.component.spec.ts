import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuanginapaddComponent } from './ruanginapadd.component';

describe('RuanginapaddComponent', () => {
  let component: RuanginapaddComponent;
  let fixture: ComponentFixture<RuanginapaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuanginapaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuanginapaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
