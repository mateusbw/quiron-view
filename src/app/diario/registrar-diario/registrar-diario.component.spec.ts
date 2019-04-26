import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDiarioComponent } from './registrar-diario.component';

describe('RegistrarDiarioComponent', () => {
  let component: RegistrarDiarioComponent;
  let fixture: ComponentFixture<RegistrarDiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarDiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarDiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
