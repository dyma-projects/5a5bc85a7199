import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
	selector : '[dColor]'
})

export class ColorDirective{
	constructor(private el : ElementRef){
		//this.el.nativeElement.style.backgroundColor = 'red'; -- on utilise à la place la méthode privée 'surlignage'
		this.surlignage('red');
	}

  	private surlignage(color : string){
  		this.el.nativeElement.style.backgroundColor = color;
  	}

	@HostListener('window:keydown', ['$event']) keyEvent($event : KeyboardEvent) {
     //console.log($event.key);
     //keyEvent est le nom que l'on a choisi pour désigner ce HostListener
	    switch($event.key){
	     	case 'ArrowUp' :
	     		this.surlignage('grey');
	     		break;
	     	case 'ArrowDown' :
	     		this.surlignage('blue');
	     		break;
	     	case 'ArrowLeft' :
	     		this.surlignage('yellow');
	     		break;
	     	case 'ArrowRight' :
     			this.surlignage('green');
     			break;
    	}  
  	}


}