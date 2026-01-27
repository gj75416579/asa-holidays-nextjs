'use client'

import { useState } from 'react'
import Header from '@/templete/HeaderWithSuspense'
import Footer from '@/templete/Footer'

type TabId = 'founder' | 'company' | 'milestones' | 'press'

type Milestone = {
  id: string
  title: string
  items: string[]
}

type PressItem = {
  href: string
  label: string
}

type PressSection = {
  title: string
  items: PressItem[]
}

const tabs: { id: TabId; label: string }[] = [
  { id: 'founder', label: 'Our Founder / 创办人' },
  { id: 'company', label: 'About the Company / 关于公司' },
  { id: 'milestones', label: 'Milestones / 里程碑' },
  { id: 'press', label: 'Press releases & Media / 新闻稿与媒体' },
]

const aboutImageSrc = '/assets/img/about/about.jpg'
const milestoneImageSrc = '/assets/img/about/100.jpg'

const founderHtml = `
  <div style="margin-top: 30px;" class="row">
    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
      <p>
        <img src="/images/Mr_See_Portrait.jpg" style="-webkit-box-shadow: 3px 3px 3px;  -moz-box-shadow: 3px 3px 3px;  box-shadow: 3px 3px 3px;" alt="Mr Albert See">
      </p>
      <p align="center">Mr Albert See (许炳辉)<br/>
        ASA Holiday Managing Director / CEO / Founder<br/>
        董事长/董事经理/ 创办人
      </p>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
      <p>
        By the early 90s, Mr. Albert See had journeyed on to establish another multinational travel company with Indonesian business tycoons to further develop Singapore and Malaysia markets travel to China on a full scale. This project took a short period of three years to create a premium company for travel business and leisure to the world especially china. In the development stage, the company had used intensive publicity of more than 30 million dollars on advertising and promotions for its branding. <br/><br/>
        This enabled the company a solid foundation with great potential for further expansion. During those days ASA Holidays were the first to organize various large sale travel fairs and give away grand draw prizes like our ‘Million-dollar Luxury Car draw’, till date with more than 10 Mercedes-Benz luxury saloons drawn. Among other initiatives, Mr. Albert see had also sponsored Chinese serial travel programs like “Jiang Shan Wan Li Xing” to publicize Singapore’s first Grand banquet held at great hall of the people with 1500 persons at every one time, a rare treat for customers to experience such as “National guest” would.<br/><br/>
        This also brought about multiple chartered flights to large cities in China that made China “available to all” not only in Singapore but Malaysia as well. Another memorable project which he holds dearly was the historic affair in 1997, the handover of Hong Kong to China. Once again ASA Holiday was the only travel agency to have the resources to lead more than thousand people to Hong Kong for the grand ceremony banquet to witness the handover to China.
      </p>
    </div>
  </div>

  <p>
    It all started with a dream to make ‘Travel available to all’. Always on the look-out for new ways to allow joy to travel, and be a leader in differentiated tour programs. Came the next waves, experiencing and participating in global history worthy events for our customers. Mr. Albert See launched the ‘President China Tour’ to follow President Clinton’s footsteps on his historic visit to China. In Xi’an grand ‘Emperor Of flourish Tang Touring to Town Grand Ceremony’ was held, with more than a thousand participants. A joking remark was made by some of the tour participants: “You were really more terrific in comparison with the president.” Main leaders of Xi’an City Council Government also joined and witness the grand ceremony. The then Mayor of Xi’an City had made a reception to honor the main officers-in-charge of the travel group. He pointed at the reception: “It is a first for such organization of large scale travel groups visiting Xi’an at the same day.”
  </p>
  <p>
    Among the last 50 years of travel, the peak was reached during early 1980s where our travel business has expanded globally. Mr. Albert See set up branches or companies in Singapore, Malaysia, Brunei, Thailand, Hong Kong, Taiwan, Seoul, New York, Hawaii, San Francisco, Los Angeles, London, Paris, Sydney, New Zealand etc., to let millions of tourists travel globally whilst getting travel services feel like home-service. The investment used for setting up of company and branding publicity in advertising and promotions were an estimate of several hundred millions of dollars. ASA Holidays is an extension and inheritance of the solid foundations accumulated over several decades of global travel business.
  </p>
  <p>
    Entering into the 21 century, the main shareholders with no intention of continuing the business sold their shares to a Taiwanese. Being a small shareholder in this establishment, I have decided to relinquish my shares. Soon after the “Huan Wo Zhuangli Shanhe” through a turbulent period, and with all the success since I started my humble business pooling more than 5 million, Mr. Albert have decided to bring back a team of key executives with together more than 100 years of experience. We continued to establish the present Air Sino-Euro Associates Travel Pte Ltd, with strong belief that he will not only allow travel ‘available to all’ but at the same time inject a ‘joy to travel’ as well.<br/><br/>
    As travellers become more affluent and well-travelled, Mr. Albert See wanted our customers to be part of any history-worthy global events in the making. While keeping true to his dream of making ‘Travel available to all’ coupled with ‘joy to travel’ ASA Holiday has made these history-worthy global events affordable to the masses. Among these events were Beijing Olympic Games 2008, Shanghai World Exposition 2010, Taipei International Flora Exposition 2010 & the coming Xi’an Int’l Horticultural Expo 2011 set to open in April 2011. It has become a tradition for ASA Holiday to charter flights over the Chinese New Year Spring Festival yearly to celebrate with different cultures in our world. Some of ASA Holiday most notable destination would be Northern Harbin Ice & Snow, Guizhou, Yunnan and Taiwan.<br/><br/>
    Looking back Mr. Albert See realized he have been in the travel industry for half century. He has not only witness but personally participated in the vicissitudes of travel business in Singapore, Malaysia, and Southeast Asia etc. He was blessed with the opportunity to nurture a few start-up businesses and watch it successfully mature into ‘cash cows’. Reminiscing when he first started this dream with only five hundred dollars capital, although there were many challenges, there was also much joy, watching the expressions and happiness on our customers when they first touch snow, or first time sitting on a plane. These are precious moments money can’t buy and if he had to start all over again, he would not change a single thing. He shall not rest in his laurels and will continue to pursue that one dream ‘Travel made available to all’ and ‘Lifetime of Joy Travel’ with Air Sino-Euro Associates Travel simply known as ASA Holidays.
  </p>
  <p>
    许炳辉，出生于马来西亚，柔佛州，居銮市，祖籍中国海南省，为第二代马来西亚华人，现为新加坡籍华人。他为二十世纪六十年代马来西亚（当时包含新加坡）文娱游览有限公司、七十年代末中美旅游机构有限公司及、九十年代初大通旅游机构及二十一世纪中期中欧航空旅游联盟有限公司创始人。现任中欧航空旅游联盟有限公司董事长。中欧航旅拥有超过150位员工，是新加坡少数的大型旅游公司。公司注册号: 198000935C
  </p>
  <p align="center">
    <strong><span style="font-size:16px !important;">公司、职务、其他</span></strong>
  </p>
  <p>
    一）中欧航旅为新加坡中华总商会会员<br/>
    二）2010年新加坡品牌榜商号<br/>
    三）2011年海外华人百名优秀企业家<br/>
    四）2011年世界华人楷模名人堂<br/>
    五）2012年新加坡101华商企业家<br/>
    六）江苏，无錫，华西村永久荣誉村民<br/>
    七）山东东平县水泊梁山东平风景区 "108 好汉之地" " 特邀顾问 "<br/>
    八）2013年中国爱国国典名人录<br/>
    九）中欧航空旅游联盟有限公司集团，负责人
  </p>
  <p align="center">
    <strong><span style="font-size:16px !important;">中欧旅游集团属下机构</span></strong>
  </p>
  <p>
    一）中欧航空旅游联盟有限公司<br/>
    二）中欧航旅（山东）有限公司<br/>
  </p>
  <p align="center">
    <strong><span style="font-size:16px !important;">中欧旅游集团简介</span></strong>
  </p>
  <p>
    许炳辉，在上世纪六十年代投身于旅游行业前后近五十年岁月，对旅游这行业可以说是不离不弃，始终坚守在行业的第一线，成为新加坡和马来西亚旅游业为一活跃迄的先驱者。六十年代前，新加坡的旅游业的经营对象，多局限在殖民地高官往来上任或述职之需，普罗大众旅游基本上是空白一片。许炳辉在一九六二年正式进入旅游行业，开始发展新加坡普罗大众旅游事业．到了六十年代中期，已把旅游业行程扩大到中南半岛和香港，当时的主要往来工具以船舶往中南半岛的越南、柬埔寨和香港．上世纪七十年代，公司的业务与行程已遍迹全世界，也成为当时亚洲规模最大的旅行社，分行遍布各大洲。
  </p>
  <p>
    许氏可以说是新加坡和马来西亚多间大型著名旅行社的创始人，此処不再做赘述。时下的中欧旅游集团，以中欧航空旅游联盟有限公司为旗舰公司创建于二零零五年，迄今近十个年头，虽说在多家大型旅游公司中可谓之＂小弟弟＂，然则以人员资历而论，正如该公司广告宣传口语；＂累积百年功史，筹划超过五十年＂。再一次以中欧航空旅游联盟有限公司 " 为平台，以期在旅游业中再创一片新的天地。现在的 " 中欧航旅集团 " 延续和继承了昔日累积的深厚基础，以及数十年的环球旅游经营沉淀，更汇集了许多旅游精英，他们高达百年的经验，再创旅游业又一辉煌．
  </p>
  <p>
    许氏的旅游业经营理念，除了以精心策划的行程，和实惠的旅费以滿足广大旅游大众的需求外，更为重要的是为普通的普罗大众在旅游途中，创造更多的荣誉感，使广大普罗旅游大众在旅途中有备受大人物的待遇。所以许氏绝不放过每一个盛大历史事件，使旅客有机会亲历其境，成为历史的见证人，例如2008北京的奥运会；2010年上海世界博览会、同年至十一月开始的台北市国际花博会；2011年四月底揭幕的中国西安国际花卉园艺博览会；还有如山东省东平县的巨型水浒梁山影视基地和梁山水泊的落成，我都第一时间在现场出现，和当地的营銷人员洽谈，开发了东平的水泊湿地＂八百里水泊＂东平湖湿地公园游。使身居热带的旅客有机会观赏到无边无际的芦苇荡，在风吹动遍地芦苇犹若在一片绿色海洋中荡漾，以及中国古典文学名著<<水浒传>>所描述的水泊梁山。目睹小说中描绘的一百零八好汉聚集的水浒水寨，和梁山好汉聚义结盟的豪情壮志。当旅客游罢占地四百亩的水泊湿地后，拾级登上一百零八级石阶，登堂入室，大步迈入聚义堂，使旅客们在水泊梁山上任选一百零八好汉之一的衣装，粉墨登场，扮演英雄好汉，参加水浒英雄宴，当一天水浒英雄好汉．感受一下水浒好汉那种 " 大块吃肉，大碗喝酒 " 的豪情异志．唱一回<<好汉歌>>成为真正的英雄好汉，昨日豪情，今同感受，更享受难得一夕醉倒水泊之豪情。这些都是许氏別开生面的独家创意。因而东平县水泊梁山东平风景区 "108 好汉之地" 也被特別礼聘为 " 特邀顾问 " 。
  </p>
  <p align="center">
    <strong><span style="font-size:16px !important;">许炳辉五十年旅游策划历程大事记</span></strong>
  </p>
  <p>
    <strong><span style="font-size:14px !important;">六十年代初期：</span></strong><br/>
    翻开新加坡马来西亚旅游业的篇章开启陆路马来半岛、泰国游．开拓航空旅游，旅客飞出国门，遨游台湾、香港、东京、汉城、曼谷、马尼剌等．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">六十年代中期：</span></strong><br/>
    分行遍布全世界，成为亚洲最庞大旅行社 七十年代初期：70年日本大阪世界博览会游 (WORLD EXPO 70)，新、马旅客参与国际盛会．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">七十年代始末：</span></strong><br/>
    移风改俗，崭新概念－－集团结婚蜜月旅行，使密月新人畅游世界，并受到各国名人以及高级官员破格接见，而被各国赞誉为民间外交上的＂大使＂．使新人留下人生最美好，最温馨与最难忘的回忆．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">七十年代中期：</span></strong><br/>
    新、马、印尼客首次参与盛大日本冲绳海洋博览会．七十年代中末：开拓＂环游世界一周游＂．从新加坡出发经曼谷往欧 洲，游览欧洲后，再横越大西洋往美国．乘超音速协和机横越太西洋到美国，随后，越过美国本土，从夏威夷经东京、香港 返回新加坡．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">八十年代初期：</span></strong><br/>
    成立旅游公司遍布五大洲，新、马、泰、汶、港、台、东京、悉尼、伦敦、巴黎、旧金山、洛杉矶等等．联络网遍及全球．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">八十年代初期：</span></strong><br/>
    首创承包新航巨型波音747 飞机环岛飞行．首次以新航波音727从巴耶礼巴机场起飞，满载乘客环飞南中国海，成为空前绝后的新加坡国内航班，同时更是首架降落于樟宜机场的航机．以及承包超音速协和机从伦敦飞行于大西洋．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">八十年代初期：</span></strong><br/>
    首创尖东，新世界满汉全席，以及香格里拉香港宫大江南北宴香江之旅均轰动一时，并持续两年之久，参加品尝的贵宾万人之多．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">八十年代中期：</span></strong><br/>
    首创承包豪华邮轮＂东方公主号＂川行于南中国海、马六甲海峡、槟城、棉兰和香港之间，为新加坡旅客提供崭新的海上旅游．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">九十年代初期：</span></strong><br/>
    巨额旅游抽奖送出十多部豪华奔驰汽车．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">九十年代初期：</span></strong><br/>
    旅客荣登国宾之列，连续八次在中国人民大会堂举办千人盛宴．同时开创包颐和园先河，效慈禧太后排云殿中秋赏月，随后成为每年中秋赏月胜地．住宿北京钓鱼台国宾馆．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">九十年代初期：</span></strong><br/>
    承包客机飞往中国，首飞云南昆明及海南岛三亚市，成为当地机场首个国际航班降陆，被称为载入史册的行．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">九十年代中期：</span></strong><br/>
    世界最巨大水利工程－－长江三峡建设游．承包＂皇帝、皇后＂号两艘长江最豪华客轮游三峡．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">一九九七年：</span></strong><br/>
    世界华人的光荣，殖民主义的丧歌．香港回归中国盛会游．带领一千五百新、马游客见证香港回归历史时刻．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">一九九七年：</span></strong><br/>
    春节东北冰雪专列．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">一九九七年：</span></strong><br/>
    江苏灵山大佛开光游．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">一九九八年：</span></strong><br/>
    旅客成了总统－－踩着美国克林顿总统的足迹＂总统中国之旅＂，时任西安市第十三任市长冯煦初先生破例破格地亲自接见许氏及组团主要负责人并在会见中指出西安市在同一天之內出现如此庞大的旅游团队，尚属首次。
  </p>
  <p>
    <strong><span style="font-size:14px !important;">一九九九年：</span></strong><br/>
    西安庆祝新中国建国金禧五十周年纪念中原长安之旅，城楼中秋赏月，品尝开国第一宴．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">一九九九年：</span></strong><br/>
    澳门回归盛典，一九九九年十二月廿日澳门回归游．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">二零零零年：</span></strong><br/>
    千禧世界炎黄子孙致祭人文始祖黄帝陵西安游．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">二零零一年：</span></strong><br/>
    包机往西安，开启空中丝绸之路游．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">二零零二年：</span></strong><br/>
    邀全世界华人相约在北京＂唐装人民大会春节团拜游．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">二零零四年：</span></strong><br/>
    首开九寨沟景区九寨天堂豪华旅游．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">二零零五年：</span></strong><br/>
    开光包机往海南岛三亚市，参加三亚市南海观音塑像开光大典．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">二零零六年中：</span></strong><br/>
    掀开旅游业新章，开启中欧航空旅游联盟新元纪．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">二零零六年：</span></strong><br/>
    历史首航包机直飞贵州省贵阳市，畅游贵州名山胜水．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">二零零六年：</span></strong><br/>
    包机历史首航往泰国东北乌东他尼，首开泰国、老挝联游．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">二零零七年：</span></strong><br/>
    历史首航包机飞泰国中南部素叻他尼，开启苏梅岛联游．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">二零零八年：</span></strong><br/>
    奥运中国●傲视天下; 中欧航旅●好运北京; 奥运好运●大国崛起; 同一世界●同一梦想.
  </p>
  <p>
    <strong><span style="font-size:14px !important;">二零零八年：</span></strong><br/>
    启动澳门威尼斯人豪华之旅．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">二零零八年：</span></strong><br/>
    首次启动潇洒两岸行，游台湾金门、福建厦门、鼓浪屿．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">二零零八年：</span></strong><br/>
    史无前例的两大世界纪录，东方吉尼斯奇观－－朝鲜阿里郎万人歌舞和天安门百万盆，千万朵鲜花漫京城迎奥运游．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">二零零八年：</span></strong><br/>
    首航包机直飞泰、缅、寮金三角，开启神秘金三角游．
  </p>
  <p>
    <strong><span style="font-size:14px !important;">二零零九年至二零一五年：</span></strong><br/>
    启动大规模短期包机如贵阳、昆明、海口等以及全年定期中国航线包机业务，如广西，南宁/新加坡/南宁已定期连续三年包机，每周两班。即将开通新加坡/桂林/新加坡以及新加坡/三亚/新加坡航线等包机业务。
  </p>
`

