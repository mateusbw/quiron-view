import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHistoricoMonitoriaComponent } from './listar-historico-monitoria.component';

describe('ListarHistoricoMonitoriaComponent', () => {
  let component: ListarHistoricoMonitoriaComponent;
  let fixture: ComponentFixture<ListarHistoricoMonitoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarHistoricoMonitoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarHistoricoMonitoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
