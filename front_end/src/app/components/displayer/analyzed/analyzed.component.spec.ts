import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzedComponent } from './analyzed.component';

describe('AnalyzedComponent', () => {
  let component: AnalyzedComponent;
  let fixture: ComponentFixture<AnalyzedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
