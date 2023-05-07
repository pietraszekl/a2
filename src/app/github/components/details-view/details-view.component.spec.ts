import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsViewComponent } from './details-view.component';
import { RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

describe('DetailsViewComponent', () => {
  let component: DetailsViewComponent;
  let fixture: ComponentFixture<DetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsViewComponent ],
      imports: [
        HttpClientModule,
        RouterModule.forRoot([]),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
