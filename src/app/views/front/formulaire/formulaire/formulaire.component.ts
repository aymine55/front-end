import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  constructor(private ds:DataService,private route:Router) { }

  ngOnInit(): void {
  }
  add(f:any){
    let data=f.value
    console.log(data)
   this.ds.AddCandidatures(data).subscribe(data=>{
     this.route.navigate(['/'])
   })
  }

}
