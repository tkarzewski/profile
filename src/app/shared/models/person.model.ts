import { Contact } from './contact.model';
import { Address } from './address.model';
import { SocialMedia } from './social-media.model';

export class Person {

  name: string;
  givenName: string;
  nationality: string;
  dateOfBirth: Date;
  address: Address;
  contact: Contact;
  socialMedia: SocialMedia;
  availableFrom: Date;
  availableTo: Date;
  jobTitle: string;

  constructor(data?: any) {
    if (data) {
      this.name = data.name;
      this.givenName = data.givenName;
      this.nationality = data.nationality;
      this.jobTitle = data.jobTitle;
      if (data.dateOfBirth) {
        this.dateOfBirth = new Date(data.dateOfBirth);
      }
      if (data.address) {
        this.address = new Address(data.address);
      }
      if (data.contact) {
        this.contact = new Contact(data.contact);
      }
      if (data.socialMedia) {
        this.socialMedia = new SocialMedia(data.socialMedia);
      }
      if (data.availableFrom) {
        this.availableFrom = new Date(data.availableFrom);
      }
      if (data.availableTo) {
        this.availableTo = new Date(data.availableTo);
      }
    }
  }

}

