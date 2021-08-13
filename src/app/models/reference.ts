export class Reference {
  public name: string;
  public title: string;
  public company: string;
  public message: string;
  public img: string;


  constructor(name: string, title: string, company: string, message: string, img: string) {
    this.name = name;
    this.title = title;
    this.company = company;
    this.message = message;
    this.img = img;
  }
}
