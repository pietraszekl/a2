import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListViewItemComponent } from './list-view-item.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {Commit} from "../../interfaces/github.interfaces";


const mockCommit: Commit = {
  html_url: 'https://fake.github.com/123',
  sha: '1111',
  commit: {
    message: 'fake message',
    committer: {
      name: "Lukasz Pietraszek",
      date: '2023-05-04'
    }
  }
}

describe('ListViewItemComponent', () => {
  let component: ListViewItemComponent;
  let fixture: ComponentFixture<ListViewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewItemComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListViewItemComponent);
    component = fixture.componentInstance;
    component = fixture.debugElement.componentInstance;
    component.commit = mockCommit;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
