import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarformularioComponent } from './actualizarformulario.component';

describe('ActualizarformularioComponent', () => {
  let component: ActualizarformularioComponent;
  let fixture: ComponentFixture<ActualizarformularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarformularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
