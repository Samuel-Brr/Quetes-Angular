import { Directive, HostBinding, HostListener} from '@angular/core';


@Directive({
  selector: '[appChangeStyleOnHover]'
})
export class ChangeStyleOnHoverDirective {

  @HostBinding('style.backgroundColor') myBackgroundColor: string = '';

  constructor() { }

  @HostListener('mouseenter') mouseEnterEvent (eventData: Event){
    this.myBackgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData: Event){
    this.myBackgroundColor = 'transparent';
  }
}
