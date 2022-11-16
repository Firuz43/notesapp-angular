import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesNamesComponent } from './notes-names.component';

describe('NotesNamesComponent', () => {
  let component: NotesNamesComponent;
  let fixture: ComponentFixture<NotesNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesNamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
