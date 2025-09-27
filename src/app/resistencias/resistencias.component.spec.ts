import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { ResistenciasLogica } from './resistencias.component';

describe('ResistenciasLogica', () => {
  let component: ResistenciasLogica;
  let fixture: ComponentFixture<ResistenciasLogica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResistenciasLogica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResistenciasLogica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
