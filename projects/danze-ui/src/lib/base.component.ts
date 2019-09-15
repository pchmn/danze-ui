import { ElementRef } from '@angular/core';

export class BaseComponent {

  constructor(protected elementRef: ElementRef) { }

  protected hostElement: HTMLElement;

  protected getHostElement(): HTMLElement {
    if (!this.hostElement) {
      return this.elementRef.nativeElement as HTMLElement;
    }
    return this.hostElement;
  }

  protected addClassesToHostElement(...classes: string[]) {
    classes.forEach(className => this.getHostElement().classList.add(className));
  }

  protected removeClassesFromHostElement(...classes: string[]) {
    classes.forEach(className => this.getHostElement().classList.remove(className));
  }
}