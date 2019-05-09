import { Component, OnInit } from '@angular/core';
import { Project } from './models/project.model';
import { ProjectService } from './services/project.service';

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


  getDuration(project: Project): string {
    const months = (project.toDate.getMonth() - project.fromDate.getMonth() +
      (12 * (project.toDate.getFullYear() - project.fromDate.getFullYear()))
    ) + 1;

    return (months === 1) ? '1 Monat' : months + ' Monate';
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
