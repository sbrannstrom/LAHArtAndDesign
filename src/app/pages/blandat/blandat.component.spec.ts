import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlandatComponent } from './blandat.component';

describe('BlandatComponent', () => {
  let component: BlandatComponent;
  let fixture: ComponentFixture<BlandatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlandatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlandatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
