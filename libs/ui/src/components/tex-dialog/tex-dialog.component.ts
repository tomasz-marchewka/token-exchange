import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'tex-dialog',
  imports: [MatDialogModule],
  templateUrl: './tex-dialog.component.html',
  styleUrl: './tex-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TexDialogComponent {}
