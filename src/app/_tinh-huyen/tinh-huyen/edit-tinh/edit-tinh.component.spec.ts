import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTinhComponent } from './edit-tinh.component';

describe('EditTinhComponent', () => {
  let component: EditTinhComponent;
  let fixture: ComponentFixture<EditTinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
