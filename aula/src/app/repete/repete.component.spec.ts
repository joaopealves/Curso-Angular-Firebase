import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeteComponent } from './repete.component';

describe('RepeteComponent', () => {
  let component: RepeteComponent;
  let fixture: ComponentFixture<RepeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepeteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
