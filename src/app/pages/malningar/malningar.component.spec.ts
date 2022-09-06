import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalningarComponent } from './malningar.component';

describe('MalningarComponent', () => {
  let component: MalningarComponent;
  let fixture: ComponentFixture<MalningarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MalningarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MalningarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
