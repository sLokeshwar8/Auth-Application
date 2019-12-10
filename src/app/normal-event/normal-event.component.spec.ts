import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalEventComponent } from './normal-event.component';

describe('NormalEventComponent', () => {
  let component: NormalEventComponent;
  let fixture: ComponentFixture<NormalEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
