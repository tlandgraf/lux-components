import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { LuxNachrichtComponent } from './lux-nachricht.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NachrichtService } from './lux-nachricht-services/lux-nachricht.service';
import { LuxNachrichtPflegenComponent } from './lux-nachricht-subcomponents/lux-nachricht-pflegen/lux-nachricht-pflegen.component';
import { LuxNachrichtAnzeigenComponent } from './lux-nachricht-subcomponents/lux-nachricht-anzeigen/lux-nachricht-anzeigen.component';
import { ParseLinkPipe } from './lux-nachricht-pipe/parse-link.pipe';
import { LuxLayoutModule } from '../lux-layout/lux-layout.module';
import { LuxIconModule } from '../lux-icon/lux-icon.module';
import { LuxActionModule } from '../lux-action/lux-action.module';
import { LuxFormModule } from '../lux-form/lux-form.module';
import { LuxCommonModule } from '../lux-common/lux-common.module';
import { LuxPopupsModule } from '../lux-popups/lux-popups.module';
import { LuxErrorModule } from '../lux-error/lux-error.module';
import { LuxDialogService } from '../lux-popups/lux-dialog/lux-dialog.service';
import { LuxAppFooterButtonService } from '../lux-layout/lux-app-footer/lux-app-footer-button.service';
import { LuxStepperHelperService } from '../lux-layout/lux-stepper/lux-stepper-helper.service';

@NgModule({
  declarations: [
    LuxNachrichtComponent,
    LuxNachrichtPflegenComponent,
    LuxNachrichtAnzeigenComponent,
    ParseLinkPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    LuxLayoutModule,
    LuxIconModule,
    LuxActionModule,
    LuxFormModule,
    LuxCommonModule,
    LuxPopupsModule,
    LuxErrorModule,
  ],
  providers: [
    LuxDialogService,
    LuxAppFooterButtonService,
    LuxStepperHelperService,
    NachrichtService,
  ],
  entryComponents: [
    LuxNachrichtAnzeigenComponent
  ],
  exports: [
    LuxNachrichtComponent,
  ]
})
export class LuxNachrichtModule {}