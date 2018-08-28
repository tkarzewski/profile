import { SkillCategory } from './skill-category.enum';

export class Skill {

  name: string;
  category: SkillCategory;
  experience: number;

  constructor(data?: any) {
    if (data) {
      this.name = data.name;
      this.category = data.category;
      this.experience = data.experience;
    }
  }

  static sort(value1, value2): number {
    return value1.experience - value2.experience;
  }

}
