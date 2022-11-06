import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarformularioComponent } from './editarformulario.component';

describe('EditarformularioComponent', () => {
  let component: EditarformularioComponent;
  let fixture: ComponentFixture<EditarformularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarformularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
