import { Component, Input, OnInit } from '@angular/core';
import * as D3 from 'd3';

declare let d3: any;

@Component({
  selector   : 'word-cloud',
  template: `<div class="word-cloud"></div>`
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

  constructor() {
    
  }

  ngOnInit() {
    this.data = this.wordData.data.split(' ').map(function(d) {
      return {text: d, size: 10 + Math.random() * 90};
    });
    this.setup();
    this.buildSVG();
    this.populate();
  }

  private setup() {
    this.margin = {
      top   : 10,
      right : 10,
      bottom: 10,
      left  : 10
    };
    this.width = window.innerWidth - this.margin.left - this.margin.right;
    this.height = this.width * 0.75 - this.margin.top - this.margin.bottom;

    let minFontSize: number = (this.wordData.settings.minFontSize == null) ? 18 : this.wordData.settings.minFontSize;
    let maxFontSize: number = (this.wordData.settings.maxFontSize == null) ? 96 : this.wordData.settings.maxFontSize;
    this.fillScale = D3.scaleOrdinal(D3.schemeCategory20);
  }

  private buildSVG() {
    this.svg = D3.select("div.word-cloud")
                    .append('svg')
                    .attr('width', this.width + this.margin.left + this.margin.right)
                    .attr('height', this.height + this.margin.top + this.margin.bottom)
                    .append('g')
                    .attr('transform', 'translate(' + ~~(this.width / 2) + ',' + ~~(this.height / 2) + ')');
  }

  private populate() {
    let fontFace: string = (this.wordData.settings.fontFace == null) ? 'Roboto' : this.wordData.settings.fontFace;
    let fontWeight: string = (this.wordData.settings.fontWeight == null) ? 'normal' : this.wordData.settings.fontWeight;
    let spiralType: string = (this.wordData.settings.spiral == null) ? 'rectangular' : this.wordData.settings.spiral;

    d3.layout.cloud()
      .size([this.width, this.height])
      .words(this.data)
      .rotate(() => (~~(Math.random() * 2) * 90))
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