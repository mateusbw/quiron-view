import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharMonitoriaComponent } from './detalhar-monitoria.component';

describe('DetalharMonitoriaComponent', () => {
  let component: DetalharMonitoriaComponent;
  let fixture: ComponentFixture<DetalharMonitoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalharMonitoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharMonitoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
