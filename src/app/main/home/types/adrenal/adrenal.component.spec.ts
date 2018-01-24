import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdrenalComponent } from './adrenal.component';

describe('AdrenalComponent', () => {
  let component: AdrenalComponent;
  let fixture: ComponentFixture<AdrenalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdrenalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdrenalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
