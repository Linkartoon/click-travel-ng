import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilletDetailComponent } from './billet-detail.component';

describe('BilletDetailComponent', () => {
  let component: BilletDetailComponent;
  let fixture: ComponentFixture<BilletDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilletDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilletDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
