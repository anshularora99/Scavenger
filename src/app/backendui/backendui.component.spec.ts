import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackenduiComponent } from './backendui.component';

describe('BackenduiComponent', () => {
  let component: BackenduiComponent;
  let fixture: ComponentFixture<BackenduiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackenduiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackenduiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
