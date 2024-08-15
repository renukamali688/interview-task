import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chiled',
  templateUrl: './chiled.component.html',
  styleUrls: ['./chiled.component.css']
})
export class ChiledComponent implements OnInit {
@Input() Data!:string;
  constructor() { }

  ngOnInit(): void {
    
  }
}
