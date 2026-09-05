window.TRIP_DATA = {

  /* ── 基础信息（路书 + 地图共用） ── */
  meta: {
    title: "意大利·瑞士 10日行程",
    travelers: "邹豪 & 宁岳莎",
    dates: "2026 / 09 / 29 – 10 / 08"
  },
  title:    "意大利·瑞士 10日蜜月之旅",
  dateRange:"2026/09/29 – 10/08",
  travelers:"邹豪 & 宁岳莎（二人同行）",
  generationDate: "2026-08-03",

  /* ── 整体天气（路书用） ── */
  weather: {
    summary:  "意大利秋阳明媚，佛罗伦萨晴多云少；瑞士山区凉爽，格林德瓦/因特拉肯昼夜温差大",
    avgHigh:  20, avgLow: 11,
    rainfall: "25%",
    clothing: "意大利：短袖+薄外套；瑞士：厚外套+抓绒；First山顶需防风层",
    tips:     "10月初瑞士已入秋，山区气温个位数，行李务必带保暖层"
  },

  /* ── 住宿（路书用） ── */
  hotels: [
    { name:"Hotel Charly（米兰）",              area:"米兰中央站附近 · Via Settala 76",        pricePerNight:2141, priceTotal:2141,  nights:1, confirmed:true, confNo:"5210.693.119", highlights:"中央站步行5-8分钟;近地铁直达大教堂;评分8.7;PIN 4834",                    bookingUrl:"https://www.booking.com/hotel/it/colombia-milan.html" },
    { name:"Residenza Marchesi Pontenani（佛罗伦萨）", area:"佛罗伦萨 圣十字区 · Via delle Casine 6（入口在拐角 Via Tripoli）", pricePerNight:2241, priceTotal:6722, nights:3, confirmed:true, confNo:"6621.705.192", highlights:"圣十字老城区;近Duomo步行约10分钟;公寓式带厨房;king大床;不含早(可自理);入住前14天免费取消;已确认预订", bookingUrl:"https://www.booking.com/searchresults.html?ss=Residenza%20Marchesi%20Pontenani%20Florence" },
    { name:"Hotel Hofgarten Luzern（卢塞恩）",    area:"卢塞恩老城 · Stadthofstrasse 14",               pricePerNight:2712, priceTotal:5424,  nights:2, confirmed:true, confNo:"6435.148.028", highlights:"含早餐;步行至廊桥8分钟;历史建筑改造;已确认预订",                rating:"4.6", bookingUrl:"https://www.booking.com/hotel/ch/hofgarten-luzern.html" },
    { name:"Essential by Dorint（因特拉肯）",             area:"因特拉肯西站旁 · Rugenparkstrasse 8-10",                  pricePerNight:3395, priceTotal:6789,  nights:2, confirmed:true, confNo:"5918.458.946", highlights:"西站步行1分钟;含早;评分8.7;PIN 4019;已确认10/5-10/7",                    bookingUrl:"https://www.booking.com/city/ch/interlaken.html" },
    { name:"Hotel St. Josef（苏黎世）", area:"苏黎世老城 · Hirschengraben 64/68",              pricePerNight:2560, priceTotal:2560,  nights:1, confirmed:true, confNo:"6622.821.467", highlights:"距中央站步行10分钟;近班霍夫大街;含早;员工分9.8;PIN 9642",                    bookingUrl:"https://www.booking.com/hotel/ch/wellenberg-zurich.html" }
  ],

  /* ── 预算（路书用） ── */
  budget: {
    transport: {
      subtotal: 30290,
      items: [
        { name:"国泰航空 CX233(9/29)+CX382(10/8) 机票 ×2（含税¥19,702）",            cost:19702 },
        { name:"Malpensa Express 机场快线 ×2",                  cost:208   },
        { name:"意大利高铁 Italo ×2段 ×2人（已购 €159.60）",       cost:1680  },
        { name:"EuroCity 国际列车 米兰→卢塞恩 意段 ×2（估）",   cost:700   },
        { name:"Swiss Travel Pass 6日 10/3–10/8 ×2（约CHF459/人，覆盖全程）", cost:7800  },
        { name:"市内地铁/公交（意大利）（估）",                  cost:200   }
      ]
    },
    accommodation: {
      subtotal: 23636,
      items: [
        { name:"Hotel Charly 米兰 1晚（✓ 5210.693.119）",              cost:2141 },
        { name:"Residenza Marchesi Pontenani 佛罗伦萨 3晚（✓ 6621.705.192）", cost:6722 },
        { name:"Hotel Hofgarten Luzern 卢塞恩 2晚（✓ 6435.148.028）",   cost:5424 },
        { name:"Essential by Dorint 因特拉肯 2晚（✓ 5918.458.946）",        cost:6789 },
        { name:"Hotel St. Josef 苏黎世 1晚（✓ 6622.821.467）", cost:2560 }
      ]
    },
    food: {
      subtotal: 16800,
      items: [
        { name:"意大利餐饮（4天）×2人 约€50/人/天", cost:6400 },
        { name:"瑞士餐饮（6天）×2人 约CHF80/人/天", cost:9600 },
        { name:"超市零食/咖啡",                      cost:800  }
      ]
    },
    tickets: {
      subtotal: 4820,
      items: [
        { name:"米兰大教堂登顶 ×2",             cost:240 },
        { name:"学院美术馆（大卫）×2",           cost:240 },
        { name:"乌菲兹美术馆 ×2",               cost:320 },
        { name:"皮蒂宫+波波里花园 ×2",           cost:280 },
        { name:"皮拉图斯齿轨火车（STP5折）×2",  cost:720 },
        { name:"冰川公园 ×2",                   cost:160 },
        { name:"GoldenPass 座位预约 ×2",         cost:80  },
        { name:"First 缆车（STP5折）×2",        cost:660 },
        { name:"First Flyer 飞索 ×2",            cost:480 },
        { name:"托斯卡纳·瓦尔多尔恰一日团（含午餐+Brunello品酒）×2（约）", cost:1640 }
      ]
    },
    other: {
      subtotal: 3600,
      items: [
        { name:"旅行保险 ×2",      cost:600  },
        { name:"伴手礼/纪念品",    cost:2000 },
        { name:"杂项/应急",        cost:1000 }
      ]
    },
    total: 79146,   // 交通¥30290 + 住宿¥23636 + 餐饮¥16800 + 门票/活动¥4820 + 其他¥3600
    perPerson: 39573
  },

  /* ── 实用贴士（路书用） ── */
  tips: [
    "🗓️ 【购票时间表】出发前3个月：机票；前2-3个月：Frecciarossa高铁；前4-6周：学院美术馆、乌菲兹（极易售罄）；前3-4周：大教堂穹顶、米兰大教堂；前2-3周：GoldenPass座位；前1-2周：First缆车（可当天买）",
    "🎫 学院美术馆（大卫）是佛罗伦萨最难抢的票，旺季常提前3-4周售罄，务必第一个订！无票旺季可能排队2-3小时仍买不到当日票",
    "⏰ 【建议到达时间】乌菲兹8:15开门准时到；大教堂穹顶按时段前10分钟到；学院美术馆开门前10分钟到；First缆车9:00前到（住格林德瓦可8:45到，几乎无队）",
    "🏔️ First山（2168m）：悬崖步道+高空飞索+Bachalpsee高山湖，体验丰富，高反风险低，缆车约¥330/人（STP5折），明显优于少女峰性价比",
    "🚄 瑞士旅行通票（Swiss Travel Pass）：行程在瑞士需用车6天（10/3入境–10/8离境），STP无5日票，6日连续票约CHF459/人（约¥3900）即可全程零购票；4日票约CHF389/人但9/30瑞士段+10/5机场票需另买，实际仅省约CHF20/人且要逐段买票——故选6日票更划算省心。10/3入境当天激活，购票后须在SBB/GoldenPass网站预约D7观景列车座位",
    "💰 瑞士物价是意大利2倍，Migros/Coop超市买早餐和午餐可大幅节省，晚餐再享受正餐",
    "🌡️ 10月瑞士山区早晚温差10°C+，First山顶约5-10°C，皮拉图斯峰顶约0-5°C，必带防风抓绒+轻薄羽绒",
    "🧾 购物满€154可退税（Global Blue），苏黎世机场离境前找海关盖章，预留30分钟，可退约13% VAT",
    "📱 意大利买TIM/WindTre SIM（约€20/15天）或用Airalo等eSIM；出发前装好：SBB Mobile（瑞士火车·必装）、Trenitalia/Italo（意大利火车）、Jungfrau（少女峰/First查天气与票）、Booking（酒店凭证）、Google Maps（下载意/瑞离线地图）、Google翻译（意/德离线包）、XE Currency（汇率）、Omio（跨国火车比价）、WhatsApp（欧洲常用）",
    "⚠️ 十一黄金周在瑞士期间中国游客增多（本程瑞士段10/3–10/8正值高峰），码头/缆车建议比平时早15-30分钟 | 格林德瓦住一晚可让Day8从缆车站步行出发，避开人潮",
    "🛂 签证：意大利进、瑞士出，办申根签证；主停留国按行程综合判断（瑞士停留更长），必要时按瑞士递签，出签前以使馆要求为准 | ✅ 签证已出；5家酒店已按新日期（9/29–10/8）重订确认",
    "🏔️ 少女峰（Jungfraujoch）备选：主行程为性价比更高的First山；若D7/D8天气晴好且时间充裕，可改/加登少女峰「欧洲之巅」（3454m，Pass享5折约CHF120/人）。山顶阴天易「白茫茫一片」，务必挑两天里更晴的那天去，灵活调换D7/D8",
    "⚠️ 防骗避雷：佛罗伦萨警惕「地上铺画引你踩到再讹钱」骗局；火车站出租爱绕路，认官方taxi或谈好价；站内/景点外「热心帮买票」「折扣门票」多为假票或索小费，只认官方购票渠道",
    "👜 意大利防扒手：火车站、Duomo广场等人多处护照随身、包前背；餐厅留意座位费 coperto（约€2-3/人）与矿泉水另收费，账单先看清",
    "🎧 中文导览（可选非必需）：乌菲兹/学院/米兰大教堂官网购票可加购 audio guide；GetYourGuide/KKday/携程当地玩乐可约「中文真人导游」（含跳排队最划算）；三毛游、izi.TRAVEL 有部分景点免费中文音频，行前下载离线包 | 瑞士段一般自助即可"
  ],

  /* ── 景点详情（地图点击景点时右侧面板展示，按图片名索引） ── */
  placeInfo: {
    milan: {
      desc: "意大利最大的哥特式教堂，135 座尖塔与 3400 多尊雕像历经六个世纪建成。可登屋顶平台近距离俯瞰尖塔森林与城市天际线，晴天可远眺阿尔卑斯山。",
      tips: ["屋顶平台分步行登顶与电梯两种票，建议官网选含 Rooftop 的时段票", "旺季无票现场排队 60–90 分钟，9:00 开门前 15 分钟到最从容", "教堂内着装需过肩遮膝，背心短裤会被拦下"]
    },
    galleria: {
      desc: "1877 年落成的玻璃穹顶拱廊，连接大教堂广场与斯卡拉广场，被称为「米兰的客厅」，云集 Prada、LV 等百年名店与历史咖啡馆。",
      tips: ["地面公牛马赛克「转三圈」是当地祈福习俗", "拱廊内咖啡馆坐下消费含座位费、价格偏高，打卡拍照即可"]
    },
    florence: {
      desc: "佛罗伦萨地标圣母百花大教堂，布鲁内莱斯基的红色八角穹顶是文艺复兴工程奇迹。登 463 级台阶可近观穹顶巨幅《最后的审判》壁画并俯瞰全城红顶。",
      tips: ["穹顶必须官网预约时段，现场不售穹顶票", "463 级陡窄旋梯、无电梯，幽闭或体力不佳者慎登", "建议选 9:00 首场，人最少光线好"]
    },
    uffizi: {
      desc: "世界顶级文艺复兴艺术殿堂，藏波提切利《维纳斯的诞生》《春》及达·芬奇、拉斐尔、卡拉瓦乔等真迹。",
      tips: ["务必提前 3–4 周官网预约时段票，旺季易售罄", "有票安检约 15–20 分钟，无票排队 2–4 小时", "大背包须寄存；8:15 开门是全天人最少时段"]
    },
    pontevecchio: {
      desc: "阿诺河上唯一幸存于二战的中世纪廊桥，桥上两侧是金银珠宝老店，桥顶为美第奇家族的瓦萨里走廊。",
      tips: ["黄昏与清晨光线最美、人最少", "桥上人多，注意随身财物防扒手"]
    },
    david: {
      desc: "学院美术馆镇馆之宝——米开朗基罗 26 岁完成的大理石杰作《大卫》（高 5.17m）真迹，陈列于专属穹顶厅，另有其「未完成的奴隶」系列。",
      tips: ["佛罗伦萨最难抢的票，强烈建议提前 4–6 周官网预约", "周一闭馆；周日开放但 17:30 停止入场", "只认官方票务，站外「代购／折扣票」多为假票"]
    },
    campanile: {
      desc: "大教堂广场旁的哥特式钟楼，由画家乔托设计，彩色大理石镶嵌，414 级登顶可平视布鲁内莱斯基穹顶。",
      tips: ["含在大教堂联票（Brunelleschi / Giotto Pass）内", "与穹顶同为爬楼梯，建议错开体力，二选一登顶亦可"]
    },
    signoria: {
      desc: "佛罗伦萨政治中心，露天雕塑博物馆——韦奇奥宫、海神喷泉、大卫复制像与佣兵凉廊群雕环绕。",
      tips: ["广场免费开放，雕塑可随意欣赏拍照", "周边餐厅咖啡含座位费，注意账单"]
    },
    santacroce: {
      desc: "世界最大的方济各会教堂，米开朗基罗、伽利略、马基雅维利、罗西尼等名人长眠于此，被誉为「意大利先贤祠」。",
      tips: ["可现场购票，旺季排队约 15–20 分钟", "教堂着装需过肩遮膝"]
    },
    piazzale: {
      desc: "俯瞰佛罗伦萨全景的最佳观景台，可一览阿诺河、老桥与大教堂穹顶，落日时整座红顶古城被镀上金光——本程浪漫高光。",
      tips: ["日落前 1 小时到占机位", "可继续向上步行至圣米尼亚托大殿，更高更静、黄昏有修士唱诗", "上山可乘 12/13 路公交或步行约 20 分钟"]
    },
    mercato: {
      desc: "圣洛伦佐铁艺玻璃市场，一楼生鲜熟食、二楼美食广场，牛肚包（Lampredotto）、松露意面、奶酪火腿任点。",
      tips: ["二楼美食广场人均 €20–30，性价比高", "一楼周边露天摊位注意比价与扒手"]
    },
    pitti: {
      desc: "美第奇家族的宏伟宫殿，帕拉蒂纳美术馆藏拉斐尔、提香真迹，金碧辉煌的宫廷厅室本身即看点。",
      tips: ["提前 1–2 周购票即可，旺季排队约 20–30 分钟", "门票通常含波波里花园，可一并游览"]
    },
    boboli: {
      desc: "意式园林典范，喷泉、柏树林荫道与古典雕塑层叠铺展于山坡，高处可俯瞰佛城，适合悠闲散步。",
      tips: ["与皮蒂宫联票，夏季园内少遮荫，带水防晒", "闭园时间随季节变化，留意末次入园时间"]
    },
    santospirito: {
      desc: "布鲁内莱斯基设计的朴素杰作，所在的奥尔特拉诺（Oltrarno）区是手工艺作坊与本地小馆聚集的「河对岸」老城。",
      tips: ["立面极简、内部比例完美，值得一看", "周边皮具／香氛（如 S.M.Novella）比市区便宜，可淘手作"]
    },
    montelungo: {
      desc: "Piazzale Montelungo，紧邻 SMN 火车站的旅游大巴集合点，佛罗伦萨出发的托斯卡纳一日团多在此上/下车。",
      tips: ["从圣十字区酒店步行约 20 分钟或打车几分钟", "建议提前 10 分钟到，认准团社举牌/车牌", "回程约 19:30–20:00 在此附近下车"]
    },
    montalcino: {
      desc: "蒙塔奇诺（Montalcino），世界名酒 Brunello di Montalcino 的发源山城，中世纪要塞居高临下，俯瞰瓦尔多尔恰起伏的葡萄园与柏树山丘。",
      tips: ["要塞城墙可登高远眺", "小城遍布 Brunello 酒窖与熟食店", "石板陡坡多，穿舒适鞋"]
    },
    brunello_temple: {
      desc: "Brunello 圣殿（Tempio del Brunello），由古教堂改建的 Brunello 主题空间，团餐在此享用托斯卡纳美食并品鉴 3 款 Brunello 红酒。",
      tips: ["团费通常已含午餐 + 品酒", "空腹品酒易醉，配餐慢饮", "喜欢的酒可现场买，注意液体托运限制"]
    },
    santantimo: {
      desc: "圣安蒂莫修道院（Abbazia di Sant'Antimo），坐落于橄榄林与丘陵间的 12 世纪罗马式古修道院，静谧空灵，是瓦尔多尔恰的经典人文一站。",
      tips: ["内部庄严，参观请保持安静、着装得体", "四周田园风光极适合拍照", "偶有修士素歌，遇上是加分"]
    },
    pienza: {
      desc: "皮恩扎（Pienza），UNESCO 世界遗产、文艺复兴「理想之城」规划典范，主教座堂与庇护二世广场小巧精致，城边步道俯瞰瓦尔多尔恰明信片般的柏树山丘。",
      tips: ["名产佩科里诺（Pecorino di Pienza）羊奶酪，可尝可买", "沿城墙观景步道走一圈，黄昏最出片", "小城步行可逛完，留时间坐下喝杯咖啡"]
    },
    lucerne: {
      desc: "卡佩尔廊桥始建于 1333 年，是欧洲最古老的有顶木桥，桥身彩绘历史画作，八角水塔曾作监狱与宝库，是卢塞恩的象征。",
      tips: ["黄昏花桥与水塔最上镜", "沿罗伊斯河两岸老城彩绘山墙房可一并散步"]
    },
    luzern: {
      desc: "罗伊斯河畔保存完好的中世纪老城，彩绘外墙、鹅卵石广场与瑞士手表／军刀名店云集。",
      tips: ["手表／纪念品店周日多营业", "Coop／Migros 超市补给可省下不少餐费"]
    },
    pilatus: {
      desc: "卢塞恩的守护山（2132m），乘世界最陡（48°）齿轨火车上山，山顶 360° 俯瞰四森林州湖与阿尔卑斯群峰。游船＋齿轨＋缆车串成经典「金色环游」。",
      tips: ["STP 持票齿轨享 5 折，缆车／游船免费", "山顶冷风大，务必带厚外套", "十一期间码头／缆车提前 15–30 分钟排队"]
    },
    lion: {
      desc: "为纪念 1792 年保卫法国王室阵亡的瑞士雇佣兵而凿于岩壁的垂死狮子像，马克·吐温誉为「世界上最哀伤、最动人的石雕」。",
      tips: ["免费开放，旁边即冰川公园（需另购票）", "清晨人少，适合静观"]
    },
    musegg: {
      desc: "卢塞恩保存最完整的中世纪城墙，9 座古塔中数座可免费登顶，墙上古钟楼的钟比全城早走一分钟。",
      tips: ["城墙与塔楼免费，开放季通常 4–11 月", "登塔俯瞰老城红顶与湖光，几乎无人"]
    },
    interlaken: {
      desc: "夹在图恩湖与布里恩茨湖之间的度假小镇，荷黑马特（Höhematte）大草坪正对少女峰三姐妹，是探索少女峰地区的门户。",
      tips: ["镇上物价高，可在超市补给", "哈德库尔姆（Harder Kulm）缆车上山可俯瞰双湖全景"]
    },
    jungfrau: {
      desc: "从因特拉肯荷黑马特草坪与何维克街，可一线望见艾格（Eiger）、僧侣（Mönch）、少女（Jungfrau）三峰并立的经典画面。",
      tips: ["天气晴好时三峰直接入镜，是黄金拍照点", "山顶天气多变，出发前查 Jungfrau 官网实时天气"]
    },
    brienzersee: {
      desc: "因特拉肯以东的翡翠绿湖泊，湖水因冰川细沙呈梦幻松石色，沿岸有 Giessbach 瀑布与木雕小镇布里恩茨。",
      tips: ["STP 游船全程免费，东站步行 5 分钟可达湖边", "晴天上午光线下湖色最艳"]
    },
    thun: {
      desc: "因特拉肯以西的图恩湖，湖畔图恩老城有中世纪城堡与带顶木桥，湖水清澈，游船可往伯尔尼方向。",
      tips: ["STP 含游船，可单程乘船、另一程乘火车", "与布里恩茨湖湖色不同，可各看一眼对比"]
    },
    grindelwald: {
      desc: "艾格北壁脚下的高山度假村，是格林德瓦–First 缆车起点。First 山（2168m）有悬崖玻璃步道、高空飞索与通往 Bachalpsee 的徒步线，性价比高于少女峰。",
      tips: ["First 缆车 STP 享 50% 折扣（约 CHF40/人），现场购票", "建议 9:00 前到缆车站，排队最短", "住格林德瓦一晚可避开人潮、从缆车站直接出发"]
    },
    bachalpsee: {
      desc: "First 山顶徒步约 45 分钟可达的明镜高山湖，晴朗无风时完美倒映施雷克峰与少女峰群，是格林德瓦最美徒步线的终点。",
      tips: ["平坦山路单程约 45 分钟，运动鞋即可", "清晨无风时倒影最佳；山区天气多变，带防风层"]
    },
    bahnhofstrasse: {
      desc: "苏黎世的世界级购物大街，从中央站延伸至苏黎世湖，云集名表、奢侈品与百货，地下还「藏」着银行金库。",
      tips: ["周日商店多关门，购物安排在工作日", "满约 CHF300 可办退税，离境机场盖章"]
    },
    zurich: {
      desc: "利马特河两岸的苏黎世老城，双塔大教堂（Grossmünster）、林登霍夫山丘与湖滨步道串联；苏黎世湖畔可看天鹅与晚霞。",
      tips: ["老城步行即可逛遍，石板路穿舒适鞋", "湖边黄昏散步是告别瑞士的好收尾"]
    },
    niederdorf: {
      desc: "利马特河东岸的 Niederdorf 是苏黎世最热闹的步行老城区，鹅卵石小巷里满是小店、咖啡馆与餐厅，夜晚氛围尤佳。",
      tips: ["巷弄狭窄，留意自行车与电车", "周日餐厅照常，但商店多休"]
    },
    scala: {
      desc: "世界顶级歌剧殿堂 La Scala 所在的斯卡拉广场，广场中央立达·芬奇雕像，与大教堂由长廊相连。",
      tips: ["不进场也可在广场打卡；参观博物馆或看演出需另购票", "演出季常有正装要求"]
    },
    castello: {
      desc: "米兰公爵的红砖斯福尔扎城堡，达·芬奇曾参与装饰设计，内有多座博物馆（藏米开朗基罗未竟之作《隆达尼尼圣殇》），后接森皮奥内公园。",
      tips: ["城堡庭院免费进入，博物馆需购票", "与森皮奥内公园连成一片，适合午后散步"]
    },
    navigli: {
      desc: "达·芬奇参与设计的米兰古运河区，沿河酒吧与餐厅林立，是当地人傍晚开胃酒（Aperitivo）与夜生活的聚集地。",
      tips: ["傍晚 Aperitivo 时段氛围最佳（一杯酒含自助小食）", "河边人多，注意随身物品"]
    },

    /* —— 车站 / 机场 —— */
    milano_centrale: {
      desc: "米兰中央车站，1931 年落成的宏伟石造车站，意大利北部铁路枢纽，Frecciarossa 高铁与机场快线 Malpensa Express 在此始发。",
      tips: ["机场快线 Malpensa Express 在地下层，认「Aeroporto」指示", "高铁须提前订票；站内大屏看站台(binario)，常在开车前约 10 分钟才显示", "大厅人流密集，看好行李防扒手"]
    },
    firenze_smn: {
      desc: "佛罗伦萨新圣母玛利亚车站（Santa Maria Novella, SMN），佛城主火车站，紧邻 SMN 教堂，步行即达老城核心。",
      tips: ["出站正对 SMN 教堂广场，过广场即进老城", "去米兰/卢塞恩的高铁在此发车，留意 binario 站台号", "站内出租按官方排队点乘车，谨防拉客绕路"]
    },
    luzern_bahnhof: {
      desc: "卢塞恩火车站，紧靠罗伊斯河口与琉森湖，门前石拱门为旧站遗迹，出站即见卡佩尔廊桥与老城。",
      tips: ["出站左前方步行约 3–5 分钟到廊桥/老城", "湖滨游船码头就在站旁，去皮拉图斯/各湖区在此乘船", "GoldenPass 等观景列车在此发车，记得提前预约座位"]
    },
    interlaken_ost: {
      desc: "因特拉肯东站（Interlaken Ost），前往少女峰地区（格林德瓦/劳特布龙嫩）与布里恩茨湖游船的换乘核心。",
      tips: ["上少女峰/First 的山区列车均从东站发车，不是西站(West)", "布里恩茨湖游船码头紧邻东站", "黄金周班次紧张，先在站内确认后续段时刻与站台"]
    },
    zurich_hb: {
      desc: "苏黎世中央车站（Zürich HB），瑞士最大火车站，地下多层站台，直达苏黎世机场仅约 10–13 分钟。",
      tips: ["去机场 ZRH 的列车在地下层，认「Flughafen」方向", "站台层次多，预留找站台时间", "站内有大型购物廊，返程前可顺道购物"]
    },
    mxp: {
      desc: "米兰马尔彭萨机场（MXP），米兰主要国际机场，国泰 CX233 落地于此（T1），乘 Malpensa Express 约 50 分钟进城。",
      tips: ["机场快线站在航站楼地下，跟「Train / Malpensa Express」指示", "入境申根盖章，备好酒店单/回程票以备查问", "Day1 为凌晨航班，建议深圳前一晚过境香港"]
    },
    zrh: {
      desc: "苏黎世机场（ZRH），瑞士最大机场，国泰 CX382 由此返程；从苏黎世中央站乘车约 10–13 分钟直达。",
      tips: ["国际航班建议起飞前 2.5 小时到", "退税(Global Blue)须离境前办：先自助机扫描再海关盖章，预留 30 分钟", "液体 100ml 限制，纪念品酒类放托运"]
    },

    /* —— 酒店 —— */
    hotel_colombia: {
      desc: "米兰住宿 Hotel Charly（1 晚），位于中央车站东侧 Via Settala 76，步行约 5 分钟到 Milano Centrale，地铁直达大教堂。",
      tips: ["确认号 5210.693.119 / PIN 4834（Booking 已确认）", "出中央站后往 Via Settala 方向步行约 5–8 分钟", "不含早餐，周边餐馆/超市较多"]
    },
    hotel_opera: {
      desc: "佛罗伦萨住宿 Residenza Marchesi Pontenani（3 晚），圣十字(Santa Croce)老城区的公寓式 Studio（带厨房、king 大床），位于 Via delle Casine 6，离圣十字圣殿约 3 分钟、Duomo 约 10 分钟。",
      tips: ["确认号 6621.705.192 / PIN 9137（入住前 14 天可免费取消）", "⚠️ 入口在拐角的 Via Tripoli，不是大门地址；到店前请先告知预计抵达时间", "不含早但有厨房，可超市自理；入住 15:00–18:30，晚到需联系property", "到 SMN 火车站步行约 18–20 分钟，拖箱建议打车（约 €12–15）"]
    },
    hotel_hofgarten: {
      desc: "卢塞恩住宿 Hotel Hofgarten Luzern（2 晚），位于老城 Stadthofstrasse 14，紧邻霍夫教堂，步行约 8 分钟到卡佩尔廊桥，由历史建筑改造，含早餐。",
      tips: ["确认号 6435.148.028（含早，已确认）", "出卢塞恩站沿湖往老城方向步行约 8–10 分钟即到", "Coop／Migros 超市补给可省餐费；周日商店多休，购物趁早"]
    },
    hotel_bernerhof: {
      desc: "因特拉肯住宿 Essential by Dorint（2 晚），位于西站旁 Rugenparkstrasse 8–10，因特拉肯西站步行约 1 分钟，现代化酒店含早餐，夹在图恩湖与布里恩茨湖之间。",
      tips: ["确认号 5918.458.946 / PIN 4019（含早，已确认 10/5–10/7）", "⚠️ 酒店在西站(West)，但金色山口列车到东站(Ost)、First登山与布里恩茨湖游船均从东站出发——东西相隔一站约3分钟(STP免费)", "Day8 上山日行李可留店，回来直接进房"]
    },
    hotel_wellenberg: {
      desc: "苏黎世住宿 Hotel St. Josef（1 晚），位于老城 Hirschengraben 64/68，近中央站与班霍夫大街，步行 5–10 分钟可达老城与湖畔，含早餐、服务口碑极佳（员工分 9.8）。",
      tips: ["确认号 6622.821.467 / PIN 9642（含早，已确认）", "从苏黎世中央站(HB)步行约 10 分钟（有小上坡，拖箱走坡缓一侧）", "临 Hirschengraben 主街，可备注要安静/背街房间"]
    },

    /* —— 码头 / 缆车换乘点 —— */
    pier_luzern: {
      desc: "卢塞恩湖滨码头（Bahnhofquai），紧邻火车站，是琉森湖各航线（往皮拉图斯/瑞吉/各湖镇）的乘船点。",
      tips: ["STP 持票可直接上船", "十一期间提前约 15 分钟到占座", "认船班目的地（如 Alpnachstad）别上错线"]
    },
    alpnachstad: {
      desc: "Alpnachstad，皮拉图斯齿轨火车的山脚起点站，湖船在此靠岸换乘齿轨上山。",
      tips: ["世界最陡(48°)齿轨在此上山，STP 享 5 折", "船到站后跟人流换乘齿轨，班次衔接较紧凑"]
    },
    kriens: {
      desc: "Kriens，皮拉图斯空中缆车的山脚站，从山顶乘缆车下到此处，再转巴士回卢塞恩市区。",
      tips: ["缆车下到 Kriens 后乘 1 路巴士回市区（STP 含）", "金色环游的下山线终点"]
    },
    first_base: {
      desc: "格林德瓦 First 缆车山脚站，从格林德瓦村步行约 5 分钟可达，分段缆车约 25 分钟上 First（2168m）。",
      tips: ["STP 缆车享 50% 折扣，现场购票", "9:00 前到排队最短", "山顶有悬崖步道与高空飞索，量力选择"]
    }
  },

  /* ── 地图城市标记 ── */
  cities: [
    { id:"milan",      name:"米兰",    nameEn:"Milano",     country:"italy", color:"#00c896", latlng:[45.4642,9.1900],  days:[1,2]   },
    { id:"florence",   name:"佛罗伦萨", nameEn:"Firenze",    country:"italy", color:"#00c896", latlng:[43.7696,11.2558], days:[2,3,4] },
    { id:"lucerne",    name:"卢塞恩",  nameEn:"Luzern",     country:"swiss", color:"#dc3232", latlng:[47.0502,8.3093],  days:[5,6]   },
    { id:"interlaken", name:"因特拉肯", nameEn:"Interlaken", country:"swiss", color:"#dc3232", latlng:[46.6863,7.8632],  days:[7,8]   },
    { id:"zurich",     name:"苏黎世",  nameEn:"Zürich",     country:"swiss", color:"#dc3232", latlng:[47.3769,8.5417],  days:[9,10]  }
  ],

  /* ── 地图每日路线 ── */
  dayRoutes: {
    "1": {
      fitBounds: [[45.40,8.65],[45.70,9.28]],
      waypoints: [
        { id:"mxp",      name:"MXP 马尔彭萨机场", latlng:[45.6306,8.7231], img:"images/mxp.jpg" },
        { id:"centrale", name:"米兰中央站",        latlng:[45.4854,9.2045], img:"images/milano_centrale.jpg" },
        { id:"hotel_mi", name:"Hotel Charly",   latlng:[45.4810,9.2072], info:"hotel_colombia" },
        { id:"duomo_mi", name:"米兰大教堂",        latlng:[45.4641,9.1919], img:"images/milan.jpg" },
        { id:"galleria", name:"埃马努埃莱二世长廊", latlng:[45.4654,9.1897], img:"images/galleria.jpg" },
        { id:"scala",    name:"斯卡拉广场",        latlng:[45.4675,9.1895], img:"images/scala.jpg" },
        { id:"castello", name:"斯福尔扎城堡",      latlng:[45.4706,9.1796], img:"images/castello.jpg" },
        { id:"navigli",  name:"Navigli 运河区",   latlng:[45.4495,9.1776], img:"images/navigli.jpg" }
      ],
      legs: [
        { from:"mxp",      to:"centrale", type:"train",  desc:"Malpensa Express · 约52分 · €13/人" },
        { from:"centrale", to:"hotel_mi", type:"walk",   desc:"步行约5分钟" },
        { from:"hotel_mi", to:"duomo_mi", type:"metro",  desc:"地铁M3 Centrale→Duomo · €2.2" },
        { from:"duomo_mi", to:"galleria", type:"walk",   desc:"步行1分钟" },
        { from:"galleria", to:"scala",    type:"walk",   desc:"步行2分钟" },
        { from:"scala",    to:"castello", type:"walk",   desc:"步行约12分钟" },
        { from:"castello", to:"navigli",  type:"walk",   desc:"步行约25分钟 或地铁M1" }
      ]
    },
    "2": {
      fitBounds: [[43.70,9.10],[45.55,11.35]],
      waypoints: [
        { id:"hotel_mi2", name:"Hotel Charly",   latlng:[45.4810,9.2072], info:"hotel_colombia" },
        { id:"centrale2", name:"米兰中央站",        latlng:[45.4854,9.2045], img:"images/milano_centrale.jpg" },
        { id:"smn",       name:"佛罗伦萨 SMN 站",  latlng:[43.7759,11.2482], img:"images/firenze_smn.jpg" },
        { id:"opera_bb",  name:"Residenza Marchesi Pontenani", latlng:[43.7671,11.2651], info:"hotel_opera" },
        { id:"accademia", name:"学院美术馆（大卫）", latlng:[43.7767,11.2589], img:"images/david.jpg" },
        { id:"mercato2",  name:"中央市场（路过·可选）", latlng:[43.7770,11.2531], img:"images/mercato.jpg" },
        { id:"duomo_fi",  name:"圣母百花大教堂广场", latlng:[43.7730,11.2560], img:"images/florence.jpg" }
      ],
      legs: [
        { from:"hotel_mi2", to:"centrale2", type:"metro",     desc:"地铁M1/M3 回中央站" },
        { from:"centrale2", to:"smn",       type:"highspeed", desc:"Italo 9919 · 08:40发 · 约1h55 · 10:35到" },
        { from:"smn",       to:"opera_bb",  type:"walk",      desc:"先到酒店放行李 · 约18分钟（提前联系房东确认能否早放；不行则SMN寄存）" },
        { from:"opera_bb",  to:"accademia", type:"walk",      desc:"步行约18分钟（看大卫）" },
        { from:"accademia", to:"mercato2",  type:"walk",      desc:"路过中央市场 · 步行约6分钟（看时间决定进不进）" },
        { from:"mercato2",  to:"duomo_fi",  type:"walk",      desc:"步行约7分钟" },
        { from:"duomo_fi",  to:"opera_bb",  type:"walk",      desc:"晚餐后返回酒店 · 步行约12分钟" }
      ]
    },
    "3": {
      fitBounds: [[42.98,11.23],[43.80,11.70]],
      waypoints: [
        { id:"florence_dep", name:"Piazzale Montelungo（集合上车）", latlng:[43.7772,11.2470], info:"montelungo" },
        { id:"montalcino_3", name:"蒙塔奇诺 Montalcino",           latlng:[43.0576,11.4894], info:"montalcino" },
        { id:"brunello_3",   name:"Brunello 圣殿（品酒午餐）",      latlng:[43.0560,11.4890], info:"brunello_temple" },
        { id:"santantimo_3", name:"圣安蒂莫修道院",                 latlng:[43.0131,11.5330], info:"santantimo" },
        { id:"pienza_3",     name:"皮恩扎 Pienza",                 latlng:[43.0785,11.6786], info:"pienza" }
      ],
      legs: [
        { from:"florence_dep", to:"montalcino_3", type:"bus", desc:"旅游大巴南下 · 约2小时" },
        { from:"montalcino_3", to:"brunello_3",   type:"bus", desc:"车程约15分 · Brunello 品酒午餐" },
        { from:"brunello_3",   to:"santantimo_3", type:"bus", desc:"车程约20–40分 · 柏树山丘" },
        { from:"santantimo_3", to:"pienza_3",     type:"bus", desc:"车程约40分" },
        { from:"pienza_3",     to:"florence_dep", type:"bus", desc:"大巴返回佛罗伦萨 · 约2小时" }
      ]
    },
    "4": {
      fitBounds: [[43.758,11.240],[43.782,11.268]],
      waypoints: [
        { id:"hotel_fi4", name:"Residenza Marchesi Pontenani", latlng:[43.7671,11.2651], info:"hotel_opera" },
        { id:"uffizi",  name:"乌菲兹美术馆",              latlng:[43.7682,11.2553], img:"images/uffizi.jpg" },
        { id:"pitti",   name:"皮蒂宫",                   latlng:[43.7655,11.2502], img:"images/pitti.jpg" },
        { id:"boboli",  name:"波波里花园",                latlng:[43.7633,11.2497], img:"images/boboli.jpg" },
        { id:"spirito", name:"圣神大殿区",                latlng:[43.7667,11.2493], img:"images/santospirito.jpg" },
        { id:"piazzale4",name:"米开朗基罗广场（机动日落）", latlng:[43.7629,11.2646], img:"images/piazzale.jpg" }
      ],
      legs: [
        { from:"hotel_fi4", to:"uffizi", type:"walk", desc:"早上从酒店出发 · 步行约10分钟" },
        { from:"uffizi",  to:"pitti",   type:"walk", desc:"过老桥到奥尔特拉诺 · 步行约12分钟" },
        { from:"pitti",   to:"boboli",  type:"walk", desc:"步行2分钟（同一建筑群）" },
        { from:"boboli",  to:"spirito", type:"walk", desc:"步行约5分钟（含就近午餐）" },
        { from:"spirito", to:"piazzale4",type:"walk", desc:"（机动·天气好）上山看日落 · 步行约15分钟" },
        { from:"piazzale4",to:"hotel_fi4",type:"walk", desc:"看完日落返回酒店 · 步行约18分钟" }
      ]
    },
    "5": {
      fitBounds: [[43.70,8.20],[47.15,11.35]],
      waypoints: [
        { id:"smn5",         name:"佛罗伦萨 SMN 站",    latlng:[43.7759,11.2482], img:"images/firenze_smn.jpg" },
        { id:"centrale5",    name:"米兰中央站",          latlng:[45.4854,9.2045], img:"images/milano_centrale.jpg" },
        { id:"lucerne_st",   name:"卢塞恩站",            latlng:[47.0505,8.3101], img:"images/luzern_bahnhof.jpg" },
        { id:"hotel_lz",     name:"Hotel Hofgarten",     latlng:[47.0538,8.3122], info:"hotel_hofgarten" },
        { id:"kapellbrucke", name:"卡佩尔廊桥",          latlng:[47.0516,8.3074], img:"images/lucerne.jpg" },
        { id:"altstadt_lz",  name:"老城广场",            latlng:[47.0503,8.3054], img:"images/luzern.jpg" }
      ],
      legs: [
        { from:"smn5",      to:"centrale5",  type:"highspeed",     desc:"Italo 9904 · 07:25发 · 约1h55 · 09:20到" },
        { from:"centrale5", to:"lucerne_st", type:"international", desc:"EuroCity 国际列车 · 约3h40 · 过圣哥达隧道" },
        { from:"lucerne_st",to:"hotel_lz",   type:"walk",          desc:"步行约8分钟到酒店放行李" },
        { from:"hotel_lz",  to:"kapellbrucke",type:"walk",         desc:"步行约8分钟" },
        { from:"kapellbrucke",to:"altstadt_lz",type:"walk",        desc:"步行3分钟" }
      ]
    },
    "6": {
      fitBounds: [[46.90,8.22],[47.10,8.36]],
      waypoints: [
        { id:"pier_lz",         name:"卢塞恩码头",          latlng:[47.0496,8.3011], info:"pier_luzern" },
        { id:"alpnachstad",     name:"Alpnachstad",          latlng:[46.9411,8.2841], info:"alpnachstad" },
        { id:"pilatus",         name:"皮拉图斯峰顶 2132m",  latlng:[46.9790,8.2525], img:"images/pilatus.jpg" },
        { id:"kriens",          name:"Kriens",               latlng:[47.0338,8.2827], info:"kriens" },
        { id:"lion",            name:"狮子纪念碑",           latlng:[47.0584,8.3143], img:"images/lion.jpg" },
        { id:"museggmauer",     name:"城墙 Museggmauer",     latlng:[47.0578,8.3087], img:"images/musegg.jpg" }
      ],
      legs: [
        { from:"pier_lz",     to:"alpnachstad", type:"boat",      desc:"游船 · 约1小时 · STP免费" },
        { from:"alpnachstad", to:"pilatus",     type:"funicular", desc:"世界最陡齿轨火车 · STP 5折" },
        { from:"pilatus",     to:"kriens",      type:"cable_car", desc:"龙脊缆车下山" },
        { from:"kriens",      to:"lion",        type:"bus",       desc:"巴士回市区" },
        { from:"lion",        to:"museggmauer", type:"walk",      desc:"步行约8分钟" }
      ]
    },
    "7": {
      fitBounds: [[46.60,7.78],[47.10,8.36]],
      waypoints: [
        { id:"luzern_st7",   name:"卢塞恩站",            latlng:[47.0505,8.3101], img:"images/luzern_bahnhof.jpg" },
        { id:"interlaken_7", name:"因特拉肯东站",         latlng:[46.6912,7.8691], img:"images/interlaken.jpg" },
        { id:"hotel_ber",    name:"Essential by Dorint",     latlng:[46.6831,7.8503], info:"hotel_bernerhof" },
        { id:"hoeheweg_7",   name:"何维克街 · 荷黑马特草坪",latlng:[46.6851,7.8576], img:"images/jungfrau.jpg" },
        { id:"brienzersee_7",name:"布里恩茨湖畔",        latlng:[46.6980,7.9020], img:"images/brienzersee.jpg" }
      ],
      legs: [
        { from:"luzern_st7",  to:"interlaken_7",  type:"scenic_train", desc:"GoldenPass 金色山口观景列车 · 约1h50 · STP 免费" },
        { from:"interlaken_7",to:"hotel_ber",      type:"walk",         desc:"步行约5分钟" },
        { from:"hotel_ber",   to:"hoeheweg_7",     type:"walk",         desc:"步行约8分钟" },
        { from:"hoeheweg_7",  to:"brienzersee_7",  type:"walk",         desc:"步行约10分钟至湖边" }
      ]
    },
    "8": {
      fitBounds: [[46.60,7.82],[46.70,8.10]],
      waypoints: [
        { id:"interlaken_8",  name:"因特拉肯东站（出发）",   latlng:[46.6912,7.8691], img:"images/interlaken_ost.jpg" },
        { id:"grindelwald_8", name:"格林德瓦站",             latlng:[46.6241,8.0341], img:"images/grindelwald.jpg" },
        { id:"first_bot_8",   name:"First 缆车站",           latlng:[46.6248,8.0413], info:"first_base" },
        { id:"first_top_8",   name:"First 峰顶 2168m",       latlng:[46.6556,8.0461], img:"images/grindelwald.jpg" },
        { id:"bachalpsee",    name:"Bachalpsee 高山湖",      latlng:[46.6648,8.0622], img:"images/bachalpsee.jpg" },
        { id:"brienzersee_8", name:"布里恩茨湖畔（傍晚）",   latlng:[46.6980,7.9020], img:"images/brienzersee.jpg" }
      ],
      legs: [
        { from:"interlaken_8", to:"grindelwald_8", type:"train",    desc:"火车 · 约35分 · STP免费（行李留酒店）" },
        { from:"grindelwald_8",to:"first_bot_8",   type:"walk",     desc:"步行5分钟至缆车站" },
        { from:"first_bot_8",  to:"first_top_8",   type:"cable_car",desc:"First 缆车 · 约25分 · STP 5折" },
        { from:"first_top_8",  to:"bachalpsee",    type:"walk",     desc:"Bachalpsee 徒步 · 约45分单程" },
        { from:"bachalpsee",   to:"first_top_8",   type:"walk",     desc:"返回 First 缆车站" },
        { from:"first_top_8",  to:"grindelwald_8", type:"cable_car",desc:"缆车下山 · 约25分" },
        { from:"grindelwald_8",to:"brienzersee_8", type:"train",    desc:"火车35分→因特拉肯 · STP免费 · 步行至湖边" }
      ]
    },
    "9": {
      fitBounds: [[46.62,7.80],[47.43,8.61]],
      waypoints: [
        { id:"interlaken_9",  name:"因特拉肯东站（游船出发）", latlng:[46.6912,7.8691], img:"images/interlaken_ost.jpg" },
        { id:"brienz",        name:"布里恩茨（游湖终点）",     latlng:[46.7577,8.0331], img:"images/brienzersee.jpg" },
        { id:"zurich_hb",     name:"苏黎世中央站 HB",         latlng:[47.3779,8.5400], img:"images/zurich_hb.jpg" },
        { id:"wellenberg",    name:"Hotel St. Josef",latlng:[47.3758,8.5440], info:"hotel_wellenberg" },
        { id:"bahnhofstr",    name:"班霍夫大街",      latlng:[47.3726,8.5353], img:"images/bahnhofstrasse.jpg" },
        { id:"niederdorf",    name:"老城 Niederdorf", latlng:[47.3727,8.5434], img:"images/niederdorf.jpg" },
        { id:"zurichsee",     name:"苏黎世湖",        latlng:[47.3554,8.5490], img:"images/zurich.jpg" }
      ],
      legs: [
        { from:"interlaken_9",to:"brienz",      type:"boat",  desc:"布里恩茨湖游船 · 约1h · STP免费 · 翡翠绿湖水" },
        { from:"brienz",      to:"interlaken_9",type:"train", desc:"布里恩茨→因特拉肯东站 · 约20分 · STP免费" },
        { from:"interlaken_9",to:"zurich_hb",   type:"train", desc:"IC 城际 · 约2h · STP · 经伯尔尼" },
        { from:"zurich_hb",   to:"wellenberg",  type:"walk",  desc:"步行约7分钟" },
        { from:"wellenberg",  to:"bahnhofstr",  type:"walk",  desc:"步行约5分钟" },
        { from:"bahnhofstr",  to:"niederdorf",  type:"walk",  desc:"步行约8分钟" },
        { from:"niederdorf",  to:"zurichsee",   type:"walk",  desc:"步行约15分钟" }
      ]
    },
    "10": {
      fitBounds: [[47.34,8.49],[47.48,8.62]],
      waypoints: [
        { id:"wellenberg10", name:"Hotel St. Josef",    latlng:[47.3758,8.5440], info:"hotel_wellenberg" },
        { id:"zurichsee10",  name:"苏黎世湖 · 老城漫步", latlng:[47.3554,8.5490], img:"images/zurich.jpg" },
        { id:"zurich_hb10",  name:"苏黎世中央站 HB",     latlng:[47.3779,8.5400], img:"images/zurich_hb.jpg" },
        { id:"zrh",          name:"苏黎世机场 ZRH",      latlng:[47.4508,8.5617], img:"images/zrh.jpg" }
      ],
      legs: [
        { from:"wellenberg10",to:"zurichsee10", type:"walk",  desc:"步行老城最后漫步" },
        { from:"zurichsee10", to:"zurich_hb10", type:"walk",  desc:"步行约15分钟" },
        { from:"zurich_hb10", to:"zrh",         type:"train", desc:"直达火车 · 约10-13分 · STP" }
      ]
    }
  },

  /* ── 每日行程（地图面板 schedule + 路书 activities 合并） ── */
  days: [
    {
      day:1, date:"9/29 周二", city:"milan", title:"抵达米兰",
      theme:"抵达米兰 · 感受时尚古城",
      weekday:"周二",
      dayWeather:{ icon:"partlyCloudy", high:22, low:14 },
      note:"⚠️ 长途红眼刚落地，别排太满；地铁单程€2.2",
      schedule:[
        { time:"08:00", text:"抵达 MXP T1 · 入境取行李", pdf:[{ name:"🛂 过关行程单", url:"pdfs/border-itinerary.pdf" }], next:{ type:"train", desc:"Malpensa Express · 约52分 · €13/人" } },
        { time:"09:10", text:"乘 Malpensa Express → 米兰中央站", next:{ type:"walk", desc:"步行约5分钟" } },
        { time:"10:15", text:"寄存行李 Hotel Charly", next:{ type:"metro", desc:"地铁M3 Centrale→Duomo · €2.2" } },
        { time:"10:30", text:"登米兰大教堂 + 屋顶露台", pdf:[{ name:"🎫 大教堂门票", url:"pdfs/ticket-duomo-milano.pdf" }], next:{ type:"walk", desc:"步行1分钟" } },
        { time:"12:30", text:"埃马努埃莱二世长廊午餐 · 斯卡拉广场", next:{ type:"walk", desc:"步行约12分钟" } },
        { time:"14:00", text:"斯福尔扎城堡 · 森皮奥内公园", next:{ type:"walk", desc:"步行约25分钟" } },
        { time:"15:00", text:"Hotel Charly 正式入住", pdf:[{ name:"🏨 酒店确认单", url:"pdfs/hotel-milan.pdf" }] },
        { time:"16:00", text:"（可选）Navigli 运河区散步", next:{ type:"metro", desc:"地铁回中央站" } },
        { time:"晚上",  text:"老城晚餐（意面/烩饭/炖牛膝）" }
      ],
      activities:[
        { time:"08:00", name:"抵达 MXP T1 · 入境取行李", note:"国泰 CX233（香港00:50起飞）直飞落地约08:00 | 深圳需前一晚经跨境巴士/口岸大巴过境至香港机场，预留充足过关时间 | 入境申根盖章，备好酒店单/回程票以备询问", transport:"落地", pdf:[{ name:"🛂 过关行程单", url:"pdfs/border-itinerary.pdf" }] },
        { time:"09:10", name:"乘 Malpensa Express → 米兰中央站", duration:"52分钟", cost:208, transport:"机场快线", note:"€13/人，车站直连机场T1，每30分钟一班", booking:[{ name:"官网购票", url:"https://www.malpensaexpress.it/en/" }] },
        { time:"10:15", name:"寄存行李 · Hotel Charly", note:"步行5分钟，14:00起正式入住", transport:"步行5分钟" },
        { time:"10:30", name:"登米兰大教堂 + 屋顶露台", img:"images/milan.jpg", duration:"2小时", cost:240, note:"屋顶可眺望阿尔卑斯山脉，已购票凭 PDF 直接入场，9:00开门前15分钟到场", pdf:[{ name:"🎫 大教堂门票", url:"pdfs/ticket-duomo-milano.pdf" }] },
        { time:"12:30", name:"午餐", meal:{ name:"埃马努埃莱二世长廊周边", cuisine:"意大利菜", perPerson:50, recommended:"意面、披萨", location:"长廊内" } },
        { time:"13:30", name:"斯卡拉广场 · 斯福尔扎城堡 · 森皮奥内公园", img:"images/castello.jpg", duration:"1.5小时", cost:0, transport:"步行" },
        { time:"15:00", name:"Hotel Charly 正式入住", note:"中央站步行5分钟", pdf:[{ name:"🏨 酒店确认单", url:"pdfs/hotel-milan.pdf" }] },
        { time:"16:00", name:"（可选）Navigli 运河区漫步", img:"images/navigli.jpg", cost:0, transport:"地铁M1", note:"运河两岸酒吧林立，傍晚最有氛围" },
        { time:"19:30", name:"晚餐", meal:{ name:"老城区意大利餐厅", cuisine:"正宗意大利菜", perPerson:60, recommended:"米兰炖牛膝、意式烩饭", location:"老城" } }
      ]
    },
    {
      day:2, date:"9/30 周三", city:"milan", title:"米兰 → 佛罗伦萨",
      theme:"米兰 → 佛罗伦萨 · 学院美术馆大卫",
      weekday:"周三",
      dayWeather:{ icon:"sunny", high:23, low:15 },
      note:"务必提前订时段票、坐早班高铁提前到佛城留缓冲 | 学院美术馆周一闭馆，本程周三看《大卫》不受影响 | 中央市场顺路可选 | 🌅 米开朗基罗广场日落：D3 去托斯卡纳，改在 D2/D4 两晚挑晴天上（今晚可主排）",
      schedule:[
        { time:"08:00", text:"早餐 · 退房 · 前往米兰中央站", next:{ type:"highspeed", desc:"Italo 9919 · 08:40发 · 10:35到" } },
        { time:"08:40", text:"Italo 9919 米兰中央站 → 佛罗伦萨 SMN（10:35到）", pdf:[{ name:"🚄 高铁票", url:"pdfs/train-0930-milan-florence.pdf" }], next:{ type:"walk", desc:"到酒店寄存行李（15:00后正式入住）" } },
        { time:"10:35", text:"抵 SMN · 先到酒店放行李 · 午餐", pdf:[{ name:"🏨 酒店确认单", url:"pdfs/hotel-florence.pdf" }], next:{ type:"walk", desc:"步行约18分钟或打车去学院美术馆" } },
        { time:"14:00", text:"学院美术馆 — 看《大卫》真迹", pdf:[{ name:"🎫 学院美术馆门票", url:"pdfs/ticket-accademia.pdf" }], next:{ type:"walk", desc:"步行约6分钟" } },
        { time:"16:00", text:"（路过·看时间）中央市场美食广场", next:{ type:"walk", desc:"步行约7分钟" } },
        { time:"17:00", text:"老城漫步 · 圣母百花大教堂广场", next:{ type:"walk", desc:"步行回酒店约12分钟" } },
        { time:"18:30", text:"晚餐（Duomo 附近）· 🌅天气好可上米开朗基罗广场看日落" }
      ],
      activities:[
        { time:"08:00", name:"早餐 · 退房 · 前往米兰中央站", note:"D1已逛过米兰主要景点，今天坐早班高铁提前到佛城，给大卫留足缓冲" },
        { time:"08:40", name:"Italo 9919 → 佛罗伦萨 SMN（10:35到）", duration:"约1h55", cost:560, transport:"高铁", note:"已购票：Italo 9919，PRIMA 2车2-3座，FAST TRACK | 08:40发 10:35到，到佛城时间充裕", pdf:[{ name:"🚄 高铁票", url:"pdfs/train-0930-milan-florence.pdf" }] },
        { time:"10:35", name:"抵 SMN · 先到酒店放行李", note:"倾向先到酒店放行李——⚠️公寓15:00才入住、无24h前台，请提前用Booking联系房东确认能否提前寄放；若不行就用SMN车站KiPoint寄存（约€6），轻装看大卫", pdf:[{ name:"🏨 酒店确认单", url:"pdfs/hotel-florence.pdf" }] },
        { time:"12:00", name:"午餐（SMN / 老城）", meal:{ name:"SMN或老城小馆", cuisine:"托斯卡纳菜", perPerson:30, recommended:"帕尼尼、牛肚包", location:"车站/老城" } },
        { time:"14:00", name:"学院美术馆 — 《大卫》真迹", img:"images/david.jpg", duration:"2小时", cost:240, transport:"步行18分钟", note:"学院美术馆周一闭馆（本程周三看不受影响）| 17:30停止入场 | 已购票凭 PDF 按预约时段入场", pdf:[{ name:"🎫 学院美术馆门票", url:"pdfs/ticket-accademia.pdf" }] },
        { time:"16:00", name:"（路过·看时间）中央市场 Mercato Centrale", img:"images/mercato.jpg", cost:0, transport:"步行6分钟", note:"距大卫仅6分钟，有时间就进二楼美食广场逛吃/喝咖啡，没时间略过" },
        { time:"17:00", name:"老城漫步 · 圣母百花大教堂广场", img:"images/florence.jpg", cost:0, note:"白天先看Duomo外观与广场氛围（穹顶登顶本程已取消，D3改为托斯卡纳一日团）" },
        { time:"18:30", name:"晚餐 · Duomo 附近", meal:{ name:"老城区餐厅", cuisine:"托斯卡纳菜", perPerson:55, recommended:"T骨牛排、野猪肉面", location:"大教堂附近" }, note:"🌅 若当晚天气晴好，可饭前/饭后上米开朗基罗广场看日落（三晚机动）" }
      ]
    },
    {
      day:3, date:"10/01 周四", city:"florence", title:"托斯卡纳 · 瓦尔多尔恰一日游",
      theme:"跟团游瓦尔多尔恰 · 蒙塔奇诺 / 皮恩扎 / Brunello 品酒",
      weekday:"周四",
      dayWeather:{ icon:"sunny", high:24, low:15 },
      note:"⚠️ 今日跟团游托斯卡纳乡村，早出晚归（约7:15出发 / 19:30–20:00回）| 上车点 Piazzale Montelungo（SMN站旁，从酒店步行约20分或打车）| 穿舒适鞋、备防晒 | 佛罗伦萨登顶穹顶/圣十字本日取消，老桥&米开朗基罗广场日落已并入 D2/D4 | 🍷含 Brunello 品酒午餐，回程可小睡",
      schedule:[
        { time:"07:15", text:"Piazzale Montelungo 集合上车", ticket:true, warnText:"提前在 GetYourGuide/Viator/Klook 订好整日团", next:{ type:"bus", desc:"旅游大巴南下 · 约2小时" } },
        { time:"09:30", text:"蒙塔奇诺 Montalcino · Brunello 酒乡山城", next:{ type:"bus", desc:"车程约15分" } },
        { time:"11:00", text:"Brunello 圣殿 · Brunello 品酒 + 美食午餐", next:{ type:"bus", desc:"车程约20–40分 · 沿途柏树山丘" } },
        { time:"13:00", text:"圣安蒂莫修道院 Sant'Antimo · 罗马式古修道院", next:{ type:"bus", desc:"车程约40分" } },
        { time:"14:30", text:"皮恩扎 Pienza · UNESCO 文艺复兴古城 · 佩科里诺羊奶酪", next:{ type:"bus", desc:"大巴返回佛城 · 约2小时" } },
        { time:"19:45", text:"抵佛罗伦萨（Piazzale Montelungo 附近）", next:{ type:"walk", desc:"步行/打车回酒店" } },
        { time:"晚上",  text:"老城简单晚餐（白天已吃丰盛品酒午餐）" }
      ],
      activities:[
        { time:"07:15", name:"Piazzale Montelungo 集合 · 跟团出发", note:"上车点在 SMN 火车站旁 Piazzale Montelungo，从圣十字区酒店步行约20分或打车几分钟；建议提前10分钟到 | 全程约12小时，穿舒适鞋", transport:"旅游大巴" },
        { time:"09:30", name:"蒙塔奇诺 Montalcino", duration:"约1小时", cost:0, note:"Brunello di Montalcino 名酒发源地，中世纪山城 + 要塞，可俯瞰瓦尔多尔恰葡萄园与柏树山丘" },
        { time:"11:00", name:"Brunello 圣殿 · 品酒午餐", duration:"约1.25小时", cost:1640, note:"含托斯卡纳美食午餐 + 3款 Brunello 品鉴（团费已含，约¥820/人，两人合计约¥1640）| 空腹品酒易醉，配餐慢饮", ticketTip:"跟团费含此项；出发前订整日团即可，24小时前多可免费取消", booking:[{ name:"GetYourGuide", url:"https://www.getyourguide.com/florence-l32/val-d-orcia-cheese-and-wine-tasting-tour-t62160/" },{ name:"Viator", url:"https://www.viator.com/tours/Florence/Val-dOrcia-tour-Montalcino-Pienza-and-Montepulciano/d519-29255P69" }] },
        { time:"13:00", name:"圣安蒂莫修道院 Sant'Antimo", duration:"约1.75小时", cost:0, note:"橄榄林中的12世纪罗马式修道院，静谧空灵；周边田园风光是瓦尔多尔恰的经典画面" },
        { time:"14:30", name:"皮恩扎 Pienza", duration:"约1.75小时", cost:0, note:"UNESCO 世界遗产「理想之城」，文艺复兴规划典范；城边观景步道俯瞰瓦尔多尔恰柏树山丘；名产佩科里诺羊奶酪可尝可买" },
        { time:"19:45", name:"返回佛罗伦萨", note:"约19:30–20:00 抵 Piazzale Montelungo 附近，步行/打车回酒店", transport:"旅游大巴" },
        { time:"20:30", name:"晚餐（从简）", meal:{ name:"老城小馆", cuisine:"托斯卡纳菜", perPerson:35, recommended:"白天已丰盛，晚上轻食即可", location:"圣十字区/老城" } }
      ]
    },
    {
      day:4, date:"10/02 周五", city:"florence", title:"佛罗伦萨 美术馆日",
      theme:"佛罗伦萨美术馆日 · 乌菲兹 · 皮蒂宫",
      weekday:"周五",
      dayWeather:{ icon:"sunny", high:23, low:14 },
      note:"⚠️ 乌菲兹安检严，大背包需寄存 | 提前确认明天长途车票 | 🌅 今天在奥尔特拉诺(河南岸)收尾，上米开朗基罗广场最顺——日落机动好备选，若 D2 没看成今晚补 | 午餐已改奥尔特拉诺就近（中央市场移到D2路过），全程河南岸不折返",
      schedule:[
        { time:"08:15", text:"乌菲兹美术馆（文艺复兴名画，8:15开门）", ticket:true, warn:true, warnText:"周五开放，务必预约以避开排队", next:{ type:"walk", desc:"过老桥到奥尔特拉诺 · 步行约12分钟" } },
        { time:"11:30", text:"皮蒂宫", next:{ type:"walk", desc:"步行2分钟（同一建筑群）" } },
        { time:"12:30", text:"波波里花园", next:{ type:"walk", desc:"步行约5分钟" } },
        { time:"14:00", text:"午餐 · 奥尔特拉诺就近（替代中央市场）", next:{ type:"walk", desc:"步行约5分钟" } },
        { time:"15:30", text:"圣神大殿区 · 皮革店 / 纪念品", next:{ type:"walk", desc:"步行约15分钟上山" } },
        { time:"18:00", text:"（机动·天气好）米开朗基罗广场看日落", next:{ type:"walk", desc:"下山回老城/酒店" } },
        { time:"19:30", text:"告别佛罗伦萨晚餐" }
      ],
      activities:[
        { time:"08:15", name:"乌菲兹美术馆（文艺复兴名画）", img:"images/uffizi.jpg", duration:"3小时", cost:320, note:"《维纳斯的诞生》| 大背包寄存 | 8:15开门", ticketTip:"建议提前3-4周购票（旺季2-3周售罄）| 有票安检约15-20分钟，无票约2-4小时 | 8:15开门是全天人最少时段", booking:[{ name:"乌菲兹官网", url:"https://www.uffizi.it/en/the-uffizi/tickets" },{ name:"Klook", url:"https://www.klook.com/zh-CN/activity/2492-uffizi-gallery-florence/" }] },
        { time:"11:30", name:"皮蒂宫（美第奇家族宫殿）", img:"images/pitti.jpg", duration:"1.5小时", cost:280, transport:"步行12分钟过老桥", ticketTip:"提前1-2周购票即可 | 旺季排队约20-30分钟", booking:[{ name:"乌菲兹网站（含皮蒂）", url:"https://www.uffizi.it/en/pitti-palace/tickets" }] },
        { time:"12:30", name:"波波里花园", img:"images/boboli.jpg", cost:0, note:"皮蒂宫票含花园" },
        { time:"14:00", name:"午餐 · 奥尔特拉诺(Oltrarno)就近", meal:{ name:"奥尔特拉诺本地小馆", cuisine:"托斯卡纳菜", perPerson:30, recommended:"松露意面、牛肚包、本地红酒", location:"皮蒂宫/圣神大殿一带" }, note:"替代原中央市场午餐，避免折返过河，就近吃" },
        { time:"15:30", name:"圣神大殿区 · 皮革工坊购物", img:"images/santospirito.jpg", cost:0, note:"Oltrarno 区本地工匠，比市区便宜30-40%" },
        { time:"18:00", name:"（机动·看天气）米开朗基罗广场看日落", img:"images/piazzale.jpg", cost:0, transport:"步行约15分钟", note:"🌅三晚机动备选：你们今天本就在河南岸，上广场最顺；若D3没看成今晚补 | 日落约19:10-19:20，提前30-40分到 | 更高更静可上圣米尼亚托大殿" },
        { time:"19:30", name:"告别佛罗伦萨晚餐", meal:{ name:"精选餐厅", cuisine:"托斯卡纳菜", perPerson:70, recommended:"T骨牛排（最后一顿！）、基安蒂红酒", location:"老城" } }
      ]
    },
    {
      day:5, date:"10/03 周六", city:"lucerne", title:"佛罗伦萨 → 卢塞恩 跨国日",
      theme:"跨国长途 · 佛罗伦萨→卢塞恩（今日入瑞士）",
      weekday:"周六",
      dayWeather:{ icon:"cloudy", high:18, low:10 },
      note:"⚠️ 最长交通日：07:25 发 / 13:41 到卢塞恩（约6h16）| 公寓无24h前台，提前联系房东约早退还钥匙（+39 380 124 1597）| 拖箱打车去SMN（约8分）| 米兰换乘约50分钟（09:20到 / 10:10发），较从容 | 入瑞士无须过关（同申根）| STP 今日激活",
      schedule:[
        { time:"06:50", text:"早餐从简 · 退房 · 打车前往 SMN 站", next:{ type:"walk", desc:"打车约8分钟（拖箱别走路）· 钥匙按房东指引归还" } },
        { time:"07:10", text:"抵 SMN 站 · 检票找站台（binario）", next:null },
        { time:"07:25", text:"Italo 9904 → 米兰中央站（09:20到）", pdf:[{ name:"🚄 高铁票", url:"pdfs/train-1003-florence-milan.pdf" }], next:{ type:"highspeed", desc:"约1h55 · 09:20 到米兰" } },
        { time:"09:20", text:"米兰中央站换乘（约50分钟，较从容）· 找站台", next:{ type:"international", desc:"EuroCity 10:10 发 · 过圣哥达隧道" } },
        { time:"10:10", text:"EuroCity 出发 米兰 → 卢塞恩", ticket:true, pdf:[{ name:"🎫 Swiss 通票", url:"pdfs/swiss-travel-pass.pdf" },{ name:"🎫 车票二维码", url:"pdfs/swiss-pass-qr.pdf" },{ name:"📄 通票说明", url:"pdfs/swiss-pass-guide.pdf" }], next:{ type:"international", desc:"约3h30 · 方向 Basel SBB · 到达 Pl.7" } },
        { time:"13:41", text:"抵卢塞恩站 Luzern", next:{ type:"walk", desc:"步行约8分钟到酒店" } },
        { time:"14:00", text:"Hotel Hofgarten 存行李（正式入住 15:00 起）", pdf:[{ name:"🏨 酒店确认单", url:"pdfs/hotel-lucerne.pdf" }], next:{ type:"walk", desc:"步行约8分钟到廊桥" } },
        { time:"14:30", text:"卡佩尔廊桥 · 八角水塔 · 老城广场" },
        { time:"晚上",  text:"老城晚餐（瑞士物价高，可超市补给）" }
      ],
      activities:[
        { time:"06:50", name:"早餐 · 退房", note:"公寓有厨房可自理早餐；到SMN站约18-20分钟，拖箱建议打车，今天最长交通日" },
        { time:"07:25", name:"Italo 9904 → 米兰中央站（09:20到）", duration:"约1h55", cost:560, transport:"高铁", note:"已购票：Italo 9904，SMART 9车15-16座 | 07:25发 09:20到", pdf:[{ name:"🚄 高铁票", url:"pdfs/train-1003-florence-milan.pdf" }] },
        { time:"10:10", name:"EuroCity 国际列车 米兰 → 卢塞恩", duration:"约3h31", cost:560, transport:"国际列车", note:"过圣哥达隧道风景壮观 | STP 覆盖瑞士段，米兰→意瑞边境段需另购票", ticketTip:"STP 需在 SBB 预约瑞士段座位（约€5/人）", booking:[{ name:"SBB 瑞士铁路", url:"https://www.sbb.ch/en" },{ name:"Rail Europe", url:"https://www.raileurope.com/" }], pdf:[{ name:"🎫 Swiss 通票", url:"pdfs/swiss-travel-pass.pdf" },{ name:"🎫 车票二维码", url:"pdfs/swiss-pass-qr.pdf" },{ name:"📄 通票说明", url:"pdfs/swiss-pass-guide.pdf" }] },
        { time:"13:41", name:"抵卢塞恩站 · 酒店入住", note:"Hotel Hofgarten，步行10分钟", pdf:[{ name:"🏨 酒店确认单", url:"pdfs/hotel-lucerne.pdf" }] },
        { time:"15:30", name:"卡佩尔廊桥 · 八角水塔 · 老城广场漫步", img:"images/lucerne.jpg", duration:"2小时", cost:0, note:"1333年建欧洲最古老有顶木桥" },
        { time:"19:00", name:"老城晚餐", meal:{ name:"卢塞恩老城餐厅", cuisine:"瑞士菜", perPerson:90, recommended:"奶酪火锅 Fondue、Rösti", location:"老城区" } }
      ]
    },
    {
      day:6, date:"10/04 周日", city:"lucerne", title:"卢塞恩 皮拉图斯黄金环线",
      theme:"皮拉图斯黄金环线 · 十一黄金周(周日)",
      weekday:"周日",
      dayWeather:{ icon:"partlyCloudy", high:16, low:8 },
      note:"⚠️ 山顶冷风大，带厚外套 | 10月齿轨火车仍运营",
      schedule:[
        { time:"08:45", text:"提前到达卢塞恩码头", next:{ type:"boat", desc:"游船 · 约1小时 · STP免费" } },
        { time:"09:00", text:"游船 → Alpnachstad", next:{ type:"funicular", desc:"世界最陡齿轨火车 · STP 5折" } },
        { time:"10:15", text:"齿轨火车上皮拉图斯", next:null },
        { time:"11:00", text:"皮拉图斯峰顶 2132m · 观景徒步 · 午餐" },
        { time:"13:30", text:"龙脊缆车下山 → Kriens", next:{ type:"bus", desc:"巴士回市区" } },
        { time:"15:00", text:"狮子纪念碑 · 冰川公园", ticket:true },
        { time:"16:30", text:"城墙 Museggmauer（俯瞰全城）" },
        { time:"晚上",  text:"老城晚餐" }
      ],
      activities:[
        { time:"08:45", name:"提前到达卢塞恩码头", note:"十一期间中国游客增多，提前15分钟占好座位" },
        { time:"09:00", name:"卢塞恩码头游船 → Alpnachstad", duration:"约1小时", cost:0, transport:"游船", note:"STP免费 | 四森林湖湖光山色", ticketTip:"STP直接上船，十一期间码头提前15分钟到" },
        { time:"10:15", name:"世界最陡齿轨火车上皮拉图斯", duration:"30分钟", cost:800, transport:"齿轨火车", note:"STP5折约CHF44/人 | 坡度48度全球最陡", ticketTip:"STP持有者凭票享5折，到站现场购票 | 旺季排队约20-30分钟" },
        { time:"11:00", name:"皮拉图斯峰顶 2132m · 观景徒步", img:"images/pilatus.jpg", duration:"2.5小时", note:"Tomlishorn短程环线约45分钟 | 山顶冷风大，带厚外套" },
        { time:"12:30", name:"峰顶午餐", meal:{ name:"皮拉图斯山顶餐厅", cuisine:"瑞士菜", perPerson:70, recommended:"自带零食或山顶汤品", location:"山顶" } },
        { time:"13:30", name:"龙脊缆车下山 → Kriens", cost:0, transport:"缆车", note:"STP包含" },
        { time:"14:30", name:"公交回卢塞恩市区", cost:0, transport:"公交", note:"STP包含，约15分钟" },
        { time:"15:00", name:"狮子纪念碑 · 冰川公园", img:"images/lion.jpg", duration:"1.5小时", cost:160, transport:"步行10分钟", ticketTip:"现场购票，旺季排队约10-15分钟" },
        { time:"16:30", name:"城墙 Museggmauer（俯瞰全城）", img:"images/musegg.jpg", cost:0 },
        { time:"19:00", name:"老城晚餐", meal:{ name:"卢塞恩老城餐厅", cuisine:"瑞士菜", perPerson:80, recommended:"Raclette 热熔奶酪、瑞士香肠", location:"老城" } }
      ]
    },
    {
      day:7, date:"10/05 周一", city:"interlaken", title:"金色山口 → 因特拉肯",
      theme:"金色山口观景列车 · 抵因特拉肯 · 两湖漫步",
      weekday:"周一",
      dayWeather:{ icon:"partlyCloudy", high:15, low:7 },
      note:"⚠️ GoldenPass 建议提前订座 | 住 Essential by Dorint（西站旁·已订）| ⚠️金色山口列车到东站(Ost)，酒店在西站(West)，两站相隔一站约3分钟(STP免费) | 下午两湖漫步",
      schedule:[
        { time:"08:30", text:"含早早餐 · 退房", next:{ type:"scenic_train", desc:"GoldenPass 金色山口观景列车 · 约1h50" } },
        { time:"11:00", text:"GoldenPass 卢塞恩 → 因特拉肯东站", ticket:true, next:{ type:"walk", desc:"到东站后坐1站至西站约3分钟" } },
        { time:"13:00", text:"Essential by Dorint 入住", pdf:[{ name:"🏨 酒店确认单", url:"pdfs/hotel-interlaken.pdf" }], next:null },
        { time:"13:30", text:"午餐" },
        { time:"14:30", text:"何维克街 · 荷黑马特草坪看少女峰三姐妹" },
        { time:"16:00", text:"布里恩茨湖畔 / 图恩湖畔漫步" },
        { time:"晚上",  text:"镇上晚餐，早点休息" }
      ],
      activities:[
        { time:"08:30", name:"含早早餐 · 退房", note:"步行至卢塞恩站约5分钟" },
        { time:"09:00", name:"补逛卢塞恩湖边老城", duration:"2小时", cost:0 },
        { time:"11:00", name:"GoldenPass 金色山口观景列车 → 因特拉肯东站", duration:"约1小时50分", cost:0, transport:"观景列车", note:"STP乘车免费，座位需单独预约 | 沿途湖景+农舍+雪山，极度出片", ticketTip:"STP免费乘车，但必须提前2-3周在GoldenPass官网预约座位（约€5/人）| 十一期间热门，尽早预约", booking:[{ name:"GoldenPass 预约座位", url:"https://www.goldenpass.ch/en/goldenpass/book-tickets" },{ name:"SBB", url:"https://www.sbb.ch/en" }] },
        { time:"13:00", name:"Essential by Dorint 入住", note:"从东站坐1站到西站(约3分钟)，酒店在西站旁，行李放下休息片刻", pdf:[{ name:"🏨 酒店确认单", url:"pdfs/hotel-interlaken.pdf" }] },
        { time:"13:30", name:"午餐", meal:{ name:"因特拉肯镇餐厅或超市", cuisine:"简餐/瑞士菜", perPerson:50, recommended:"Coop超市买三明治 | 省钱留给晚餐", location:"镇上" } },
        { time:"14:30", name:"何维克街 · 荷黑马特草坪看少女峰三姐妹", img:"images/jungfrau.jpg", duration:"1.5小时", cost:0, note:"天气好时少女峰直接入镜，黄金拍照点" },
        { time:"16:00", name:"布里恩茨湖畔 / 图恩湖畔漫步", img:"images/thun.jpg", duration:"1.5小时", cost:0, note:"布里恩茨湖从东站步行5分钟 | 图恩湖从西站方向步行15分 | 两湖湖水颜色不同，布里恩茨更翠绿" },
        { time:"19:00", name:"镇上晚餐 · 早点休息", meal:{ name:"因特拉肯镇餐厅", cuisine:"瑞士/简餐", perPerson:60, recommended:"明日First山，养精蓄锐", location:"镇上" } }
      ]
    },
    {
      day:8, date:"10/06 周二", city:"interlaken", title:"格林德瓦 First山一日游",
      theme:"格林德瓦 First山 · 悬崖步道 · 高山湖徒步",
      weekday:"周二",
      dayWeather:{ icon:"sunny", high:14, low:5 },
      note:"⚠️ 行李留酒店轻装出发 | 海拔2168m防晒慢行 | 建议9:00前到格林德瓦缆车站 | 备选：若今日天气晴好且想去，可改登少女峰「欧洲之巅」（Pass5折，看天定）",
      schedule:[
        { time:"07:30", text:"早餐（行李留酒店）", next:{ type:"train", desc:"因特拉肯东站→格林德瓦 · 约35分 · STP免费" } },
        { time:"08:00", text:"因特拉肯东站出发 → 格林德瓦站", next:{ type:"walk", desc:"步行5分钟至缆车站" } },
        { time:"08:45", text:"First 缆车 → 上山", ticket:true, next:{ type:"cable_car", desc:"约25分钟" } },
        { time:"09:15", text:"First Cliff Walk 悬崖步道（玻璃平台）" },
        { time:"10:00", text:"First Flyer 高空飞索（强烈推荐）", ticket:true },
        { time:"11:00", text:"Bachalpsee 高山湖徒步（往返约1.5h）" },
        { time:"12:30", text:"山顶午餐" },
        { time:"14:30", text:"缆车下山 · 格林德瓦小镇漫步", next:{ type:"train", desc:"格林德瓦→因特拉肯东站 · 约35分 · STP" } },
        { time:"16:30", text:"回因特拉肯 · 布里恩茨湖畔夕阳" },
        { time:"18:00", text:"何维克街 · 荷黑马特草坪" },
        { time:"晚上",  text:"庆功晚餐" }
      ],
      activities:[
        { time:"07:30", name:"早餐 · 行李留酒店", note:"轻装出发，行李放 Essential by Dorint，今晚仍住这里，回来直接进房" },
        { time:"08:00", name:"因特拉肯东站 → 格林德瓦站", duration:"约35分钟", cost:0, transport:"火车", note:"STP免费 | 艾格北壁一路出镜", ticketTip:"STP直接上车 | 建议8:00班次，9:00前到缆车站" },
        { time:"08:45", name:"格林德瓦 First 缆车 → First 2168m", img:"images/grindelwald.jpg", duration:"约25分钟", cost:660, transport:"缆车", note:"STP享50%折扣，约CHF40/人 | 分4节缆车上山", ticketTip:"缆车站现场购票（STP折后约CHF40/人）| 9:00前到站排队最短", booking:[{ name:"Jungfrau官网 First", url:"https://www.jungfrau.ch/en-gb/grindelwald-first/" }] },
        { time:"09:15", name:"First Cliff Walk 悬崖步道（含玻璃平台）", duration:"30分钟", cost:0, note:"2168m悬崖外挑玻璃走道，俯瞰格林德瓦山谷和少女峰三姐妹 | 含在缆车票内" },
        { time:"10:00", name:"First Flyer 高空飞索（强烈推荐！）", duration:"20分钟", cost:480, note:"800m俯冲飞索，时速约80km | 旺季现场排队约30-45分钟", ticketTip:"现场购票（约CHF29/人）| 9:30前玩，排队最短", booking:[{ name:"现场购票/官网", url:"https://www.jungfrau.ch/en-gb/grindelwald-first/first-flyer/" }] },
        { time:"11:00", name:"Bachalpsee 高山湖徒步", img:"images/bachalpsee.jpg", duration:"约1.5小时往返", cost:0, note:"平坦山路约45分钟单程，倒映少女峰三姐妹 | 格林德瓦最美徒步线 | 运动鞋即可" },
        { time:"12:30", name:"First山顶午餐", meal:{ name:"Bergrestaurant First", cuisine:"瑞士菜", perPerson:70, recommended:"自带三明治更省钱，或山顶汤+面包（约CHF20）", location:"First缆车站旁" } },
        { time:"14:30", name:"缆车下山 → 格林德瓦小镇漫步", duration:"45分钟", cost:0, note:"艾格北壁近在眼前，绝佳拍照点 | Coop超市可买奶酪纪念品" },
        { time:"15:30", name:"格林德瓦 → 因特拉肯东站", duration:"约35分钟", cost:0, transport:"火车", note:"STP免费 | 抵达约16:10，行李在酒店，回来直接进房" },
        { time:"16:30", name:"布里恩茨湖畔夕阳漫步", duration:"1小时", cost:0, note:"东站步行5分钟到湖边 | 湖水翡翠绿，傍晚光线最美" },
        { time:"18:00", name:"何维克街 · 荷黑马特草坪", cost:0, note:"从这里望少女峰，和今天在山上的视角完全不同" },
        { time:"19:00", name:"庆功晚餐", meal:{ name:"因特拉肯餐厅", cuisine:"瑞士/西餐", perPerson:70, recommended:"好好犒劳今天的好体力！", location:"镇上" } }
      ]
    },
    {
      day:9, date:"10/07 周三", city:"zurich", title:"因特拉肯 → 苏黎世",
      theme:"因特拉肯 → 苏黎世 · 古城漫步",
      weekday:"周三",
      dayWeather:{ icon:"sunny", high:18, low:10 },
      note:"⚠️ 今天周三商店正常营业，可安排购物 | 苏黎世老城傍晚氛围佳",
      schedule:[
        { time:"07:30", text:"早餐 · 退房寄存行李" },
        { time:"08:15", text:"布里恩茨湖游船 东站出发 → 布里恩茨（STP免费）", next:{ type:"boat", desc:"约1小时单程 · 湖水翡翠绿" } },
        { time:"10:30", text:"返回因特拉肯 · 何维克街 · 纪念品购买" },
        { time:"12:00", text:"因特拉肯东站 IC → 苏黎世中央站", next:{ type:"train", desc:"IC 城际 · 约2h · STP · 经伯尔尼" } },
        { time:"14:00", text:"到苏黎世 HB", next:{ type:"walk", desc:"步行约7分钟" } },
        { time:"14:15", text:"Hotel St. Josef 入住", pdf:[{ name:"🏨 酒店确认单", url:"pdfs/hotel-zurich.pdf" }] },
        { time:"15:00", text:"班霍夫大街 · 林登霍夫山丘", next:{ type:"walk", desc:"步行约3分钟" } },
        { time:"16:30", text:"老城 Niederdorf · 苏黎世湖畔散步" },
        { time:"晚上",  text:"老城告别晚餐" }
      ],
      activities:[
        { time:"07:30", name:"早餐 · 退房寄存行李", note:"湖区晨景最美，早起值得" },
        { time:"08:15", name:"布里恩茨湖游船 因特拉肯东站 → 布里恩茨", duration:"约1小时单程", cost:0, transport:"游船", note:"STP全程免费 | 湖水翡翠绿，两岸山峰倒影 | 布里恩茨是产木雕的小镇，可短留后乘回程船或火车返回" },
        { time:"09:30", name:"游船返回因特拉肯 / 布里恩茨小镇短留", cost:0, note:"原路返回（约1小时）或从布里恩茨乘火车回（约20分，STP免费）" },
        { time:"10:30", name:"何维克街最后漫步 · 纪念品购买", duration:"1小时", cost:0, note:"周三商店正常营业，可从容选购纪念品/手表" },
        { time:"12:00", name:"因特拉肯东站 IC 城际 → 苏黎世中央站", duration:"约2小时", cost:0, transport:"城际列车", note:"STP包含 | 经伯尔尼", ticketTip:"STP直接上车 | 十一黄金周末日，车厢可能较满" },
        { time:"14:15", name:"Hotel St. Josef 入住", note:"老城核心，步行到各景点5-10分钟", pdf:[{ name:"🏨 酒店确认单", url:"pdfs/hotel-zurich.pdf" }] },
        { time:"15:00", name:"午餐", meal:{ name:"苏黎世老城餐厅", cuisine:"瑞士德语区菜", perPerson:80, recommended:"Zürcher Geschnetzeltes（酱汁牛肉丝）", location:"老城" } },
        { time:"16:00", name:"班霍夫大街 · 林登霍夫山丘", img:"images/bahnhofstrasse.jpg", duration:"2小时", cost:0, note:"周三商店正常营业，名表/百货可入店选购" },
        { time:"18:00", name:"老城 Niederdorf · 苏黎世湖畔散步", img:"images/niederdorf.jpg", cost:0 },
        { time:"19:30", name:"老城告别晚餐", meal:{ name:"苏黎世老城餐厅", cuisine:"瑞士/欧陆菜", perPerson:100, recommended:"最后一顿，好好吃！", location:"老城" } }
      ]
    },
    {
      day:10, date:"10/08 周四", city:"zurich", title:"苏黎世 → 返程",
      theme:"苏黎世收尾 · 购物 · 启程回国",
      weekday:"周四",
      dayWeather:{ icon:"sunny", high:19, low:11 },
      note:"⚠️ 退税（Global Blue）需离境前盖章 | 液体100ml限制，纪念品酒放托运",
      schedule:[
        { time:"07:30", text:"含早早餐 · 退房", next:{ type:"walk", desc:"步行苏黎世湖老城" } },
        { time:"08:00", text:"苏黎世湖老城最后漫步 · 伴手礼购买（周四·商店营业）" },
        { time:"10:15", text:"苏黎世中央站 HB 出发", next:{ type:"train", desc:"火车直达苏黎世机场 · 约10-13分 · STP" } },
        { time:"10:45", text:"苏黎世机场 ZRH · 退税/值机/安检", warn:true, warnText:"国际航班建议起飞前2.5小时到" },
        { time:"13:30", text:"✈️ CX382 起飞 → 香港" },
        { time:"次日",  text:"06:55 抵达香港 🏠" }
      ],
      activities:[
        { time:"07:30", name:"含早早餐 · 退房", note:"周四商店营业，最后购物机会" },
        { time:"08:00", name:"苏黎世湖老城最后漫步 · 伴手礼购买", img:"images/zurich.jpg", duration:"2小时", cost:0, note:"推荐：莲花巧克力、瑞士军刀、格雷登巧克力、Ricola" },
        { time:"10:15", name:"苏黎世中央站 HB → 苏黎世机场 ZRH", duration:"约10-13分钟", cost:0, transport:"直达火车", note:"STP包含 | 国际航班建议起飞前2.5小时到" },
        { time:"10:45", name:"苏黎世机场 ZRH · 退税/值机/安检", note:"退税（Global Blue）需离境前海关盖章 | 液体100ml托运", ticketTip:"退税须在离开申根区前完成：先在Global Blue自助机扫描，再找海关盖章 | 预留30分钟" },
        { time:"13:30", name:"✈️ CX382 起飞 → 香港", transport:"国际航班", note:"国泰 CX382 苏黎世 ZRH 13:30 → 香港 HKG 次日06:55，直飞约12小时 | 抵港后再经口岸返回深圳" },
        { time:"次日06:55", name:"抵达香港 🏠 旅程圆满结束", note:"10天10夜，意大利文艺与瑞士壮美，完美收官" }
      ]
    }
  ]

};
