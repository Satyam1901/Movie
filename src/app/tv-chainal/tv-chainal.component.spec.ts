import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvChainalComponent } from './tv-chainal.component';

describe('TvChainalComponent', () => {
  let component: TvChainalComponent;
  let fixture: ComponentFixture<TvChainalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvChainalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvChainalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
