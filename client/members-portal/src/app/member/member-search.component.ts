import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../service/member.service';
import { MemberSearch } from '../model/member/member-search';
import { MemberInfo } from '../model/member/member-info';

@Component({
  selector: 'app-member',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.css']
})
export class MemberSearchComponent implements OnInit {

  @ViewChild('fsearchForm') form: any;
  model = new MemberSearch();
  baseUrl = 'http://localhost:3000';
  title = 'members-portal';
  members: MemberInfo[] = [];
  policyNumber!: number;


  constructor(private memberService: MemberService, private activatedRoute: ActivatedRoute, private router: Router) { 
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.policyNumber = params.policyNumber;
    });
  }

  onSearch(): void {
    this.memberService.list(`${this.baseUrl}/members?policyNumber=${this.model.policyNumber}&memberCardNumber=${this.model.memberCardNumber}`).subscribe((data) => { 
      this.members = data
      this.memberService.membersInfoSourceSubject.next(data) 
      this.router.navigateByUrl('/search-result'); 
    });
  }

  onReset() {
    this.model = new MemberSearch();
  }

  navigateSearchResult(): void {
    
  }
}
