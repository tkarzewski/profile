import { Component, OnInit } from '@angular/core';
import { SkillsService } from './shared/services/skills.service';
import { Skill } from './shared/models/skill.model';
import { SkillCategory } from './shared/models/skill-category.enum';

@Component({
  selector: 'tk-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  isLoading: boolean;
  experiencedSkills: Array<string> = [];
  basicSkills: Array<string> = [];
  languageSkills: Array<string> = [];

  constructor(private skillsService: SkillsService) {
  }

  ngOnInit() {
    this.loadData();
  }


  /**
   * @description
   * Loads Skills via Service and calls to fill and order the SkillArrays
   */
  private loadData() {
    this.isLoading = true;
    this.skillsService.getSkills().subscribe(
      (response: Array<Skill>) => {
        this.fillSkills(response);
        this.sortSkills();
        this.isLoading = false;
      },
      error => {
        console.error('SkillsComponent.loadData, getSkills, error -> ', error);
        this.isLoading = false;
      }
    );
  }


  /**
   * @description
   * Fills the SkillArrays with the proper Skill
   *
   * @param skills The Skills from Backend
   */
  private fillSkills(skills: Array<Skill>) {
    for (const skill of skills) {
      if (skill.category === SkillCategory.language) {
        this.languageSkills.push(skill.name);
      } else if (this.isBasicSkill(skill)) {
        this.basicSkills.push(skill.name);
      } else if (this.isExperiencedSkill(skill)) {
        this.experiencedSkills.push(skill.name);
      }
    }
  }


  /**
   * @description
   * Sorts all SkillArrays
   */
  private sortSkills() {
    this.experiencedSkills.sort(Skill.sort);
    this.basicSkills.sort(Skill.sort);
    this.languageSkills.sort(Skill.sort);
  }


  /**
   * @description
   * Returns true if skill.experience is 4, 5, 6 or 7
   *
   * @param skill The skill to check
   * @returns true if skill.experience is greater than 7
   */
  private isBasicSkill(skill: Skill): boolean {
    return skill.experience >= 4 && skill.experience <= 7;
  }


  /**
   * @description
   * Returns true if skill.experience 8, 9 or 10
   *
   * @param skill The skill to check
   * @returns true if skill.experience is greater than 7
   */
  private isExperiencedSkill(skill: Skill): boolean {
    return skill.experience >= 8;
  }

}
