import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'tk-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  person: Person;
  isLoading: boolean;

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.loadData();
    }, 2000);
  }

  private loadData() {
    this.isLoading = true;
    this.personService.stream$().subscribe(
      (response: Person) => {
        this.person = response;
        this.isLoading = false;
      },
      error => {
        console.error('FooterComponent.loadData, getPerson, error -> ', error);
        this.isLoading = false;
      }
    );
  }

}
