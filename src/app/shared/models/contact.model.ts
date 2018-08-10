export class Contact {

  mail: string;
  phone: string;
  fax: string;
  pager: string;


  constructor(data?: any) {
    if (data) {
      this.phone = data.phone;
      this.mail = data.mail;
      this.fax = data.fax;
      this.pager = data.pager;
    }
  }
}
