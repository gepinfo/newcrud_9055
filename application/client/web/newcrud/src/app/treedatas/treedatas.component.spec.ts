import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreedatasComponent } from './treedatas.component';

describe('TreedatasComponent', () => {
  let component: TreedatasComponent;
  let fixture: ComponentFixture<TreedatasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreedatasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreedatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});