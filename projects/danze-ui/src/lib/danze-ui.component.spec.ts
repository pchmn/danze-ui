import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanzeUiComponent } from './danze-ui.component';

describe('DanzeUiComponent', () => {
  let component: DanzeUiComponent;
  let fixture: ComponentFixture<DanzeUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanzeUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanzeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
