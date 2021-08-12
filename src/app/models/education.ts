export class Education {
  public id: number;
  public level: string;
  public school: string
  public dept: string
  public place: string
  public brief:string
  public year: Date;


  constructor(id: number, level: string, school: string, dept: string, place: string, year: Date,brief:string) {
    this.id = id;
    this.level = level;
    this.school = school;
    this.dept = dept;
    this.place = place;
    this.year = year;
    this.brief = brief;


  }
}
