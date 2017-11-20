import { Component, OnInit } from '@angular/core';
import { CryptoDataService } from '../_shared/crypto-data.service';
import { Crypto } from '../crypto';

import 'rxjs/add/operator/first';

@Component({
  selector: 'app-crypto-bar',
  templateUrl: './crypto-bar.component.html',
  styleUrls: ['./crypto-bar.component.css'],
  providers: [CryptoDataService]
})
export class CryptoBarComponent implements OnInit {
  cryptoList: Crypto[];
  private display: boolean;
  private alive: boolean;


  constructor(private cryptoDataService: CryptoDataService) {
    this.display = false;
    this.alive = true;
  }

  ngOnInit() {
    this.cryptoDataService.getCryptoData()
      // .first() //only gets fired once
      .subscribe((data) => {
        this.cryptoList = data;
        console.log(data);
      });
  }

}
