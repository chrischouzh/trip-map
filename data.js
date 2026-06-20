window.TRIP_DATA = {
  "meta": {
    "title": "意大利·瑞士 10日行程",
    "travelers": "邹豪 & 宁岳莎",
    "dates": "2026 / 09 / 26 – 10 / 05"
  },
  "cities": [
    { "id": "milan",      "name": "米兰",    "nameEn": "Milano",     "country": "italy", "color": "#00c896", "latlng": [45.4642, 9.1900],  "days": [1, 2] },
    { "id": "florence",   "name": "佛罗伦萨", "nameEn": "Firenze",    "country": "italy", "color": "#00c896", "latlng": [43.7696, 11.2558], "days": [2, 3, 4] },
    { "id": "lucerne",    "name": "卢塞恩",  "nameEn": "Luzern",     "country": "swiss", "color": "#dc3232", "latlng": [47.0502, 8.3093],  "days": [5, 6] },
    { "id": "interlaken", "name": "因特拉肯", "nameEn": "Interlaken", "country": "swiss", "color": "#dc3232", "latlng": [46.6863, 7.8632],  "days": [7, 8] },
    { "id": "zurich",     "name": "苏黎世",  "nameEn": "Zürich",     "country": "swiss", "color": "#dc3232", "latlng": [47.3769, 8.5417],  "days": [9, 10] }
  ],
  "dayRoutes": {
    "1": {
      "fitBounds": [[45.40, 8.65], [45.70, 9.28]],
      "waypoints": [
        { "id": "mxp",      "name": "MXP 马尔彭萨机场", "latlng": [45.6306, 8.7231] },
        { "id": "centrale", "name": "米兰中央站",        "latlng": [45.4854, 9.2045] },
        { "id": "hotel_mi", "name": "Hotel Colombia",   "latlng": [45.4843, 9.2036] },
        { "id": "duomo_mi", "name": "米兰大教堂",        "latlng": [45.4641, 9.1919] },
        { "id": "galleria", "name": "埃马努埃莱二世长廊", "latlng": [45.4654, 9.1897] },
        { "id": "scala",    "name": "斯卡拉广场",        "latlng": [45.4675, 9.1895] },
        { "id": "castello", "name": "斯福尔扎城堡",      "latlng": [45.4706, 9.1796] },
        { "id": "navigli",  "name": "Navigli 运河区",   "latlng": [45.4495, 9.1776] }
      ],
      "legs": [
        { "from": "mxp",      "to": "centrale", "type": "train",  "desc": "Malpensa Express · 约52分 · €13/人" },
        { "from": "centrale", "to": "hotel_mi", "type": "walk",   "desc": "步行约5分钟" },
        { "from": "hotel_mi", "to": "duomo_mi", "type": "metro",  "desc": "地铁M3 Centrale→Duomo · €2.2" },
        { "from": "duomo_mi", "to": "galleria", "type": "walk",   "desc": "步行1分钟" },
        { "from": "galleria", "to": "scala",    "type": "walk",   "desc": "步行2分钟" },
        { "from": "scala",    "to": "castello", "type": "walk",   "desc": "步行约12分钟" },
        { "from": "castello", "to": "navigli",  "type": "walk",   "desc": "步行约25分钟 或地铁M1" }
      ]
    },
    "2": {
      "fitBounds": [[43.70, 9.10], [45.55, 11.35]],
      "waypoints": [
        { "id": "hotel_mi2", "name": "Hotel Colombia",   "latlng": [45.4843, 9.2036] },
        { "id": "duomo_mi2", "name": "米兰大教堂广场",    "latlng": [45.4641, 9.1919] },
        { "id": "centrale2", "name": "米兰中央站",        "latlng": [45.4854, 9.2045] },
        { "id": "smn",       "name": "佛罗伦萨 SMN 站",  "latlng": [43.7759, 11.2482] },
        { "id": "opera_bb",  "name": "Opera B&B",        "latlng": [43.7886, 11.2581] },
        { "id": "accademia", "name": "学院美术馆（大卫）", "latlng": [43.7767, 11.2589] },
        { "id": "duomo_fi",  "name": "圣母百花大教堂夜景", "latlng": [43.7730, 11.2560] }
      ],
      "legs": [
        { "from": "hotel_mi2", "to": "duomo_mi2", "type": "walk",      "desc": "步行补看大教堂广场" },
        { "from": "duomo_mi2", "to": "centrale2", "type": "metro",     "desc": "地铁M1/M3 回中央站" },
        { "from": "centrale2", "to": "smn",       "type": "highspeed", "desc": "Frecciarossa 高铁 · 约1h55 · 建议提前订票" },
        { "from": "smn",       "to": "opera_bb",  "type": "walk",      "desc": "步行约15分钟（或打车€12）" },
        { "from": "opera_bb",  "to": "accademia", "type": "walk",      "desc": "步行约12分钟" },
        { "from": "accademia", "to": "duomo_fi",  "type": "walk",      "desc": "步行约5分钟" }
      ]
    },
    "3": {
      "fitBounds": [[43.755, 11.245], [43.798, 11.275]],
      "waypoints": [
        { "id": "duomo_fi3",    "name": "圣母百花大教堂 登顶",  "latlng": [43.7730, 11.2560] },
        { "id": "campanile",    "name": "乔托钟楼",            "latlng": [43.7733, 11.2566] },
        { "id": "battistero",   "name": "洗礼堂",              "latlng": [43.7730, 11.2548] },
        { "id": "signoria",     "name": "领主广场 · 市政厅",   "latlng": [43.7697, 11.2560] },
        { "id": "pontevecchio", "name": "老桥 Ponte Vecchio",  "latlng": [43.7680, 11.2531] },
        { "id": "santacroce",   "name": "圣十字教堂",          "latlng": [43.7687, 11.2626] },
        { "id": "piazzale",     "name": "米开朗基罗广场",       "latlng": [43.7629, 11.2646] }
      ],
      "legs": [
        { "from": "duomo_fi3",    "to": "campanile",    "type": "walk", "desc": "步行1分钟（同一广场）" },
        { "from": "campanile",    "to": "battistero",   "type": "walk", "desc": "步行1分钟" },
        { "from": "battistero",   "to": "signoria",     "type": "walk", "desc": "步行约8分钟" },
        { "from": "signoria",     "to": "pontevecchio", "type": "walk", "desc": "步行约5分钟" },
        { "from": "pontevecchio", "to": "santacroce",   "type": "walk", "desc": "步行约10分钟" },
        { "from": "santacroce",   "to": "piazzale",     "type": "bus",  "desc": "公交12/13路上山 或步行约20分钟" }
      ]
    },
    "4": {
      "fitBounds": [[43.758, 11.240], [43.782, 11.268]],
      "waypoints": [
        { "id": "uffizi",  "name": "乌菲兹美术馆",              "latlng": [43.7682, 11.2553] },
        { "id": "mercato", "name": "中央市场 Mercato Centrale", "latlng": [43.7770, 11.2531] },
        { "id": "pitti",   "name": "皮蒂宫",                   "latlng": [43.7655, 11.2502] },
        { "id": "boboli",  "name": "波波里花园",                "latlng": [43.7633, 11.2497] },
        { "id": "spirito", "name": "圣神大殿区 · 皮革店",       "latlng": [43.7667, 11.2493] }
      ],
      "legs": [
        { "from": "uffizi",  "to": "mercato", "type": "walk", "desc": "步行约15分钟" },
        { "from": "mercato", "to": "pitti",   "type": "walk", "desc": "步行约20分钟（过老桥）" },
        { "from": "pitti",   "to": "boboli",  "type": "walk", "desc": "步行2分钟（同一建筑群）" },
        { "from": "boboli",  "to": "spirito", "type": "walk", "desc": "步行约5分钟" }
      ]
    },
    "5": {
      "fitBounds": [[43.70, 8.20], [47.15, 11.35]],
      "waypoints": [
        { "id": "smn5",         "name": "佛罗伦萨 SMN 站",    "latlng": [43.7759, 11.2482] },
        { "id": "centrale5",    "name": "米兰中央站",          "latlng": [45.4854, 9.2045] },
        { "id": "lucerne_st",   "name": "卢塞恩站",            "latlng": [47.0505, 8.3101] },
        { "id": "hofgarten",    "name": "Hotel Hofgarten",     "latlng": [47.0539, 8.3157] },
        { "id": "kapellbrucke", "name": "卡佩尔廊桥",          "latlng": [47.0516, 8.3074] },
        { "id": "wasserturm",   "name": "八角水塔",            "latlng": [47.0514, 8.3066] },
        { "id": "altstadt_lz",  "name": "老城广场",            "latlng": [47.0503, 8.3054] }
      ],
      "legs": [
        { "from": "smn5",         "to": "centrale5",  "type": "highspeed",     "desc": "Frecciarossa 高铁 · 约1h55" },
        { "from": "centrale5",    "to": "lucerne_st", "type": "international", "desc": "EuroCity 国际列车 · 约3h40 · 过圣哥达隧道 风景极佳" },
        { "from": "lucerne_st",   "to": "hofgarten",  "type": "walk",          "desc": "步行约10分钟" },
        { "from": "hofgarten",    "to": "kapellbrucke","type": "walk",          "desc": "步行约8分钟" },
        { "from": "kapellbrucke", "to": "wasserturm", "type": "walk",          "desc": "步行1分钟（紧邻）" },
        { "from": "wasserturm",   "to": "altstadt_lz","type": "walk",          "desc": "步行3分钟" }
      ]
    },
    "6": {
      "fitBounds": [[46.90, 8.22], [47.10, 8.36]],
      "waypoints": [
        { "id": "pier_lz",         "name": "卢塞恩码头",          "latlng": [47.0496, 8.3011] },
        { "id": "alpnachstad",     "name": "Alpnachstad",          "latlng": [46.9411, 8.2841] },
        { "id": "pilatus",         "name": "皮拉图斯峰顶 2132m",  "latlng": [46.9790, 8.2525] },
        { "id": "kriens",          "name": "Kriens",               "latlng": [47.0338, 8.2827] },
        { "id": "lion",            "name": "狮子纪念碑",           "latlng": [47.0584, 8.3143] },
        { "id": "gletschergarten", "name": "冰川公园",             "latlng": [47.0589, 8.3152] },
        { "id": "museggmauer",     "name": "城墙 Museggmauer",     "latlng": [47.0578, 8.3087] }
      ],
      "legs": [
        { "from": "pier_lz",         "to": "alpnachstad",     "type": "boat",      "desc": "游船 · 约1小时 · Swiss Travel Pass 免费" },
        { "from": "alpnachstad",      "to": "pilatus",          "type": "funicular", "desc": "世界最陡齿轨火车 · STP 5折" },
        { "from": "pilatus",          "to": "kriens",           "type": "cable_car", "desc": "龙脊缆车下山" },
        { "from": "kriens",           "to": "lion",             "type": "bus",       "desc": "巴士/公交回市区" },
        { "from": "lion",             "to": "gletschergarten",  "type": "walk",      "desc": "步行2分钟" },
        { "from": "gletschergarten",  "to": "museggmauer",      "type": "walk",      "desc": "步行约8分钟" }
      ]
    },
    "7": {
      "fitBounds": [[46.60, 7.78], [47.10, 8.36]],
      "waypoints": [
        { "id": "luzern_st7",     "name": "卢塞恩站",              "latlng": [47.0505, 8.3101] },
        { "id": "interlaken_ost", "name": "因特拉肯东站",           "latlng": [46.6912, 7.8691] },
        { "id": "hoeheweg",       "name": "何维克街 · 荷黑马特草坪", "latlng": [46.6851, 7.8576] },
        { "id": "thunersee",      "name": "图恩湖畔",               "latlng": [46.6695, 7.7870] },
        { "id": "brienzersee",    "name": "布里恩茨湖畔",           "latlng": [46.7127, 7.9628] }
      ],
      "legs": [
        { "from": "luzern_st7",    "to": "interlaken_ost", "type": "scenic_train", "desc": "GoldenPass 金色山口观景列车 · 约1h50 · STP 免费 · 湖光山色" },
        { "from": "interlaken_ost","to": "hoeheweg",       "type": "walk",         "desc": "步行约10分钟" },
        { "from": "hoeheweg",      "to": "thunersee",      "type": "walk",         "desc": "步行约20分钟" },
        { "from": "thunersee",     "to": "brienzersee",    "type": "walk",         "desc": "步行约40分钟 或公交" }
      ]
    },
    "8": {
      "fitBounds": [[46.50, 7.87], [46.72, 8.02]],
      "waypoints": [
        { "id": "interlaken_ost8",   "name": "因特拉肯东站",              "latlng": [46.6912, 7.8691] },
        { "id": "lauterbrunnen",     "name": "劳特布龙嫩",               "latlng": [46.5931, 7.9080] },
        { "id": "kleine_scheidegg",  "name": "小夏戴格",                 "latlng": [46.5849, 7.9604] },
        { "id": "jungfraujoch",      "name": "少女峰观景台（欧洲之巅）3454m", "latlng": [46.5473, 7.9854] }
      ],
      "legs": [
        { "from": "interlaken_ost8",  "to": "lauterbrunnen",   "type": "train",    "desc": "登山火车 · 约21分" },
        { "from": "lauterbrunnen",    "to": "kleine_scheidegg", "type": "train",    "desc": "艾格快线 · 约30分" },
        { "from": "kleine_scheidegg", "to": "jungfraujoch",     "type": "funicular","desc": "少女峰铁路（隧道）· 约35分 · CHF130/人（STP折后）" }
      ]
    },
    "9": {
      "fitBounds": [[46.62, 7.80], [47.43, 8.61]],
      "waypoints": [
        { "id": "interlaken_ost9", "name": "因特拉肯东站",    "latlng": [46.6912, 7.8691] },
        { "id": "zurich_hb",       "name": "苏黎世中央站 HB", "latlng": [47.3779, 8.5400] },
        { "id": "wellenberg",      "name": "Hotel Wellenberg","latlng": [47.3725, 8.5433] },
        { "id": "bahnhofstrasse",  "name": "班霍夫大街",      "latlng": [47.3726, 8.5353] },
        { "id": "lindenhof",       "name": "林登霍夫山丘",    "latlng": [47.3736, 8.5396] },
        { "id": "niederdorf",      "name": "老城 Niederdorf", "latlng": [47.3727, 8.5434] },
        { "id": "zurichsee",       "name": "苏黎世湖",        "latlng": [47.3554, 8.5490] }
      ],
      "legs": [
        { "from": "interlaken_ost9", "to": "zurich_hb",      "type": "train", "desc": "IC 城际 · 约2h · 经伯尔尼" },
        { "from": "zurich_hb",       "to": "wellenberg",     "type": "walk",  "desc": "步行约7分钟" },
        { "from": "wellenberg",      "to": "bahnhofstrasse", "type": "walk",  "desc": "步行约5分钟" },
        { "from": "bahnhofstrasse",  "to": "lindenhof",      "type": "walk",  "desc": "步行约8分钟" },
        { "from": "lindenhof",       "to": "niederdorf",     "type": "walk",  "desc": "步行约3分钟" },
        { "from": "niederdorf",      "to": "zurichsee",      "type": "walk",  "desc": "步行约15分钟" }
      ]
    },
    "10": {
      "fitBounds": [[47.34, 8.49], [47.48, 8.62]],
      "waypoints": [
        { "id": "wellenberg10", "name": "Hotel Wellenberg",    "latlng": [47.3725, 8.5433] },
        { "id": "zurichsee10",  "name": "苏黎世湖 · 老城漫步", "latlng": [47.3554, 8.5490] },
        { "id": "zurich_hb10",  "name": "苏黎世中央站 HB",     "latlng": [47.3779, 8.5400] },
        { "id": "zrh",          "name": "苏黎世机场 ZRH ✈️",   "latlng": [47.4508, 8.5617] }
      ],
      "legs": [
        { "from": "wellenberg10", "to": "zurichsee10", "type": "walk",  "desc": "步行老城最后漫步" },
        { "from": "zurichsee10",  "to": "zurich_hb10", "type": "walk",  "desc": "步行约15分钟" },
        { "from": "zurich_hb10",  "to": "zrh",         "type": "train", "desc": "直达火车 · 约10–13分 · STP" }
      ]
    }
  },
  "days": [
    {
      "day": 1,
      "date": "9/26 周六",
      "city": "milan",
      "title": "抵达米兰",
      "schedule": [
        { "time": "08:00", "text": "抵达米兰马尔彭萨机场 MXP T1",
          "next": { "type": "walk", "desc": "步行取行李 + 入境排队" } },
        { "time": "08–09", "text": "入境（申根盖章）、取行李", "warn": true, "warnText": "备好酒店单/回程票以备询问",
          "next": { "type": "train", "desc": "Malpensa Express · 约52分 · €13/人" } },
        { "time": "09:10", "text": "乘 Malpensa Express 出发 → 米兰中央站",
          "next": { "type": "walk", "desc": "步行约5分钟" } },
        { "time": "10:10", "text": "到中央站，寄存行李 Hotel Colombia",
          "next": { "type": "metro", "desc": "地铁M3 Centrale→Duomo · €2.2" } },
        { "time": "10:30", "text": "登米兰大教堂 + 屋顶露台", "ticket": true,
          "next": { "type": "walk", "desc": "步行1分钟" } },
        { "time": "12:30", "text": "埃马努埃莱二世长廊午餐、斯卡拉广场",
          "next": { "type": "walk", "desc": "步行约12分钟" } },
        { "time": "14:00", "text": "斯福尔扎城堡、森皮奥内公园",
          "next": { "type": "walk", "desc": "步行约25分钟 或地铁M1" } },
        { "time": "15:00", "text": "（可选）运河区 Navigli 散步",
          "next": { "type": "metro", "desc": "地铁回中央站，步行到酒店" } },
        { "time": "15:00", "text": "酒店正式办理入住（14:00起）" },
        { "time": "晚上",  "text": "老城晚餐（意面/肉）" }
      ],
      "note": "⚠️ 长途红眼刚落地，别排太满；M1/M3 地铁单程€2.2"
    },
    {
      "day": 2,
      "date": "9/27 周日",
      "city": "milan",
      "title": "米兰 → 佛罗伦萨",
      "schedule": [
        { "time": "08:30", "text": "早餐、退房行李",
          "next": { "type": "walk", "desc": "步行至大教堂广场" } },
        { "time": "09:00", "text": "补看米兰（主教堂广场、购物街）",
          "next": { "type": "metro", "desc": "地铁M1/M3 回中央站" } },
        { "time": "12:30", "text": "中央站乘 Frecciarossa 高铁 → 佛罗伦萨", "ticket": true,
          "next": { "type": "highspeed", "desc": "约1h55，到达 SMN 站" } },
        { "time": "14:30", "text": "抵佛罗伦萨 SMN 站",
          "next": { "type": "walk", "desc": "步行约15分钟（或打车€12）" } },
        { "time": "15:00", "text": "Opera B&B 办理入住",
          "next": { "type": "walk", "desc": "步行约12分钟" } },
        { "time": "16:00", "text": "学院美术馆 — 看《大卫》真迹", "ticket": true, "warn": true, "warnText": "周日开放，必须预约时段（周一闭馆）",
          "next": { "type": "walk", "desc": "步行约5分钟" } },
        { "time": "18:30", "text": "老城晚餐，圣母百花大教堂夜景" }
      ],
      "note": "⚠️ 学院美术馆周日17:30停止入场"
    },
    {
      "day": 3,
      "date": "9/28 周一",
      "city": "florence",
      "title": "佛罗伦萨 古城步行日",
      "schedule": [
        { "time": "08:30", "text": "超市早餐",
          "next": { "type": "walk", "desc": "步行至大教堂广场" } },
        { "time": "09:00", "text": "圣母百花大教堂登顶（布鲁内莱斯基穹顶，463级）", "ticket": true, "warnText": "Brunelleschi Pass须预约时段",
          "next": { "type": "walk", "desc": "步行1分钟（同一广场）" } },
        { "time": "10:30", "text": "乔托钟楼 / 洗礼堂（同套票）",
          "next": { "type": "walk", "desc": "步行约8分钟" } },
        { "time": "12:00", "text": "午餐、领主广场、市政厅（乌菲兹外观）",
          "next": { "type": "walk", "desc": "步行约5分钟" } },
        { "time": "13:30", "text": "老桥 Ponte Vecchio、阿诺河边",
          "next": { "type": "walk", "desc": "步行约10分钟" } },
        { "time": "15:00", "text": "圣十字教堂",
          "next": { "type": "bus", "desc": "公交12/13路上山，约10分" } },
        { "time": "17:30", "text": "米开朗基罗广场看日落（俯瞰全城）" },
        { "time": "晚上",  "text": "山下或老城晚餐" }
      ],
      "note": "⚠️ 周一乌菲兹/学院闭馆，今天安排登顶+户外正合适 | 穹顶需爬陡窄楼梯，无电梯"
    },
    {
      "day": 4,
      "date": "9/29 周二",
      "city": "florence",
      "title": "佛罗伦萨 美术馆日",
      "schedule": [
        { "time": "08:15", "text": "乌菲兹美术馆（文艺复兴名画，8:15开门）", "ticket": true, "warn": true, "warnText": "周二开放，务必预约以避开排队",
          "next": { "type": "walk", "desc": "步行约15分钟" } },
        { "time": "11:30", "text": "午餐、中央市场 Mercato Centrale",
          "next": { "type": "walk", "desc": "步行约20分钟，过老桥" } },
        { "time": "13:00", "text": "皮蒂宫",
          "next": { "type": "walk", "desc": "步行2分钟（同一建筑群）" } },
        { "time": "14:00", "text": "波波里花园",
          "next": { "type": "walk", "desc": "步行约5分钟" } },
        { "time": "15:30", "text": "圣神大殿区、皮革店 / 纪念品" },
        { "time": "晚上",  "text": "告别佛罗伦萨晚餐" }
      ],
      "note": "⚠️ 乌菲兹安检严，大背包需寄存 | 提前确认明天长途车票"
    },
    {
      "day": 5,
      "date": "9/30 周三",
      "city": "lucerne",
      "title": "佛罗伦萨 → 卢塞恩 跨国日",
      "schedule": [
        { "time": "07:30", "text": "早餐、退房",
          "next": { "type": "walk", "desc": "步行至 SMN 站，约5分钟" } },
        { "time": "08:30", "text": "SMN 站 高铁出发 → 米兰中央站", "ticket": true,
          "next": { "type": "highspeed", "desc": "Frecciarossa · 约1h55" } },
        { "time": "10:30", "text": "米兰中央站转车（约30分钟换乘）",
          "next": { "type": "international", "desc": "EuroCity 国际列车 · 约3h40 · 过圣哥达隧道" } },
        { "time": "11:00", "text": "EuroCity 出发 米兰 → 卢塞恩", "ticket": true },
        { "time": "14:40", "text": "抵卢塞恩站",
          "next": { "type": "walk", "desc": "步行约10分钟" } },
        { "time": "15:00", "text": "Hotel Hofgarten 入住",
          "next": { "type": "walk", "desc": "步行约8分钟" } },
        { "time": "15:30", "text": "卡佩尔廊桥（木廊桥）、八角水塔、老城广场、莱茵河畔" },
        { "time": "晚上",  "text": "老城晚餐（瑞士物价高，可超市补给）" }
      ],
      "note": "⚠️ 今天路上约6.5小时，是全程最长交通日，备好水和泡面 | 入瑞士无须再过关（同申根）"
    },
    {
      "day": 6,
      "date": "10/01 周四",
      "city": "lucerne",
      "title": "卢塞恩 皮拉图斯黄金环线",
      "schedule": [
        { "time": "08:30", "text": "含早早餐",
          "next": { "type": "walk", "desc": "步行至码头，约5分钟" } },
        { "time": "09:00", "text": "卢塞恩码头乘游船 → Alpnachstad",
          "next": { "type": "boat", "desc": "约1小时 · Swiss Travel Pass 免费" } },
        { "time": "10:15", "text": "Alpnachstad 换乘世界最陡齿轨火车上山",
          "next": { "type": "funicular", "desc": "约30分钟 · STP 5折" } },
        { "time": "11:00", "text": "皮拉图斯峰顶观景 2132m、徒步、午餐（自带或山顶餐厅）",
          "next": { "type": "cable_car", "desc": "龙脊缆车下山 → Kriens" } },
        { "time": "13:30", "text": "缆车下山抵 Kriens",
          "next": { "type": "bus", "desc": "巴士/公交回市区，约15分" } },
        { "time": "14:30", "text": "回到卢塞恩市区",
          "next": { "type": "walk", "desc": "步行约10分钟" } },
        { "time": "15:00", "text": "狮子纪念碑、冰川公园",
          "next": { "type": "walk", "desc": "步行约8分钟" } },
        { "time": "16:00", "text": "城墙 Museggmauer（俯瞰全城）" },
        { "time": "晚上",  "text": "老城晚餐" }
      ],
      "note": "⚠️ 山顶冷风大，带厚外套 | 10月齿轨火车仍运营，遇大风可能改全程缆车"
    },
    {
      "day": 7,
      "date": "10/02 周五",
      "city": "interlaken",
      "title": "卢塞恩 → 因特拉肯 金色山口",
      "schedule": [
        { "time": "08:30", "text": "含早早餐、退房",
          "next": { "type": "walk", "desc": "步行至卢塞恩站，约5分钟" } },
        { "time": "09:00", "text": "补看卢塞恩湖边、老城",
          "next": { "type": "scenic_train", "desc": "GoldenPass 金色山口观景列车 · 约1h50" } },
        { "time": "11:00", "text": "GoldenPass 观景列车 卢塞恩 → 因特拉肯东站", "ticket": true },
        { "time": "13:00", "text": "抵因特拉肯东站",
          "next": { "type": "walk", "desc": "步行至酒店" } },
        { "time": "13:30", "text": "酒店入住",
          "next": { "type": "walk", "desc": "步行约10分钟" } },
        { "time": "14:30", "text": "何维克街 · 荷黑马特草坪看少女峰",
          "next": { "type": "walk", "desc": "步行约20分钟" } },
        { "time": "16:00", "text": "图恩湖畔 / 布里恩茨湖畔散步" },
        { "time": "晚上",  "text": "镇上晚餐" }
      ],
      "note": "⚠️ GoldenPass 建议提前订座（STP持有者也需要） | 住因特拉肯东站附近，次日上山最省时"
    },
    {
      "day": 8,
      "date": "10/03 周六",
      "city": "interlaken",
      "title": "少女峰地区一日游",
      "schedule": [
        { "time": "07:30", "text": "早餐（镇上超市/泡面）",
          "next": { "type": "walk", "desc": "步行至因特拉肯东站，约5分钟" } },
        { "time": "08:30", "text": "🏔️ 方案A：因特拉肯东站 出发登顶少女峰", "ticket": true, "warn": true, "warnText": "少女峰车票提前订，约CHF130/人（STP折后）",
          "next": { "type": "train", "desc": "登山火车 → 劳特布龙嫩，约21分" } },
        { "time": "08:51", "text": "劳特布龙嫩换乘",
          "next": { "type": "train", "desc": "艾格快线 → 小夏戴格，约30分" } },
        { "time": "09:30", "text": "小夏戴格换乘",
          "next": { "type": "funicular", "desc": "少女峰铁路（隧道）→ 欧洲之巅，约35分" } },
        { "time": "10:00", "text": "少女峰观景台 3454m：冰宫、斯芬克斯观景台、户外雪地" },
        { "time": "12:00", "text": "峰顶午餐" },
        { "time": "14:00", "text": "原路下山，途经小镇（米伦/格林德瓦）" },
        { "time": "18:00", "text": "返回因特拉肯" },
        { "time": "晚上",  "text": "镇上晚餐" }
      ],
      "note": "⚠️ 全天往返约4h车程，早出发 | 海拔3454m，保暖防晒慢行防高反 | 末班下山车较早，留意时刻"
    },
    {
      "day": 9,
      "date": "10/04 周日",
      "city": "zurich",
      "title": "因特拉肯 → 苏黎世",
      "schedule": [
        { "time": "08:30", "text": "早餐、退房寄存",
          "next": { "type": "walk", "desc": "步行至因特拉肯东站" } },
        { "time": "09:00", "text": "湖区晨景、何维克街最后漫步",
          "next": { "type": "train", "desc": "IC 城际 · 约2h · 经伯尔尼" } },
        { "time": "12:00", "text": "因特拉肯东站 IC 出发 → 苏黎世中央站", "ticket": true },
        { "time": "14:00", "text": "到苏黎世 HB",
          "next": { "type": "walk", "desc": "步行约7分钟" } },
        { "time": "14:15", "text": "Hotel Wellenberg 入住",
          "next": { "type": "walk", "desc": "步行约5分钟" } },
        { "time": "15:00", "text": "班霍夫大街（购物大街）",
          "next": { "type": "walk", "desc": "步行约8分钟" } },
        { "time": "16:00", "text": "林登霍夫山丘（俯瞰利马特河）",
          "next": { "type": "walk", "desc": "步行约3分钟" } },
        { "time": "16:30", "text": "老城 Niederdorf",
          "next": { "type": "walk", "desc": "步行约15分钟" } },
        { "time": "17:30", "text": "苏黎世湖畔散步" },
        { "time": "晚上",  "text": "老城告别晚餐" }
      ],
      "note": "⚠️ 周日瑞士商店多关门，购物请放到周一 | 餐厅照常营业"
    },
    {
      "day": 10,
      "date": "10/05 周一",
      "city": "zurich",
      "title": "苏黎世 → 返程",
      "schedule": [
        { "time": "07:30", "text": "含早早餐、退房",
          "next": { "type": "walk", "desc": "步行苏黎世湖老城" } },
        { "time": "08:00", "text": "苏黎世湖 / 老城最后漫步、买伴手礼（周一开门）",
          "next": { "type": "walk", "desc": "步行约15分钟回 HB" } },
        { "time": "10:15", "text": "苏黎世中央站 HB 出发",
          "next": { "type": "train", "desc": "火车直达苏黎世机场 · 约10–13分 · STP" } },
        { "time": "10:45", "text": "到苏黎世机场 ZRH，办理退税（如购物）、值机、安检", "warn": true, "warnText": "国际航班建议起飞前2.5小时到" },
        { "time": "13:30", "text": "✈️ CX382 起飞 → 香港" },
        { "time": "次日",  "text": "06:55 抵达香港 🏠" }
      ],
      "note": "⚠️ 退税（Global Blue）需离境前盖章 | 液体100ml限制，纪念品酒/橄榄油放托运"
    }
  ]
}
;