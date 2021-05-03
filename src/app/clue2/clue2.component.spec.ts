import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clue2Component } from './clue2.component';

describe('Clue2Component', () => {
  let component: Clue2Component;
  let fixture: ComponentFixture<Clue2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Clue2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Clue2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
