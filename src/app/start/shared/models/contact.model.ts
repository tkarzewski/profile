export class Contact {

  phone: string;
  mail: string;

  constructor(data?: any) {
    if (data) {
      this.phone = data.phone;
      this.mail = data.mail;
    }
  }
}