const companyHtml = `
  <p>
    Air Sino-Euro Associates Travel&#39;s strength lies in its rich and extensive travel experience accumulated for more than 100 years. Many of its team members have been in the trade for over a decade, with its key management boasting of more than a quarter century of experience in worldwide travel. Like good old wine in a new bottle, it is a new-age agent in a brand new packaging yet full-bodied with good favour cultivated over the years.<br/>
  </p>
  <p>
    More affectionately known as ASA Holidays, the home-grown travel agency is a holiday hypermart that offers extensive outbound travel services to destinations worldwide and caters to everyone in the family regardless of age, profile and demographics.
  </p>
  <p>
    Be it a customised holiday for that savvy and largely-independent backpacker or a thoughtfully-planned group tour for a value and memorable holiday, there&#39;s something for everyone at ASA Holidays. The agency also prides itself as being able to weave in more individuality and flexibility in the itineraries, as well as maintain variety in the type of experiences offered for more well-travelled customers.
  </p>
  <p>
    In addition, the experienced travel professionals at ASA Holidays can provide timely, accurate information and dedicated help in corporate travel. Whether a small and medium-sized enterprise or a multinational company, one can count on the agency to tailor a rewarding, enriching and unforgettable holiday.
  </p>
  <p>
    Our Mission: To be an efficient and customer-centric company, achieving the highest satisfaction for our customers, people and shareholders. We aim to provide a premium range of quality travel products at the most competitive pricing, and through outstanding, personalized services. To continually innovate in our product offerings, yet maintaining the flexibility to adapt to evolving market trends.
  </p>
  <p>
    Our Vision: To be recognized as a World Class Travel Agency and the preferred choice for holiday and travel needs, distinguished by innovativeness and dedication to our customers, people and shareholders.
  </p>
  <p>
    Our Values: We strive to achieve excellence and deliver results in a professional and responsible way through MERIIT. These corporate values are the foundation of our culture and guide our day-to-day interaction with each other.
  </p>
  <p>
    (M)eritocracy - We recognise and reward based on contributions and achievements.
  </p>
  <p>
    (E)xcellence - We are passionate about delivering results, and are committed to continually improve and succeed in everything we do.
  </p>
  <p>
    (R)espect for People - We believe that people are our most valuable assets, and we value the unique contributions of every person.
  </p>
  <p>
    (I)ntegrity - We apply the highest ethical, moral and professional standards in our conduct, both as individuals and as an organisation.
  </p>
  <p>
    (I)nnovation - We constantly look for ways to do things better by providing an environment where we can learn from our failures as well as our successes.
  </p>
  <p>
    (T)eamwork - We are a community with diverse strengths working together to achieve a common goal.
  </p>
  <p>
    <strong><span>Specialists in </span></strong>
  </p>
  <p>1. Specially-planned quality tours</p>
  <p>2. Incentive &amp; corporate packages</p>
  <p>3. Chartered flights</p>
  <p>4. Affordable group packages</p>
  <p>5. Affordable free &amp; easy tours</p>
  <p>6. Worldwide ticketing &amp; hotel reservations</p>
  <p>7. Cruise packages</p>
  <p>8. Visa applications</p>
  <p>9. Travel insurances</p>
  <p>
    <strong><span style="font-size:16px !important;">业务概述</span></strong><br/>
    中欧航空旅游联盟以其丰富和广泛的旅游经验作为实力，累积起共计逾一百多年，它的团队从事此行业者，许多已超越十年，其主要管理层更傲视旅游界，他们从事遍迹世界旅游业务，所经历时光和经验达四分之一个世纪，确可称为新瓶装旧酒，依然是独特和新颖．一般上被昵称为＂中欧航旅＂的这家在本地创立的旅游社，是一家特大型超级旅行社，提供到世界各地广泛的旅游服务，无论任何年龄人士，背景和人数均能参加．
    无论要增广见闻或背包旅游，以及经深思构想的集体旅游，以享回价值和值得回味的假期．中欧航旅都能按需要提供服务．中欧航旅也傲称能编制更符合个人和灵活性的行程，以及维持得来的经验，提供予爱好旅游的顾客．此外，中欧航旅的富有经验专业旅游人士能适时地提供商业旅游上的精确资讯和专心致志地协助，不管小型、中型企业或跨国公司都可信赖中欧航旅，以享受到心满意足，难以忘怀的旅游假期．业务细分如下：
    <ul>
      <li>包机航班／邮轮</li>
      <li>经济实惠集体旅行配套</li>
      <li>经济实惠的自由行旅游</li>
      <li>遍及世界的机票和预定旅店客房</li>
      <li>遍及全世界的海上旅游</li>
      <li>代办签证及旅游保险</li>
    </ul>
    <strong><span style="font-size:16px !important;">公司资料</span></strong><br/>
    <ul>
      <li>公司名称：中欧航空旅游联盟有限公司</li>
      <li>创建日期：二零零六年七月一日</li>
      <li>二百五十万新加坡元</li>
      <li>常年营业额：新加坡七仟万至一亿元间.</li>
      <li>主要主管人：董事长兼董事经理：许炳辉</li>
    </ul>
  </p>
`

