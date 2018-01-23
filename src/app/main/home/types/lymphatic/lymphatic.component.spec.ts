import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LymphaticComponent } from './lymphatic.component';

describe('LymphaticComponent', () => {
  let component: LymphaticComponent;
  let fixture: ComponentFixture<LymphaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LymphaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LymphaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
