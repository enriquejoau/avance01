import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarsolicitudComponent } from './verificarsolicitud.component';

describe('VerificarsolicitudComponent', () => {
  let component: VerificarsolicitudComponent;
  let fixture: ComponentFixture<VerificarsolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarsolicitudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificarsolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
