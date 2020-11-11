import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertComponent } from './concert.component';

describe('ConcertComponent', () => {
  let component: ConcertComponent;
  let fixture: ComponentFixture<ConcertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
