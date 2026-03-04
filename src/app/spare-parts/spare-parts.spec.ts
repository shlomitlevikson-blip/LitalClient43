import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpareParts } from './spare-parts';

describe('SpareParts', () => {
  let component: SpareParts;
  let fixture: ComponentFixture<SpareParts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpareParts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpareParts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
