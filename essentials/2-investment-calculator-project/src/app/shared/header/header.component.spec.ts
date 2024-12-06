import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title "Investment Calculator"', () => {
    const titleElement = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(titleElement.textContent).toContain('Investment Calculator');
  });

  it('should display the logo with correct src and alt attributes', () => {
    const logoElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(logoElement.src).toContain('investment-calculator-logo.png');
    expect(logoElement.alt).toBe('green money bag with a dollar sign');
  });
});
