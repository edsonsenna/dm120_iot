import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LuminosityPage } from './luminosity.page';

describe('LuminosityPage', () => {
  let component: LuminosityPage;
  let fixture: ComponentFixture<LuminosityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuminosityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LuminosityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
