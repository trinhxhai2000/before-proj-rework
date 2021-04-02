import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHuyenComponent } from './edit-huyen.component';

describe('EditHuyenComponent', () => {
  let component: EditHuyenComponent;
  let fixture: ComponentFixture<EditHuyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHuyenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHuyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
