import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'uwmh-simple-select',
  templateUrl: './simple-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleSelectComponent implements OnChanges {
  @Input() options: string[] = [];
  @Input() label = 'Selections';
  @Input() preSelectedOption: string | undefined;
  @Output() selection = new EventEmitter<string>();
  selectedOption = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['preSelectedOption']) {
      this.selectedOption = changes['preSelectedOption'].currentValue;
    }
  }

  onChange(option: string) {
    this.selectedOption = option;
    this.selection.emit(option);
  }
}
