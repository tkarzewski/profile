import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Project } from '../models/project.model';
import { map } from 'rxjs/internal/operators';
import { Observable } from 'rxjs/index';

@Injectable()
export class ProjectService {

  constructor(private httpClient: HttpClient) {
  }

  getProjects(): Observable<Array<Project>> {
    return this.httpClient.get<Array<Project>>('/assets/data/projects.json').pipe(
      map(response => response.map(project => new Project(project)))
    );
  }
}
