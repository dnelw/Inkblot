import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphFrameComponent } from './graph-frame.component';

describe('GraphFrameComponent', () => {
  let component: GraphFrameComponent;
  let fixture: ComponentFixture<GraphFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
