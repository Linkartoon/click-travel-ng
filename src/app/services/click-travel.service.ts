import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import IDestination from '../models/destination';
import ITicket from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class ClickTravelService {
    apiUrl: string = "https://travel-api.clicksomeone.com/";
  constructor(private httpClient: HttpClient) { }

    getDestinations(): Observable<IDestination[]>{
      let destinationsUrl = this.apiUrl+"destinations";
      return this.httpClient.get<IDestination[]>(destinationsUrl);
    }

    getTicketsForDestination(destination: string): Observable<ITicket[]>{
      let query = { where : { to : destination}};
      let strQuery = JSON.stringify(query);
      let ticketsUrl = this.apiUrl+"tickets?filter="+encodeURI(strQuery);
      return this.httpClient.get<ITicket[]>(ticketsUrl);
    }
}
