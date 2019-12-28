import { Directive, HostListener, HostBinding, ElementRef, Renderer2, OnInit } from "@angular/core";

@Directive({
    selector : '[appDropdown]'
})
export class ToggleDropdownDirective implements OnInit{

    isShow = false;
    classShow = 'show';
    parentNode: HTMLElement;
    siblingNode: HTMLElement;

    constructor(private _el : ElementRef, private renderer: Renderer2){}

    ngOnInit() {
        this.parentNode = this.renderer.parentNode(this._el.nativeElement);
        this.siblingNode = this.renderer.nextSibling(this._el.nativeElement);
        console.log(this.parentNode)
        console.log(this.siblingNode)
        console.log(this.renderer)
    }

    
    @HostListener( 'click' ) toggleOpen() {
        this.isShow = !this.isShow
        console.log(this.isShow)
        if (this.isShow) {
            console.log(this.isShow +"if")
            this.renderer.addClass(this.parentNode, 'show');
            this.renderer.addClass(this.siblingNode, 'show');
        } else {
            console.log(this.isShow +"else")
            this.renderer.removeClass(this.parentNode, 'show');
            this.renderer.removeClass(this.siblingNode, 'show');
        }
    }

    @HostListener('document:click', ['$event']) clickout(event) {
        if (this._el.nativeElement !== event.target && this.isShow) {
            this.renderer.removeClass(this.parentNode, 'show');
            this.renderer.removeClass(this.siblingNode, 'show');
            this.isShow = !this.isShow
        }
    }

  

}