const milestones: Milestone[] = [
  {
    id: 'new-century',
    title: 'New Century',
    items: [
      'Won Golden Award for ‘The Most Beautiful China Tourism Route’ Design Competition',
      'Organized tour for overseas Chinese to visit Tomb of Huang Di',
      'Launched first regular chartered flight to Silk Road',
      'Grand celebration at Great Hall of the People celebrating Chinese New Year and Beijing chosen host city of Olympics 2008',
    ],
  },
  {
    id: '1990s',
    title: '1990s',
    items: [
      'Set up new travel agency with focus on tours to China and becoming the market leader within 3 years',
      'Lucky Draws giving out more than 10 Mercedes-Benz and luxury cars',
      "Sponsored TV programme 'Jiang Shan Wan Li Xing' for China packages",
      'From 1992, for 6 years, launched a maiden chartered flight specially to Kunming and Sanya, Hainan etc',
      'World broadcast of China tour with main highlight being a grand dinner held at Great Hall of the People where customers were treated as national guests',
      'Chartered entire five-star luxury liners Eastern King and Eastern Queen for cruise along Chang Jiang River',
      'Only travel agency in history to fly 1500 customers from Singapore and Malaysia to witness the historic handover of Hong Kong to China',
      "Launched 'President China Tour' to follow President Clinton's footsteps on his historic visit to China",
      'Witnessed the handover of Macau to China',
    ],
  },
  {
    id: '1980s',
    title: '1980s',
    items: [
      "Made a mark in the travel history of Singapore by carrying passengers on an exclusive flight from Paya Lebar Airport to be the first flight to land at the opening of the new Changi International Airport. Established new company - first to charter SIA 747 Jumbo flight 'Joyride' followed by Concorde charter flight around the Atlantic Ocean and British Channel.",
      "Chartered Oriental Princess liner to launch leisure & honeymoon cruise package 'Cruise to Nowhere' and cruises to Phuket and Hong Kong",
      'Took a Break! Prepare for new journeys ahead at the dawn of a new era in travel',
    ],
  },
  {
    id: '1970s',
    title: '1970s',
    items: [
      'Expansion of branches to Malaysia, Taipei, Hong Kong, London, Sydney to become largest travel agency in Asia',
      "First to launch Osaka Exposition (Expo 70). The promotion slogan 'Come sleep with us' as all hotels were fully booked for 6 months. Also launched Okinawa World Exposition (Expo 75)",
      'Developed new travel concept - Mass Wedding & honeymoon packages',
      "Developed new concept of 'Travel around the world at affordable price'",
    ],
  },
  {
    id: '1960s',
    title: '1960s',
    items: [
      'Albert See & friend started travel industry in Singapore with tours to Thailand and Malaysia',
      'Launched flights to Taiwan, Hong Kong, Tokyo, Bangkok, Manila',
    ],
  },
]

