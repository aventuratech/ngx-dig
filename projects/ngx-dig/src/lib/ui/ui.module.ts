import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiToolbarComponent } from './ui-toolbar/ui-toolbar.component';
import { UiToolbarLeftComponent } from './ui-toolbar/ui-toolbar-left/ui-toolbar-left.component';
import { UiToolbarRightComponent } from './ui-toolbar/ui-toolbar-right/ui-toolbar-right.component';
import { UiBrandComponent } from './ui-brand/ui-brand.component';
import { UiComponent } from './ui/ui.component';
import { UiNavComponent } from './ui-nav/ui-nav.component';
import { UiIdentityComponent } from './ui-identity/ui-identity.component';

@NgModule({
  declarations: [UiToolbarComponent, UiToolbarLeftComponent, UiToolbarRightComponent, UiBrandComponent, UiComponent, UiNavComponent, UiIdentityComponent],
  imports: [
    CommonModule
  ]
})
export class UiModule { }
