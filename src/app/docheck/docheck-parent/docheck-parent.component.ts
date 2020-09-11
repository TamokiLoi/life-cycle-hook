import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-docheck-parent',
  templateUrl: './docheck-parent.component.html',
  styleUrls: ['./docheck-parent.component.css']
})
export class DocheckParentComponent implements OnInit {

  public data: { name: string, class: { name: string, id: string } } = { name: "Test", class: { name: '1A', id: '1' } };
  public array = [{ name: '1' }, { name: '2' }, { name: '3' }]
  name = 'Angular 10';

  constructor() { }

  ngOnInit(): void {
  }

  public onClick() {
    this.data.name = "Name from Parent with number" + Math.random();
  }
  public onClick2() {
    this.array = [];
  }

}
