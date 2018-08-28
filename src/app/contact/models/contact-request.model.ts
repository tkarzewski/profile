export class ContactRequest {

  name: string;
  email: string;
  phone?: string;
  message: string;

  constructor(data?: any) {
    if (data) {
      this.name = data.name;
      this.email = data.email;
      this.phone = data.phone;
      this.message = data.message;
    }
  }
}
