import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddguardianPage } from './addguardian.page';

describe('AddguardianPage', () => {
  let component: AddguardianPage;
  let fixture: ComponentFixture<AddguardianPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddguardianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
