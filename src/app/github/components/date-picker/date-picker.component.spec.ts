import {ComponentFixture, TestBed} from '@angular/core/testing';
import { DatePickerComponent } from './date-picker.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {By} from "@angular/platform-browser";
import {GithubService} from "../../services/github.service";
import createSpy = jasmine.createSpy;

const mockEvent = {
  target: {
    value: '2023-01-05'
  } as HTMLInputElement,
}

class GithubServiceMock  {
  setFromDate = createSpy()
}

describe('DatePickerComponent', () => {
  let component: DatePickerComponent;
  let fixture: ComponentFixture<DatePickerComponent>;
  let githubService: GithubService;
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ DatePickerComponent ],
      providers: [{provide: GithubService, useClass: GithubServiceMock}],
      imports: [
        HttpClientTestingModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatePickerComponent);
    githubService = TestBed.inject(GithubService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });

  it('should handle date change', async () => {
    spyOn(component,'handleDateChange')
    let input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.dispatchEvent(new Event('change'));
    input.value = mockEvent
    fixture.detectChanges();
    expect(component.handleDateChange).toHaveBeenCalledTimes(1);
  });

  describe('setFromDate', () => {
    it('should set new date range', () => {
      component.handleDateChange(mockEvent)
      expect(githubService.setFromDate).toHaveBeenCalledTimes(1);
    });
  });

});
