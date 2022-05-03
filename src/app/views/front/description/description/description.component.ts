import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  id:any


  constructor(private ds:DataService,private route:ActivatedRoute) {
    this.route.params.subscribe(data=>console.log(data))
    this.ds.detailsOffer(this.id).subscribe(response=>console.log(response))
   }
  ngOnInit(): void {
  }

}
