import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clue1Component } from './clue1.component';

describe('Clue1Component', () => {
  let component: Clue1Component;
  let fixture: ComponentFixture<Clue1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Clue1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Clue1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
