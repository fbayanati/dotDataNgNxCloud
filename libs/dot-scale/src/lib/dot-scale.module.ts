import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DotScaleDirective } from './dot-scale.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [DotScaleDirective],
  exports: [DotScaleDirective],
})
export class DotScaleModule {}
