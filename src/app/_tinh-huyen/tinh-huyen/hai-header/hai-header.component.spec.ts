import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaiHeaderComponent } from './hai-header.component';

describe('HaiHeaderComponent', () => {
  let component: HaiHeaderComponent;
  let fixture: ComponentFixture<HaiHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaiHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
