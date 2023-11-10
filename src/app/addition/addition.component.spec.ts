/*import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionComponent } from './addition.component';

describe('AdditionComponent', () => {
  let component: AdditionComponent;
  let fixture: ComponentFixture<AdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/

import { addition } from "./addition"

describe('addition unit test', () => {

  it('Should add 2  + 2 = 4', () => {
    // Pattern AAA (Arrange - Act -Assert)
    // Arrange
    let result = 0;
    // Act
    result = addition(2, 2);
    // Assert
    expect(result).toBe(4);
    });
  it('Should add 2  + 2 = 4', () => {
    //Arrange
    let result = 0;
    //Act
    result = addition(0, -2);
    //Assert
    expect(result).toBe(-2);
  });
}
);
