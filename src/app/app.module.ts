import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnchangeParentComponent } from './onchange/onchange-parent/onchange-parent.component';
import { OnchangeChildComponent } from './onchange/onchange-child/onchange-child.component';
import { DocheckParentComponent } from './docheck/docheck-parent/docheck-parent.component';
import { DocheckChildComponent } from './docheck/docheck-child/docheck-child.component';
import { WrapcontentComponent } from './ngAfterContent/wrapcontent/wrapcontent.component';
import { ChildcontentComponent } from './ngAfterContent/childcontent/childcontent.component';
import { AfterViewComponent } from './ngAfterView/after-view/after-view.component';
import { ChildViewComponent } from './ngAfterView/child-view/child-view.component';


@NgModule({
  declarations: [
    AppComponent,
    OnchangeParentComponent,
    OnchangeChildComponent,
    DocheckParentComponent,
    DocheckChildComponent,
    WrapcontentComponent,
    ChildcontentComponent,
    AfterViewComponent,
    ChildViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
