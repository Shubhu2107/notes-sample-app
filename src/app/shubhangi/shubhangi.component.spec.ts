import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShubhangiComponent } from './shubhangi.component';

describe('ShubhangiComponent', () => {
  let component: ShubhangiComponent;
  let fixture: ComponentFixture<ShubhangiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShubhangiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShubhangiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
