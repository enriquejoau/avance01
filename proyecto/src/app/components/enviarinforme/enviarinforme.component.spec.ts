import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarinformeComponent } from './enviarinforme.component';

describe('EnviarinformeComponent', () => {
  let component: EnviarinformeComponent;
  let fixture: ComponentFixture<EnviarinformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviarinformeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviarinformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
