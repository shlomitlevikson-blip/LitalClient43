import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitalClientMar3 } from './lital-client-mar3';

describe('LitalClientMar3', () => {
  let component: LitalClientMar3;
  let fixture: ComponentFixture<LitalClientMar3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LitalClientMar3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LitalClientMar3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
