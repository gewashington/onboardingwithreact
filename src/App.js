import React, { Component } from 'react';
import { FirstStep } from './Steps/FirstStep';
import { SecondStep } from './Steps/SecondStep';
import { ThirdStep } from './Steps/ThirdStep';
import './App.css';

class App extends Component {
  constructor() {
    super();
   this.state = {
     currentSlide: 1
   };
 }

 next = (e) => {
   let currentSlide = this.state.currentSlide;
   if (currentSlide >= 2) {
     currentSlide = 3;
    console.log(currentSlide)
   } else {
     currentSlide = currentSlide + 1;
    console.log(currentSlide)
   }

   this.setState({
     currentSlide: currentSlide
   });
 }

 previous = (e) => {
   let currentSlide = this.state.currentSlide;
   if (currentSlide <= 1) {
     currentSlide = 1;
     console.log(currentSlide)
   } else {
     currentSlide = currentSlide - 1;
     console.log(currentSlide)
   }

   this.setState({
     currentSlide: currentSlide
   });
 }

 switchSlide() {
   switch(this.state.currentSlide) {
    case 1:
      return(<FirstStep />);
     case 2:
      return(<SecondStep />);
     case 3:
      return(<ThirdStep />);
    default:
      return(<FirstStep />);
   }
 }

 render() {
   return(
     <div>
       <div> {this.switchSlide()}</div>
        <button onClick={this.next}>Next</button>
        <button onClick={this.previous}>Prev</button>
     </div>
   );
 }
}

export default App;
