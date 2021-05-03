import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clue9Component } from './clue9.component';

describe('Clue9Component', () => {
  let component: Clue9Component;
  let fixture: ComponentFixture<Clue9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Clue9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Clue9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
