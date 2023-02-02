import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'uwmh-icon-bar',
  templateUrl: './icon-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBarComponent {
  @Output() command = new EventEmitter<string>();

  onClick(command: string) {
    this.command.emit(command);
  }
}
