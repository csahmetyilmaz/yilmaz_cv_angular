import { Component, OnInit } from '@angular/core';
import {Skill} from "../../models/skill";
import {CvService} from "../../services/cv.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills : Skill[] = [];
  constructor(private cvService : CvService) { }

  ngOnInit(): void {
    this.getSkills();
  }

  public getSkills() {
    this.cvService.getSkills().subscribe(data => {this.skills=data})
  }
}
