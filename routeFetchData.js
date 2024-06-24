let DetailedRoutesUP = [
  ["1"].concat(
    getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
    getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
  ),
  ["1/25S"].concat(
    getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
    getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD"),
    getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
    getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
  ),
  ["1/25S/229"].concat(
    getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
    getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD"),
    getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
    getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA'),
    getStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'MEDCHAL')
  ),
  ["1C"].concat(
    getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
    getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "CITY BUS STATION")
  ),
  ["1D"].concat(
    getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
    getStops(LGRH_KTGD, "CHADERGHAT", "DILSHUKNAGAR")
  ),
  ["1D/229"].concat(
    getStops(KTGD_LGRH, 'DILSHUKNAGAR', 'CHADERGHAT'),
    getStops(SKPL_SECB, 'KOTI WOMENS COLLEGE', 'SECUNDERABAD'),
    getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),
  ["1D/299"].concat(
    getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
    getStops(LGRH_KTGD, "CHADERGHAT", "HAYATHNAGAR")
  ),
  ["1L"].concat(
    getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
    getStops(LGRH_KTGD, "CHADERGHAT", "LB NAGAR X ROADS")
  ),
  ["1V"].concat(
    getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
    getStops(LGRH_KTGD, "CHADERGHAT", "PANAMA"),
    getStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE (VANASTHALIPURAM)'),
    getStops(TailsUP, 'RED TANK', 'NGOs COLONY')
  ),
  ["1X"].concat(
    getStops(SECB_SKPL, "SECUNDERABAD", "KACHEGUDA X ROADS"),
    getStops(SHMB_KSR, "KACHEGUDA TOURIST", "KACHEGUDA STATION")
  ),
  ["1Z"].concat(
    getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
    getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "ARAMGHAR")
  ),
  ["1Z/229"].concat(
    getStops(SHMB_KSR, "ARAMGHAR", "CITY BUS STATION"),
    getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD"),
    getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),
  ["1Z/251"].concat(
    getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
    getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "SHAMSHABAD"),
  ),

  // 2 SERIES
  ["2"].concat(
    getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
    SHD[167], SHD[1075],
    getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
    SHD[708],
    getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ')
  ),
  ["2U"].concat(
    getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
    SHD[167], SHD[1075],
    getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
    SHD[708],
    getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ'),
    getStops(MDCL_MHRM, "SALARJUNG MUSEUM", "LAL DARWAJA X ROAD"),
    getStops(TailsUP, 'LAL DARWAJA', 'UPPUGUDA')
  ),
  ["2/25S"].concat(
    getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
    SHD[708],
    getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
    SHD[1075], SHD[167],
    getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD'),
    getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
    getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
  ),

  // 3 SERIES
  ["3"].concat(
    getStops(SHMB_KSR, "AFZALGUNJ", "ZTS X ROADS"),
    SHD[526],
    getStops(SHMB_KSR, "SP NAGAR", "KUSHAIGUDA")
  ),
  ["3C"].concat(
    getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
    SHD[181],
    SHD[708],
    getStops(SHMB_KSR, "KACHEGUDA STATION", "ECIL X ROADS")
  ),
  ["3H"].concat(
    getStops(SHMB_KSR, "AFZALGUNJ", "VIDYA NAGAR"),
    SHD[43],
    "LIBRARY OU",
    "LADIES HOSTEL OU",
    "LAW COLLEGE OU",
    "ARTS COLLEGE OU",
    getStops(SHMB_KSR, "TARNAKA", "KUSHAIGUDA")
  ),
  ["3HN"].concat(
    getStops(SHMB_KSR, "AFZALGUNJ", "VIDYA NAGAR"),
    SHD[43],
    "LIBRARY OU",
    "LADIES HOSTEL OU",
    "LAW COLLEGE OU",
    "ARTS COLLEGE OU",
    SHD[993],
    getStops(LGPL_CRPL, "TARNAKA", "NOMA"),
    getStops(SHMB_KSR, "HB COLONY", "KUSHAIGUDA")
  ),
  ["3K"].concat(getStops(SHMB_KSR, "AFZALGUNJ", "KUSHAIGUDA")),
  ["3K/242"].concat(
    getStops(SHMB_KSR, 'AFZALGUNJ', 'KEESARAGUTTA')
  ),
  ["3KN"].concat(
    getStops(SHMB_KSR, "AFZALGUNJ", "TARNAKA"),
    getStops(LGPL_CRPL, "TARNAKA", "NOMA"),
    getStops(SHMB_KSR, "HB COLONY", "KUSHAIGUDA")
  ),
  ["3L"].concat(
    getStops(SHMB_KSR, "AFZALGUNJ", "RAM THEATER - LALAPET"),
    SHD[780]
  ),
  ["3N"].concat(
    getStops(SHMB_KSR, "AFZALGUNJ", "RAM KOTI X ROADS"),
    SHD[1099],
    getStops(SHMB_KSR, "BARKATPURA", "TARNAKA"),
    getStops(LGPL_CRPL, "TARNAKA", "NACHARAM X ROADS"),
    getStops(TailsUP, "NACHARAM IDA", "HEMA NAGAR")
  ),
  ["3T"].concat(
    getStops(SHMB_KSR, "AFZALGUNJ", "TARNAKA"),
  ),

  // 5 SERIES
  ["5K"].concat(getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")),
  ["5K/16A"].concat(
    getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
    getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
  ),
  ["5K/92A"].concat(
    getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
    getStops(SKPL_SECB, "RETHIBOWLI", "ARAMGHAR")
  ),
  ["5K/229"].concat(
    getStops(MNBD_SRPT, 'MEHDIPATNAM', 'PATNY CENTER'),
    getStops(IBP_DNGL, "PARADISE", "BOWENPALLY X ROADS"),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),

  // 8 SERIES
  ["8A"].concat(getStops(MDCL_MHRM, "SECUNDERABAD", "CHANDRAYANGUTTA X ROADS")),
  ["8UA"].concat(
    getStops(MDCL_MHRM, "SECUNDERABAD", "LAL DARWAJA X ROAD"),
    getStops(TailsUP, 'LAL DARWAJA', 'UPPUGUDA')
  ),

  // 9 SERIES
  ["9K"].concat(
    SHD[220], SHD[507], SHD[4],
    getStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
    SHD[1087],
    getStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA')
  ),
  ["9K/272G"].concat(
    SHD[220], SHD[507], SHD[4],
    getStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
    SHD[1087],
    getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
  ),
  ["9X"].concat(
    getStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
    SHD[1087],
    getStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA')
  ),
  ["9X/272G"].concat(
    getStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
    SHD[1087],
    getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
  ),

  // 10 SERIES
  ["10J"].concat(
    getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
    SHD[536],
    SHD[36],
    SHD[892],
    getStops(GTKS_PTCR, "MYTHRIVANAM", "JNTU COLLEGE")
  ),
  ["10KL"].concat(
    getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
    SHD[536],
    SHD[36],
    SHD[892],
    getStops(GTKS_PTCR, "MYTHRIVANAM", "LINGAMPALLY")
  ),
  ["10KM"].concat(
    getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
    SHD[536],
    SHD[36],
    SHD[892],
    getStops(GTKS_PTCR, "MYTHRIVANAM", "MIYAPUR X ROADS")
  ),

  // 14 SERIES
  ["14P"].concat(
    SHD[898],
    SHD[23],
    SHD[622],
    getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
    SHD[719],
    SHD[917],
    SHD[543],
    SHD[819],
    SHD[780]
  ),

  // 15 SERIES
  ["15H"].concat(
    SHD[898],
    SHD[23],
    SHD[622],
    getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
    SHD[719],
    SHD[917],
    getStops(SHMB_KSR, "LALAPET", "KUSHAIGUDA")
  ),
  ["15H/242RG"].concat(
    SHD[898],
    SHD[23],
    SHD[622],
    getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
    SHD[719],
    SHD[917],
    getStops(SHMB_KSR, 'LALAPET', 'BANDLAGUDA - NAGARAM'),
    SHD[128], "INDIRA GRUHAKALPA", SHD[842]
  ),
  // 16 SERIES
  ["16A"].concat(
    SHD[898],
    SHD[23],
    SHD[622],
    getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
  ),
  ["16A/5K"].concat(
    getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
    getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
    getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
  ),
  ["16A/49M"].concat(
    getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
    getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
    getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
  ),
  ["16H"].concat(
    SHD[898],
    SHD[23],
    SHD[622],
    getStops(GWRL_HCLX, "NEW BRIDGE", 'ANANDH BAGH X ROADS'),
    "ANANDH BAGH", SHD[264], "TIRUMALA NAGAR",
    getStops(SHMB_KSR, 'ZTS X ROADS', 'ECIL X ROADS')
  ),
  ["16A/219"].concat(
    getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
    getStops(IBP_DNGL, "METTUGUDA", "BALANAGAR"),
    SHD[1087],
    getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
  ),

  // 17 SERIES
  ["17H"].concat(
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, "WHITE HOUSE", "KUSHAIGUDA")
  ),
  ["17HN"].concat(
    SHD[898],
    getStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'NOMA'),
    getStops(SHMB_KSR, 'HB COLONY', 'KUSHAIGUDA')
  ),
  ["17H/29B"].concat(
    getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "JEEDIMETLA")
  ),
  ["17/219"].concat(
    getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "BALANAGAR"),
    SHD[1087],
    getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
  ),
  ["17H/219"].concat(
    getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "BALANAGAR"),
    SHD[1087],
    getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
  ),

  ["17S"].concat(
    getStops(HCLX_GWRL, "SECUNDERABAD", "SITAFALMANDI X ROADS"),
    SHD[641],
    getStops(SHMB_KSR, "TARNAKA", "KUSHAIGUDA")
  ),

  // 25 SERIES
  ["25S"].concat(
    getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
    getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
  ),
  ["25S/229"].concat(
    getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
    getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA'),
    getStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'MEDCHAL')
  ),

  // 29 SERIES
  ["29B"].concat(getStops(IBP_DNGL, "SECUNDERABAD", "JEEDIMETLA")),
  ["29B/17H"].concat(
    getStops(DNGL_IBP, "JEEDIMETLA", "SECUNDERABAD"),
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
  ),
  ["29B/272G"].concat(
    getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA")
  ),
  ["29B/272I"].concat(
    getStops(IBP_DNGL, "SECUNDERABAD", "BAHUDURPALLY X ROADS"),
    "BAHUDURPALLY",
    SHD[407]
  ),

  // 38 SERIES
  ["38EX"].concat(
    getStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
    "ADDAGUTTA", "ADDAGUTTA", "NANDANA NAGAR",
    getStops(HCLX_GWRL, 'TUKARAM GATE', 'SECUNDERABAD')
  ),
  ["38X"].concat(
    getStops(GWRL_HCLX, 'SECUNDERABAD', 'TUKARAM GATE'),
    "NANDANA NAGAR", "ADDAGUTTA", "ADDAGUTTA",
    getStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
  ),
  ["38T"].concat(
    getStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
    "ADDAGUTTA", "ADDAGUTTA", "NANDANA NAGAR",
    SHD[1027]
  ),

  // 40 SERIES
  ["40"].concat(
    getStops(MDCL_MHRM, 'SECUNDERABAD', 'BATA'),
    getStops(DRFM_RMNG, 'BIBLE HOUSE', 'NATIONAL DARBAR'),
    "KING KOTI", SHD[3], SHD[110], SHD[506]
  ),

  // 49 SERIES
  ["49"].concat(
    getStops(CRPL_LGPL, 'SECUNDERABAD', 'GREEN LANDS'),
    getStops(TailsUP, 'SOMAJIGUDA', 'RAJ BHAVAN'),
    getStops(PTCR_GTKS, 'KHAIRATHABAD', 'NAMPALLY')
  ),
  ["49/250"].concat(
    getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
    "LAKDI KA PUL (BJR CLG)",
    getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KHAIRATHABAD'),
    getStops(TailsDOWN, 'RAJ BHAVAN', 'SOMAJIGUDA'),
    getStops(LGPL_CRPL, 'GREEN LANDS', 'ASHOK NAGAR - NFC'),
    getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
  ),
  ["49A"].concat(
    getStops(CRPL_LGPL, 'SECUNDERABAD', 'GREEN LANDS'),
    getStops(TailsUP, 'SOMAJIGUDA', 'RAJ BHAVAN'),
    getStops(PTCR_GTKS, 'KHAIRATHABAD', 'AFZALGUNJ')
  ),
  ["49M"].concat(
    getStops(CRPL_LGPL, 'SECUNDERABAD', 'MEHDIPATNAM')
  ),
  ["49M/16A"].concat(
    getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
    getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
  ),
  ["49M/92A"].concat(
    getStops(CRPL_LGPL, 'SECUNDERABAD', 'MEHDIPATNAM'),
    getStops(SKPL_SECB, 'RETHIBOWLI', 'ARAMGHAR')
  ),
  ["49M/229"].concat(
    getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PARADISE'),
    getStops(IBP_DNGL, 'TARBUND', 'BOWENPALLY X ROADS'),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),
  ["49M/250"].concat(
    getStops(LGPL_CRPL, "MEHDIPATNAM", "ASHOK NAGAR - NFC"),
    getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
  ),

  // 72 SERIES
  ["72/277D"].concat(
    SHD[11], SHD[875], SHD[238], SHD[624],
    getStops(LGRH_KTGD, 'CHADERGHAT', 'LB NAGAR'),
    getStops(DNGL_IBP, 'LB NAGAR X ROADS', 'IBRAHIMPATNAM')
  ),
  ["72H"].concat(
    SHD[11], SHD[875], SHD[238], SHD[624],
    getStops(LGRH_KTGD, 'CHADERGHAT', 'HAYATHNAGAR')
  ),
  ["72V"].concat(
    SHD[11], SHD[875], SHD[238], SHD[624],
    getStops(LGRH_KTGD, 'CHADERGHAT', 'PANAMA'),
    getStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE (VANASTHALIPURAM)'),
    getStops(TailsUP, 'RED TANK', 'NGOs COLONY')
  ),

  // 86 SERIES
  ["86A"].concat(
    getStops(HCLX_GWRL, 'SECUNDERABAD', 'RAM NAGAR GUNDU'),
    getStops(RMNG_DRFM, 'RAM NAGAR - E SEVA', 'YMCA'),
    getStops(KSR_SHMB, 'KACHEGUDA X ROADS', 'AFZALGUNJ')
  ),
  ["86C"].concat(
    getStops(HCLX_GWRL, 'SECUNDERABAD', 'RAM NAGAR GUNDU'),
    getStops(RMNG_DRFM, 'RAM NAGAR - E SEVA', 'YMCA'),
    getStops(KSR_SHMB, 'KACHEGUDA X ROADS', 'CITY BUS STATION')
  ),
  ["86K"].concat(
    getStops(HCLX_GWRL, 'SECUNDERABAD', 'RAM NAGAR GUNDU'),
    getStops(RMNG_DRFM, 'RAM NAGAR - E SEVA', 'YMCA'),
    getStops(KSR_SHMB, 'KACHEGUDA X ROADS', 'KOTI WOMENS COLLEGE'),
    SHD[506]
  ),


  // 90 SERIES
  ["90L"].concat(
    getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD"),
    SHD[754],
    SHD[433]
  ),
  ["90LK"].concat(
    getStops(IBP_DNGL, "LB NAGAR X ROADS", "TARNAKA"),
    getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "KACHEGUDA STATION")
  ),
  ["90DL"].concat(
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "LB NAGAR X ROADS"),
    getStops(KTGD_LGRH, "LB NAGAR", "DILSHUKNAGAR")
  ),
  ["90LV"].concat(
    getStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
    getStops(TailsDOWN, 'GANESH TEMPLE (VANASTHALIPURAM)', 'VANASTHALIPURAM'),
    getStops(KTGD_LGRH, 'PANAMA', 'LB NAGAR X ROADS'),
    getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
    SHD[754],
    SHD[433]
  ),
  ["90L/229"].concat(
    getStops(IBP_DNGL, "LB NAGAR X ROADS", "BOWENPALLY X ROADS"),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),
  ["90L/251"].concat(
    getStops(DNGL_IBP, 'SECUNDERABAD', 'LB NAGAR X ROADS'),
    getStops(SECB_SKPL, 'SAGAR RING ROAD', 'ARAMGHAR'),
    getStops(KSR_SHMB, 'BUDVEL', 'SHAMSHABAD')
  ),

  // 92 SERIES
  ["92A"].concat(getStops(SECB_SKPL, "ARAMGHAR", "RETHIBOWLI"), "MEHDIPATNAM"),
  ["92A/5K"].concat(
    getStops(SECB_SKPL, "ARAMGHAR", "RETHIBOWLI"),
    getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
  ),
  ["92A/49M"].concat(
    getStops(SECB_SKPL, 'ARAMGHAR', 'RETHIBOWLI'),
    getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PATNY'),
    getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
  ),

  // 117 SERIES
  ["117"].concat(
    getStops(TailsDOWN, 'UPPAL', 'NACHARAM IDA'),
    getStops(LGPL_CRPL, 'NACHARAM X ROADS', 'ASHOK NAGAR - NFC'),
    getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
    SHD[525]
  ),

  // 189 SERIES
  ["189M"].concat(
    getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
    getStops(GTKS_PTCR, 'PANJAGUTTA', 'MOOSAPET'),
    SHD[1087],
    getStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA'),
    getStops(TailsUP, 'JANAPRIYA SAINEST', 'APUROOPA COLONY')
  ),
  ["189M/272G"].concat(
    getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
    getStops(GTKS_PTCR, 'PANJAGUTTA', 'MOOSAPET'),
    SHD[1087],
    getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
  ),

  // 218 SERIES
  ["218"].concat(
    SHD[507], SHD[4],
    getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU')
  ),
  ["218A"].concat(
    getStops(GTKS_PTCR, 'AFZALGUNJ', 'PATANCHERUVU')
  ),
  ["218C"].concat(
    getStops(GTKS_PTCR, 'CITY BUS STATION', 'PATANCHERUVU')
  ),
  ["218D"].concat(
    getStops(KTGD_LGRH, 'DILSHUKNAGAR', 'KOTI MEDICAL COLLEGE'),
    SHD[4],
    getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU')
  ),
  ["218L"].concat(
    SHD[507], SHD[4],
    getStops(GTKS_PTCR, 'NAMPALLY', 'LINGAMPALLY')
  ),

  // 219 SERIES
  ["219"].concat(
    getStops(IBP_DNGL, "SECUNDERABAD", "BALANAGAR"),
    SHD[1087],
    getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
  ),
  ["219/16A"].concat(
    getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
    SHD[1087],
    getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
    getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
  ),
  ["219/17"].concat(
    getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
    SHD[1087],
    getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
  ),
  ["219/17H"].concat(
    getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
    SHD[1087],
    getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
  ),
  ["219/229"].concat(getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'), SHD[1087], getStops(DNGL_IBP, 'BALANAGAR', 'BOWENPALLY X ROADS'), getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')),
  ["219/250"].concat(
    getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'),
    SHD[1087],
    getStops(DNGL_IBP, 'BALANAGAR', 'PATNY'),
    SHD[898],
    getStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'ASHOK NAGAR - NFC'),
    getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
  ),
  ["219/272G"].concat(
    getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
    SHD[1087],
    getStops(IBP_DNGL, "BALANAGAR", "GANDIMAISAMMA")
  ),

  // 229 SERIES
  ["229"].concat(
    getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),
  ["229/5K"].concat(
    getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
    getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PATNY'),
    getStops(SRPT_MNBD, "BATA", "MEHDIPATNAM"),
  ),
  ["229/90L"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'LB NAGAR X ROADS')
  ),
  ["229/219"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(IBP_DNGL, 'BOWENPALLY X ROADS', 'BALANAGAR'), SHD[1087], getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')),
  ["229/279"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'IBRAHIMPATNAM')
  ),
  ["229/290"].concat(
    getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
    getStops(DNGL_IBP, "BOWENPALLY X ROADS", "KAMINENI HOSPITALS"),
    getStops(LGRH_KTGD, "LB NAGAR X ROADS", "PANAMA"),
    getStops(TailsUP, 'VANASTHALIPURAM', 'SUBHADRA NAGAR'),
    SHD[369],
    getStops(LGRH_KTGD, 'BHAGYA LATHA', 'HAYATHNAGAR')
  ),
  ["229/290U"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'KAMINENI HOSPITALS'), getStops(LGRH_KTGD, 'LB NAGAR X ROADS', 'HAYATHNAGAR')
  ),

  // 242 SERIES
  ["242"].concat(
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA')
  ),
  ["242/17H"].concat(
    getStops(KSR_SHMB, "KEESARAGUTTA", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
    SHD[878],
    SHD[898]
  ),
  ["242/3K"].concat(
    getStops(KSR_SHMB, "KEESARAGUTTA", "AFZALGUNJ"),
  ),
  ["242A"].concat(
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA KAMAN'),
    "ANKIREDDY PALLY X ROADS", SHD[46], "ANKIREDDY PALLY VILLAGE"
  ),
  ["242B"].concat(
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARA X ROADS'),
    SHD[147]
  ),
  ["242G"].concat(
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, 'WHITE HOUSE', 'KUNDANPALLY X ROADS'),
    SHD[520], SHD[318], SHD[829], SHD[476], SHD[475],
    "KEESARA X ROADS"
  ),
  ["242GA"].concat(
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, 'WHITE HOUSE', 'KUNDANPALLY X ROADS'),
    SHD[520], SHD[318], SHD[829], SHD[476], SHD[475],
    "KEESARA X ROADS", "KEESARAGUTTA KAMAN", "ANKIREDDY PALLY X ROADS", SHD[46], "ANKIREDDY PALLY VILLAGE"
  ),
  ["242RG"].concat(
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, 'WHITE HOUSE', 'BANDLAGUDA - NAGARAM'),
    SHD[128], "INDIRA GRUHAKALPA", SHD[842]
  ),


  // 250 SERIES
  ["250"].concat(SHD[898],
    getStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'ASHOK NAGAR - NFC'),
    getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
  ),
  ["250/49"].concat(
    getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
    getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'GREEN LANDS'),
    getStops(TailsUP, 'SOMAJIGUDA', 'RAJ BHAVAN'),
    getStops(PTCR_GTKS, 'KHAIRATHABAD', 'NAMPALLY')
  ),
  ["250/49M"].concat(
    getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
    getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'MEHDIPATNAM')
  ),
  ["250/219"].concat(
    getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
    getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'SECUNDERABAD'),
    getStops(IBP_DNGL, 'PATNY', 'BALANAGAR'),
    SHD[1087],
    getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
  ),

  // 251 SERIES
  ["251/1Z"].concat(
    getStops(SHMB_KSR, "SHAMSHABAD", "CITY BUS STATION"),
    getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
  ),

  // 272 SERIES
  ["272"].concat(
    getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA"),
    "BOWRAMPET X ROADS",
    "BOWRAMPET"
  ),

  // 277 SERIES
  ["277D"].concat(
    getStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "LB NAGAR X ROADS"),
    getStops(DNGL_IBP, "SAGAR RING ROAD", "IBRAHIMPATNAM")
  ),

  // 279 SERIES
  ["279"].concat(
    SHD[448],
    SHD[754],
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "IBRAHIMPATNAM")
  ),
  ["279/229"].concat(
    getStops(IBP_DNGL, "IBRAHIMPATNAM", "BOWENPALLY X ROADS"),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),
  ["279U"].concat(getStops(IBP_DNGL, "IBRAHIMPATNAM", "UPPAL RING ROAD")),

  // 290 SERIES
  ["290"].concat(
    SHD[448],
    SHD[754],
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
    getStops(LGRH_KTGD, "LB NAGAR X ROADS", "PANAMA"),
    getStops(TailsUP, 'VANASTHALIPURAM', 'SUBHADRA NAGAR'),
    SHD[369],
    getStops(LGRH_KTGD, 'BHAGYA LATHA', 'HAYATHNAGAR')
  ),
  ["290/229"].concat(
    getStops(KTGD_LGRH, "HAYATHNAGAR", "BHAGYA LATHA"),
    getStops(TailsDOWN, 'SHANTHI NAGAR - VANASTHALIPURAM', 'VANASTHALIPURAM'),
    getStops(KTGD_LGRH, 'PANAMA', 'LB NAGAR X ROADS'),
    getStops(IBP_DNGL, "KAMINENI HOSPITALS", "BOWENPALLY X ROADS"),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),
  ["290U"].concat(
    SHD[448],
    SHD[754],
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
    getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR")
  ),
  ["290U/229"].concat(
    getStops(KTGD_LGRH, 'HAYATHNAGAR', 'LB NAGAR X ROADS'),
    getStops(IBP_DNGL, "KAMINENI HOSPITALS", "BOWENPALLY X ROADS"),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),

  // 299 SERIES
  ["299"].concat(getStops(KTGD_LGRH, "HAYATHNAGAR", "KOTI WOMENS COLLEGE")),
  ["299D"].concat(getStops(KTGD_LGRH, "HAYATHNAGAR", "DILSHUKNAGAR")),

  // 300 SERIES
  ["300"].concat(
    "MEHDIPATNAM",
    getStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
    getStops(IBP_DNGL, "LB NAGAR X ROADS", "UPPAL RING ROAD")
  ),
  ["300/251"].concat(
    getStops(DNGL_IBP, 'UPPAL RING ROAD', 'LB NAGAR X ROADS'),
    getStops(SECB_SKPL, 'SAGAR RING ROAD', 'ARAMGHAR'),
    getStops(KSR_SHMB, 'BUDVEL', 'SHAMSHABAD')
  ),
  ["300L"].concat(
    "MEHDIPATNAM",
    getStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
    getStops(IBP_DNGL, "LB NAGAR X ROADS", "LB NAGAR X ROADS")
  ),
]

