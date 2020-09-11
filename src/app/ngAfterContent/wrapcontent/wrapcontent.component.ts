import { Component, OnInit, ContentChild, AfterContentInit } from '@angular/core';
import { ChildcontentComponent } from '../childcontent/childcontent.component';

@Component({
  selector: 'app-wrapcontent',
  templateUrl: './wrapcontent.component.html',
  styleUrls: ['./wrapcontent.component.css']
})
export class WrapcontentComponent implements OnInit, AfterContentInit {

  constructor() { }
  // @ContentChild(ChildcontentComponent, {static: true}) contentChild: ChildcontentComponent;
  @ContentChild(ChildcontentComponent) contentChild: ChildcontentComponent;

  ngOnInit() {
    console.log(this.contentChild?.name);
  }

  ngAfterContentInit() {
    console.log(this.contentChild.name);
  }

}
