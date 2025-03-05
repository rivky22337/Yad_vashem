import { Component } from '@angular/core';
<<<<<<< HEAD
import { ButtonComponent } from '../basic-components/button/button.component';
import { ButtonIconProperty, ButtonType,SquareIconButtonIcon } from '../../enums/basic-enum';
import { CommonModule } from '@angular/common';
import { BasicSquareIconButtonComponent } from '../basic-components/basic-square-icon-button/basic-square-icon-button.component';
import { CompareModalButtonComponent } from '../basic-components/compare-modal-button/compare-modal-button.component';

@Component({
  selector: 'app-test',
  imports: [CommonModule, ButtonComponent,BasicSquareIconButtonComponent,CompareModalButtonComponent],
=======
import { ButtonComponent } from '../button/button.component';
import { ButtonIconProperty, ButtonType } from '../../enums/basic-enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [CommonModule, ButtonComponent],
>>>>>>> 6af9115a6ed1f55ebca487e33fd735214afeaf94
  standalone: true,
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],


})
export class TestComponent {
  primary = ButtonType.PRIMARY
  secondary = ButtonType.SECONDARY
  tertiany = ButtonType.TERTIARY
  variant1=ButtonIconProperty.VARIANT1
  variant2=ButtonIconProperty.VARIANT2
  variant3=ButtonIconProperty.VARIANT3
<<<<<<< HEAD
  list=SquareIconButtonIcon.LIST
  image=SquareIconButtonIcon.IMAGE

=======
>>>>>>> 6af9115a6ed1f55ebca487e33fd735214afeaf94
  onClick()
  {
    alert('test on click');
  }
}
