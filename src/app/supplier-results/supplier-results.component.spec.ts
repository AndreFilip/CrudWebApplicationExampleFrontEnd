import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierResultsComponent } from './supplier-results.component';

describe('SupplierResultsComponent', () => {
  let component: SupplierResultsComponent;
  let fixture: ComponentFixture<SupplierResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
