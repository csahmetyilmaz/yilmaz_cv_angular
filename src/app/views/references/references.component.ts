import {Component, OnInit} from '@angular/core';
import {CvService} from "../../services/cv.service";
import {Reference} from "../../models/reference";

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {
  public references: Reference[] = [];

  constructor(private cvService: CvService) {
    this.getReferences();
  }

  ngOnInit(): void {
  }

  public getReferences() {
    this.cvService.getReferences().subscribe(data => {
      this.references = data;
    });
  }
}
