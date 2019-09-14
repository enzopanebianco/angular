import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIDComponent } from './list-id.component';

describe('ListIDComponent', () => {
  let component: ListIDComponent;
  let fixture: ComponentFixture<ListIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
