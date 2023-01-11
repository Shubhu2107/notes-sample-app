import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmaticComponentComponent } from './cosmatic-component.component';

describe('CosmaticComponentComponent', () => {
  let component: CosmaticComponentComponent;
  let fixture: ComponentFixture<CosmaticComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosmaticComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CosmaticComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
