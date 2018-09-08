import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services/services.service';

@Component({
  selector: 'tk-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: Array<string>;
  isLoading: boolean;

  constructor(private servicesService: ServicesService) { }

  ngOnInit() {
    this.loadServices();
  }

  private loadServices() {
    this.isLoading = true;
    this.servicesService.getServices().subscribe(
      (data: Array<string>) => {
        this.services = data;
        this.isLoading = false;
      },
      error => {
        console.error('ServicesComponent.loadServices, error -> ', error);
        this.isLoading = false;
      });
  }

}
