import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clue7Component } from './clue7.component';

describe('Clue7Component', () => {
  let component: Clue7Component;
  let fixture: ComponentFixture<Clue7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Clue7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Clue7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
