import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocheckParentComponent } from './docheck-parent.component';

describe('DocheckParentComponent', () => {
  let component: DocheckParentComponent;
  let fixture: ComponentFixture<DocheckParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocheckParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocheckParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
