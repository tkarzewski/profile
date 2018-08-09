import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/internal/operators';

import { Skill } from '../models/skill.model';

@Injectable()
export class SkillsService {

  private skillsObservable: Observable<Array<Skill>>;

  constructor(private httpClient: HttpClient) {
  }

  getSkills(): Observable<Array<Skill>> {
    if (!this.skillsObservable) {
      this.skillsObservable = this.httpClient.get<Array<Skill>>('/assets/data/skills.json')
        .pipe(share());
    }

    return this.skillsObservable;
  }

}
