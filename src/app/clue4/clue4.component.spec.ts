import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clue4Component } from './clue4.component';

describe('Clue4Component', () => {
  let component: Clue4Component;
  let fixture: ComponentFixture<Clue4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Clue4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Clue4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
