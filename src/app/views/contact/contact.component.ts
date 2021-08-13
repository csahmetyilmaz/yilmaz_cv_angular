import {Component, OnInit} from '@angular/core';
import {Contact} from "../../models/contact";
import {CvService} from "../../services/cv.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactRefs: Contact[] = [];

  constructor(private cvService: CvService) {
  }

  ngOnInit(): void {
    this.getContactRefs();
  }

  public getContactRefs() {
    this.cvService.getContactRef().subscribe(data => {
      this.contactRefs = data;
    })
  }
}
