import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import ITicket from 'src/app/models/ticket';
import { ClickTravelService } from 'src/app/services/click-travel.service';

@Component({
  selector: 'app-billets',
  templateUrl: './billets.component.html',
  styleUrls: ['./billets.component.scss']
})
export class BilletsComponent implements OnInit {
  tickets: ITicket[];
  destinationName: string;
  constructor(private route: ActivatedRoute, private clickTravelService: ClickTravelService) { }

  ngOnInit(): void {
    /*this.route.queryParams.subscribe(params => {
      console.log(params);
      this.destinationName = params['name'];
      console.log(params);
  });*/
  this.route.paramMap.subscribe({
    next: params =>{
      this.destinationName = params.get("code");
      console.log(this.destinationName);
      if(this.destinationName != undefined){
        this.getTickets();
      }
    }
  });
  }

  getTickets(){
    this.clickTravelService.getTicketsForDestination(this.destinationName).subscribe({
      next: tickets=>{
        this.tickets = tickets;
      },
      error: err => alert(err.message)
    });
  }

}
