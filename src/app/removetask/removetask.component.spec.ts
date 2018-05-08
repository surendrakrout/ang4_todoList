import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovetaskComponent } from './removetask.component';

describe('RemovetaskComponent', () => {
  let component: RemovetaskComponent;
  let fixture: ComponentFixture<RemovetaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovetaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
