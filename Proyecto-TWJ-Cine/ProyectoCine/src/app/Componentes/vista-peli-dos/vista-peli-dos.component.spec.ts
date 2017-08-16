import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPeliDosComponent } from './vista-peli-dos.component';

describe('VistaPeliDosComponent', () => {
  let component: VistaPeliDosComponent;
  let fixture: ComponentFixture<VistaPeliDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaPeliDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPeliDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
