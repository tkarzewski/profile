import { Component, OnInit } from '@angular/core';
import { SkillsService } from './shared/services/skills.service';
import { Skill } from './shared/models/skill.model';

@Component({
  selector: 'tk-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Array<Skill>;
  isLoading: boolean;

  constructor(private skillsService: SkillsService) {
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.isLoading = true;
    this.skillsService.getSkills().subscribe(
      (response: Array<Skill>) => {
        this.skills = response;
        this.isLoading = false;
      },
      error => {
        console.error('SkillsComponent.loadData, getSkills, error -> ', error);
        this.isLoading = false;
      }
    );
  }

}
