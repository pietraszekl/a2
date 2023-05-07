import {TestBed} from '@angular/core/testing';

import {GithubService} from './github.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Commit} from "../interfaces/github.interfaces";


const mockEvent = {
  target: {
    value: '2023-01-05'
  } as HTMLInputElement,
}

describe('GithubService', () => {
  let service: GithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(GithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('setFromDate', () => {
    it("should call getAllCommits", () => {
      const date = new Date(mockEvent.target.value)
      spyOn(service, 'setFromDate').and.callThrough()
      spyOn(service, 'getAllCommits');

      service.setFromDate(date)
      expect(service.getAllCommits).toHaveBeenCalledWith(date)
    })
  })

});
