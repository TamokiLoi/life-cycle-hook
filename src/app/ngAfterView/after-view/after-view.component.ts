import { ChildViewComponent } from './../child-view/child-view.component';
import { Component, OnInit, AfterViewChecked, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-after-view',
  templateUrl: './after-view.component.html',
  styleUrls: ['./after-view.component.css']
})
export class AfterViewComponent implements AfterViewChecked, AfterViewInit {

  private prevHero = '';
  logs = [];
  comment = '';

  // Query for a VIEW child of type `ChildViewComponent`
  @ViewChild(ChildViewComponent) viewChild: ChildViewComponent;

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
    this.logIt('AfterViewInit');
    this.doSomething();
  }

  ngAfterViewChecked() {
    // viewChild is updated after the view has been checked
    if (this.prevHero === this.viewChild.hero) {
      this.logIt('AfterViewChecked (no change)');
    } else {
      this.prevHero = this.viewChild.hero;
      this.logIt('AfterViewChecked');
      this.doSomething();
    }
  }

  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    const c = this.viewChild.hero.length > 10 ? `That's a long name` : '';
    if (c !== this.comment) {
      // Wait a tick because the component's view has already been checked
      this.logIt(c);
    }
  }

  logIt(log) {
    this.logs.push(log);
  }

}
