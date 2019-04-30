import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IkigaiChartBodyComponent } from './ikigai-chart-body.component';

describe('IkigaiChartBodyComponent', () => {
  let component: IkigaiChartBodyComponent;
  let fixture: ComponentFixture<IkigaiChartBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IkigaiChartBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IkigaiChartBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
