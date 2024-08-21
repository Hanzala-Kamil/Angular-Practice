import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { Page1ComponentComponent } from './app/page1-component/page1-component.component'; // Adjust import names
import { Page2ComponentComponent } from './app/page2-component/page2-component.component'; // Adjust import names
import { Page3ComponentComponent } from './app/page3-component/page3-component.component'; // Adjust import names

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'page1', component: Page1ComponentComponent },
      { path: 'page2', component: Page2ComponentComponent },
      { path: 'page3', component: Page3ComponentComponent},
      { path: '', redirectTo: '/', pathMatch: 'full' }
    ])
  ]
}).catch(err => console.error(err));
