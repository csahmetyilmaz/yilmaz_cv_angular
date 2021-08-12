import {Component, OnInit} from '@angular/core';

import {CvService} from "../../services/cv.service";
import {Education} from "../../models/education";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  public educations: Education[] =[];

  constructor(private cvService: CvService) {
  }

  ngOnInit(): void {
    this.getEducation();
  }

  public getEducation() {
    this.cvService.getEducation().subscribe(data => {
      this.educations = data;
    });
  }


}
