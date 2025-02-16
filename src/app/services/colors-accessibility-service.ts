import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class ColorsAccessibilityService {

    isBrowser: boolean = false;

    stylesArray: any;
    stylesEle: any;

    constructor(@Inject(PLATFORM_ID) platformId: string,
        @Inject(DOCUMENT) private document: Document,) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    resetColors() {

        // dynamically create CSS var declaration like in css

        const styleString =
         "--background-image: url('./assets/background.png');"
        + "--basic-white-background: #FFFFFF;"
        + "--keyboard-background: #D8DADE;"
        + "--keyboard-background-button: #ADB3BC;"
        + "--blue-button-background-color: #0068F8;"
        + "--blue-button-border-color: #0068F8;"
        + "--icon-light-blue: #74A5F5;"
        + "--basic-white: #FFFFFF;"
        + "--basic-black: #000000;"
        + "--light-text-50-percent: rgba(255,255,255,0.5);"
        + "--light-text-67-percent: rgba(255,255,255,0.67);"
        + "--basic-gray: #dddddd;"
        + "--light-gray: rgba(211,211,211,0.5);"
        + "--dark-blue: darkblue;"
        + "--dark-blue-text: #001A3F;"
        + "--outline-gray: #D9D9D9;"
        + "--payment-error: #FC506E;"
        + "--payment-method-background: rgba(0, 104, 248, 0.38);"
        + "--dark-gray: #6C757D;";

        const styleElm :HTMLElement = this.document.getElementsByTagName("html")[0];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        styleElm.style = styleString;

    }

    yellowOverBlack() {
        if (this.isBrowser) {
            document.documentElement.style.setProperty("--background-image", "unset");
            document.documentElement.style.setProperty("--light-gray", "yellow");
            document.documentElement.style.setProperty("--basic-gray", "yellow");
            document.documentElement.style.setProperty("--light-text-50-percent", "yellow");
            document.documentElement.style.setProperty("--light-text-67-percent", "yellow");
            document.documentElement.style.setProperty("--payment-error", "yellow");
            document.documentElement.style.setProperty("--payment-method-background", "black");
            document.documentElement.style.setProperty("--basic-white", "yellow");
            document.documentElement.style.setProperty("--basic-white-background", "black");
            document.documentElement.style.setProperty("--keyboard-background", "black");
            document.documentElement.style.setProperty("--outline-gray", "yellow");
            document.documentElement.style.setProperty("--keyboard-background-button", "black");
            document.documentElement.style.setProperty("--blue-button-background-color", "black");
            document.documentElement.style.setProperty("--blue-button-border-color", "yellow");
            document.documentElement.style.setProperty("--basic-black", "yellow");
            document.documentElement.style.setProperty("--dark-blue-text", "yellow");
            document.documentElement.style.setProperty("--dark-blue", "black");
            document.documentElement.style.setProperty("--icon-light-blue", "yellow");
            document.documentElement.style.setProperty("--dark-gray", "yellow");


        }
    }

    blackOverWhite() {
          if (this.isBrowser) {
            document.documentElement.style.setProperty("--background-image", "unset");
            document.documentElement.style.setProperty("--light-gray", "black");
            document.documentElement.style.setProperty("--basic-gray", "black");
            document.documentElement.style.setProperty("--light-text-50-percent", "black");
            document.documentElement.style.setProperty("--light-text-67-percent", "black");
            document.documentElement.style.setProperty("--payment-error", "black");
            document.documentElement.style.setProperty("--payment-method-background", "white");
            document.documentElement.style.setProperty("--basic-white", "black");
            document.documentElement.style.setProperty("--basic-white-background", "white");
            document.documentElement.style.setProperty("--keyboard-background", "white");
            document.documentElement.style.setProperty("--outline-gray", "black");
            document.documentElement.style.setProperty("--keyboard-background-button", "white");
            document.documentElement.style.setProperty("--blue-button-background-color", "white");
            document.documentElement.style.setProperty("--blue-button-border-color", "black");
            document.documentElement.style.setProperty("--basic-black", "black");
            document.documentElement.style.setProperty("--dark-blue", "white");
            document.documentElement.style.setProperty("--dark-blue-text", "black");
            document.documentElement.style.setProperty("--icon-light-blue", "black");
            document.documentElement.style.setProperty("--dark-gray", "black");
        }
    }

    noCSS() {
        this.stylesArray = Object.assign([], document.getElementsByTagName("style"));
        const stylesArray = Array.prototype.slice.call(document.getElementsByTagName("style"));
        stylesArray.forEach(ele => ele.remove());

        const styleElm :HTMLElement = this.document.getElementsByTagName("html")[0];
        this.stylesEle = Object.assign({}, styleElm.style);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        styleElm.style = "";

        // document.querySelector('link[href$="style.css"]')?.remove();

    }

    resetCss() {
        const stylesArray = Array.prototype.slice.call(this.stylesArray);
        stylesArray.forEach(ele => document.head.appendChild(ele));
    }

}
