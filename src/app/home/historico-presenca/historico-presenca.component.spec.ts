import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoPresencaComponent } from './historico-presenca.component';

describe('HistoricoPresencaComponent', () => {
  let component: HistoricoPresencaComponent;
  let fixture: ComponentFixture<HistoricoPresencaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoPresencaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoPresencaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