let DetailedRoutesDOWN = [
  ["1"].concat(
    getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
    getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
  ),
  ["1/25S"].concat(
    getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
    getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
    getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
    getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
  ),
  ["1/25S/229"].concat(
    getStops(MDCL_MHRM, 'MEDCHAL', 'JEEDIMETLA VILLAGE'),
    getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
    getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
    getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
    getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
  ),
  // ["1B"].concat(SC_RTC_DN),
  ["1C"].concat(
    "CITY BUS STATION",
    getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
  ),
  ["1D"].concat(
    getStops(KTGD_LGRH, "DILSHUKNAGAR", "CHADERGHAT"),
    getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
  ),
  ["1D/229"].concat(
    getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
    getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PATNY'),
    getStops(SECB_SKPL, 'SECUNDERABAD', 'KOTI WOMENS COLLEGE'),
    getStops(LGRH_KTGD, 'CHADERGHAT', 'DILSHUKNAGAR')
  ),
  ["1D/299"].concat(
    getStops(KTGD_LGRH, "HAYATHNAGAR", "CHADERGHAT"),
    getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
  ),
  ["1L"].concat(
    getStops(KTGD_LGRH, "LB NAGAR X ROADS", "CHADERGHAT"),
    getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
  ),
  ["1X"].concat(
    "KACHEGUDA STATION",
    "KACHEGUDA X ROADS",
    getStops(SKPL_SECB, "NARAYANAGUDA", "SECUNDERABAD")
  ),
  ["1V"].concat(
    getStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
    getStops(TailsDOWN, 'GANESH TEMPLE (VANASTHALIPURAM)', 'VANASTHALIPURAM'),
    getStops(KTGD_LGRH, "PANAMA", "CHADERGHAT"),
    getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
  ),
  ["1Z"].concat(
    getStops(SHMB_KSR, "ARAMGHAR", "CITY BUS STATION"),
    getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
  ),
  ["1Z/229"].concat(
    getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
    getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PATNY'),
    getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
    getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "ARAMGHAR")
  ),
  ["1Z/251"].concat(
    getStops(SHMB_KSR, "SHAMSHABAD", "CITY BUS STATION"),
    getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
  ),

  // 2 SERIES
  ["2"].concat(
    getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
    SHD[708],
    getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
    SHD[1075], SHD[167],
    getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
  ),
  ["2U"].concat(
    getStops(TailsDOWN, 'UPPUGUDA', 'LAL DARWAJA'),
    getStops(MHRM_MDCL, "LAL DARWAJA X ROAD", "NAYAPUL"),
    getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
    SHD[708],
    getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
    SHD[1075], SHD[167],
    getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
  ),
  ["2/25S"].concat(
    getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
    getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
    getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
    SHD[167], SHD[1075],
    getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
    SHD[708],
    getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ')
  ),

  // 3 SERIES

  ["3"].concat(
    getStops(KSR_SHMB, "KUSHAIGUDA", "SP NAGAR"),
    SHD[526],
    getStops(KSR_SHMB, "ZTS X ROADS", "AFZALGUNJ")
  ),
  ["3C"].concat(
    getStops(KSR_SHMB, "ECIL X ROADS", "KACHEGUDA STATION"),
    SHD[708],
    SHD[181],
    getStops(KSR_SHMB, "CITY BUS STATION", "AFZALGUNJ")
  ),
  ["3H"].concat(
    getStops(KSR_SHMB, "KUSHAIGUDA", "TARNAKA"),
    SHD[993],
    "ARTS COLLEGE OU",
    "LAW COLLEGE OU",
    "LADIES HOSTEL OU",
    "LIBRARY OU",
    SHD[43],
    getStops(KSR_SHMB, "VIDYA NAGAR", "AFZALGUNJ")
  ),
  ["3HN"].concat(
    getStops(KSR_SHMB, "KUSHAIGUDA", "HB COLONY"),
    getStops(CRPL_LGPL, "NOMA", "TARNAKA"),
    "ARTS COLLEGE OU",
    "LAW COLLEGE OU",
    "LADIES HOSTEL OU",
    "LIBRARY OU",
    SHD[43],
    getStops(KSR_SHMB, "VIDYA NAGAR", "AFZALGUNJ")
  ),
  ["3K"].concat(getStops(KSR_SHMB, "KUSHAIGUDA", "AFZALGUNJ")),
  ["3K/242"].concat(
    getStops(KSR_SHMB, "KEESARAGUTTA", "AFZALGUNJ"),
  ),
  ["3KN"].concat(
    getStops(KSR_SHMB, "KUSHAIGUDA", "HB COLONY"),
    getStops(CRPL_LGPL, "NOMA", "TARNAKA"),
    getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "AFZALGUNJ")
  ),
  ["3L"].concat(
    SHD[780],
    getStops(KSR_SHMB, "RAM THEATER - LALAPET", "AFZALGUNJ")
  ),
  ["3N"].concat(
    getStops(TailsDOWN, "HEMA NAGAR", "NACHARAM IDA"),
    getStops(CRPL_LGPL, "NACHARAM X ROADS", "TARNAKA"),
    getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "FEVER HOSPITAL"),
    SHD[1099],
    getStops(KSR_SHMB, "KACHEGUDA X ROADS", "AFZALGUNJ")
  ),
  ["3T"].concat(
    SHD[993],
    getStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'AFZALGUNJ'),
  ),

  // 5 Series
  ["5K"].concat(getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")),
  ["5K/16A"].concat(
    getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
    getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
    getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
  ),
  ["5K/92A"].concat(
    getStops(SECB_SKPL, "ARAMGHAR", "RETHIBOWLI"),
    getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
  ),
  ["5K/229"].concat(
    getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
    getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PATNY'),
    getStops(SRPT_MNBD, "BATA", "MEHDIPATNAM"),
  ),

  // 8 SERIES
  ["8A"].concat(getStops(MHRM_MDCL, "CHANDRAYANGUTTA X ROADS", "SECUNDERABAD")),
  ["8UA"].concat(
    getStops(TailsDOWN, 'UPPUGUDA', 'LAL DARWAJA'),
    getStops(MHRM_MDCL, "LAL DARWAJA X ROAD", "SECUNDERABAD")
  ),

  // 9 SERIES
  ["9K"].concat(
    getStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
    SHD[1087],
    getStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
    SHD[3], SHD[110], SHD[507], SHD[220]
  ),
  ["9K/272G"].concat(
    getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
    SHD[1087],
    getStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
    SHD[3], SHD[110], SHD[507], SHD[220]
  ),
  ["9X"].concat(
    getStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
    SHD[1087],
    getStops(PTCR_GTKS, 'MOOSAPET', 'AFZALGUNJ'),
  ),
  ["9X/272G"].concat(
    getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
    SHD[1087],
    getStops(PTCR_GTKS, 'MOOSAPET', 'AFZALGUNJ'),
  ),
  // 10 SERIES
  ["10J"].concat(
    getStops(PTCR_GTKS, "JNTU COLLEGE", "AMEERPET"),
    SHD[926],
    SHD[536],
    SHD[335],
    getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "SECUNDERABAD")
  ),
  ["10KL"].concat(
    getStops(PTCR_GTKS, "LINGAMPALLY", "AMEERPET"),
    SHD[926],
    SHD[536],
    SHD[335],
    getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "SECUNDERABAD")
  ),
  ["10KM"].concat(
    getStops(PTCR_GTKS, "MIYAPUR X ROADS", "AMEERPET"),
    SHD[926],
    SHD[536],
    SHD[335],
    getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "SECUNDERABAD")
  ),

  // 14 SERIES
  ["14P"].concat(
    SHD[780],
    SHD[819],
    SHD[543],
    SHD[917],
    SHD[719],
    getStops(HCLX_GWRL, "LALAGUDA", "NEW BRIDGE"),
    SHD[622],
    SHD[23],
    SHD[878],
    SHD[898]
  ),

  // 15 SERIES
  ["15H"].concat(
    getStops(KSR_SHMB, "KUSHAIGUDA", "LALAPET"),
    SHD[917],
    SHD[719],
    getStops(HCLX_GWRL, "LALAGUDA", "NEW BRIDGE"),
    SHD[622],
    SHD[23],
    SHD[878],
    SHD[898]
  ),
  ["15H/242RG"].concat(
    SHD[842], "INDIRA GRUHAKALPA", SHD[128],
    getStops(KSR_SHMB, "BANDLAGUDA - NAGARAM", "LALAPET"),
    SHD[917],
    SHD[719],
    getStops(HCLX_GWRL, "LALAGUDA", "NEW BRIDGE"),
    SHD[622],
    SHD[23],
    SHD[878],
    SHD[898]
  ),

  // 16 SERIES
  ["16A"].concat(
    getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
    SHD[622],
    SHD[23],
    SHD[878],
    SHD[898]
  ),
  ["16A/5K"].concat(
    getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
    getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
  ),
  ["16A/49M"].concat(
    getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
    getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
  ),
  ["16H"].concat(
    getStops(KSR_SHMB, 'ECIL X ROADS', 'ZTS X ROADS'),
    "TIRUMALA NAGAR", SHD[264], "ANANDH BAGH",
    getStops(HCLX_GWRL, 'ANANDH BAGH X ROADS', 'NEW BRIDGE'),
    SHD[622],
    SHD[23],
    SHD[878],
    SHD[898]
  ),
  ["16A/219"].concat(
    getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
    SHD[1087],
    getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
    getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
  ),

  // 17 SERIES
  ["17H"].concat(
    getStops(KSR_SHMB, "KUSHAIGUDA", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
    SHD[878],
    SHD[898]
  ),
  ["17HN"].concat(
    getStops(KSR_SHMB, 'KUSHAIGUDA', 'HB COLONY'),
    getStops(CRPL_LGPL, 'NOMA', 'ALUGADDA BHAVI'),
    SHD[878],
    SHD[898]
  ),
  ["17H/29B"].concat(
    getStops(DNGL_IBP, "JEEDIMETLA", "SECUNDERABAD"),
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
  ),
  ["17/219"].concat(
    getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
    SHD[1087],
    getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
  ),
  ["17H/219"].concat(
    getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
    SHD[1087],
    getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
  ),

  ["17S"].concat(
    getStops(KSR_SHMB, "KUSHAIGUDA", "TARNAKA"),
    SHD[993],
    SHD[641],
    getStops(GWRL_HCLX, "SITAFALMANDI X ROADS", "SECUNDERABAD")
  ),

  // 25 SERIES
  ["25S"].concat(
    getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
    getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
  ),
  ["25S/229"].concat(
    getStops(MDCL_MHRM, 'MEDCHAL', 'JEEDIMETLA VILLAGE'),
    getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
    getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
  ),

  // 29 SERIES
  ["29B"].concat(getStops(DNGL_IBP, "JEEDIMETLA", "SECUNDERABAD")),
  ["29B/17H"].concat(
    getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "JEEDIMETLA")
  ),
  ["29B/272G"].concat(
    getStops(DNGL_IBP, "GANDIMAISAMMA", "SECUNDERABAD")
  ),
  ["29B/272I"].concat(
    SHD[407],
    "BAHUDURPALLY",
    getStops(DNGL_IBP, "BAHUDURPALLY X ROADS", "SECUNDERABAD")
  ),

  // 38 SERIES
  ["38EX"].concat(
    getStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
    "ADDAGUTTA", "ADDAGUTTA", "NANDANA NAGAR",
    getStops(HCLX_GWRL, 'TUKARAM GATE', 'SECUNDERABAD')
  ),

  ["38X"].concat(
    getStops(GWRL_HCLX, 'SECUNDERABAD', 'TUKARAM GATE'),
    "NANDANA NAGAR", "ADDAGUTTA", "ADDAGUTTA",
    getStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
  ),
  ["38T"].concat(
    SHD[1027],
    "NANDANA NAGAR", "ADDAGUTTA", "ADDAGUTTA",
    getStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
  ),

  // 40 SERIES
  ["40"].concat(
    SHD[506], SHD[508], SHD[813],
    getStops(RMNG_DRFM, 'NATIONAL DARBAR', 'BIBLE HOUSE'),
    getStops(MHRM_MDCL, 'BATA', 'CLOCK TOWER'),

    SHD[898]
  ),

  // 49 SERIES
  ["49"].concat(
    getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
    "LAKDI KA PUL (BJR CLG)",
    getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KHAIRATHABAD'),
    getStops(TailsDOWN, 'RAJ BHAVAN', 'SOMAJIGUDA'),
    getStops(LGPL_CRPL, 'GREEN LANDS', 'PATNY'),
    getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
  ),
  ["49/250"].concat(
    getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
    getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'GREEN LANDS'),
    getStops(TailsUP, 'SOMAJIGUDA', 'RAJ BHAVAN'),
    getStops(PTCR_GTKS, 'KHAIRATHABAD', 'NAMPALLY')
  ),
  ["49A"].concat(
    getStops(GTKS_PTCR, 'AFZALGUNJ', 'LAKDI KA PUL'),
    "LAKDI KA PUL (BJR CLG)",
    getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KHAIRATHABAD'),
    getStops(TailsDOWN, 'RAJ BHAVAN', 'SOMAJIGUDA'),
    getStops(LGPL_CRPL, 'GREEN LANDS', 'PATNY'),
    getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
  ),
  ["49M"].concat(
    getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PATNY'),
    getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
  ),
  ["49M/16A"].concat(
    getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
    getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
    getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
  ),
  ["49M/92A"].concat(
    getStops(SECB_SKPL, 'ARAMGHAR', 'RETHIBOWLI'),
    getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PATNY'),
    getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
  ),
  ["49M/229"].concat(
    getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
    getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'TARBUND'),
    getStops(CRPL_LGPL, 'PARADISE', 'MEHDIPATNAM'),
  ),
  ["49M/250"].concat(
    getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
    getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'MEHDIPATNAM')
  ),

  // 72 SERIES
  ["72/277D"].concat(
    getStops(IBP_DNGL, 'IBRAHIMPATNAM', 'LB NAGAR X ROADS'),
    getStops(KTGD_LGRH, 'LB NAGAR', 'CHADERGHAT'),
    SHD[624], SHD[238], SHD[11],
  ),
  ["72H"].concat(
    getStops(KTGD_LGRH, 'HAYATHNAGAR', 'CHADERGHAT'),
    SHD[624], SHD[238], SHD[11],
  ),
  ["72V"].concat(
    getStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
    getStops(TailsDOWN, 'GANESH TEMPLE (VANASTHALIPURAM)', 'VANASTHALIPURAM'),
    getStops(KTGD_LGRH, 'PANAMA', 'CHADERGHAT'),
    SHD[624], SHD[238], SHD[11]
  ),

  // 86 SERIES
  ["86A"].concat(
    getStops(SHMB_KSR, 'AFZALGUNJ', 'RAM KOTI X ROADS'),
    getStops(DRFM_RMNG, 'YMCA', 'RAM NAGAR - E SEVA'),
    getStops(GWRL_HCLX, 'RAM NAGAR GUNDU', 'SECUNDERABAD')
  ),
  ["86C"].concat(
    getStops(SHMB_KSR, 'CITY BUS STATION', 'RAM KOTI X ROADS'),
    getStops(DRFM_RMNG, 'YMCA', 'RAM NAGAR - E SEVA'),
    getStops(GWRL_HCLX, 'RAM NAGAR GUNDU', 'SECUNDERABAD')
  ),
  ["86K"].concat(
    SHD[506],
    getStops(SHMB_KSR, 'KOTI WOMENS COLLEGE', 'RAM KOTI X ROADS'),
    getStops(DRFM_RMNG, 'YMCA', 'RAM NAGAR - E SEVA'),
    getStops(GWRL_HCLX, 'RAM NAGAR GUNDU', 'SECUNDERABAD')
  ),

  // 90 SERIES
  ["90L"].concat(
    SHD[433],
    SHD[754],
    getStops(DNGL_IBP, "SECUNDERABAD", "LB NAGAR X ROADS")
  ),
  ["90LK"].concat(
    getStops(SHMB_KSR, "KACHEGUDA STATION", "MANIKESHWAR NAGAR"),
    getStops(DNGL_IBP, "TARNAKA", "LB NAGAR X ROADS")
  ),
  ["90DL"].concat(
    getStops(LGRH_KTGD, "DILSHUKNAGAR", "LB NAGAR"),
    getStops(IBP_DNGL, "LB NAGAR X ROADS", "ALUGADDA BHAVI"),
    SHD[898]
  ),
  ["90LV"].concat(
    SHD[433],
    SHD[754],
    getStops(DNGL_IBP, "SECUNDERABAD", "KAMINENI HOSPITALS"),
    getStops(LGRH_KTGD, 'LB NAGAR X ROADS', 'PANAMA'),
    getStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE (VANASTHALIPURAM)'),
    getStops(TailsUP, 'RED TANK', 'NGOs COLONY')
  ),
  ["90L/229"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'LB NAGAR X ROADS')
  ),
  ["90L/251"].concat(
    getStops(SHMB_KSR, 'SHAMSHABAD', 'BUDVEL'),
    getStops(SKPL_SECB, "ARAMGHAR", "SAGAR RING ROAD"),
    getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD")
  ),

  // 92 SERIES
  ["92A"].concat("MEHDIPATNAM", getStops(SKPL_SECB, "RETHIBOWLI", "ARAMGHAR")),
  ["92A/5K"].concat(
    getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
    getStops(SKPL_SECB, "RETHIBOWLI", "ARAMGHAR")
  ),
  ["92A/49M"].concat(
    getStops(CRPL_LGPL, 'SECUNDERABAD', 'MEHDIPATNAM'),
    getStops(SKPL_SECB, 'RETHIBOWLI', 'ARAMGHAR')
  ),

  // 117 SERIES
  ["117"].concat(
    SHD[525],
    getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
    getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'NACHARAM X ROADS'),
    getStops(TailsUP, 'NACHARAM IDA', 'UPPAL')
  ),

  // 189 SERIES
  ["189M"].concat(
    getStops(TailsDOWN, 'APUROOPA COLONY', 'JANAPRIYA SAINEST'),
    getStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
    SHD[1087],
    getStops(PTCR_GTKS, 'MOOSAPET', 'PANJAGUTTA'),
    getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
  ),
  ["189M/272G"].concat(
    getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
    SHD[1087],
    getStops(PTCR_GTKS, 'MOOSAPET', 'PANJAGUTTA'),
    getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
  ),

  // 218 SERIES
  ["218"].concat(
    getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
    SHD[3], SHD[110], SHD[507]
  ),
  ["218A"].concat(
    getStops(PTCR_GTKS, 'PATANCHERUVU', 'AFZALGUNJ')
  ),
  ["218C"].concat(
    getStops(PTCR_GTKS, 'PATANCHERUVU', 'CITY BUS STATION')
  ),
  ["218D"].concat(
    getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
    SHD[3], SHD[110], SHD[506],
    getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'DILSHUKNAGAR')
  ),
  ["218L"].concat(
    getStops(PTCR_GTKS, 'LINGAMPALLY', 'ASSEMBLY'),
    SHD[3], SHD[110], SHD[507]
  ),

  // 219 SERIES
  ["219"].concat(
    getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
    SHD[1087],
    getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD")
  ),
  ["219/16A"].concat(
    getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
    getStops(IBP_DNGL, "METTUGUDA", "BALANAGAR"),
    SHD[1087],
    getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
  ),
  ["219/17"].concat(
    getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "BALANAGAR"),
    SHD[1087],
    getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
  ),
  ["219/17H"].concat(
    getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "BALANAGAR"),
    SHD[1087],
    getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
  ),
  ["219/229"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(IBP_DNGL, 'BOWENPALLY X ROADS', 'BALANAGAR'), SHD[1087], getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')),
  ["219/250"].concat(
    getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
    getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'SECUNDERABAD'),
    getStops(IBP_DNGL, 'PATNY', 'BALANAGAR'),
    SHD[1087],
    getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
  ),
  ["219/272G"].concat(
    getStops(DNGL_IBP, "GANDIMAISAMMA", "BALANAGAR"),
    SHD[1087],
    getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
  ),

  // 229 SERIES
  ["229"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'SECUNDERABAD')),
  ["229/5K"].concat(
    getStops(MNBD_SRPT, 'MEHDIPATNAM', 'PATNY CENTER'),
    getStops(IBP_DNGL, "PARADISE", "BOWENPALLY X ROADS"),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),
  ["229/90L"].concat(
    getStops(IBP_DNGL, "LB NAGAR X ROADS", "BOWENPALLY X ROADS"),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),
  ["229/219"].concat(getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'), SHD[1087], getStops(DNGL_IBP, 'BALANAGAR', 'BOWENPALLY X ROADS'), getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')),
  ["229/279"].concat(
    getStops(IBP_DNGL, "IBRAHIMPATNAM", "BOWENPALLY X ROADS"),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),
  ["229/290"].concat(
    getStops(KTGD_LGRH, "HAYATHNAGAR", "BHAGYA LATHA"),
    getStops(TailsDOWN, 'SHANTHI NAGAR - VANASTHALIPURAM', 'VANASTHALIPURAM'),
    getStops(KTGD_LGRH, 'PANAMA', 'LB NAGAR X ROADS'),
    getStops(IBP_DNGL, "KAMINENI HOSPITALS", "BOWENPALLY X ROADS"),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),
  ["229/290U"].concat(
    getStops(KTGD_LGRH, 'HAYATHNAGAR', 'LB NAGAR X ROADS'),
    getStops(IBP_DNGL, "KAMINENI HOSPITALS", "BOWENPALLY X ROADS"),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),

  // 242 SERIES
  ["242"].concat(
    getStops(KSR_SHMB, "KEESARAGUTTA", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
    SHD[878],
    SHD[898]
  ),
  ["242/17H"].concat(
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA')
  ),
  ["242/3K"].concat(
    getStops(SHMB_KSR, 'AFZALGUNJ', 'KEESARAGUTTA')
  ),
  ["242A"].concat(
    "ANKIREDDY PALLY VILLAGE", SHD[46], "ANKIREDDY PALLY X ROADS",
    getStops(KSR_SHMB, "KEESARAGUTTA KAMAN", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
    SHD[878],
    SHD[898]
  ),
  ["242B"].concat(
    SHD[147],
    SHD[46],
    getStops(KSR_SHMB, "KEESARA X ROADS", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
    SHD[878],
    SHD[898]
  ),
  ["242G"].concat(
    "KEESARA X ROADS", SHD[475], SHD[476], SHD[829], SHD[318], SHD[520],
    getStops(KSR_SHMB, "KUNDANPALLY X ROADS", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
    SHD[878],
    SHD[898]
  ),
  ["242GA"].concat(
    "ANKIREDDY PALLY VILLAGE", SHD[46], "ANKIREDDY PALLY X ROADS", "KEESARAGUTTA KAMAN", "KEESARA X ROADS", SHD[475], SHD[476], SHD[829], SHD[318], SHD[520],
    getStops(KSR_SHMB, "KUNDANPALLY X ROADS", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
    SHD[878],
    SHD[898]
  ),
  ["242RG"].concat(
    SHD[842], "INDIRA GRUHAKALPA", SHD[128],
    getStops(KSR_SHMB, "BANDLAGUDA - NAGARAM", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
    SHD[878],
    SHD[898]
  ),

  // 250 SERIES
  ["250"].concat(
    getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
    getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'ALUGADDA BHAVI'),
    SHD[878], SHD[898],
  ),
  ["250/49"].concat(
    getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
    "LAKDI KA PUL (BJR CLG)",
    getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KHAIRATHABAD'),
    getStops(TailsDOWN, 'RAJ BHAVAN', 'SOMAJIGUDA'),
    getStops(LGPL_CRPL, 'GREEN LANDS', 'ASHOK NAGAR - NFC'),
    getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
  ),
  ["250/49M"].concat(
    getStops(LGPL_CRPL, "MEHDIPATNAM", "ASHOK NAGAR - NFC"),
    getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
  ),
  ["250/219"].concat(
    getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'),
    SHD[1087],
    getStops(DNGL_IBP, 'BALANAGAR', 'PATNY'),
    SHD[898],
    getStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'ASHOK NAGAR - NFC'),
    getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
  ),

  // 251 SERIES
  ["251/1Z"].concat(
    getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
    getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "SHAMSHABAD")
  ),

  // 272 SERIES
  ["272"].concat(
    "BOWRAMPET",
    "BOWRAMPET X ROADS",
    getStops(DNGL_IBP, "GANDIMAISAMMA", "SECUNDERABAD")
  ),

  // 277 SERIES
  ["277D"].concat(
    getStops(IBP_DNGL, "IBRAHIMPATNAM", "SAGAR RING ROAD"),
    getStops(KTGD_LGRH, "LB NAGAR X ROADS", "KOTI WOMENS COLLEGE")
  ),

  // 279 SERIES
  ["279"].concat(
    getStops(IBP_DNGL, "IBRAHIMPATNAM", "SECUNDERABAD"),
    SHD[754],
    SHD[448]
  ),
  ["279/229"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'IBRAHIMPATNAM')
  ),
  ["279U"].concat(getStops(DNGL_IBP, "UPPAL RING ROAD", "IBRAHIMPATNAM")),

  // 290 SERIES
  ["290"].concat(
    getStops(KTGD_LGRH, "HAYATHNAGAR", "BHAGYA LATHA"),
    getStops(TailsDOWN, 'SHANTHI NAGAR - VANASTHALIPURAM', 'VANASTHALIPURAM'),
    getStops(KTGD_LGRH, 'PANAMA', 'LB NAGAR X ROADS'),
    getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
    SHD[754],
    SHD[448]
  ),
  ["290/229"].concat(
    getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
    getStops(DNGL_IBP, "BOWENPALLY X ROADS", "KAMINENI HOSPITALS"),
    getStops(LGRH_KTGD, "LB NAGAR X ROADS", "PANAMA"),
    getStops(TailsUP, 'VANASTHALIPURAM', 'SUBHADRA NAGAR'),
    SHD[369],
    getStops(LGRH_KTGD, 'BHAGYA LATHA', 'HAYATHNAGAR')
  ),
  ["290U"].concat(
    getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
    getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
    SHD[754],
    SHD[448]
  ),
  ["290U/229"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'KAMINENI HOSPITALS'), getStops(LGRH_KTGD, 'LB NAGAR X ROADS', 'HAYATHNAGAR')
  ),

  // 299 SERIES
  ["299"].concat(getStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "HAYATHNAGAR")),
  ["299D"].concat(getStops(LGRH_KTGD, "DILSHUKNAGAR", "HAYATHNAGAR")),

  // 300 SERIES

  ["300"].concat(
    getStops(DNGL_IBP, "UPPAL RING ROAD", "LB NAGAR X ROADS"),
    getStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
    "MEHDIPATNAM"
  ),
  ["300/251"].concat(
    getStops(SHMB_KSR, 'SHAMSHABAD', 'BUDVEL'),
    getStops(SKPL_SECB, "ARAMGHAR", "SAGAR RING ROAD"),
    getStops(IBP_DNGL, "LB NAGAR X ROADS", "UPPAL RING ROAD")
  ),
  ["300L"].concat(
    "LB NAGAR X ROADS",
    getStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
    "MEHDIPATNAM"
  ),
]

