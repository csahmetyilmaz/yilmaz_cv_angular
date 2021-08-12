import { Component, OnInit } from '@angular/core';
import {CvService} from "../../services/cv.service";
import {ProfilInfo} from "../../models/profilInfo";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public profilInfos : ProfilInfo[] =[];

  constructor(private cvService : CvService) { }

  ngOnInit(): void {
    this.getProfilinfos();
  }

  public getProfilinfos() {
    this.cvService.getProfilinfos().subscribe(data => {this.profilInfos = data});
  }
}
