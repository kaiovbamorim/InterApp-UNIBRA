import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SugerirPontoPage } from './sugerir-ponto.page';

describe('SugerirPontoPage', () => {
  let component: SugerirPontoPage;
  let fixture: ComponentFixture<SugerirPontoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SugerirPontoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
