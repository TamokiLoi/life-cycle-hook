import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapcontentComponent } from './wrapcontent.component';

describe('WrapcontentComponent', () => {
  let component: WrapcontentComponent;
  let fixture: ComponentFixture<WrapcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
