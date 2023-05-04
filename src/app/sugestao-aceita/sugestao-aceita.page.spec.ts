import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SugestaoAceitaPage } from './sugestao-aceita.page';

describe('SugestaoAceitaPage', () => {
  let component: SugestaoAceitaPage;
  let fixture: ComponentFixture<SugestaoAceitaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SugestaoAceitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
