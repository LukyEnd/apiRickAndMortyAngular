import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadLocationComponent } from './read-location.component';

describe('ReadLocationComponent', () => {
  let component: ReadLocationComponent;
  let fixture: ComponentFixture<ReadLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
