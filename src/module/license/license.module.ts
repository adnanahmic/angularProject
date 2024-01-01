import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenseComponent } from './license/license.component';
import { LicenseRoutingModule } from './license-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [LicenseComponent],
  imports: [CommonModule, LicenseRoutingModule, SharedModule],
})
export class LicenseModule {}
