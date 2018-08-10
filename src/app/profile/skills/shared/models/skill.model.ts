export class Skill {

  skill: string;
  category: string;
  experience: number;

  constructor(data?: any) {
    if (data) {
      this.skill = data.skill;
      this.category = data.category;
      this.experience = data.experience;
    }
  }

}