function getStops(a, s, d) {
  return a.slice(a.indexOf(s), a.indexOf(d) + 1);
}

let done, total, RS_Percentage;
total = 502;
done = DetailedRoutesUP.length;
// done = 500;
// alert(done)
RS_Percentage = done / total;
RS_Percentage = RS_Percentage * 75;

let completionProgress = [25 + parseInt(RS_Percentage), 25, 25, 25, 25, 95]

let appPercentageValue = 0;

completionProgress.forEach(element => {
  appPercentageValue += element;
});

appPercentageValue = appPercentageValue / completionProgress.length;

let percentRS = document.getElementById('percentRS');
let percentRStext = document.getElementById('percentRStext');

let percentBSS = document.getElementById('percentBSS');
let percentBSStext = document.getElementById('percentBSStext');

let percentFTS = document.getElementById('percentFTS');
let percentFTStext = document.getElementById('percentFTStext');

let percentFCS = document.getElementById('percentFCS');
let percentFCStext = document.getElementById('percentFCStext');

let percentARS = document.getElementById('percentARS');
let percentARStext = document.getElementById('percentARStext');

let percentOS = document.getElementById('percentOS');
let percentOStext = document.getElementById('percentOStext');

let appPercentage = document.getElementById('appPercentage');
let appPercentText = document.getElementById('appPercentText');


