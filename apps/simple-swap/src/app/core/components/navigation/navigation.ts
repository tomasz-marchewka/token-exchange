import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TexChipComponent } from 'ui';
import { NavigationLinks } from '../../constants/navigation.constants';

@Component({
  selector: 'ss-navigation',
  imports: [RouterModule, TexChipComponent],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  protected navLinks = NavigationLinks;

  protected active = signal(1);

  activeChange(navigationId: number, isActive: boolean) {
    if (isActive) {
      this.active.set(navigationId);
    }
  }
}
