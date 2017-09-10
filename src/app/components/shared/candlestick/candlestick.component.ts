import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
declare let d3: any;

@Component({
  selector: 'app-candlestick',
  templateUrl: './candlestick.component.html',
  styleUrls: ['./candlestick.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class CandlestickComponent implements OnInit, OnChanges {
  @Input() private candles: Array<any>;
  options;
  data;
  
  ngOnInit() {

    this.options = {
      chart: {
        type: 'candlestickBarChart',
        height: 450,
        margin: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 60
        },
        x: function (d) { return d['date']; },
        y: function (d) { return d['close']; },
        duration: 100,

        xAxis: {
          axisLabel: 'Dates',
          tickFormat: function (d) {
            return d3.time.format("%Y-%m-%d")(new Date(+new Date() - (20000 * 86400000) + (d * 86400000)));
          },
          showMaxMin: false
        },

        yAxis: {
          axisLabel: 'Stock Price',
          tickFormat: function (d) {
            return 'R' + d3.format(',.1f')(d);
          },
          showMaxMin: false
        },
        zoom: {
          enabled: true,
          scaleExtent: [1, 10],
          useFixedDomain: true,
          useNiceScale: true,
          horizontalOff: false,
          verticalOff: false,
          unzoomEventType: 'dblclick.zoom'
        }
      }
    }
    
    this.data = [{
      values: this.candles
    }];
  }

  ngOnChanges() {
    // if (this.chart) {
    //   this.updateChart();
    // }
  }

}