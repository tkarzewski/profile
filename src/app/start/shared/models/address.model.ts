export class Address {

  street: string;
  houseNo: string;
  postalCode: number;
  city: string;
  country: string;

  constructor(data?: any) {
    if (data) {
      this.street = data.street;
      this.houseNo = data.houseNo;
      this.postalCode = data.postalCode;
      this.city = data.city;
      this.country = data.country;
    }
  }

}
