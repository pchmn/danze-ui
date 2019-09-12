import { Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Color } from '../utils/color.enum';
import { Position } from '../utils/position.enum';
import { Size } from '../utils/size.enum';

const BUTTON_TYPE_ATTRIBUTES = [
  "dz-round-button",
  "dz-outline-button",
  "dz-round-outline-button"
];

@Component({
  selector: 'button[dz-button], button[dz-round-button], button[dz-outline-button], button[dz-round-outline-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {

  @Input() color: Color = Color.Primary;
  @Input() size: Size = Size.Medium;
  @Input() iconPosition: Position.Left | Position.Right = Position.Left;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.addClasses();
  }

  private getHostElement(): HTMLElement {
    return this.elementRef.nativeElement as HTMLElement;
  }

  private addClassesToHostElement(...classes: string[]) {
    classes.forEach(className => this.getHostElement().classList.add(className));
  }

  private addClasses() {
    // Common classes
    this.addClassesToHostElement('btn', `btn-${this.color}`, 'dz-button', this.size, `icon-${this.iconPosition}`);
    // Specific classes
    BUTTON_TYPE_ATTRIBUTES.forEach(attr => {
      if (this.getHostElement().hasAttribute(attr)) {
        this.addClassesToHostElement(this.getClasseName(attr));
      }
    });
  }

  private getClasseName(attr: string) {
    if (attr.includes('outline')) {
      // If outline, remove btn-color class
      this.getHostElement().classList.remove(`btn-${this.color}`);
      // If outline and round, add dz-round-button class
      if (attr === 'dz-round-outline-button') {
        this.addClassesToHostElement('dz-round-button');
      }
      return `btn-outline-${this.color}`;
    }
    return attr;
  }

}
