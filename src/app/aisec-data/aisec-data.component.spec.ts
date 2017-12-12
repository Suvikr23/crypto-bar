import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AisecDataComponent } from './aisec-data.component';

describe('AisecDataComponent', () => {
  let component: AisecDataComponent;
  let fixture: ComponentFixture<AisecDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AisecDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AisecDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
