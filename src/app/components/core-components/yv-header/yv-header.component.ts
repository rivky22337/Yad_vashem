import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ColorsAccessibilityService } from 'src/app/services/colors-accessibility-service';
import { environment } from 'src/environments/environment';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AccessibilityEnum } from '../../../enums/accessibility-enum';
@Component({
  selector: 'yv-cluster-header',
  standalone: true,
  templateUrl: './yv-header.component.html',
  styleUrls: ['./yv-header.component.scss'],
  imports: [CommonModule, TranslateModule, MatMenuModule, MatButtonModule],
})
export class HeaderComponent {
  accessibilityEnum = AccessibilityEnum;
  currentAccessibility = AccessibilityEnum.RESET;
  isShowAccessibility =false;
  @Input() lang: string = environment.defaultLang;

  #colorsAccessibilityService = inject(ColorsAccessibilityService);
  #router = inject(Router);

  redirectToHome() {
    this.#router.navigateByUrl(this.lang + '/home');
  }
  changeLanguage(newLang: string) {
    if (this.lang != newLang) {
      this.#router.navigateByUrl(newLang + '/home');
    }
  }
  changeAccessibility(type: AccessibilityEnum) {
    this.toggleAccessibility();
    if(this.currentAccessibility==type){
      return;
    }
    this.currentAccessibility =type;
    switch (type) {
      case AccessibilityEnum.HIGH_CONTRAST: {
        this.#colorsAccessibilityService.blackOverWhite();
        break;
      }
      case AccessibilityEnum.REVERSE_CONTRAST: {
        this.#colorsAccessibilityService.yellowOverBlack();
        break;
      }
      case AccessibilityEnum.NO_CSS: {
        this.#colorsAccessibilityService.noCSS();
        break;
      }
      case AccessibilityEnum.RESET: {
        this.#colorsAccessibilityService.resetColors();
        this.#colorsAccessibilityService.resetCss();
        break;
      }
    }
  }
  toggleAccessibility(){
    this.isShowAccessibility =!this.isShowAccessibility;
  }
}
