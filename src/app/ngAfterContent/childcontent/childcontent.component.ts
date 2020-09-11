import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childcontent',
  templateUrl: './childcontent.component.html',
  styleUrls: ['./childcontent.component.css']
})
export class ChildcontentComponent implements OnInit {

  public name = "Name ChildContentComponent";

  constructor() { }

  ngOnInit(): void {
  }

}
