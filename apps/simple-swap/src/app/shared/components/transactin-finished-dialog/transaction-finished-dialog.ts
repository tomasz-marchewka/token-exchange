import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { TexDialogComponent, TexIconComponent, TexButtonComponent } from 'ui';
import { TransactionFinishedDialogData } from '../../types/transaction-finished-dialog.types';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'ss-transaction-finished-dialog',
  imports: [
    TexDialogComponent,
    TexIconComponent,
    TexButtonComponent,
    DecimalPipe,
  ],
  templateUrl: './transaction-finished-dialog.html',
  styleUrl: './transaction-finished-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionFinishedDialog {
  data: TransactionFinishedDialogData = inject(MAT_DIALOG_DATA);
  dialog = inject(MatDialog);

  closeDialog() {
    console.log('close');
    this.dialog.closeAll();
  }
}
