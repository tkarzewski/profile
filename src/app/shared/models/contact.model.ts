export class Contact {

  mail: string;
  phone: string;


  constructor(data?: any) {
    if (data) {
      this.phone = data.phone;
      this.mail = data.mail;
    }
  }
}
