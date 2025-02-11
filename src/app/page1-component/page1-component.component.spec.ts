import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1ComponentComponent } from './page1-component.component';

describe('Page1ComponentComponent', () => {
  let component: Page1ComponentComponent;
  let fixture: ComponentFixture<Page1ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page1ComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
