import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormCheckService {
  private http = inject(HttpClient);
  commandUrl = environment.commandUrl;
  queryUrl = environment.queryUrl;

  getFormChecks(productTypeId: any): Observable<any> {
    return this.http.get<any>(this.queryUrl + `FormChecks?productId=${productTypeId}`);
  }

  addFormCheck(formCheck: any, productId:string) {
    return this.http.post(this.commandUrl + productId + "/FormChecks", formCheck);
  }

  updateFormCheck(formCheckValue: any, productId:string) {
    return this.http.put(this.commandUrl + productId +  "/FormChecks" , formCheckValue);
  }

  deleteFormCheck(productId:string, formCheckId: string) {
    return this.http.delete(this.commandUrl + productId + "/FormChecks/" + formCheckId);
  }
}
