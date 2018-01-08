import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxD3LiquidFillGaugeComponent } from './ngx-d3-liquid-fill-gauge.component';

describe('NgxD3LiquidFillGaugeComponent', () => {
  let component: NgxD3LiquidFillGaugeComponent;
  let fixture: ComponentFixture<NgxD3LiquidFillGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxD3LiquidFillGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxD3LiquidFillGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
