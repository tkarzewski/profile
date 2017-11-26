import { Address } from './address.model';
import { Contact } from './contact.model';
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

  constructor(data?: any) {
    if (data) {
      this.name = data.name;
      this.givenName = data.givenName;
      this.nationality = data.nationality;
      if (data.dateOfBirth) {
        this.dateOfBirth = new Date(data.dateOfBirth);
      }
      if (data.address) {
        this.address = new Address(data.address);
      }
      if (data.contact) {
        this.contact = data.contact;
      }
      if (data.socialMedia) {
        this.socialMedia = data.socialMedia;
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
