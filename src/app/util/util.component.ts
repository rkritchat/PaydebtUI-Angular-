import { Injectable } from '@angular/core';


@Injectable()
export class UtilComponent {
    isloading : boolean = false;
    setStart(){
        this.isloading = true;
    }

    setStop(){
        this.isloading = false;
    }
}
