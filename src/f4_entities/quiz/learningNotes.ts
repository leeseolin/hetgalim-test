import type { QuizSlug } from "./types";

export type LearningNote = {
  caution: string;
  comparison: string;
  sources: { label: string; url: string }[];
  relatedQuizSlug?: QuizSlug;
};

export const contentReviewedAt = "2026-10-12";

export const learningNotes: Partial<Record<QuizSlug, LearningNote>> = {
  "doe-dwae": {
    "caution": "어간 뒤에 붙는 어미를 먼저 보세요. 되었다와 됐다는 모두 맞지만, 빈칸 뒤에 었다가 이미 있으면 되를 넣습니다. 되나요·되면·될에는 어가 없고, 돼요·돼도에는 어가 들어 있습니다.",
    "comparison": "대화: 지금 보내도 돼? / 업무: 준비가 되면 알려 주세요.",
    "sources": [
      {
        "label": "되어의 준말과 문장 끝의 돼",
        "url": "https://www.korean.go.kr/front/mcfaq/mcfaqView.do?mcfaq_seq=5829&mn_id=217&pageIndex=1"
      }
    ]
  },
  "an-ahn": {
    "caution": "안은 다음 동작을 부정하는 별도 단어이고, 않-은 어미와 결합합니다. 안 하다와 하지 않다는 같은 부정을 다른 구조로 나타냅니다. 다만 한 단어로 굳은 안되다는 뜻에 따라 띄어쓰기가 달라지므로 모든 안을 무조건 띄운다고 외우지 마세요.",
    "comparison": "대화: 오늘은 안 가. / 업무: 아직 승인하지 않았습니다.",
    "sources": [
      {
        "label": "안과 않의 구분",
        "url": "https://www.korean.go.kr/front/mcfaq/mcfaqView.do?mcfaq_seq=5649"
      }
    ]
  },
  "waen-wen": {
    "caution": "왠지는 왜인지로 풀어 볼 수 있습니다. 웬 사람의 웬은 명사를 꾸미며 띄어 쓰지만, 웬일·웬만하다는 각각 한 단어입니다. 왠지 하나의 예외만 외우는 데서 그치지 말고 명사 앞인지 확인하세요.",
    "comparison": "대화: 왠지 걱정돼. 무슨 일이야? / 대화: 이 시간에 웬 전화야?",
    "sources": [
      {
        "label": "웬만의 표기",
        "url": "https://www.korean.go.kr/front/mcfaq/mcfaqView.do?mcfaq_seq=6030"
      },
      {
        "label": "왠지와 웬일 구분",
        "url": "https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=97&qna_seq=335294"
      }
    ]
  },
  "eotteoke-eotteokhae": {
    "caution": "어떻게는 방법을 꾸미고, 어떡해에는 해라는 서술어가 포함됩니다. 실제 대화의 나 이제 어떻게?는 뒤의 해를 생략한 말로 가능하므로 문장 끝이라는 이유만으로 틀렸다고 할 수 없습니다. 퀴즈의 해당 문항은 생략 없이 완결하는 조건을 붙였습니다.",
    "comparison": "대화: 일정이 겹쳤어. 어떡해? / 업무: 일정을 어떻게 조정할까요?",
    "sources": [
      {
        "label": "어떻게와 어떡해 구별",
        "url": "https://www.korean.go.kr/front/mcfaq/mcfaqView.do?mcfaq_seq=6080"
      }
    ]
  },
  "approval-payment": {
    "caution": "같은 구매 건에도 두 말이 모두 필요할 수 있습니다. 지출 품의서를 결재받은 뒤 카드로 결제하는 순서입니다. 돈과 관련된 문서라는 이유만으로 결제를 고르지 말고, 승인 행위인지 지불 행위인지 확인하세요.",
    "comparison": "업무: 출장비 품의서는 결재가 끝났고, 숙박비는 카드로 결제했습니다.",
    "sources": [
      {
        "label": "결재하다 표제어",
        "url": "https://krdict.korean.go.kr/kor/dicSearch/SearchView?ParaWordNo=32128"
      },
      {
        "label": "결제 표제어",
        "url": "https://krdict.korean.go.kr/kor/dicSearch/SearchView?ParaWordNo=32138"
      }
    ]
  },
  "myeochil-myeotil": {
    "caution": "날짜와 기간 모두 며칠입니다. 몇 월은 몇과 월을 나누지만 며칠을 몇과 일로 나누어 적지는 않습니다. 몇일·몇 일 대신 며칠을 쓰고, 사흘이나 3일처럼 정확한 일수는 별도로 표현할 수 있습니다.",
    "comparison": "대화: 생일이 몇 월 며칠이야? / 업무: 검토에 며칠이 필요하며, 마감은 15일입니다.",
    "sources": [
      {
        "label": "몇 월 며칠의 표기",
        "url": "https://www.korean.go.kr/front/mcfaq/mcfaqView.do?mcfaq_seq=8631"
      }
    ]
  },
  "bara-barae": {
    "caution": "희망의 기본형은 바라다, 색 변화나 배웅은 바래다입니다. 바라다의 어간 모음은 활용에서도 유지해 바라·바랐다·바랍니다로 씁니다. 배웅은 바래다주다로 쓰며, 문항 뒤에 주었다가 있으면 앞 선택지도 함께 읽어야 합니다.",
    "comparison": "대화: 잘 지내길 바라. 집까지 바래다줄게. / 업무: 오래된 인쇄물의 색이 바랬습니다.",
    "sources": [
      {
        "label": "바라다와 바래다 의미·활용",
        "url": "https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=216&qna_seq=331954"
      }
    ]
  },
  "machida-matchuda": {
    "caution": "답을 알아내면 맞히다, 답안끼리 비교하면 맞추다입니다. 답을 맞춰 보자만으로는 시험 뒤 답안 비교도 가능하므로 단정하지 않습니다. 문제의 정답을 알아맞히는 상황과, 회의 시간·규격을 조정하는 상황을 나누어 보세요.",
    "comparison": "대화: 수수께끼 정답을 맞혔어. 이제 우리 답을 맞춰 보자. / 업무: 회의 시간을 맞췄습니다.",
    "sources": [
      {
        "label": "맞히다와 맞추다의 문맥",
        "url": "https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=216&qna_seq=306497"
      }
    ]
  },
  "roseo-rosse": {
    "caution": "사람이면 로서, 사물이면 로써라는 구분은 틀립니다. 사물도 자료의 자격을 말하면 자료로서이고, 이용하는 수단이면 자료로써입니다. 받침 뒤에는 보통 으로서·으로써를 쓰되 ㄹ 뒤에는 로서·로써를 씁니다.",
    "comparison": "업무: 이 사진은 증거 자료로서 충분합니다. 이 자료로써 주장을 입증하겠습니다.",
    "sources": [
      {
        "label": "로서와 로써의 문맥 구분",
        "url": "https://www.korean.go.kr/front/mcfaq/mcfaqView.do?mcfaq_seq=5568&mn_id="
      },
      {
        "label": "로써의 시간 한계",
        "url": "https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=73&pageIndex=1&qna_seq=319944"
      }
    ]
  },
  "bandeusi-bandeusi": {
    "caution": "반드시와 반듯이는 둘 다 표준어입니다. 허리를 반드시 펴라는 의무와 허리를 반듯이 펴라는 모양은 모두 가능한 표현입니다. 모양을 묻는 문항에는 조건을 명시했고, 정답 선택 뒤에도 뜻을 바꾸면 다른 말이 가능함을 설명했습니다.",
    "comparison": "대화: 책을 반듯이 놓아 줘. / 업무: 신청서는 기한 안에 반드시 제출하세요.",
    "sources": [
      {
        "label": "반드시와 반듯이의 뜻",
        "url": "https://korean.go.kr/front/mcfaq/mcfaqView.do?mcfaq_seq=9074&mn_id=&pageIndex=13"
      }
    ]
  },
  "natda-nata": {
    "relatedQuizSlug": "bara-barae",
    "caution": "낫다는 모음으로 시작하는 어미 앞에서 ㅅ이 빠져 나아·나으면이 됩니다. 낳다는 ㅎ을 밝혀 낳아·낳으면으로 씁니다. 그래서 나았다와 낳았다는 발음이 비슷해도 병 회복과 결과 발생을 구별해야 합니다.",
    "comparison": "대화: 감기가 나아서 다행이야. / 업무: 작은 개선이 좋은 결과를 낳았습니다.",
    "sources": [
      {
        "label": "낫다와 낳다의 활용",
        "url": "https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=216&pageIndex=1&qna_seq=305076"
      },
      {
        "label": "낫다와 낳다의 뜻",
        "url": "https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=216&qna_seq=306897&pageIndex=1"
      }
    ]
  },
  "dae-de": {
    "caution": "들은 말을 전하는 대와 직접 경험을 회상하는 데를 구별합니다. 장소를 뜻하는 데는 별개의 의존 명사라 가 본 데처럼 띄어 씁니다. 명령 전달은 제출하래, 동작 전달은 제출한대처럼 전달 내용의 종류도 확인하세요.",
    "comparison": "대화: 동료에게 들었는데 회의실이 넓대. / 대화: 어제 가 보니 회의실이 넓데.",
    "sources": [
      {
        "label": "대와 데의 정보 출처",
        "url": "https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=&pageIndex=1&qna_seq=327731"
      }
    ]
  },
  "deunji-deonji": {
    "caution": "든지는 선택의 무관함, 던지는 지나간 정도나 경험의 회상에 쓰입니다. 과거 사건이라고 무조건 던지는 아닙니다. 어제 무엇을 먹었든지에서는 무엇을 골랐어도 상관없다는 뜻이므로 든지를 씁니다.",
    "comparison": "업무: 전화든지 메일이든지 편한 방법으로 주세요. / 대화: 어제 얼마나 바쁘던지 점심도 못 먹었어.",
    "sources": [
      {
        "label": "든지와 던지 구분",
        "url": "https://korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=216&pageIndex=1&qna_seq=318708&searchCondition=&searchKeyword="
      }
    ]
  },
  "yul-ryul": {
    "caution": "본음이 률인 한자어에서 모음·ㄴ 뒤는 율, 다른 받침 뒤는 률입니다. 성공의 끝 받침은 ㄱ이 아니라 ㅇ이며 성공률로 붙여 씁니다. 고유어 울다의 울-이나 본음 자체가 율인 단어에 이 규칙을 무조건 적용하지 마세요.",
    "comparison": "업무: 참여 비율과 응답률을 함께 계산해 주세요. 백분율로 표시하면 됩니다.",
    "sources": [
      {
        "label": "공정률과 율·률 기준",
        "url": "https://www.korean.go.kr/front/mcfaq/mcfaqView.do?mcfaq_seq=8027"
      }
    ]
  },
  "eyo-yeyo": {
    "caution": "모음 뒤의 이에요는 예요로 줄일 수 있고 줄이지 않은 형태도 가능합니다. 따라서 의사이에요·의사예요를 단순히 정오로 나누지 않고 줄이라는 조건을 붙였습니다. 아니에요는 아니다에 에요가 붙은 말이며 줄이면 아녜요입니다.",
    "comparison": "대화: 저는 의사예요. 학생이 아니에요. / 대화: 제 이름은 지민이예요.",
    "sources": [
      {
        "label": "이에요·예요·아니에요",
        "url": "https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=27&pageIndex=1&qna_seq=332192&searchCondition=&searchKeyword="
      }
    ]
  },
  "boeyo-bwaeyo": {
    "relatedQuizSlug": "doe-dwae",
    "caution": "뵈어요와 봬요는 모두 맞습니다. 줄이지 않은 뵈어를 오답으로 단정하지 않도록 줄이라는 조건을 명시했습니다. 봬도는 뵈어도의 준말이지만, 뵐 때·뵙겠습니다에는 어가 들어가지 않습니다.",
    "comparison": "업무: 내일 회의에서 뵙겠습니다. / 대화: 잠깐 봬도 될까요? 다음 주에 봬요.",
    "sources": [
      {
        "label": "뵈요와 봬요의 표기",
        "url": "https://korean.go.kr/front/mcfaq/mcfaqView.do?mcfaq_seq=8554&mn_id=46&pageIndex=12"
      }
    ]
  },
  "itdaga-ittaga": {
    "caution": "있다가와 이따가는 모두 표준 표현입니다. 있다가는 머무름을 다음 행동에 연결하며, 이따가는 앞으로의 시간을 가리킵니다. 있다가 전화할게도 머무르는 맥락이 있으면 가능하므로 시간 부사를 고르는 문항에는 조건을 붙였습니다.",
    "comparison": "대화: 집에 있다가 나갈게. 이따가 전화하자. / 업무: 사무실에 있다가 회의실로 이동했습니다.",
    "sources": [
      {
        "label": "있다가와 이따가의 구분",
        "url": "https://www.korean.go.kr/front/mcfaq/mcfaqView.do?mcfaq_seq=6067&mn_id=217"
      }
    ]
  },
  "itda-ilda": {
    "caution": "기억나지 않으면 잊다, 갖고 있던 것이 없어지거나 방향을 못 찾으면 잃다입니다. 다만 길을 잊다는 기억하던 경로를 떠올리지 못한다는 뜻으로 가능합니다. 물건을 두고 온 경우도 기억과 분실 중 어느 뜻인지 문맥을 보완해야 합니다.",
    "comparison": "대화: 비밀번호를 잊었어. 지갑은 잃어버렸어. / 업무: 약속을 잊으면 고객의 신뢰를 잃을 수 있습니다.",
    "sources": [
      {
        "label": "잊다와 잃다의 뜻",
        "url": "https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=216&qna_seq=307146&pageIndex=1"
      }
    ]
  },
  "buchida-butchida": {
    "relatedQuizSlug": "machida-matchuda",
    "caution": "우표를 접착하면 붙이다, 우편을 보내면 부치다입니다. 같은 편지를 두고도 우표를 붙인 뒤 편지를 부친다고 합니다. 부치다에는 전을 익히다·힘이 모자라다 등 다른 뜻도 있어 접착 여부만으로 모든 경우를 설명할 수는 없습니다.",
    "comparison": "대화: 봉투에 우표를 붙여서 오늘 부칠게. / 업무: 이 일을 혼자 맡기에는 힘에 부칩니다.",
    "sources": [
      {
        "label": "부치다와 붙이다 구별",
        "url": "https://www.korean.go.kr/front/mcfaq/mcfaqView.do?mcfaq_seq=9083"
      }
    ]
  },
  "gachi-gati": {
    "relatedQuizSlug": "roseo-rosse",
    "caution": "함께의 부사 같이는 앞말과 띄고, 비슷함을 나타내는 조사 같이는 바람같이처럼 붙입니다. 가치는 중요성이나 값어치라는 명사입니다. 발음이 같아도 동작을 꾸미는지, 가치를 평가하는지 보고 표기를 결정하세요.",
    "comparison": "대화: 나랑 같이 검토하자. / 업무: 이 기록은 보존 가치가 높습니다.",
    "sources": [
      { "label": "같이 부사 표제어", "url": "https://krdict.korean.go.kr/kor/dicSearch/SearchView?ParaWordNo=26799" },
      { "label": "같이 조사 표제어", "url": "https://krdict.korean.go.kr/kor/dicSearch/SearchView?ParaWordNo=22776" },
      {
        "label": "가치 표제어",
        "url": "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=15090&nation=eng"
      }
    ]
  },
  "hameuro-hamuro": {
    "relatedQuizSlug": "roseo-rosse",
    "caution": "하므로는 하-에 이유의 어미 -므로가, 함으로는 명사형 함에 조사 으로가 붙은 구조입니다. 하므로에는 써를 더할 수 없습니다. 함으로의 으로도 원인을 나타낼 수 있어 이유·수단만으로 무조건 정오를 가르지 않습니다. 수단 문항에는 방법이라는 조건을 붙였습니다.",
    "comparison": "업무: 자료가 중요하므로 다시 확인합니다. 자료를 확인함으로써 실수를 줄입니다.",
    "sources": [
      {
        "label": "함으로가 원인을 나타내는 예외",
        "url": "https://www.korean.go.kr/front/mcfaq/mcfaqView.do?mcfaq_seq=6053"
      },
      {
        "label": "하므로와 함으로의 구조",
        "url": "https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=216&pageIndex=1&qna_seq=312282&searchCondition=&searchKeyword="
      }
    ]
  },
  "oraenman-oraetman": {
    "caution": "오랜만은 오래간만의 준말입니다. 오랫동안은 오래와 동안의 합성어여서 표기가 다릅니다. 시간이 지난 간격을 말하는 사흘 만에는 만을 띄지만, 한 단어인 오랜만은 붙여 씁니다.",
    "comparison": "대화: 오랜만이야. 오랫동안 못 봤네. / 업무: 회의가 끝난 지 사흘 만에 연락드립니다.",
    "sources": [
      {
        "label": "오랜만과 오랫동안",
        "url": "https://korean.go.kr/front/mcfaq/mcfaqView.do?mcfaq_seq=6119&mn_id=217&pageIndex=1"
      }
    ]
  },
  "geumse-geumsae": {
    "relatedQuizSlug": "myeochil-myeotil",
    "caution": "금세는 금시에를 줄인 시간 표현입니다. 금새는 물건의 값이라는 별도의 뜻이 있으므로 어느 곳에서도 틀린 단어라고 단정하지 않습니다. 퀴즈는 모두 변화가 빨리 일어난 시간을 묻습니다.",
    "comparison": "대화: 눈이 금세 녹았네. / 업무: 오류를 고치니 화면이 금세 열렸습니다.",
    "sources": [
      { "label": "금새 표제어", "url": "https://stdict.korean.go.kr/search/searchView.do?word_no=45372&searchKeywordTo=3" },
      {
        "label": "금세의 표기",
        "url": "https://www.korean.go.kr/front/mcfaq/mcfaqView.do?mcfaq_seq=5901&mn_id=217"
      }
    ]
  },
  "kkaekkeusi-kkaekkeushi": {
    "relatedQuizSlug": "bandeusi-bandeusi",
    "caution": "깨끗하다가 있다고 깨끗히로 쓰지는 않습니다. 부사의 끝소리가 이에 해당하는 깨끗이는 -이로 적습니다. -하다에서 왔으니 무조건 -히라는 방법은 예외가 있어 다른 단어는 공식 사전을 확인하세요.",
    "comparison": "대화: 손을 깨끗이 씻자. / 업무: 공용 공간을 깨끗이 정리해 주세요.",
    "sources": [
      {
        "label": "깨끗이 표기와 제51항",
        "url": "https://www.korean.go.kr/front/mcfaq/mcfaqView.do?mcfaq_seq=5896&mn_id=217&pageIndex=1"
      }
    ]
  },
  "iriri-irirhi": {
    "caution": "일일이는 하나씩 빠짐없이 한다는 뜻입니다. 겹친 명사 뒤에서 -이를 쓰는 경향이 있지만, 모든 부사를 발음만 짐작해 만들지는 마세요. 일일이와 낱낱이처럼 실제 표기를 함께 익히는 것이 좋습니다.",
    "comparison": "업무: 목록을 일일이 확인했습니다. / 대화: 사정을 일일이 설명하기는 어려워.",
    "sources": [
      {
        "label": "일일이의 표기",
        "url": "https://korean.go.kr/front/mcfaq/mcfaqView.do?mcfaq_seq=6078&mn_id=217&pageIndex=217"
      }
    ]
  },
  "gomgomi-gomgomhi": {
    "relatedQuizSlug": "bandeusi-bandeusi",
    "caution": "곰곰이라는 부사에 -이가 더해진 곰곰이는 여러 방향으로 깊이 생각하는 모양입니다. 신중히처럼 -히로 적는 말도 있으므로 뜻이 비슷하다는 이유로 곰곰히라고 만들지 않습니다.",
    "comparison": "대화: 곰곰이 생각해 보니 네 말이 맞아. / 업무: 제안을 곰곰이 검토한 뒤 회신하겠습니다.",
    "sources": [
      {
        "label": "곰곰이의 표기",
        "url": "https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=216&qna_seq=306238&pageIndex=1"
      }
    ]
  },
  "tongjjaero-tongchaero": {
    "caution": "덩어리 전체를 말할 때는 통째로입니다. 상태를 그대로 유지하는 채는 옷을 입은 채로처럼 관형어 뒤에 띄어 씁니다. 사과를 통째로 먹는 것과 껍질을 벗기지 않은 채로 먹는 것은 서로 다른 기준입니다.",
    "comparison": "대화: 사과를 통째로 먹었어. 껍질도 벗기지 않은 채로. / 업무: 폴더를 통째로 복사해 주세요.",
    "sources": [
      {
        "label": "통째로와 채의 구분",
        "url": "https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=216&qna_seq=306498&pageIndex=1"
      }
    ]
  },
  "huihan-huian": {
    "caution": "드물거나 신기한 일을 나타내는 표기는 희한하다입니다. 활용할 때도 희한한·희한하게처럼 한을 유지합니다. 발음의 인상만으로 희안하다라고 적지 않습니다.",
    "comparison": "대화: 참 희한한 우연이네. / 업무: 희한하게도 같은 조건에서 결과가 달랐습니다.",
    "sources": [{ "label": "희한하다 표제어", "url": "https://stdict.korean.go.kr/search/searchView.do?word_no=507493&searchKeywordTo=3" }]
  },
  "eoi-eoui": {
    "relatedQuizSlug": "eotteoke-eotteokhae",
    "caution": "황당한 느낌은 어이없다, 어이가 없다로 표현합니다. 전자는 한 형용사이고 후자는 명사에 조사와 없다가 붙은 구조라 띄어쓰기가 다릅니다. 어의는 다른 뜻의 명사이므로 어의없다를 황당하다는 뜻으로 쓰지 않습니다.",
    "comparison": "대화: 그 변명을 들으니 어이가 없어. / 업무: 어이없는 누락으로 일정이 밀렸습니다.",
    "sources": [
      { "label": "어의: 임금의 의원", "url": "https://stdict.korean.go.kr/search/searchView.do?word_no=219396&searchKeywordTo=3" },
      { "label": "어의: 단어나 말의 뜻", "url": "https://stdict.korean.go.kr/search/searchView.do?word_no=456415&searchKeywordTo=3" },
      {
        "label": "어이없다 표제어",
        "url": "https://krdict.korean.go.kr/kor/dicSearch/SearchView?ParaWordNo=67108"
      }
    ]
  },
  "seolgeoji-seolgeoji": {
    "caution": "현재 표준 표기는 설거지입니다. 더 이상 쓰이지 않는 설겆다의 형태를 붙잡아 설겆이로 적지 않습니다. 명사에 하다가 붙은 설거지하다와, 명사에 조사가 붙은 설거지를 하다는 각각 이렇게 적습니다.",
    "comparison": "대화: 오늘은 내가 설거지할게. / 대화: 저녁을 먹고 설거지를 했어.",
    "sources": [
      {
        "label": "설거지와 설겆이의 표기",
        "url": "https://www.korean.go.kr/front/mcfaq/mcfaqView.do?mcfaq_seq=5697&mn_id=217"
      }
    ]
  }
};
