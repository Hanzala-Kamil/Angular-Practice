import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2ComponentComponent } from './page2-component.component';

describe('Page2ComponentComponent', () => {
  let component: Page2ComponentComponent;
  let fixture: ComponentFixture<Page2ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page2ComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
