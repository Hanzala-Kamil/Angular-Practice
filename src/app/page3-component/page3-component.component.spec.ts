import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page3ComponentComponent } from './page3-component.component';

describe('Page3ComponentComponent', () => {
  let component: Page3ComponentComponent;
  let fixture: ComponentFixture<Page3ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page3ComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page3ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
