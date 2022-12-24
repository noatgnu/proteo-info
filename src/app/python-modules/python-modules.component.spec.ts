import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonModulesComponent } from './python-modules.component';

describe('PythonModulesComponent', () => {
  let component: PythonModulesComponent;
  let fixture: ComponentFixture<PythonModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonModulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PythonModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
