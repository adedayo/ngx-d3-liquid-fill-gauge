# Deprecation
This project is now deprecated and moved to https://github.com/adedayo/ngx-liquid-gauge. If you must use this version, please use only version 1.0.0 because later versions are broken in newer Angular releases.

# Angular Component for Curtis Bratton's D3 Liquid Fill Gauge

I really liked Curtis Bratton's D3 Liquid Fill Gauge (code here: http://bl.ocks.org/brattonc/5e5ce9beee483220e2f6) and wanted to use it in an Angular project, so I turned it to a component and packaged it as a module in case somebody else finds it useful. 

In the process I upgraded the D3 API to V4 and made minor modifications to Curtis' code along the way as I converted it to Typescript from Javascript. However, all credits go to Curtis! My contribution was just the Angular component wrapper.


![Sample Gauge](https://github.com/adedayo/ngx-d3-liquid-fill-gauge/blob/master/images/sample.png)


## Installation and Usage

1. Install 'ngx-d3-liquid-fill-gauge' with npm
```
npm install ngx-d3-liquid-fill-gauge
```
2. Import 'NgxD3LiquidFillGaugeModule' in your Angular Module 
```javascript
import { NgxD3LiquidFillGaugeModule } from 'ngx-d3-liquid-fill-gauge';

imports: [ ...... , NgxD3LiquidFillGaugeModule ],
```

3) Use 'app-ngx-d3-liquid-fill-gauge' component inside a template
```html
<h1> Demo </h1>
A few demonstrations

<h2>Default Parameters</h2>

<app-ngx-d3-liquid-fill-gauge></app-ngx-d3-liquid-fill-gauge>

<h2>Setting just the guage value</h2>

<app-ngx-d3-liquid-fill-gauge [value]="22"></app-ngx-d3-liquid-fill-gauge>

<h2>All the settings of the original Liquid Fill Gauge implementation are exposed as optional inputs to the Angular Component</h2>

<app-ngx-d3-liquid-fill-gauge 
[value]="77" 
[minValue]="0" 
[maxValue]="100" 
[circleThickness]="0.05" 
[circleFillGap]="0.05"
[circleColor]="'#178BCA'" 
[waveHeight]="0.05" 
[waveCount]="1" 
[waveRiseTime]="1000" 
[waveAnimateTime]="18000" 
[waveRise]="true"
[waveHeightScaling]="true" 
[waveAnimate]="true" 
[waveColor]="'#178BCA'" 
[waveOffset]="0" 
[textVertPosition]=".5" 
[textSize]="1"
[valueCountUp]="true" 
[displayPercent]="true" 
[textColor]="'#045681'" 
[waveTextColor]="'#A4DBf8'">
</app-ngx-d3-liquid-fill-gauge>

```

### Attributes

|Property        | Usage           | Default  | Required |
|:------------- |:-------------|:-----:|:-----:|
| value | The gauge value. | 0 | no |
| minValue | The gauge minimum value. | 0 | no |
| maxValue | The gauge maximum value. | 100 | no |
| circleThickness | The outer circle thickness as a percentage of its radius. | 0.05 | no |
| circleFillGap | The size of the gap between the outer circle and wave circle as a percentage of the outer circle's radius. | 0.05 | no |
| circleColor | The color of the outer circle. | '#178BCA' | no |
| waveHeight | The wave height as a percentage of the radius of the wave circle. | 0.05 | no |
| waveCount | The number of full waves per width of the wave circle. | 1 | no |
| waveRiseTime | The amount of time in milliseconds for the wave to rise from 0 to its final height. | 1000 | no |
| waveAnimateTime | The amount of time in milliseconds for a full wave to enter the wave circle. | 18000 | no |
| waveRise | Control if the wave should rise from 0 to its full height, or start at its full height. | true | no |
| waveHeightScaling | Controls wave size scaling at low and high fill percentages. When true, wave height reaches its maximum at 50% fill, and minimum at 0% and 100% fill. This helps to prevent the wave from making the wave circle from appearing totally full or empty when near its minimum or maximum fill. | true | no |
| waveAnimate | Controls if the wave scrolls or is static. | true | no |
| waveColor | The color of the fill wave. | '#178BCA' | no |
| waveOffset | The amount to initially offset the wave. 0 = no offset. 1 = offset of one full wave. | 0 | no |
| textVertPosition | The height at which to display the percentage text within the wave circle. 0 = bottom, 1 = top. | .5 | no |
| textSize | The relative height of the text to display in the wave circle. 1 = 50% | 1 | no |
| valueCountUp | If true, the displayed value counts up from 0 to its final value upon loading. If false, the final value is displayed. | true | no |
| displayPercent | If true, a % symbol is displayed after the value. | true | no |
| textColor | The color of the value text when the wave does not overlap it. | '#045681' | no |
| waveTextColor | The color of the value text when the wave overlaps it. | '#A4DBf8' | no | 

## Module Dependencies
* Angular
* D3

## License
BSD 3-Clause https://opensource.org/licenses/BSD-3-Clause