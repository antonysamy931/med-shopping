
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MedNavComponent } from './med-nav.component';

describe('MedNavComponent', () => {
  let component: MedNavComponent;
  let fixture: ComponentFixture<MedNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [MedNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
