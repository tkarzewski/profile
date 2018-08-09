import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepagerComponent } from './onepager.component';

describe('OnepagerComponent', () => {
  let component: OnepagerComponent;
  let fixture: ComponentFixture<OnepagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnepagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnepagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
