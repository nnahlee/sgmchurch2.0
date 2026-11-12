export type SiteLocale = "en" | "ko";

export type SitePage = {
  title: string;
  route: `/${SiteLocale}/${string}` | `/${SiteLocale}`;
  content: string;
};

/*
ACCESS
using admin@sgmchurch.com
const englishPages = siteKnowledge.en;
const koreanPages = siteKnowledge.ko;
const allPages = [
  ...siteKnowledge.en,
  ...siteKnowledge.ko,
];
*/
export const siteKnowledge: Record<SiteLocale, SitePage[]> = {
  en: [
    {
      title: "Home",
      route: "/en",
      content: `
        Street Gospel Mission Church.

        The church community is built on love, faith, and service.
        The church welcomes people seeking to grow in their
        relationship with God.

        Mission:
        The church seeks to spread the Gospel, serve the community,
        provide hope, and make a positive impact on people's lives.

        Outreach Service Schedule:

        San Francisco:
        Sunday at 7:00 AM.

        Oakland and Berkeley:
        Tuesday at 9:00 AM.

        San Jose:
        Thursday at 8:00 AM.

        Church Programs:
        Programs for children, youth, and adults.
        Worship includes traditional hymns, contemporary
        Christian songs, and Bible-based preaching.

        Community Outreach:
        Feeding homeless people and providing shelter
        to those in need.

        Social Media:
        Facebook: https://www.facebook.com/welcomegospel
        YouTube: https://www.youtube.com/@eternalkingdomofgod4438
      `,
    },

    {
      title: "About Us",
      route: "/en/about",
      content: `
        Street Gospel Mission Church - Our Story and Mission.

        Mission:
        Street Gospel Mission Church works to achieve
        Advanced Contemporary Evangelization.

        The church focuses on reaching nearby people who have
        fallen away from Christianity or no longer identify
        themselves as Christians.

        The church emphasizes sharing the good news
        of Jesus Christ with these neighbors.

        Primary Focus:
        The proclamation and demonstration of the Gospel
        of Jesus Christ to our nearest neighbors.

        This includes:
        - Learning and teaching God's Word.
        - Applying biblical teachings in daily life.
        - Growing in the grace of Christ.
        - Evangelizing those who do not know Christ.
        - Demonstrating the love of Christ through service.

        Community Outreach:
        Connecting neighbors who are lost, poor, or in need
        with people who have compassion and a desire to serve.

        Pastors:

        Pastor Steven Lee:
        A religious leader dedicated to spreading the teachings
        of the Christian faith, emphasizing compassion and
        connecting with people from different walks of life.

        Pastor Soon Keum Lee:
        A spiritual leader dedicated to sharing the Christian
        faith and encouraging people to deepen their
        relationship with God.

        Website:
        https://www.sgmchurch.com/en/about
      `,
    },

    {
      title: "Contact",
      route: "/en/contact",
      content: `
        Contact Street Gospel Mission Church.

        Address:
        950 Main St #229,
        Redwood City, CA 94063.

        Mailing Address:
        PO Box 3573,
        Redwood City, CA 94064-3573.

        Email Addresses:
        lsoonkeum@gmail.com
        welcomecross@gmail.com

        Phone Numbers:
        650-995-3336
        650-474-1637

        Contact Form:
        Visitors can submit their name, email address,
        phone number, and message through the website's
        contact form.

        Website:
        https://www.sgmchurch.com/en/contact
      `,
    },

    {
      title: "Donate",
      route: "/en/donate",
      content: `
        Street Gospel Mission Church - Donate and Partner With Us.

        The church welcomes financial support to help fulfill
        its mission and make a positive impact.

        Ways to Give:

        1. PayPal:
        Visitors can donate through PayPal by selecting
        the Donate Now button on the website.

        2. Credit or Debit Card:
        Visitors can make donations using a credit or
        debit card by selecting the Donate with Card button.

        3. Zelle:
        Visitors can send donations through Zelle.

        Zelle Donation Email:
        lsoonkeum@gmail.com

        Giving Purpose:
        Donations support the church's Gospel mission
        and community outreach.

        The church seeks to help individuals and families
        overcome life's challenges and find hope and
        restoration through faith, fellowship, and service.

        The church also emphasizes bringing hope to
        homeless people.

        Giving Categories:
        - Tithes and Offerings.
        - Vision Offering.
        - Community Support Fund.
        - Benevolence Fund.

        Website:
        https://www.sgmchurch.com/en/donate
      `,
    },

    {
      title: "Watch Online",
      route: "/en/watch-online",
      content: `
        Visitors can watch church services online.

        Visit the Watch Online page for livestream
        information and access to online services.

        Specific livestream schedules and links
        have not yet been verified.

        Website:
        https://www.sgmchurch.com/en/watch-online
      `,
    },

    {
      title: "Frequently Asked Questions",
      route: "/en/faq",
      content: `
        Street Gospel Mission Church - Frequently Asked Questions.

        The FAQ page contains these questions:

        1. How can I make a donation?
        Refer visitors to the Donate page:
        https://www.sgmchurch.com/en/donate

        2. Are donations tax-deductible?
        The answer has not been verified.
        Do not make claims about tax deductibility.

        3. How can I contact your organization?
        Refer visitors to:
        https://www.sgmchurch.com/en/contact

        4. How can I get a receipt for my donation?
        The answer has not been verified.
        Refer visitors to the church for confirmation.

        5. How long does it take to receive a response?
        The answer has not been verified.
        Do not promise a specific response time.

        Website:
        https://www.sgmchurch.com/en/faq
      `,
    },

    {
      title: "Gallery",
      route: "/en/gallery",
      content: `
        The Gallery page contains photos and highlights
        from church activities and events.

        Visitors can explore photographs showing
        church community activities.

        Individual gallery descriptions and event details
        have not yet been indexed.

        Website:
        https://www.sgmchurch.com/en/gallery
      `,
    },

    {
      title: "Serve and Volunteer",
      route: "/en/serve-volunteer",
      content: `
        Street Gospel Mission Church - Serve Our Community.

        Main Purpose:
        The church believes in sharing God's love
        through serving others.

        Volunteer Mission:
        - Strengthen the community.
        - Uplift people in need.
        - Make a meaningful difference through service.
        - Share God's love with others.

        Volunteer Opportunities:
        The church encourages people to use their
        unique gifts and talents to serve others.

        Sign Up and Get Involved:

        People interested in volunteering can sign up
        through the volunteer form on the website.

        The form requests:
        - Name.
        - Email address.
        - Phone number.
        - Message.

        Visitors can describe how they would like
        to get involved.

        Website:
        https://www.sgmchurch.com/en/serve-volunteer
      `,
    },
  ],

  ko: [
    {
      title: "홈",
      route: "/ko",
      content: `
        스트릿 가스펠 미션 교회.

        사랑과 믿음과 섬김을 바탕으로 세워진 교회입니다.
        하나님과 더욱 깊은 관계를 맺기 원하는
        모든 분들을 환영합니다.

        교회의 사명:
        복음을 전하고 지역사회를 섬기며,
        사람들에게 희망을 전하고 삶에
        긍정적인 변화를 가져오는 것을 목표로 합니다.

        거리에서 전하는 예배:

        지역별 전도 및 예배 일정:

        샌프란시스코:
        주일 오전 7시.

        오클랜드 및 버클리:
        화요일 오전 9시.

        산호세:
        목요일 오전 8시.

        교회 프로그램:
        어린이, 청소년, 성인을 위한 프로그램이 있습니다.
        전통적인 찬송가와 현대적인 찬양,
        성경 말씀 중심의 설교를 제공합니다.

        지역사회 봉사:
        노숙인들에게 식사를 제공하고
        도움이 필요한 사람들에게 쉼터와 지원을 제공하는
        지역사회 사역을 실천합니다.

        소셜 미디어:
        Facebook: https://www.facebook.com/welcomegospel
        YouTube: https://www.youtube.com/@eternalkingdomofgod4438
      `,
    },

    {
      title: "교회 소개",
      route: "/ko/about",
      content: `
        스트릿 가스펠 미션 교회 - 교회 소개와 사명.

        교회의 사명:
        스트릿 가스펠 미션 교회는
        현대적이고 적극적인 복음 전파
        (Advanced Contemporary Evangelization)를
        실천하는 것을 사명으로 합니다.

        교회는 기독교 신앙에서 멀어졌거나,
        더 이상 신앙생활을 하지 않거나,
        자신을 기독교인이라고 생각하지 않는
        주변 이웃들에게 복음을 전하는 데
        중점을 두고 있습니다.

        핵심 사역:
        가까운 이웃들에게 예수 그리스도의 복음을
        선포하고 그 사랑을 삶으로 실천하는 것입니다.

        주요 사역 방향:
        - 하나님의 말씀을 배우고 가르칩니다.
        - 성경의 가르침을 일상생활에 적용합니다.
        - 그리스도의 은혜 안에서 성장합니다.
        - 예수 그리스도를 모르는 사람들에게 복음을 전합니다.
        - 봉사를 통해 그리스도의 사랑을 실천합니다.

        지역사회 사역:
        도움이 필요한 이웃들과 그들을 섬기고자 하는
        사람들을 연결하는 역할을 하고자 합니다.

        담임 목회자:

        스티븐 리 목사 (Pastor Steven Lee):
        기독교 신앙의 가르침을 전하고,
        다양한 사람들과 소통하며 사랑과 긍휼을
        실천하는 사역에 헌신하고 있습니다.

        이순금 목사 (Pastor Soon Keum Lee):
        하나님의 말씀을 전하고 사람들이 하나님과
        더욱 깊은 관계를 맺도록 격려하는 데
        헌신하고 있습니다.

        웹사이트:
        https://www.sgmchurch.com/ko/about
      `,
    },

    {
      title: "문의하기",
      route: "/ko/contact",
      content: `
        스트릿 가스펠 미션 교회 연락처.

        교회 주소:
        950 Main St #229,
        Redwood City, CA 94063.

        우편 주소:
        PO Box 3573,
        Redwood City, CA 94064-3573.

        이메일:
        lsoonkeum@gmail.com
        welcomecross@gmail.com

        전화번호:
        650-995-3336
        650-474-1637

        문의 양식:
        웹사이트의 문의 양식을 통해 이름,
        이메일 주소, 전화번호, 메시지를
        작성하여 교회에 문의할 수 있습니다.

        웹사이트:
        https://www.sgmchurch.com/ko/contact
      `,
    },

    {
      title: "헌금 및 후원",
      route: "/ko/donate",
      content: `
        스트릿 가스펠 미션 교회 - 헌금 및 후원.

        교회는 사역을 지속하고 지역사회에
        긍정적인 영향을 미치기 위해
        후원자들의 정성 어린 헌금을 소중히 여깁니다.

        헌금 방법:

        1. PayPal:
        웹사이트의 Donate Now 버튼을 선택하여
        PayPal을 통해 헌금할 수 있습니다.

        2. 신용카드 및 직불카드:
        Donate with Card 버튼을 선택하여
        신용카드 또는 직불카드로 헌금할 수 있습니다.

        3. Zelle:
        Zelle을 통해 헌금할 수 있습니다.

        Zelle 헌금 이메일:
        lsoonkeum@gmail.com

        헌금의 목적:
        헌금은 교회의 복음 사역과 지역사회 봉사를
        지원하는 데 사용됩니다.

        믿음과 교제와 섬김을 통해 개인과 가정이
        삶의 어려움을 극복하고 희망과 회복을
        경험할 수 있도록 돕고자 합니다.

        노숙인들에게 희망을 전하는 사역도
        중요하게 생각합니다.

        헌금 항목:
        - 십일조와 감사 헌금.
        - 비전 헌금.
        - 지역사회 지원 기금.
        - 구제 헌금.

        웹사이트:
        https://www.sgmchurch.com/ko/donate
      `,
    },

    {
      title: "온라인 예배",
      route: "/ko/watch-online",
      content: `
        온라인으로 교회 예배를 시청할 수 있습니다.

        실시간 예배 정보와 온라인 예배 참여 방법은
        온라인 예배 페이지에서 확인할 수 있습니다.

        구체적인 실시간 예배 일정과 링크는
        아직 확인되지 않았습니다.

        웹사이트:
        https://www.sgmchurch.com/ko/watch-online
      `,
    },

    {
      title: "자주 묻는 질문",
      route: "/ko/faq",
      content: `
        스트릿 가스펠 미션 교회 - 자주 묻는 질문.

        FAQ 페이지에는 다음 질문들이 있습니다.

        1. 헌금은 어떻게 할 수 있나요?
        헌금 페이지를 참고해 주세요.
        https://www.sgmchurch.com/ko/donate

        2. 헌금은 세금 공제가 가능한가요?
        답변 내용은 아직 확인되지 않았습니다.
        세금 공제 가능 여부를 임의로 안내하지 마세요.

        3. 교회에 어떻게 연락할 수 있나요?
        문의 페이지를 참고해 주세요.
        https://www.sgmchurch.com/ko/contact

        4. 헌금 영수증은 어떻게 받을 수 있나요?
        답변 내용은 아직 확인되지 않았습니다.
        교회에 직접 문의하도록 안내해 주세요.

        5. 문의 후 답변을 받기까지 얼마나 걸리나요?
        정확한 응답 시간은 확인되지 않았습니다.
        구체적인 응답 시간을 약속하지 마세요.

        웹사이트:
        https://www.sgmchurch.com/ko/faq
      `,
    },

    {
      title: "갤러리",
      route: "/ko/gallery",
      content: `
        갤러리 페이지에서는 교회의 활동과 행사 사진을
        확인할 수 있습니다.

        교회 공동체의 다양한 활동과 행사 모습을
        사진으로 살펴볼 수 있습니다.

        개별 사진 설명과 행사 세부 정보는
        아직 색인되지 않았습니다.

        웹사이트:
        https://www.sgmchurch.com/ko/gallery
      `,
    },

    {
      title: "봉사 및 섬김",
      route: "/ko/serve-volunteer",
      content: `
        스트릿 가스펠 미션 교회 - 지역사회를 위한 봉사.

        사역의 목적:
        다른 사람들을 섬김으로써
        하나님의 사랑을 나누는 것을 중요하게 생각합니다.

        봉사 사역의 목표:
        - 지역사회를 더욱 건강하게 만듭니다.
        - 도움이 필요한 사람들에게 희망을 전합니다.
        - 봉사를 통해 의미 있는 변화를 만듭니다.
        - 다른 사람들에게 하나님의 사랑을 나눕니다.

        봉사 기회:
        자신의 재능과 은사를 사용하여
        다른 사람들을 섬기는 일에 참여할 수 있습니다.

        봉사 신청 및 참여 방법:

        봉사에 관심이 있는 분들은 웹사이트의
        봉사 신청 양식을 통해 신청할 수 있습니다.

        신청 양식에 필요한 정보:
        - 이름.
        - 이메일 주소.
        - 전화번호.
        - 메시지.

        메시지란에 어떤 방식으로 봉사에 참여하고
        싶은지 작성할 수 있습니다.

        웹사이트:
        https://www.sgmchurch.com/ko/serve-volunteer
      `,
    },
  ],
};