const pressSections: PressSection[] = [
  {
    title: 'Newspapers write up:',
    items: [
      { href: '/images/press_media/2018_HK_Return20.pdf', label: '2018 大国崛起 庆祝建军90周年暨香港回归20周年' },
      { href: '/images/press_media/The Business Times - 20 July 2016.pdf', label: '20 Jul 2016 The Business Times' },
      { href: '/images/press_media/Lian He Zao Bao - 4 November 2013.pdf', label: '4 Nov 2013 Lian He Zao Bao / 联合早报' },
      { href: '/images/press_media/Lian He Zao Bao - 6 September 2013.pdf', label: '6 Sep 2013 Lian He Zao Bao / 联合早报' },
      { href: '/images/press_media/The Sunday Times - 14 October 2012.pdf', label: '14 Oct 2012 The Sunday Times' },
      { href: '/images/press_media/The Staits Times - Money - 2 July 2012.pdf', label: '2 Jul 2012 The Straits Times' },
      { href: '/images/press_media/让新加坡人都去旅游.pdf', label: '8 Aug 2011 Lian He Wan Bao / 联合晚报' },
      { href: '/images/press_media/Sin Ming Zao Bao - 26 January 2011.pdf', label: '26 Jan 2011 Sin Ming Ri Bao / 新明日报' },
      { href: '/images/press_media/15 June 2006, Today & My Paper  Today 报与我报.pdf', label: '15 June 2006, Today Paper & My Paper / Today 报与我报' },
    ],
  },
  {
    title: 'Magazines write up:',
    items: [
      {
        href: 'http://mp.weixin.qq.com/s/lxOVW9jOqrlhAo2hHdVKBg',
        label: 'The Most Beautiful China Tourism Route Design Competition / 花絮直击美丽中国2017冰雪之旅推介会暨“中国就要这样玩”旅游线路创意设计大赛颁奖典礼现场（附参赛作品）',
      },
      { href: '/images/press_media/1001_001.pdf', label: 'The Most Beautiful China Tourism Route Design Golden Award / “中国就要这样玩”旅游线路创意设计大赛 金奖' },
      { href: '/images/press_media/2011 successful Entrepreneur.pdf', label: '2011 successful Entrepreneur / 2011 成功创业者' },
      { href: '/images/press_media/2011 Singapore Brand Singapore  新加坡品牌.pdf', label: '2011 Singapore Brand Singapore / 新加坡品牌' },
      { href: '/images/press_media/中国梦+创业小档案.pdf', label: '中国梦+创业小档案' },
      { href: '/images/press_media/慶祝抗戰勝利.pdf', label: '慶祝抗戰勝利70周年华夏精英人物志' },
      { href: '/images/press_media/ASA Holidays China Magazine  中欧旅行社中国杂志.pdf', label: 'ASA Holidays China Magazine / 中欧旅行社中国杂志' },
    ],
  },
  {
    title: 'Chartered flight route:',
    items: [
      { href: '/images/press_media/2016年 包机航线.pdf', label: '2016' },
      { href: '/images/press_media/2017 年 包机航线.pdf', label: '2017' },
    ],
  },
  {
    title: 'Video',
    items: [
      { href: 'https://youtu.be/UAZrrQhC-Og', label: 'Corporate Video / 公司视频' },
    ],
  },
]

