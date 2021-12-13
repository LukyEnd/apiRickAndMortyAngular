import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StyleBaseComponent } from './base.component';

describe('StyleBaseComponent', () => {
  let component: StyleBaseComponent;
  let fixture: ComponentFixture<StyleBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StyleBaseComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
