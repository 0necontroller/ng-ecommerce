import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedProductList } from './related-product-list';

describe('RelatedProductList', () => {
  let component: RelatedProductList;
  let fixture: ComponentFixture<RelatedProductList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedProductList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatedProductList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
