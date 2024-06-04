import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Force light mode
      document.body.classList.toggle('dark', false);
    });
  }

  ngOnInit() {
    // Ensure the app remains in light mode
    document.body.classList.toggle('dark', false);
  }
}
