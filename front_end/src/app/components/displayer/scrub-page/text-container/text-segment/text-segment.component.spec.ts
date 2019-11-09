import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSegmentComponent } from './text-segment.component';

describe('TextSegmentComponent', () => {
  let component: TextSegmentComponent;
  let fixture: ComponentFixture<TextSegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextSegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
