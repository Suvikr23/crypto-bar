import { Component, OnInit, OnDestroy } from '@angular/core';
import { CryptoDataService } from '../_shared/crypto-data.service';
import * as d3 from 'd3';
import { select, Selection } from 'd3-selection';
import { transition, Transition } from 'd3-transition';
import { Crypto } from '../crypto';

import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/takeWhile';

import 'rxjs/add/operator/first';

@Component({
  selector: 'app-crypto-bar',
  templateUrl: './crypto-bar.component.html',
  styleUrls: ['./crypto-bar.component.css'],
  providers: [CryptoDataService]
})
export class CryptoBarComponent implements OnInit, OnDestroy {
  cryptoList: Crypto[];
  private dataVal = [];
  private display: boolean;
  private alive: boolean;


  constructor(private cryptoDataService: CryptoDataService) {
    this.display = false;
    this.alive = true;
  }

  ngOnInit() {

    var width = d3.max(this.dataVal) * 10,
      barHeight = 20;

    this.cryptoDataService.getCryptoData()
      .first()
      .subscribe(data => {
        this.cryptoList = data;
        console.log(this.cryptoList);
        for (let i = 0; i < this.cryptoList.length; i++) {
          this.dataVal.push(Number(this.cryptoList[i].price_usd));
        }
        console.log("dataVal ----- " + this.dataVal);
        // scaleLinear returns a function with specified domain and range
        var x = d3.scaleLinear()
          .domain([d3.min(this.dataVal), d3.max(this.dataVal)])
          .range([0, 1000]);

        var chart = d3.select(".chart")
          .attr("width", d3.max(this.dataVal))
          .attr("height", barHeight * data.length);

        var bar = chart.selectAll("g")
          .data(this.dataVal)
          .enter().append("g")
          .attr("transform", function (d, i) { return "translate(0," + i * barHeight + ")"; });

        bar.append("rect")
          .attr("width", x)
          .attr("height", barHeight - 1)
          .style("fill", "steelblue");

        bar.append("text")
          .attr("x", function (d) { return x(d) - 3; })
          .attr("y", barHeight / 2)
          .attr("dy", ".35em")
          .text(function (d) {
            return d;
          })
          .style("fill", "white")
          .style("font", "10px sans-serif")
          .style("text-anchor", "end")

        bar.exit().remove();
        this.dataVal.length = 0;
      });

    var inter = setInterval(function () {
      //this.updateData();
    }, 5000);
  }

  ngOnDestroy() {
    this.alive = false;
  }

  updateData() {
    this.cryptoDataService.getCryptoData()
      .subscribe(data => {
        this.cryptoList = data;
        console.log(data);
        for (let i = 0; i < this.cryptoList.length; i++) {
          this.dataVal.push(Number(this.cryptoList[i].price_usd));
        }
      })
  }

  // createChart(index, data, barHeight) {
  //   var dataVal = Number(data.price_usd);
  //   // scaleLinear returns a function with specified domain and range
  //   var x = d3.scaleLinear()
  //     .domain([0, d3.max(dataVal)])
  //     .range([0, 1000]);

  //   var chart = d3.select(".chart")
  //     .attr("width", d3.max(dataVal))
  //     .attr("height", barHeight * data.length);

  //   var bar = chart.selectAll("g")
  //     .data(dataVal)
  //     .enter().append("g")
  //     .attr("transform", function (d, i) { return "translate(0," + i * barHeight + ")"; });

  //   bar.append("rect")
  //     .attr("width", x)
  //     .attr("height", barHeight - 1)
  //     .style("fill", "steelblue");

  //   bar.append("text")
  //     .attr("x", function (d) { return x(d) - 3; })
  //     .attr("y", barHeight / 2)
  //     .attr("dy", ".35em")
  //     .text(function (d) {
  //       return data[index].id + " " + d;
  //     })
  //     .style("fill", "white")
  //     .style("font", "10px sans-serif")
  //     .style("text-anchor", "end")
  // }

}
