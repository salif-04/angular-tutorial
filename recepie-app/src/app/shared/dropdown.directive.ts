import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdownDirective]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    @HostBinding('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}
