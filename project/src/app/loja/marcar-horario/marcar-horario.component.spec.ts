import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcarHorarioComponent } from './marcar-horario.component';

describe('MarcarHorarioComponent', () => {
  let component: MarcarHorarioComponent;
  let fixture: ComponentFixture<MarcarHorarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcarHorarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcarHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
