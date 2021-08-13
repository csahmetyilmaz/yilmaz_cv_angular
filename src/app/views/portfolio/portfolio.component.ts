import {Component, OnInit} from '@angular/core';
import {CvService} from "../../services/cv.service";
import {Portfolio} from "../../models/portfolio";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public portfolios: Portfolio[] = [];

  constructor(private cvService: CvService) {
  }

  ngOnInit(): void {
    this.getPortfolio();
  }

  public getPortfolio() {
    this.cvService.getPortfolio().subscribe(data => {
      this.portfolios = data;
    });
  }
}
