import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clue6Component } from './clue6.component';

describe('Clue6Component', () => {
  let component: Clue6Component;
  let fixture: ComponentFixture<Clue6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Clue6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Clue6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
