import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarformularioComponent } from './verificarformulario.component';

describe('VerificarformularioComponent', () => {
  let component: VerificarformularioComponent;
  let fixture: ComponentFixture<VerificarformularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarformularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificarformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
