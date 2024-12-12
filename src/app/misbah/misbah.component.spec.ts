import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisbahComponent } from './misbah.component';

describe('MisbahComponent', () => {
  let component: MisbahComponent;
  let fixture: ComponentFixture<MisbahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MisbahComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisbahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
