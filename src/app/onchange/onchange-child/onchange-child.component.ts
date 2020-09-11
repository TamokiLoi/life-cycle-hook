import { Hero } from './../../hero';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-onchange-child',
  templateUrl: './onchange-child.component.html',
  styleUrls: ['./onchange-child.component.css']
})
export class OnchangeChildComponent implements OnInit, OnChanges {

  @Input() hero: Hero;
  @Input() power: string;
  logs = [];
  oldHeroName;
  oldPower;
  changeDetected;
  noChangeCount;

  constructor() { }

  ngOnInit(): void {
    this.logs.push('init child');
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.logs.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  ngDoCheck() {

    if (this.hero.name !== this.oldHeroName) {
      this.changeDetected = true;
      this.logs.push(`DoCheck: Hero name changed to "${this.hero.name}" from "${this.oldHeroName}"`);
      this.oldHeroName = this.hero.name;
    }

    if (this.power !== this.oldPower) {
      this.changeDetected = true;
      this.logs.push(`DoCheck: Power changed to "${this.power}" from "${this.oldPower}"`);
      this.oldPower = this.power;
    }

    if (this.changeDetected) {
      this.noChangeCount = 0;
    } else {
      // log that hook was called when there was no relevant change.
      const count = this.noChangeCount += 1;
      const noChangeMsg = `DoCheck called ${count}x when no change to hero or power`;
      if (count === 1) {
        // add new "no change" message
        this.logs.push(noChangeMsg);
      } else {
        // update last "no change" message
        this.logs[this.logs.length - 1] = noChangeMsg;
      }
    }

    this.changeDetected = false;
  }

}
