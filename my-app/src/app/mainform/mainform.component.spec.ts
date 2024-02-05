import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainformComponent } from './mainform.component';

describe('MainformComponent', () => {
  let component: MainformComponent;
  let fixture: ComponentFixture<MainformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainformComponent]
    });
    fixture = TestBed.createComponent(MainformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
