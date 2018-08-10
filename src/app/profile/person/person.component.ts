import { Component, OnInit } from '@angular/core';
import { Person } from '../../shared/models/person.model';
import { PersonService } from '../../shared/services/person/person.service';

@Component({
  selector: 'tk-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person: Person;
  isLoading: boolean;

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.isLoading = true;
    this.personService.stream$().subscribe(
      (response: Person) => {
        this.person = response;
        this.isLoading = false;
      },
      error => {
        console.error('PersonComponent.loadData, getPerson, error -> ', error);
        this.isLoading = false;
      }
    );
  }

}
