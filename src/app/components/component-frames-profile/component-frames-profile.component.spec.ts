import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFramesProfileComponent } from './component-frames-profile.component';

describe('ComponentFramesProfileComponent', () => {
  let component: ComponentFramesProfileComponent;
  let fixture: ComponentFixture<ComponentFramesProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentFramesProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentFramesProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
