import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenucComponent } from './menuc.component';

describe('MenucComponent', () => {
  let component: MenucComponent;
  let fixture: ComponentFixture<MenucComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenucComponent]
    });
    fixture = TestBed.createComponent(MenucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
