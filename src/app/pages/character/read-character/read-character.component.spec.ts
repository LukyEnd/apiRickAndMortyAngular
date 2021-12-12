import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadCharacterComponent } from './read-character.component';

describe('ReadCharacterComponent', () => {
  let component: ReadCharacterComponent;
  let fixture: ComponentFixture<ReadCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
