import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesDescriptionsComponent } from './notes-descriptions.component';

describe('NotesDescriptionsComponent', () => {
  let component: NotesDescriptionsComponent;
  let fixture: ComponentFixture<NotesDescriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesDescriptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesDescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
