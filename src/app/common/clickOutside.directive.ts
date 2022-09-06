import { Directive, ElementRef, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {

  constructor(private elementRef: ElementRef) { }

  @Output() clickOutside = new EventEmitter<MouseEvent>();

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    console.log(this.elementRef.nativeElement);
    console.log(targetElement);
    console.log(event.target);
    if (!clickedInside) {
      this.clickOutside.emit(event);
    }
  }
}