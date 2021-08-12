export class Skill {
  public id: number;
  public description: string;
  public level: number;
  public levelText: string;


  constructor(id: number, description: string, level: number, levelText: string) {
    this.id = id;
    this.description = description;
    this.level = level;
    this.levelText = levelText;
  }
}
