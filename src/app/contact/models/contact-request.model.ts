export class ContactRequest {

  subject: string;
  email: string;
  phone?: string;
  message: string;

  constructor(data?: any) {
    if (data) {
      this.subject = data.subject;
      this.email = data.email;
      this.phone = data.phone;
      this.message = data.message;
    }
  }
}
