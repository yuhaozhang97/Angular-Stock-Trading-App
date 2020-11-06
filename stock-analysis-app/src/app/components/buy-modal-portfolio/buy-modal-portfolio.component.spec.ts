import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyModalPortfolioComponent } from './buy-modal-portfolio.component';

describe('BuyModalPortfolioComponent', () => {
  let component: BuyModalPortfolioComponent;
  let fixture: ComponentFixture<BuyModalPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyModalPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyModalPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
