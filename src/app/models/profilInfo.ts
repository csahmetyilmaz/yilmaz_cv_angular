export class ProfilInfo {

  public id: number;
  public imgLink: string;
  public cvPdfLink: string;
  public bgImageLink: string;
  public twitter: string;
  public facebook: string;
  public instagram: string;
  public github: string;

  public titleLeft: string;
  public titleRight: string;
  public briefProfil: string;
  public age: number;
  public email: string;
  public skype: string;
  public phone: string;
  public address: string;

  constructor(id: number, imgLink: string, cvPdfLink: string, bgImageLink: string, twitter: string, facebook: string, instagram: string, github: string, titleLeft: string, titleRight: string, briefProfil: string, age: number, email: string, skype: string, phone: string, address: string) {
    this.id = id;
    this.imgLink = imgLink;
    this.cvPdfLink = cvPdfLink;
    this.bgImageLink = bgImageLink;
    this.twitter = twitter;
    this.facebook = facebook;
    this.instagram = instagram;
    this.github = github;
    this.titleLeft = titleLeft;
    this.titleRight = titleRight;
    this.briefProfil = briefProfil;
    this.age = age;
    this.email = email;
    this.skype = skype;
    this.phone = phone;
    this.address = address;
  }


}
