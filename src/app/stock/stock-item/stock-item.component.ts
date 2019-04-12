import { Component, OnInit } from "@angular/core";
import { Stock } from "src/app/model/stock";

@Component({
  selector: "app-stock-item",
  templateUrl: "./stock-item.component.html",
  styleUrls: ["./stock-item.component.css"]
})
export class StockItemComponent implements OnInit {
  public stock: Stock;
  public stockClasses;

  constructor() {}

  ngOnInit() {
    this.stock = new Stock("Test Stock Company", "TSC", 85, 80);
    let diff = (this.stock.price / this.stock.previousPrice)-1;
    let largeChange = Math.abs(diff) > 0.01;
    this.stockClasses = {

      "positive":this.stock.isPositiveChange(),
      "negative":this.stock.isPositiveChange(),
      "small-change":!largeChange,
      "large-change":largeChange,
    }
  }

  toggleFavourite(event) {
    console.log("We are toggling the favourite state for this stock", event);
    this.stock.favorite = !this.stock.favorite;
  }
}