percentRS.style.setProperty('--i', completionProgress[0]);
percentRStext.innerHTML = completionProgress[0] + "<span>%</span>";

percentBSS.style.setProperty('--i', completionProgress[1]);
percentBSStext.innerHTML = completionProgress[1] + "<span>%</span>";

percentFTS.style.setProperty('--i', completionProgress[2]);
percentFTStext.innerHTML = completionProgress[2] + "<span>%</span>";

percentFCS.style.setProperty('--i', completionProgress[3]);
percentFCStext.innerHTML = completionProgress[3] + "<span>%</span>";

percentARS.style.setProperty('--i', completionProgress[4]);
percentARStext.innerHTML = completionProgress[4] + "<span>%</span>";

percentOS.style.setProperty('--i', completionProgress[5]);
percentOStext.innerHTML = completionProgress[5] + "<span>%</span>";

appPercentage.style.setProperty('--i', parseInt(appPercentageValue));
appPercentText.innerHTML = parseInt(appPercentageValue) + "<span>%</span>";

if (completionProgress[0] <= 25) {
  percentRS.style.setProperty('--clr', "red");
} else if (completionProgress[0] < 50) {
  percentRS.style.setProperty('--clr', "#FFCB35");
} else if (completionProgress[0] > 50 && completionProgress[0] < 75) {
  percentRS.classList.remove("less");
  percentRS.style.setProperty('--clr', "#FFCB35");
} else if (completionProgress[0] > 75 && completionProgress[0] < 94) {
  percentRS.classList.remove("less");
  percentRS.style.setProperty('--clr', "yellowgreen");
} else if (completionProgress[0] > 94) {
  percentRS.classList.remove("less");
  percentRS.style.setProperty('--clr', "#16DD38");
}

