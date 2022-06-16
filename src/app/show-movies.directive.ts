import { Directive, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appShowMovies]'
})
export class ShowMoviesDirective implements OnInit {

  showMovies: boolean = true;

  @HostBinding('style.display') cssDisplayValue: string = 'block';

  constructor() {}

  ngOnInit(): void {
    this.setCssDisplayValue()
  }

  setCssDisplayValue(){
    if(this.showMovies){
      this.cssDisplayValue = 'block'
    }else{
      this.cssDisplayValue = 'none'
    }
  }


}
