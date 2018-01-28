import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KefirComponent } from './kefir.component';

describe('KefirComponent', () => {
  let component: KefirComponent;
  let fixture: ComponentFixture<KefirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KefirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KefirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
