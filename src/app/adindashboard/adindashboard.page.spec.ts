import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AdindashboardPage } from './adindashboard.page';

describe('AdindashboardPage', () => {
  let component: AdindashboardPage;
  let fixture: ComponentFixture<AdindashboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdindashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
