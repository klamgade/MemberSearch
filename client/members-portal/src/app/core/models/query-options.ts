import { HttpParams } from "@angular/common/http";
import { ApiQuery } from "./api-query";

export class QueryOptions implements ApiQuery {

    policyNumber?: number;
    memberCardNumber?: number;
    toHttpParams(): HttpParams {
        let params = new HttpParams();
        if(this.policyNumber) {
            params = params.set('policyNumber', this.policyNumber);
        }
        if(this.memberCardNumber) {
            params = params.set('memberCardNumber', this.memberCardNumber);
        }
        return params;
    } 
   
    
}