import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenComponentComponent } from './green-component.component';

describe('GreenComponentComponent', () => {
  let component: GreenComponentComponent;
  let fixture: ComponentFixture<GreenComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreenComponentComponent]
    });
    fixture = TestBed.createComponent(GreenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
