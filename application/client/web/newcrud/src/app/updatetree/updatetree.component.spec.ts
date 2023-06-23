import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetreeComponent } from './updatetree.component';

describe('UpdatetreeComponent', () => {
  let component: UpdatetreeComponent;
  let fixture: ComponentFixture<UpdatetreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatetreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});