import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clue10Component } from './clue10.component';

describe('Clue10Component', () => {
  let component: Clue10Component;
  let fixture: ComponentFixture<Clue10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Clue10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Clue10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
