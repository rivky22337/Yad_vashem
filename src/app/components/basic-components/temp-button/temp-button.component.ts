import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonType } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-temp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temp-button.component.html',
  styleUrls: ['./temp-button.component.scss']
})
export class TempButtonComponent {
  @Input() text="";
  @Input() buttonType : ButtonType = ButtonType.TERTIARY;
  @Input() disabled: boolean = false;
  @Input() isBig: boolean = false;
  @Output() onClick = new EventEmitter();

  ngOnInit(): void {

  }

}
