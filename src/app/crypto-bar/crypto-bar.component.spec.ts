import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoBarComponent } from './crypto-bar.component';

describe('CryptoBarComponent', () => {
  let component: CryptoBarComponent;
  let fixture: ComponentFixture<CryptoBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
