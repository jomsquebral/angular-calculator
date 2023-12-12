import { Component } from '@angular/core';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  displayValue : string | number = '';
  clickedButton: string | null = null;

  changeValue(val: string){
    this.displayValue += val;
  }

  clear(){
    this.displayValue = '';
  }

  backspace(){
    if (typeof this.displayValue === 'string') {
      this.displayValue = this.displayValue.slice(0, -1);
    }
    else if (typeof this.displayValue === 'number') {
      this.displayValue = this.displayValue.toString().slice(0,-1);

    }
  }

  calculate(){
    try {
      this.displayValue = eval(this.displayValue.toString());
    } catch (error) {
      this.displayValue = 'Error';
    }
  }

  //Host Listener
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key;
    if (key.match(/[0-9+\-*/.C=]|Enter/) || key === 'Backspace') {
      this.handleKeyInput(key);
      console.log(key);
    }
  }

  handleKeyInput(key: string) {
    this.clickedButton = key;
    setTimeout(() => {
      this.clickedButton = null;
    }, 100); 


    if (key === 'C') {
      this.clear();
    } else if (key === '=' || key === 'Enter') {
      this.calculate();
    } else if ( key === "Backspace"){
      this.backspace();
    } else {
      this.changeValue(key);
    }
  }



}
