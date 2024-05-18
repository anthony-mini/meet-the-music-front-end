import { Component } from '@angular/core';
import { Toast, ToastPackage, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-custom-toastr',
  standalone: true,
  imports: [],
  templateUrl: './custom-toastr.component.html',
  styleUrls: ['./custom-toastr.component.scss'],
})
export class CustomToastrComponent extends Toast {
  override title!: string;
  override message!: string;

  constructor(
    protected override toastrService: ToastrService,
    public override toastPackage: ToastPackage,
  ) {
    super(toastrService, toastPackage);
    if (toastPackage.toastRef && toastPackage.toastRef.componentInstance) {
      this.title = toastPackage.toastRef.componentInstance.title;
      this.message = toastPackage.toastRef.componentInstance.message;
    }
  }

  dismiss() {
    this.toastPackage.triggerAction();
    this.toastrService.clear(this.toastPackage.toastId);
  }
}
