import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewMoviePage } from './view-movie.page';

describe('ViewMoviePage', () => {
  let component: ViewMoviePage;
  let fixture: ComponentFixture<ViewMoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMoviePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
