import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscribirseComponent } from './suscribirse.component';

describe('SuscribirseComponent', () => {
  let component: SuscribirseComponent;
  let fixture: ComponentFixture<SuscribirseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuscribirseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuscribirseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
