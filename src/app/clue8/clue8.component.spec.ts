import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clue8Component } from './clue8.component';

describe('Clue8Component', () => {
  let component: Clue8Component;
  let fixture: ComponentFixture<Clue8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Clue8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Clue8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
