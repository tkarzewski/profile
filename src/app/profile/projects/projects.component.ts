import { Component, OnInit } from '@angular/core';
import { Project } from './shared/models/project.model';
import { ProjectService } from './shared/services/project.service';

@Component({
  selector: 'tk-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

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
        console.error('ProjectsComponent.loadData, getProjects, error -> ', error);
        this.isLoading = false;
      }
    );
  }

}
