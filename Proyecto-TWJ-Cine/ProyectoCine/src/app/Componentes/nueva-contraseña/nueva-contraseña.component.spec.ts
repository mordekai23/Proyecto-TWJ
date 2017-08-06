import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaContraseñaComponent } from './nueva-contraseña.component';

describe('NuevaContraseñaComponent', () => {
  let component: NuevaContraseñaComponent;
  let fixture: ComponentFixture<NuevaContraseñaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaContraseñaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaContraseñaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
