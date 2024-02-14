import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiSpeedComponent } from './wifi-speed.component';

describe('WifiSpeedComponent', () => {
  let component: WifiSpeedComponent;
  let fixture: ComponentFixture<WifiSpeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WifiSpeedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WifiSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
