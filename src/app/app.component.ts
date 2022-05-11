import { Component } from '@angular/core';

//MODULE TYPES:
/* Domain: wraps up all the components needed to implement one single feat.
   Routed: same as Domain but these components are tied to a specific route.
   Routing: Defines routing rules (show x component when a user is at a route '/all' for example.)
   Service: Deifines services that will be used in multiple parts of the app
   Widget: Defines reusable components that will be used in other components
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'components';
}
