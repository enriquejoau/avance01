import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioexpedienteComponent } from './formularioexpediente.component';

describe('FormularioexpedienteComponent', () => {
  let component: FormularioexpedienteComponent;
  let fixture: ComponentFixture<FormularioexpedienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioexpedienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioexpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
