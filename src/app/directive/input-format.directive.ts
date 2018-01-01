import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[appInputFormat]'
})
export class InputFormatDirective {
    @Input('appInputFormat') private format: string;

    constructor(private element: ElementRef) {
    }

    @HostListener('blur') onBlur() {
        const value: string = this.element.nativeElement.value;

        if (this.format === 'lowercase') {
            return this.element.nativeElement.value = value.toLowerCase();
        }

        this.element.nativeElement.value = value.toLocaleUpperCase();
    }

}
