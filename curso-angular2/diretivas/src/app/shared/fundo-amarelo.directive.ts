import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private elementRef:ElementRef, private renderer:Renderer) { 
    // this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    this.renderer.setElementStyle(elementRef.nativeElement,'background-color','yellow');
  }

}
