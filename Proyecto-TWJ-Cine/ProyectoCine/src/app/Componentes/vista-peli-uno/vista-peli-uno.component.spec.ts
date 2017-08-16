import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPeliUnoComponent } from './vista-peli-uno.component';

describe('VistaPeliUnoComponent', () => {
  let component: VistaPeliUnoComponent;
  let fixture: ComponentFixture<VistaPeliUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaPeliUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPeliUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
