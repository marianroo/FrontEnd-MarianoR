import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditYoComponent } from './edit-yo.component';

describe('EditYoComponent', () => {
  let component: EditYoComponent;
  let fixture: ComponentFixture<EditYoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditYoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditYoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