export default function About() {
  const [activeTab, setActiveTab] = useState<TabId>('founder')

  return (
    <>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div
            className="breadcrumb-wrapper-3 fix bg-cover"
            style={{ backgroundImage: 'url(/assets/img/inner-page/breadcrumb/bg-2.jpg)' }}
          >
            <div className="container">
              <div className="page-heading">
                <div className="breadcrumb-sub-title">
                  <h1>About Us</h1>
                </div>
                <ul className="breadcrumb-items">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="style-2 style-3">About Us</li>
                </ul>
              </div>
            </div>
          </div>

          <section className="about-section section-padding fix">
            <div className="container">
              <div className="section-title text-center">
                <h2>About Us</h2>
              </div>

              <ul className="nav nav-tabs justify-content-center about-tabs" role="tablist">
                {tabs.map((tab) => (
                  <li className="nav-item" role="presentation" key={tab.id}>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={activeTab === tab.id}
                      className={`nav-link${activeTab === tab.id ? ' active' : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="tab-content mt-4">
                {activeTab === 'founder' && (
                  <div className="tab-pane fade show active" role="tabpanel">
                    <div className="about-tab-body" dangerouslySetInnerHTML={{ __html: founderHtml }} />
                  </div>
                )}

                {activeTab === 'company' && (
                  <div className="tab-pane fade show active" role="tabpanel">
                    {/* <div className="text-center mb-4">
                      <img src={aboutImageSrc} alt="ASA Holidays" className="img-fluid" />
                    </div> */}
                    <div className="about-tab-body" dangerouslySetInnerHTML={{ __html: companyHtml }} />
                  </div>
                )}

                {activeTab === 'milestones' && (
                  <div className="tab-pane fade show active" role="tabpanel">
                    {/* <div className="text-center mb-4">
                      <img src={milestoneImageSrc} alt="ASA Holidays 100" className="img-fluid" />
                    </div> */}
                    <div className="accordion" id="asaMilestonesAccordion">
                      {milestones.map((milestone, index) => (
                        <div key={milestone.id} className="accordion-item">
                          <h2 className="accordion-header" id={`milestoneHeading-${milestone.id}`}>
                            <button
                              className={`accordion-button${index === 0 ? '' : ' collapsed'}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#milestoneCollapse-${milestone.id}`}
                              aria-expanded={index === 0 ? 'true' : 'false'}
                              aria-controls={`milestoneCollapse-${milestone.id}`}
                            >
                              {milestone.title}
                            </button>
                          </h2>
                          <div
                            id={`milestoneCollapse-${milestone.id}`}
                            className={`accordion-collapse collapse${index === 0 ? ' show' : ''}`}
                            aria-labelledby={`milestoneHeading-${milestone.id}`}
                            data-bs-parent="#asaMilestonesAccordion"
                          >
                            <div className="accordion-body">
                              <ul className="list">
                                {milestone.items.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'press' && (
                  <div className="tab-pane fade show active" role="tabpanel">
                    {pressSections.map((section) => (
                      <div key={section.title} className="mb-4">
                        <h4>{section.title}</h4>
                        <ul className="list-unstyled">
                          {section.items.map((item) => (
                            <li key={item.href}>
                              <a href={item.href} target="_blank" rel="noreferrer">
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  )
}
