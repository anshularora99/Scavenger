import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clue5Component } from './clue5.component';

describe('Clue5Component', () => {
  let component: Clue5Component;
  let fixture: ComponentFixture<Clue5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Clue5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Clue5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
