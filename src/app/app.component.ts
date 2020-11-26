import { Component } from '@angular/core';
import IDestination from './models/destination';
import { ClickTravelService } from './services/click-travel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Choose your dream destination...';
  destinations: IDestination[];
  dreamDestinations: IDestination[];

  constructor(private clickTravelService: ClickTravelService){
    this.clickTravelService.getDestinations().subscribe({
      next: destinations =>{
        this.destinations = destinations;
        if(this.destinations) this.dreamDestinations = this.destinations.filter(d=>d.isDreamDestination);
      },
      error: err => alert(err.message)
    });
  }
}
