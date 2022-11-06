import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformetecnicoComponent } from './informetecnico.component';

describe('InformetecnicoComponent', () => {
  let component: InformetecnicoComponent;
  let fixture: ComponentFixture<InformetecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformetecnicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformetecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
