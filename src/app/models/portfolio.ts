export class Portfolio {
public id:number;
public projImgLink:string;
public workType:string;
public title:string;
public content:string;
public position:string;

  constructor(id: number, projImgLink: string, workType: string, title: string, content: string, position:string) {
    this.id = id;
    this.projImgLink = projImgLink;
    this.workType = workType;
    this.title = title;
    this.content = content;
    this.position = position;
  }


}
