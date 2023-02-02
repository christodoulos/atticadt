import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'uwmh-standalone-menu',
  templateUrl: './standalone-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandaloneMenuComponent {
  @Input() items: string[] = ['item1', 'item2', 'item3'];
  @Input() icon = 'bars-4';
  @Output() selection = new EventEmitter<string>();
  isOpen = false;

  onClick(selection: string) {
    this.selection.emit(selection);
    this.isOpen = false;
  }
}
