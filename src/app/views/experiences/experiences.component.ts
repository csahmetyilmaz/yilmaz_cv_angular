import { Component, OnInit } from '@angular/core';
import {CvService} from "../../services/cv.service";
import {Experience} from "../../models/experience";

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  public experiences: Experience[] =[];

  constructor(private cvService: CvService) {
  }

  ngOnInit(): void {
    this.getExperience();
  }

  public getExperience() {
    this.cvService.getExperience().subscribe(data => {
      this.experiences = data;
    });
  }

}
