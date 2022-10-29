import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEployeeSheetComponent } from './view-eployee-sheet.component';

describe('ViewEployeeSheetComponent', () => {
  let component: ViewEployeeSheetComponent;
  let fixture: ComponentFixture<ViewEployeeSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEployeeSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEployeeSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
