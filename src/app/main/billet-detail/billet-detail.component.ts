import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import ITicket from 'src/app/models/ticket';

@Component({
  selector: 'app-billet-detail',
  templateUrl: './billet-detail.component.html',
  styleUrls: ['./billet-detail.component.scss']
})
export class BilletDetailComponent implements OnInit {
  @Input() ticket: ITicket;
  constructor() {

  }


  ngOnInit(): void {

  }

}
