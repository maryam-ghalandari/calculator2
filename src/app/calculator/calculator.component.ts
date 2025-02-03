import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  prev: string = '0';
  current: string = '0';
  op: string = '';
  number: string = '0';

  digit(d: string) {
    this.current = Number(this.current + d).toString();
  }
  operator(o: string) {
    this.prev = this.current;
    this.current = '0';
    this.op = o;
  }
  backspace() {

    let bs = this.current;
    bs = bs.substring(0, bs.length - 1);
    if (bs == bs.substring(1)) {
      this.current = '0';
    }
    else {
      this.current = bs;

    }
  }
  clearEntry() {
    this.current = '0';
  }
  clear() {
    this.current = '0';
    this.prev = '0';
    this.op = '';
  }

  dot(dot: string) {
    if (!this.current.includes('.')) {
      this.current += '.';
    }
  }

  equal() {
    let a = Number(this.prev);
    let b = Number(this.current);
    switch (this.op) {
      case '+':
        this.current = Number(a + b).toString();
        break;

      case '-':
        this.current = Number(a - b).toString();
        break;

      case 'x':
        this.current = Number(a * b).toString();
        break;

      case '/':
        this.current = Number(a / b).toString();
        break;

      case 'x²':
        this.current = Math.pow(b, 2).toString();
        break;

      case 'x³':

        this.current = Math.pow(b, 3).toString();
        break;

      case '√':
        this.current = Math.sqrt(b).toString();
        if (Number(this.number) < 0) {
          alert('عدد نمی تواند منفی باشد');
          return;
        }
        break;

      case '%':
        this.current = ((a * b) / 100).toString();
        break;

      default:
        break;
    }
  }
  PosNeg() {
    this.current = Number(-this.current).toString();
  }
}


