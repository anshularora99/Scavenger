import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clue3Component } from './clue3.component';

describe('Clue3Component', () => {
  let component: Clue3Component;
  let fixture: ComponentFixture<Clue3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Clue3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Clue3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
