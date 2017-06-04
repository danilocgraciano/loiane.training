import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10;

  ngOnDestroy(): void { this.log('ngOnDestroy'); }

  constructor() { this.log('constructor'); }

  ngOnChanges() { this.log('ngOnChanges'); }

  ngAfterContentInit() { this.log('ngAfterContentInit'); }

  ngAfterContentChecked() { this.log('ngAfterContentChecked'); }

  ngAfterViewInit() { this.log('ngAfterViewInit'); }

  ngAfterViewChecked() { this.log('ngAfterViewChecked'); }

  ngDoCheck() { this.log('ngDoCheck'); }

  ngOnInit() { this.log('ngOnInit'); }


  private log(hook: string): void {
    console.log(hook);
  }

}
