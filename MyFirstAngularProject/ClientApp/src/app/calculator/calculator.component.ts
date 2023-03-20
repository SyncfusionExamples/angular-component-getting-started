import { Component } from '@angular/core';

@Component({
    selector: 'calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

    firstNumber: number;
    secondNumber: number;
    result: number;

    Addition() {
        this.result = (+this.firstNumber + +this.secondNumber); //Normal addition(+) will concatenate the two numbers
    }

    Subtraction() {
        this.result = this.firstNumber - this.secondNumber;
    }

    Multiplication() {
        this.result = this.firstNumber * this.secondNumber;
    }

    Division() {
        this.result = this.firstNumber / this.secondNumber;
    }

}

