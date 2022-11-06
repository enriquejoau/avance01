import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarexpedienteComponent } from './generarexpediente.component';

describe('GenerarexpedienteComponent', () => {
  let component: GenerarexpedienteComponent;
  let fixture: ComponentFixture<GenerarexpedienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarexpedienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerarexpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
