export class Experience {
  public id: number;
  public title: string;
  public address: string;
  public company: string;
  public dateFrom: string;
  public dateUntil:Date;
  public tasks: string[];


  constructor(id: number, title: string, address: string, company: string, dateFrom: string, dateUntil: Date,tasks:string[]) {
    this.id = id;
    this.title = title;
    this.address = address;
    this.company = company;
    this.dateFrom = dateFrom;
    this.dateUntil = dateUntil;
    this.tasks = tasks;


  }
}
