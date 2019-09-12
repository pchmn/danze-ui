import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Color } from '../utils/color.enum';
import { Size } from '../utils/size.enum';
import { Position } from './../utils/position.enum';
import { ButtonModule } from './button.module';


describe('ButtonComponent', () => {
  let component: DzButtonTestComponent;
  let fixture: ComponentFixture<DzButtonTestComponent>;
  let dzButton: any;
  let dzRoundButton: any;
  let dzOutlineButton: any;
  let dzRoundOutlineButton: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ButtonModule],
      declarations: [DzButtonTestComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DzButtonTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    dzButton = buttons[0];
    dzRoundButton = buttons[1];
    dzOutlineButton = buttons[2];
    dzRoundOutlineButton = buttons[3];
  });

  it('should add right button type classes', () => {
    // dz-button
    expect(dzButton.nativeElement.classList.contains('dz-button'));
    // dz-round-button
    expect(dzRoundButton.nativeElement.classList.contains('dz-button'));
    expect(dzRoundButton.nativeElement.classList.contains('dz-round-button'));
    // dz-outline-button
    expect(dzOutlineButton.nativeElement.classList.contains('dz-button'));
    expect(dzOutlineButton.nativeElement.classList.contains('dz-outline-button'));
    // dz-round-outline-button
    expect(dzRoundOutlineButton.nativeElement.classList.contains('dz-button'));
    expect(dzRoundOutlineButton.nativeElement.classList.contains('dz-round-outline-button'));
  });

  it('should keep previous class', () => {
    // dz-button
    expect(dzButton.nativeElement.classList.contains('custom-class'));
  });

  it('should add specific classes', () => {
    // dz-button
    expect(dzButton.nativeElement.classList.contains('btn'));
    expect(dzButton.nativeElement.classList.contains('btn-secondary'));
    expect(dzButton.nativeElement.classList.contains('icon-right'));
    expect(dzButton.nativeElement.classList.contains('lg'));
  });

  it('should change specific classes dynamically', () => {
    // dz-button
    expect(dzButton.nativeElement.classList.contains('btn-secondary'));
    expect(dzButton.nativeElement.classList.contains('icon-right'));
    expect(dzButton.nativeElement.classList.contains('lg'));
    // Change inputs
    component.color = Color.Primary;
    expect(!dzButton.nativeElement.classList.contains('btn-secondary'));
    expect(dzButton.nativeElement.classList.contains('btn-primary'));
    component.size = Size.Small;
    expect(!dzButton.nativeElement.classList.contains('lg'));
    expect(dzButton.nativeElement.classList.contains('sm'));
    component.iconPosition = Position.Left;
    expect(!dzButton.nativeElement.classList.contains('icon-right'));
    expect(dzButton.nativeElement.classList.contains('icon-left'));
  });
});

/** Test component for Dz button */
@Component({
  selector: 'dz-button-test',
  template: `
    <button dz-button [color]="color" [size]="size" [iconPosition]="iconPosition" class="custom-class">Test</button>
    <button dz-round-button>Test</button>
    <button dz-outline-button>Test</button>
    <button dz-round-outline-button>Test</button>
  `
})
class DzButtonTestComponent {
  color: Color = Color.Secondary;
  size: Size = Size.Large;
  iconPosition: Position = Position.Right;
}