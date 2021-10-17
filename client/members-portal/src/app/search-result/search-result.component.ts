import { Component, OnInit } from '@angular/core';
import { MemberInfo } from '../model/member/member-info';
import { MemberService } from '../service/member.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  membersInfo: MemberInfo[] = [];
  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.memberService.membersInfoSourceSubject.subscribe((data: any) => {
      if(data && data.response) { 
        this.membersInfo = data.response;
      }  
    });
  }

}
