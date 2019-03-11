import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive';
  items = Array(20);
  flag: boolean = false;
  length: number = 1;

  @HostListener("window:scroll", ['$event'])
  onScroll(): void {
     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {

      //console.log("flag true");
      this.flag = true;
      this.items=[...this.items,length++]

      /*setTimeout(function () {
        console.log('Test',this.items,this.flag);
        // if(!this.items) this.items =Array(30);
        this.items = [...this.items, this.length++]
      }, 3000);*/
      //this.flag = false;
    
    // }
  }
  
  /*timeout() {s
    var that = this;

} */


}
}


