import { Component } from '@angular/core';
import { TestBasicComponent } from '../basic-components/test-basic/test-basic.component';

@Component({
  selector: 'yv-cluster-test',
  standalone: true,
  imports: [TestBasicComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

}
