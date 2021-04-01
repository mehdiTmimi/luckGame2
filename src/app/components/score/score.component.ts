import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  public list:Array<number>;
  public etatLoose:boolean;
  constructor() { }

  ngOnInit() {
    this.etatLoose=true;
    this.list=[5,3,5,2,6,22,7756,13,76,1346,657,46];
    setInterval(()=>
    {
      this.list.pop()
    },1000)
  }

}
