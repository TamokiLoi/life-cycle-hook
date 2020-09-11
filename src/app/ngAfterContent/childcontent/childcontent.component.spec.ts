import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcontentComponent } from './childcontent.component';

describe('ChildcontentComponent', () => {
  let component: ChildcontentComponent;
  let fixture: ComponentFixture<ChildcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
