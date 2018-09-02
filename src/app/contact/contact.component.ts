import { Component, OnInit } from '@angular/core';
import { ContactRequest } from './models/contact-request.model';
import { ContactService } from './services/contact.service';
import { ValidationService } from '../shared/services/validation/validation.service';
import { PersonService } from '../shared/services/person/person.service';
import { Person } from '../shared/models/person.model';

@Component({
  selector: 'tk-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  isError = false;
  isSuccess = false;
  isRequesting = false;
  emailValidationPattern: RegExp;
  person: Person;
  request: ContactRequest = new ContactRequest();

  constructor(private contactService: ContactService,
              private validationService: ValidationService,
              private personService: PersonService) {
    this.emailValidationPattern = validationService.emailValidationPattern;
  }

  ngOnInit() {
    this.getPerson();
  }


  getPerson() {
    this.personService.stream$().subscribe(
      (person: Person) => {
        this.person = person;
      },
      error => {
        console.error('ContactComponent.getPerson, error -> ', error);
      }
    );
  }


  sendRequest() {
    this.isRequesting = true;
    this.contactService.sendRequest(this.request).subscribe(
      (response: boolean) => {
        if (response) {
          this.isError = false;
          this.isSuccess = true;
        } else {
          this.isError = true;
          console.error('ContactComponent.sendRequest, response -> ', response);
        }
        this.isRequesting = false;
      },
      error => {
        console.error('ContactComponent.sendRequest, error -> ', error);
        this.isError = true;
        this.isRequesting = false;
      }
    );
  }
}
