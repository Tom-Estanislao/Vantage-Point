import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReorderSuggestion } from './reorder-suggestion';

describe('ReorderSuggestion', () => {
  let component: ReorderSuggestion;
  let fixture: ComponentFixture<ReorderSuggestion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReorderSuggestion],
    }).compileComponents();

    fixture = TestBed.createComponent(ReorderSuggestion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
