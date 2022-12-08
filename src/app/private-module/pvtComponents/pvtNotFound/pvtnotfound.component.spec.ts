import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvtnotfoundComponent } from './pvtnotfound.component';

describe('PvtnotfoundComponent', () => {
  let component: PvtnotfoundComponent;
  let fixture: ComponentFixture<PvtnotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvtnotfoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvtnotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
