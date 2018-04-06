import { Component } from "@angular/core";

  @Component({
    selector: 'app-modal',
    template: `
    <div (click)="onContainerClicked($event)" class="modal fade" tabindex="-1" [ngClass]="{'in': visibleAnimate}"
         [ngStyle]="{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}">
      <div class="modal-dialog" style="top:30%">
        <div class="modal-content">
          <div class="modal-header">
            <div class="app-modal-header">
                {{message}}
            </div>
          </div>
          <div class="modal-body">
            <div class="app-modal-body">
                {{txt}}
            </div>
          </div>
          <div class="modal-footer">
            <div class="app-modal-footer">
                <button type="button" class="btn btn-primary" (click)="hide()">Try Again</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  })

  export class ModalMsgComponent {
    public message: string;
    public txt =''
    public visible = false;
    public visibleAnimate = false;
  
    public show(err): void {
      this.message = 'Log In Failed'
      this.txt = err;
      this.visible = true;
      setTimeout(() => this.visibleAnimate = true, 100);
    }
  
    public hide(): void {
      this.visibleAnimate = false;
      setTimeout(() => this.visible = false, 300);
    }
  
    public onContainerClicked(event: MouseEvent): void {
      if ((<HTMLElement>event.target).classList.contains('modal')) {
        this.hide();
      }
    }
  }