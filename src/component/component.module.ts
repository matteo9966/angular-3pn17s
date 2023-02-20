import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../directive/highlight.directive';
import { HighlightComponent } from './highlight/highlight.component';
import { FormsModule } from '@angular/forms';
import { ReadTimeDirective } from '../directive/read-time.directive';
import { ScrolltoDirective } from '../directive/scrollto.directive';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [HighlightDirective, HighlightComponent, ReadTimeDirective,ScrolltoDirective],
  exports: [HighlightDirective, HighlightComponent, ReadTimeDirective,ScrolltoDirective],
})
export class ComponentModule {}
