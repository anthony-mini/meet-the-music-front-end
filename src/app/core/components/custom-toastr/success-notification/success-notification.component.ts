import { Component } from '@angular/core';

import { Toast, ToastPackage, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-success-notification',
  standalone: true,
  imports: [],
  templateUrl: './success-notification.component.html',
  styleUrl: './success-notification.component.scss',
})
export class SuccessNotificationComponent extends Toast {
  override message!: string;

  constructor(
    protected override toastrService: ToastrService,
    public override toastPackage: ToastPackage,
  ) {
    super(toastrService, toastPackage);
    if (toastPackage.toastRef && toastPackage.toastRef.componentInstance) {
      this.message = toastPackage.toastRef.componentInstance.message;
    }
  }

  dismiss() {
    this.toastPackage.triggerAction();
    this.toastrService.clear(this.toastPackage.toastId);
  }
}