if (completionProgress[1] <= 25) {
  percentBSS.style.setProperty('--clr', "red");
} else if (completionProgress[1] < 50) {
  percentBSS.style.setProperty('--clr', "#FFCB35");
} else if (completionProgress[1] > 50 && completionProgress[1] < 75) {
  percentBSS.classList.remove("less");
  percentBSS.style.setProperty('--clr', "#FFCB35");
} else if (completionProgress[1] > 75 && completionProgress[1] < 94) {
  percentBSS.classList.remove("less");
  percentBSS.style.setProperty('--clr', "yellowgreen");
} else if (completionProgress[1] > 94) {
  percentBSS.classList.remove("less");
  percentBSS.style.setProperty('--clr', "#16DD38");
}

if (completionProgress[2] <= 25) {
  percentFTS.style.setProperty('--clr', "red");
} else if (completionProgress[2] < 50) {
  percentFTS.style.setProperty('--clr', "#FFCB35");
} else if (completionProgress[2] > 50 && completionProgress[2] < 75) {
  percentFTS.classList.remove("less");
  percentFTS.style.setProperty('--clr', "#FFCB35");
} else if (completionProgress[2] > 75 && completionProgress[2] < 94) {
  percentFTS.classList.remove("less");
  percentFTS.style.setProperty('--clr', "yellowgreen");
} else if (completionProgress[2] > 94) {
  percentFTS.classList.remove("less");
  percentFTS.style.setProperty('--clr', "#16DD38");
}

