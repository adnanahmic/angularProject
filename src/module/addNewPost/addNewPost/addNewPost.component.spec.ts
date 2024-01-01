import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPostComponent } from './addNewPost.component';

describe('AddNewPostComponent', () => {
  let component: AddNewPostComponent;
  let fixture: ComponentFixture<AddNewPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewPostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddNewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});