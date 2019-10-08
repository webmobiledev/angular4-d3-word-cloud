import { Component, Input, OnInit } from '@angular/core';
import * as D3 from 'd3';

declare let d3: any;

@Component({
  selector   : 'app-word-cloud',
  template: `<div class='word-cloud'></div>`
})
export class WordCloudComponent implements OnInit {

  @Input() wordData;
  data = [];

  private svg;               // SVG in which we will print our chart
  private margin: {          // Space between the svg borders and the actual chart graphic
    top: number,
    right: number,
    bottom: number,
    left: number
  };
  private width: number;      // Component width
  private height: number;     // Component height
  private fillScale;          // D3 scale for text color
  tempData = [];

  constructor() {
  }

  ngOnInit() {
    const cls = this;
    this.data = this.wordData.data.split(' ').map(function(d) {
      return {text: d, size: cls.getRandom()};
    });
    this.setup();
    this.buildSVG();
    this.populate();
  }

  private getRandom() {
    const cls = this;
    const size = 10 + Math.random() * 100;
    if (size > 70 && this.tempData.length <= 10) {
      this.tempData.push(size);
    }
    if (this.tempData.length > 10 && size > 14) {
      return 12;
    }

    return size;
  }

  private setup() {
    this.margin = {
      top   : 20,
      right : 20,
      bottom: 20,
      left  : 20
    };
    this.width = window.innerWidth - this.margin.left - this.margin.right;
    this.height = window.innerHeight - this.margin.top - this.margin.bottom;

    this.fillScale = D3.scaleOrdinal(D3.schemeCategory20);
  }

  private buildSVG() {
    this.svg = D3.select('div.word-cloud')
      .append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + (this.width / 2) + ',' + (this.height / 2) + ')');
  }

  private populate() {
    const fontFace: string = (this.wordData.settings.fontFace == null) ? 'Roboto' : this.wordData.settings.fontFace;
    const fontWeight: string = (this.wordData.settings.fontWeight == null) ? 'normal' : this.wordData.settings.fontWeight;
    const spiralType: string = (this.wordData.settings.spiral == null) ? 'archimedean' : this.wordData.settings.spiral;

    d3.layout.cloud()
      .size([this.width, this.height])
      .words(this.data)
      .padding(5)
      .rotate(() => {
        return ((Math.random() * 2) * 90);
        // vertical & horizontal only
        // return (~~(Math.random() * 2) * 90);
      })
      .font(fontFace)
      .fontWeight(fontWeight)
      .fontSize(d => (d.size))
      .spiral(spiralType)
      .on('end', () => {
        this.drawWordCloud(this.data);
      })
      .start();
  }

  private drawWordCloud(words) {
    this.svg
      .selectAll('text')
      .data(words)
      .enter()
      .append('text')
      .style('font-size', d => d.size + 'px')
      .style('fill', (d, i) => {
        return this.fillScale(i);
      })
      .attr('text-anchor', 'middle')
      .attr('transform', d => 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')')
      .attr('class', 'word-cloud')
      .text(d => {
        return d.text;
      });
  }

}
