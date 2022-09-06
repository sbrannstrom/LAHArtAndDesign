import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaltovningComponent } from './naltovning.component';

describe('NaltovningComponent', () => {
  let component: NaltovningComponent;
  let fixture: ComponentFixture<NaltovningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaltovningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaltovningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
