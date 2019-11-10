import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAteventComponent } from './image-atevent.component';

describe('ImageAteventComponent', () => {
  let component: ImageAteventComponent;
  let fixture: ComponentFixture<ImageAteventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageAteventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageAteventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
