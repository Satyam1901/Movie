import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkidesComponent } from './forkides.component';

describe('ForkidesComponent', () => {
  let component: ForkidesComponent;
  let fixture: ComponentFixture<ForkidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForkidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
