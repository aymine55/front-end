import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  dataArray:any=[]

  constructor(private ds:DataService ) {
    this.ds.getCandidatures().subscribe(data=>{
      console.log(data)
      this.dataArray=data})

   }

  ngOnInit(): void {
  }
   delete(id:any,i:any){
    this.ds.deleteCandidatures(id).subscribe(response=>{
      console.log(response)
      this.dataArray.splice(i,1)
    })

  }

}
