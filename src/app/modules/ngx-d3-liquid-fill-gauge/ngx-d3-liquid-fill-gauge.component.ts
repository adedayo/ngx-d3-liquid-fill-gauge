import { Component, OnInit, ViewChild, Input, ViewEncapsulation, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';
import * as liquid from './liquidFillGauge';


@Component({
  selector: 'app-ngx-d3-liquid-fill-gauge',
  template: '<div #gauge></div>',
  styles: [],
})
export class NgxD3LiquidFillGaugeComponent implements OnInit, OnChanges {

  @ViewChild('gauge') gauge: any;
  id = 'gauge' + Math.floor(Math.random() * 100000) + 1; // assign a random ID to SVG component
  private defaultSettings = liquid.liquidFillGaugeDefaultSettings();
  @Input() private value = 0;
  @Input() private minValue = this.defaultSettings.minValue;
  @Input() private maxValue = this.defaultSettings.maxValue;
  @Input() private circleThickness = this.defaultSettings.circleThickness;
  @Input() private circleFillGap = this.defaultSettings.circleFillGap;
  @Input() private circleColor = this.defaultSettings.circleColor;
  @Input() private waveHeight = this.defaultSettings.waveHeight;
  @Input() private waveCount = this.defaultSettings.waveCount;
  @Input() private waveRiseTime = this.defaultSettings.waveRiseTime;
  @Input() private waveAnimateTime = this.defaultSettings.waveAnimateTime;
  @Input() private waveRise = this.defaultSettings.waveRise;
  @Input() private waveHeightScaling = this.defaultSettings.waveHeightScaling;
  @Input() private waveAnimate = this.defaultSettings.waveAnimate;
  @Input() private waveColor = this.defaultSettings.waveColor;
  @Input() private waveOffset = this.defaultSettings.waveOffset;
  @Input() private textVertPosition = this.defaultSettings.textVertPosition;
  @Input() private textSize = this.defaultSettings.textSize;
  @Input() private valueCountUp = this.defaultSettings.valueCountUp;
  @Input() private displayPercent = this.defaultSettings.displayPercent;
  @Input() private textColor = this.defaultSettings.textColor;
  @Input() private waveTextColor = this.defaultSettings.waveTextColor;

  ngOnInit() {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.createChart();
  }

  createChart(): any {
    const element: Element = this.gauge.nativeElement;
    //clear previous chart
    d3.select(element).selectAll('*').remove();

    d3.select(element)
      .append('svg').attr('id', this.id)
      .attr('width', '150')
      .attr('height', '150');
    const settings = {
      minValue: this.minValue,
      maxValue: this.maxValue,
      circleThickness: this.circleThickness,
      circleFillGap: this.circleFillGap,
      circleColor: this.circleColor,
      waveHeight: this.waveHeight,
      waveCount: this.waveCount,
      waveRiseTime: this.waveRiseTime,
      waveAnimateTime: this.waveAnimateTime,
      waveRise: this.waveRise,
      waveHeightScaling: this.waveHeightScaling,
      waveAnimate: this.waveAnimate,
      waveColor: this.waveColor,
      waveOffset: this.waveOffset,
      textVertPosition: this.textVertPosition,
      textSize: this.textSize,
      valueCountUp: this.valueCountUp,
      displayPercent: this.displayPercent,
      textColor: this.textColor,
      waveTextColor: this.waveTextColor,
    };
    liquid.loadLiquidFillGauge(this.id, this.value, settings);
  }

}
