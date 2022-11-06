import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaiotecnicoComponent } from './formulaiotecnico.component';

describe('FormulaiotecnicoComponent', () => {
  let component: FormulaiotecnicoComponent;
  let fixture: ComponentFixture<FormulaiotecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaiotecnicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaiotecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
