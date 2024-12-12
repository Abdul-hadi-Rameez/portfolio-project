import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HadiComponent } from './hadi.component';

describe('HadiComponent', () => {
  let component: HadiComponent;
  let fixture: ComponentFixture<HadiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HadiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
