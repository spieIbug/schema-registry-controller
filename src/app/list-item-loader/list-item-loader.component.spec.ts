import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemLoaderComponent } from './list-item-loader.component';

describe('ListItemLoaderComponent', () => {
  let component: ListItemLoaderComponent;
  let fixture: ComponentFixture<ListItemLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