if (completionProgress[3] <= 25) {
  percentFCS.style.setProperty('--clr', "red");
} else if (completionProgress[3] < 50) {
  percentFCS.style.setProperty('--clr', "#FFCB35");
} else if (completionProgress[3] > 50 && completionProgress[3] < 75) {
  percentFCS.classList.remove("less");
  percentFCS.style.setProperty('--clr', "#FFCB35");
} else if (completionProgress[3] > 75 && completionProgress[3] < 94) {
  percentFCS.classList.remove("less");
  percentFCS.style.setProperty('--clr', "yellowgreen");
} else if (completionProgress[3] > 94) {
  percentFCS.classList.remove("less");
  percentFCS.style.setProperty('--clr', "#16DD38");
}

if (completionProgress[4] <= 25) {
  percentARS.style.setProperty('--clr', "red");
} else if (completionProgress[4] < 50) {
  percentARS.style.setProperty('--clr', "#FFCB35");
} else if (completionProgress[4] > 50 && completionProgress[4] < 75) {
  percentARS.classList.remove("less");
  percentARS.style.setProperty('--clr', "#FFCB35");
} else if (completionProgress[4] > 75 && completionProgress[4] < 94) {
  percentARS.classList.remove("less");
  percentARS.style.setProperty('--clr', "yellowgreen");
} else if (completionProgress[4] > 94) {
  percentARS.classList.remove("less");
  percentARS.style.setProperty('--clr', "#16DD38");
}

