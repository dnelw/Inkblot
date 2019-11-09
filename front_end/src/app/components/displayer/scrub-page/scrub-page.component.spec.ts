import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrubPageComponent } from './scrub-page.component';

describe('ScrubPageComponent', () => {
  let component: ScrubPageComponent;
  let fixture: ComponentFixture<ScrubPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrubPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
