import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddreminderPage } from './addreminder.page';

describe('AddreminderPage', () => {
  let component: AddreminderPage;
  let fixture: ComponentFixture<AddreminderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddreminderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
