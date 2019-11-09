import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrubControlComponent } from './scrub-control.component';

describe('ScrubControlComponent', () => {
  let component: ScrubControlComponent;
  let fixture: ComponentFixture<ScrubControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrubControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrubControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
