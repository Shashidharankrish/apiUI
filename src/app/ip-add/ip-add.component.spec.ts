import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpAddComponent } from './ip-add.component';

describe('IpAddComponent', () => {
  let component: IpAddComponent;
  let fixture: ComponentFixture<IpAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
