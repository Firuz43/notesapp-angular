import { Component, OnInit } from '@angular/core';
import { ShopServiceService } from 'src/app/services/shop-service/shop-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private shopService: ShopServiceService) { }

  notes: any = [];

  ngOnInit(): void {
    this.getData()

  }

  getData() {
    return this.shopService.fetchData().subscribe((res) => {
      console.log(res);
      this.notes = res;

    })
  }

}
