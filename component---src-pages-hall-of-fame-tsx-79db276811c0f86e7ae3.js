(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{N7fX:function(e,s,t){"use strict";t.r(s);t("q1tI");var c=t("9Dj+"),a=t("H8eV"),o=(t("BrhT"),t("PRhx")),r=(t("EDuE"),t("cbek"),t("zEFi")),l=t.n(r),n=t("qKvR");s.default=function(e){e.data,e.path;var s=function(e){var s=e.target.innerHTML.split(" "),t=s[0]+"--"+s[1],c=document.getElementsByClassName(t)[0];c.classList.contains("hide")&&c.classList.remove("hide"),c.classList.contains("show")||c.classList.add("show");for(var a=document.getElementsByClassName("season--wrap"),o=0;o<a.length;o++)a[o].classList.contains(t)||(a[o].classList.contains("hide")||a[o].classList.add("hide"),a[o].classList.contains("show")&&a[o].classList.remove("show"))};return Object(n.b)(c.a,null,Object(n.b)(a.a,{title:"ICPC Sinchon - Hall Of Fame"}),Object(n.b)("div",{className:"wrapper"},Object(n.b)("div",{className:"head"},Object(n.b)("div",{className:"title--wrapper"},Object(n.b)("div",{className:"title"},"HALL OF FAME"),Object(n.b)("div",{className:"sub--title"},"ICPC 신촌 연합 활동에 기여를 해주신 분들과, 열심히 활동하여 우수한 성적을 거둔 사람들을 기립니다"))),Object(n.b)("div",{className:"tab--wrapper"},Object(n.b)("div",{className:"season--tab ",onClick:function(e){return s(e)}},"2020 Winter"),Object(n.b)("div",{className:"season--tab",onClick:function(e){return s(e)}},"2020 Summer"),Object(n.b)("div",{className:"season--tab",onClick:function(e){return s(e)}},"2021 Winter"),Object(n.b)("div",{className:"season--tab",onClick:function(e){return s(e)}},"2021 Summer")),l.a.content.map((function(e){var s;return s=e.year+"--"+e.semester=="2020--Winter"?e.year+"--"+e.semester+" season--wrap show":e.year+"--"+e.semester+" season--wrap hide",null==e.studies?Object(n.b)("div",{className:s},Object(n.b)("div",{className:"season--name"},e.year+" "+e.semester),Object(n.b)("div",{className:"no--test"},"아직 시행되지 않은 Algorithm Camp 입니다")):Object(n.b)("div",{className:s},Object(n.b)("div",{className:"season--name"},e.year+" "+e.semester),e.studies.map((function(e){return null==e.contests?Object(n.b)("div",{className:"study--wrap"},Object(n.b)("div",{className:"title--wrap"},Object(n.b)("div",{className:"study--title"},e.topic),Object(n.b)("div",{className:"lecturer--wrap"},Object(n.b)("span",{className:"lecturer"},"강사진"),Object(n.b)("span",{className:"lecturer--list"},e.lecturer))),Object(n.b)("div",{className:"no--test"},"모의고사가 진행되지 않았습니다")):2==Object.keys(e.contests).length?(console.log(e.contests[1]),Object(n.b)("div",{className:"study--wrap"},Object(n.b)("div",{className:"title--wrap"},Object(n.b)("div",{className:"study--title"},e.topic),Object(n.b)("div",{className:"lecturer--wrap"},Object(n.b)("span",{className:"lecturer"},"강사진"),Object(n.b)("span",{className:"lecturer--list"},e.lecturer))),Object(n.b)("div",{className:"mid--final--wrap"},Object(n.b)("div",{className:"mid--test"},Object(n.b)(o.a,{TestType:e.contests[0].contest_name,ProbPicker1:[e.contests[0].problem_picker[0].name,Object(n.b)("span",{className:"school"},e.contests[0].problem_picker[0].school)],ProbPicker2:[e.contests[0].problem_picker[1].name,Object(n.b)("span",{className:"school"},e.contests[0].problem_picker[1].school)],FirstRank:[e.contests[0].awards[0].member,Object(n.b)("span",{className:"school"},e.contests[0].awards[0].school)],SecondRank:[e.contests[0].awards[1].member,Object(n.b)("span",{className:"school"},e.contests[0].awards[1].school)],ThirdRank:[e.contests[0].awards[2].member,Object(n.b)("span",{className:"school"},e.contests[0].awards[2].school)]})),Object(n.b)("div",{className:"final--test"},Object(n.b)(o.a,{TestType:e.contests[1].contest_name,ProbPicker1:[e.contests[1].problem_picker[0].name,Object(n.b)("span",{className:"school"},e.contests[1].problem_picker[0].school)],ProbPicker2:[e.contests[1].problem_picker[1].name,Object(n.b)("span",{className:"school"},e.contests[1].problem_picker[1].school)],FirstRank:[e.contests[1].awards[0].member,Object(n.b)("span",{className:"school"},e.contests[1].awards[0].school)],SecondRank:[e.contests[1].awards[1].member,Object(n.b)("span",{className:"school"},e.contests[1].awards[1].school)],ThirdRank:[e.contests[1].awards[2].member,Object(n.b)("span",{className:"school"},e.contests[1].awards[2].school)]}))))):Object(n.b)("div",{className:"study--wrap"},Object(n.b)("div",{className:"title--wrap"},Object(n.b)("div",{className:"study--title"},e.topic),Object(n.b)("div",{className:"lecturer--wrap"},Object(n.b)("span",{className:"lecturer"},"강사진"),Object(n.b)("span",{className:"lecturer--list"},e.lecturer))),Object(n.b)("div",{className:"final--wrap"},Object(n.b)("div",{className:"final--test"},Object(n.b)(o.a,{TestType:e.contests[0].contest_name,ProbPicker1:[e.contests[0].problem_picker[0].name,Object(n.b)("span",{className:"school"},e.contests[0].problem_picker[0].school)],ProbPicker2:[e.contests[0].problem_picker[1].name,Object(n.b)("span",{className:"school"},e.contests[0].problem_picker[1].school)],FirstRank:[e.contests[0].awards[0].member,Object(n.b)("span",{className:"school"},e.contests[0].awards[0].school)],SecondRank:[e.contests[0].awards[1].member,Object(n.b)("span",{className:"school"},e.contests[0].awards[1].school)],ThirdRank:[e.contests[0].awards[2].member,Object(n.b)("span",{className:"school"},e.contests[0].awards[2].school)]}))))})))}))))}},zEFi:function(e,s){e.exports={title:"Hall Of Fame",content:[{year:2020,semester:"Winter",activity_type:"study",studies:[{topic:"고급 알고리즘 스터디",lecturer:"서강대학교 박수현 / 서강대학교 이상원"},{topic:"중급 알고리즘 스터디",lecturer:"서강대학교 임지환 / 서강대학교 이기현",contests:[{contest_name:"중간고사",problem_picker:[{name:"임지환",school:"서강대"},{name:"이기현",school:"서강대"}],awards:[{prize:"1st",member:"백성익",school:"홍익대"},{prize:"2nd",member:"정재현",school:"홍익대"},{prize:"3rd",member:"강승구",school:"서강대"}]},{contest_name:"기말고사",problem_picker:[{name:"임지환",school:"서강대"},{name:"이기현",school:"서강대"}],awards:[{prize:"1st",member:"장주호",school:"서강대"},{prize:"2nd",member:"백성익",school:"홍익대"},{prize:"3rd",member:"정재현",school:"홍익대"}]}]},{topic:"초급 알고리즘 스터디",lecturer:"서강대학교 이태한 / 홍익대학교 이재열 / 홍익대학교 김성민",contests:[{contest_name:"중간고사",problem_picker:[{name:"이태한",school:"서강대"},{name:"이재열",school:"홍익대"},{name:"김성민",school:"홍익대"}],awards:[{prize:"1st",member:"강상원",school:"서강대"},{prize:"2nd",member:"주상민",school:"서강대"},{prize:"3rd",member:"윤상현",school:"서강대"}]},{contest_name:"기말고사",problem_picker:[{name:"이태한",school:"서강대"},{name:"이재열",school:"홍익대"},{name:"김성민",school:"홍익대"},{name:"정연두",school:"홍익대"}],awards:[{prize:"1st",member:"강상원",school:"서강대"},{prize:"2nd",member:"주상민",school:"서강대"},{prize:"3rd",member:"임세홍",school:"서강대"}]}]}]},{year:2020,semester:"Summer",activity_type:"study",studies:[{topic:"고급 알고리즘 스터디",lecturer:"강사는 없었으나, 전해성(서강대)님이 하드캐리"},{topic:"중급 알고리즘 스터디",lecturer:"연세대학교 윤인섭 / 서강대학교 이준석",contests:[{contest_name:"중간고사",problem_picker:[{name:"이기현",school:"서강대"},{name:"최재민",school:"KAIST"}],awards:[{prize:"1st",member:"박재형",school:"서강대"},{prize:"2nd",member:"남유진",school:"연세대"},{prize:"3rd",member:"박준성",school:"서강대"}]}]},{topic:"초급 알고리즘 스터디",lecturer:"서강대학교 배철환 / 홍익대학교 백성익",contests:[{contest_name:"중간고사",problem_picker:[{name:"이길원",school:"서강대"},{name:"전해성",school:"서강대"},{name:"남수연",school:"숙명여대"}],awards:[{prize:"1st",member:"김태윤",school:"연세대"},{prize:"2nd",member:"김도현",school:"홍익대"},{prize:"3rd",member:"윤이빈",school:"숙명여대"}]}]}]},{year:2021,semester:"Winter",activity_type:"study",studies:null},{year:2021,semester:"Summer",activity_type:"study",studies:null}]}}}]);
//# sourceMappingURL=component---src-pages-hall-of-fame-tsx-79db276811c0f86e7ae3.js.map