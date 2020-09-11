import { Hero } from './../../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onchange-parent',
  templateUrl: './onchange-parent.component.html',
  styleUrls: ['./onchange-parent.component.css']
})
export class OnchangeParentComponent implements OnInit {

  hero: Hero;
  power = '';

  constructor() { 
    this.hero = {
      id: 1,
      name: 'tamoki'
    }
  }

  ngOnInit(): void {
    console.log('init parent');
    
  }

}
