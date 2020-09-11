import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-docheck-child',
  templateUrl: './docheck-child.component.html',
  styleUrls: ['./docheck-child.component.css'],
})
export class DocheckChildComponent implements OnInit {

  @Input()
  public data: { name: string, class: { name: string, id: string } };

  @Input()
  public array: { name: string }[];

  @Input()
  public id: string;

  private oldName: string;

  logs = [];

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  public ngDoCheck() {
    this.logs.push('change array do check');
    if (this.data.name !== this.oldName) {
      this.oldName = this.data.name;
      this.cd.detectChanges();
      this.logs.push('change name do check');
    }
  }

  log(){
    this.logs.push('parent change')
  }

}
