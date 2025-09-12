import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './core/components/navigation/navigation';

@Component({
  imports: [RouterModule, NavigationComponent],
  selector: 'ss-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected title = 'simple-swap';
}
