import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  public n:number
  public message:string;
  public etat:boolean;
  constructor() {
    this.n= Math.floor(Math.random()*10);
    this.message="bonjour"
    this.etat=true;
   }

  ngOnInit() {
    setInterval(()=>{
      this.n++;
      this.etat=!this.etat;
    },2000);
  }
 
public getEtat():boolean{
  return this.etat;
}
public getColor():string{
  return this.etat?'green':'blue';
}
}