if (completionProgress[5] <= 25) {
  percentOS.style.setProperty('--clr', "red");
} else if (completionProgress[5] < 50) {
  percentOS.style.setProperty('--clr', "#FFCB35");
} else if (completionProgress[5] > 50 && completionProgress[5] < 75) {
  percentOS.classList.remove("less");
  percentOS.style.setProperty('--clr', "#FFCB35");
} else if (completionProgress[5] > 75 && completionProgress[5] < 94) {
  percentOS.classList.remove("less");
  percentOS.style.setProperty('--clr', "yellowgreen");
} else if (completionProgress[5] > 94) {
  percentOS.classList.remove("less");
  percentOS.style.setProperty('--clr', "#16DD38");
}

if (parseInt(appPercentageValue) <= 25) {
  appPercentage.style.setProperty('--clr', "red");
} else if (parseInt(appPercentageValue) < 50) {
  appPercentage.style.setProperty('--clr', "#FFCB35");
} else if (parseInt(appPercentageValue) > 50 && parseInt(appPercentageValue) < 75) {
  appPercentage.classList.remove("less");
  appPercentage.style.setProperty('--clr', "#FFCB35");
} else if (parseInt(appPercentageValue) > 75 && parseInt(appPercentageValue) < 94) {
  appPercentage.classList.remove("less");
  appPercentage.style.setProperty('--clr', "yellowgreen");
} else if (parseInt(appPercentageValue) > 94) {
  appPercentage.classList.remove("less");
  appPercentage.style.setProperty('--clr', "#16DD38");
}

