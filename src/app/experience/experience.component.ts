import { Component, OnInit } from '@angular/core';
import { Project } from './shared/models/project.model';
import { ProjectService } from './shared/services/project.service';

@Component({
  selector: 'tk-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  projects: Array<Project>;
  isLoading: boolean;

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.isLoading = true;
    this.projectService.getProjects().subscribe(
      (response: Array<Project>) => {
        this.projects = response;
        this.isLoading = false;
      },
      error => {
        console.error('ExperienceComponent.loadData, getProjects, error -> ', error);
        this.isLoading = false;
      }
    );
  }
}
