import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonType } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-button',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text="";
  @Input() buttonType : ButtonType = ButtonType.TERTIARY;
  @Input() isBig: boolean = false;


  ngOnInit(): void {

  }
}
