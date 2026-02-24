// ============================================
// CATÁLOGOS COMPLETOS DEL SIMULADOR DE EMPEÑOS
// ============================================

const CATALOGS = {
  // ---- CATEGORÍAS PRINCIPALES ----
  categories: [
    { id: 1, name: "Oro y Joyas", icon: "oro", type: "oro" },
    { id: 4, name: "Celulares", icon: "celular", type: "marca_modelo" },
    { id: 9, name: "Autos", icon: "auto", type: "redirect", url: "/empeno-de-autos" },
    { id: 3, name: "Relojes", icon: "reloj", type: "redirect", url: "https://wa.me/529992380524?text=Hola,%20Fundación%20Dondé.%20Estoy%20interesado%20en%20empeñar%20un%20reloj%20y%20me%20gustaría%20recibir%20ayuda%20para%20cotizarlo." },
    { id: 17, name: "Electrónicos y Varios", icon: "electronico", type: "electronicos" },
    { id: 11, name: "Laptops", icon: "laptop", type: "marca_modelo" },
    { id: 7, name: "Motos", icon: "moto", type: "marca_modelo", requirementsDialog: "motos" },
    { id: 10, name: "Pantallas", icon: "pantalla", type: "marca_modelo" },
    { id: 12, name: "Videojuegos", icon: "videojuego", type: "marca_modelo" },
    { id: 5, name: "Tablets", icon: "tablet", type: "marca_modelo" },
    { id: 15, name: "Smartwatch", icon: "smartwatch", type: "marca_modelo" },
    { id: 16, name: "Computadoras de Escritorio", icon: "computadora", type: "marca_modelo" },
    { id: 99, name: "Otros Artículos", icon: "otros", type: "redirect", url: "/empenar-otras-garantias" }
  ],

  // ---- ORO: KILATAJES ----
  kilatajes: [
    { value: "8", text: "8 K", precioGramo: 180 },
    { value: "10", text: "10 K", precioGramo: 280 },
    { value: "12", text: "12 K", precioGramo: 350 },
    { value: "14", text: "14 K", precioGramo: 450 },
    { value: "16", text: "16 K", precioGramo: 520 },
    { value: "18", text: "18 K", precioGramo: 620 },
    { value: "21", text: "21 K", precioGramo: 750 },
    { value: "24", text: "24 K", precioGramo: 900 }
  ],

  // ---- MARCAS POR CATEGORÍA ----
  brands: {
    // Celulares (id: 4)
    4: [
      { value: "1", text: "ACER" },
      { value: "161", text: "APPLE" },
      { value: "162", text: "ASUS" },
      { value: "3768", text: "CMF BY NOTHING" },
      { value: "341", text: "GOOGLE" },
      { value: "313", text: "HONOR" },
      { value: "167", text: "HUAWEI" },
      { value: "170", text: "LANIX" },
      { value: "172", text: "MOTOROLA" },
      { value: "3049", text: "NOTHING" },
      { value: "2575", text: "NUBIA" },
      { value: "508", text: "ONE PLUS" },
      { value: "503", text: "OPPO" },
      { value: "110", text: "OTRAS MARCAS" },
      { value: "1364", text: "REALME" },
      { value: "126", text: "SAMSUNG" },
      { value: "132", text: "SONY" },
      { value: "1522", text: "TCL" },
      { value: "2833", text: "TECNO MOBILE" },
      { value: "1862", text: "VIVO" },
      { value: "314", text: "XIAOMI" },
      { value: "143", text: "ZTE" }
    ],
    // Laptops (id: 11)
    11: [
      { value: "3555", text: "ACEMAGIC" },
      { value: "1", text: "ACER" },
      { value: "160", text: "AOC" },
      { value: "161", text: "APPLE" },
      { value: "162", text: "ASUS" },
      { value: "1446", text: "CHUWI" },
      { value: "35", text: "DELL" },
      { value: "3003", text: "EVOLVE" },
      { value: "316", text: "GHIA" },
      { value: "723", text: "GIGABYTE" },
      { value: "313", text: "HONOR" },
      { value: "62", text: "HP" },
      { value: "167", text: "HUAWEI" },
      { value: "63", text: "HYUNDAI" },
      { value: "170", text: "LANIX" },
      { value: "83", text: "LENOVO" },
      { value: "507", text: "MSI" },
      { value: "110", text: "OTRAS MARCAS" },
      { value: "126", text: "SAMSUNG" },
      { value: "136", text: "TOSHIBA" },
      { value: "1453", text: "VAIO" }
    ],
    // Motos (id: 7)
    7: [
      { value: "501", text: "BAJAJ" },
      { value: "163", text: "BMW" },
      { value: "2805", text: "CARABELA" },
      { value: "509", text: "CF MOTO" },
      { value: "35", text: "DUCATI" },
      { value: "316", text: "HARLEY DAVIDSON" },
      { value: "313", text: "HERO" },
      { value: "62", text: "HONDA" },
      { value: "167", text: "HUSQVARNA" },
      { value: "723", text: "INDIAN" },
      { value: "170", text: "ITALIKA" },
      { value: "507", text: "KAWASAKI" },
      { value: "83", text: "KTM" },
      { value: "110", text: "OTRAS MARCAS" },
      { value: "508", text: "ROYAL ENFIELD" },
      { value: "132", text: "SUZUKI" },
      { value: "136", text: "TRIUMPH" },
      { value: "503", text: "VENTO" },
      { value: "314", text: "YAMAHA" }
    ],
    // Pantallas (id: 10)
    10: [
      { value: "160", text: "AOC" },
      { value: "3555", text: "DAEWOO" },
      { value: "62", text: "HISENSE" },
      { value: "63", text: "HYUNDAI" },
      { value: "83", text: "LG" },
      { value: "110", text: "OTRAS MARCAS" },
      { value: "126", text: "SAMSUNG" },
      { value: "316", text: "SHARP" },
      { value: "132", text: "SONY" },
      { value: "1522", text: "TCL" },
      { value: "136", text: "TOSHIBA" },
      { value: "503", text: "VIZIO" },
      { value: "314", text: "XIAOMI" }
    ],
    // Videojuegos (id: 12)
    12: [
      { value: "507", text: "MICROSOFT" },
      { value: "83", text: "NINTENDO" },
      { value: "110", text: "OTRAS MARCAS" },
      { value: "132", text: "SONY" },
      { value: "1453", text: "VALVE" }
    ],
    // Tablets (id: 5)
    5: [
      { value: "161", text: "APPLE" },
      { value: "313", text: "HONOR" },
      { value: "167", text: "HUAWEI" },
      { value: "83", text: "LENOVO" },
      { value: "110", text: "OTRAS MARCAS" },
      { value: "1364", text: "REALME" },
      { value: "126", text: "SAMSUNG" },
      { value: "314", text: "XIAOMI" }
    ],
    // Smartwatch (id: 15)
    15: [
      { value: "161", text: "APPLE" },
      { value: "316", text: "GARMIN" },
      { value: "167", text: "HUAWEI" },
      { value: "110", text: "OTRAS MARCAS" },
      { value: "126", text: "SAMSUNG" },
      { value: "314", text: "XIAOMI" }
    ],
    // Computadoras de Escritorio (id: 16)
    16: [
      { value: "1", text: "ACER" },
      { value: "161", text: "APPLE" },
      { value: "162", text: "ASUS" },
      { value: "35", text: "DELL" },
      { value: "316", text: "GHIA" },
      { value: "62", text: "HP" },
      { value: "167", text: "HUAWEI" },
      { value: "83", text: "LENOVO" },
      { value: "110", text: "OTRAS MARCAS" },
      { value: "126", text: "SAMSUNG" }
    ]
  },

  // ---- MODELOS POR MARCA Y CATEGORÍA ----
  // Estructura: models[categoryId][brandValue] = [...]
  models: {
    // === CELULARES ===
    4: {
      "161": [ // APPLE
        { value: "48259", text: "IPHONE 14 (2022)" },
        { value: "31350", text: "IPHONE 14" },
        { value: "33001", text: "IPHONE 14 PLUS" },
        { value: "31058", text: "IPHONE 14 PRO" },
        { value: "37213", text: "IPHONE 14 PRO MAX" },
        { value: "52001", text: "IPHONE 15" },
        { value: "52002", text: "IPHONE 15 PLUS" },
        { value: "52003", text: "IPHONE 15 PRO" },
        { value: "52004", text: "IPHONE 15 PRO MAX" },
        { value: "58001", text: "IPHONE 16" },
        { value: "58002", text: "IPHONE 16 PLUS" },
        { value: "58003", text: "IPHONE 16 PRO" },
        { value: "58004", text: "IPHONE 16 PRO MAX" },
        { value: "25001", text: "IPHONE 13" },
        { value: "25002", text: "IPHONE 13 MINI" },
        { value: "25003", text: "IPHONE 13 PRO" },
        { value: "25004", text: "IPHONE 13 PRO MAX" },
        { value: "20001", text: "IPHONE 12" },
        { value: "20002", text: "IPHONE 12 MINI" },
        { value: "20003", text: "IPHONE 12 PRO" },
        { value: "20004", text: "IPHONE 12 PRO MAX" },
        { value: "15001", text: "IPHONE 11" },
        { value: "15002", text: "IPHONE 11 PRO" },
        { value: "15003", text: "IPHONE 11 PRO MAX" },
        { value: "12001", text: "IPHONE SE (3RA GENERACIÓN)" },
        { value: "10001", text: "IPHONE SE (2DA GENERACIÓN)" },
        { value: "10002", text: "IPHONE XR" },
        { value: "10003", text: "IPHONE XS" },
        { value: "10004", text: "IPHONE XS MAX" }
      ],
      "126": [ // SAMSUNG
        { value: "60001", text: "GALAXY S24 ULTRA" },
        { value: "60002", text: "GALAXY S24+" },
        { value: "60003", text: "GALAXY S24" },
        { value: "55001", text: "GALAXY S23 ULTRA" },
        { value: "55002", text: "GALAXY S23+" },
        { value: "55003", text: "GALAXY S23" },
        { value: "55004", text: "GALAXY S23 FE" },
        { value: "50001", text: "GALAXY S22 ULTRA" },
        { value: "50002", text: "GALAXY S22+" },
        { value: "50003", text: "GALAXY S22" },
        { value: "45001", text: "GALAXY S21 ULTRA" },
        { value: "45002", text: "GALAXY S21+" },
        { value: "45003", text: "GALAXY S21" },
        { value: "45004", text: "GALAXY S21 FE" },
        { value: "60010", text: "GALAXY Z FOLD 5" },
        { value: "60011", text: "GALAXY Z FLIP 5" },
        { value: "55010", text: "GALAXY Z FOLD 4" },
        { value: "55011", text: "GALAXY Z FLIP 4" },
        { value: "60020", text: "GALAXY A54 5G" },
        { value: "60021", text: "GALAXY A34 5G" },
        { value: "60022", text: "GALAXY A24" },
        { value: "60023", text: "GALAXY A14" },
        { value: "60024", text: "GALAXY A04" },
        { value: "55020", text: "GALAXY A53 5G" },
        { value: "55021", text: "GALAXY A33 5G" },
        { value: "55022", text: "GALAXY A23" },
        { value: "55023", text: "GALAXY A13" },
        { value: "55024", text: "GALAXY A03" },
        { value: "50010", text: "GALAXY M14" },
        { value: "50011", text: "GALAXY M34" },
        { value: "50012", text: "GALAXY M54" }
      ],
      "172": [ // MOTOROLA
        { value: "70001", text: "MOTO G84 5G" },
        { value: "70002", text: "MOTO G73 5G" },
        { value: "70003", text: "MOTO G53 5G" },
        { value: "70004", text: "MOTO G34 5G" },
        { value: "70005", text: "MOTO G24" },
        { value: "70006", text: "MOTO G14" },
        { value: "70007", text: "MOTO G04" },
        { value: "70010", text: "MOTO EDGE 40 PRO" },
        { value: "70011", text: "MOTO EDGE 40" },
        { value: "70012", text: "MOTO EDGE 30 ULTRA" },
        { value: "70013", text: "MOTO EDGE 30 FUSION" },
        { value: "70014", text: "MOTO EDGE 30 NEO" },
        { value: "70015", text: "MOTOROLA RAZR 40 ULTRA" },
        { value: "70016", text: "MOTOROLA RAZR 40" },
        { value: "70020", text: "MOTO E22" },
        { value: "70021", text: "MOTO E13" },
        { value: "70022", text: "MOTO G POWER (2023)" },
        { value: "70023", text: "MOTO G STYLUS (2023)" }
      ],
      "314": [ // XIAOMI
        { value: "80001", text: "XIAOMI 14" },
        { value: "80002", text: "XIAOMI 13T PRO" },
        { value: "80003", text: "XIAOMI 13T" },
        { value: "80004", text: "XIAOMI 13" },
        { value: "80010", text: "REDMI NOTE 13 PRO+" },
        { value: "80011", text: "REDMI NOTE 13 PRO" },
        { value: "80012", text: "REDMI NOTE 13" },
        { value: "80013", text: "REDMI NOTE 12 PRO+" },
        { value: "80014", text: "REDMI NOTE 12 PRO" },
        { value: "80015", text: "REDMI NOTE 12" },
        { value: "80020", text: "REDMI 13C" },
        { value: "80021", text: "REDMI 12" },
        { value: "80022", text: "REDMI A2" },
        { value: "80023", text: "POCO X6 PRO" },
        { value: "80024", text: "POCO X5 PRO" },
        { value: "80025", text: "POCO M6 PRO" },
        { value: "80026", text: "POCO F5" }
      ],
      "167": [ // HUAWEI
        { value: "90001", text: "HUAWEI P60 PRO" },
        { value: "90002", text: "HUAWEI P50 PRO" },
        { value: "90003", text: "HUAWEI NOVA 12" },
        { value: "90004", text: "HUAWEI NOVA 11" },
        { value: "90005", text: "HUAWEI NOVA 10" },
        { value: "90006", text: "HUAWEI MATE 50 PRO" }
      ],
      "313": [ // HONOR
        { value: "91001", text: "HONOR 90" },
        { value: "91002", text: "HONOR X8B" },
        { value: "91003", text: "HONOR X7B" },
        { value: "91004", text: "HONOR X6A" },
        { value: "91005", text: "HONOR MAGIC 6 PRO" }
      ],
      "508": [ // ONE PLUS
        { value: "92001", text: "ONEPLUS 12" },
        { value: "92002", text: "ONEPLUS 11" },
        { value: "92003", text: "ONEPLUS NORD 3" },
        { value: "92004", text: "ONEPLUS NORD CE 3 LITE" }
      ],
      "503": [ // OPPO
        { value: "93001", text: "OPPO RENO 10 PRO" },
        { value: "93002", text: "OPPO RENO 10" },
        { value: "93003", text: "OPPO A98 5G" },
        { value: "93004", text: "OPPO A78 5G" },
        { value: "93005", text: "OPPO A58" }
      ],
      "1364": [ // REALME
        { value: "94001", text: "REALME GT 5 PRO" },
        { value: "94002", text: "REALME 11 PRO+" },
        { value: "94003", text: "REALME C55" },
        { value: "94004", text: "REALME C53" }
      ],
      "132": [ // SONY
        { value: "95001", text: "XPERIA 1 V" },
        { value: "95002", text: "XPERIA 5 V" },
        { value: "95003", text: "XPERIA 10 V" }
      ],
      "341": [ // GOOGLE
        { value: "96001", text: "PIXEL 8 PRO" },
        { value: "96002", text: "PIXEL 8" },
        { value: "96003", text: "PIXEL 7A" },
        { value: "96004", text: "PIXEL 7 PRO" },
        { value: "96005", text: "PIXEL 7" }
      ],
      "143": [ // ZTE
        { value: "97001", text: "ZTE BLADE A54" },
        { value: "97002", text: "ZTE BLADE V50" },
        { value: "97003", text: "ZTE NUBIA Z50 ULTRA" }
      ],
      "1862": [ // VIVO
        { value: "98001", text: "VIVO V29" },
        { value: "98002", text: "VIVO Y36" },
        { value: "98003", text: "VIVO Y17S" }
      ],
      "1522": [ // TCL
        { value: "99001", text: "TCL 40 NXTPAPER" },
        { value: "99002", text: "TCL 40 SE" },
        { value: "99003", text: "TCL 305" }
      ],
      "2833": [ // TECNO MOBILE
        { value: "99101", text: "TECNO SPARK 20 PRO" },
        { value: "99102", text: "TECNO CAMON 20" },
        { value: "99103", text: "TECNO POP 7 PRO" }
      ],
      "3049": [ // NOTHING
        { value: "99201", text: "NOTHING PHONE (2)" },
        { value: "99202", text: "NOTHING PHONE (1)" }
      ],
      "3768": [ // CMF BY NOTHING
        { value: "99301", text: "CMF PHONE 1" }
      ],
      "2575": [ // NUBIA
        { value: "99401", text: "NUBIA Z60 ULTRA" },
        { value: "99402", text: "NUBIA NEO 5G" }
      ],
      "162": [ // ASUS
        { value: "99501", text: "ROG PHONE 7" },
        { value: "99502", text: "ZENFONE 10" }
      ],
      "1": [ // ACER
        { value: "99601", text: "ACER LIQUID ZEST" }
      ],
      "170": [ // LANIX
        { value: "99701", text: "LANIX ILIUM M9" },
        { value: "99702", text: "LANIX ILIUM M7" }
      ],
      "110": [ // OTRAS MARCAS
        { value: "99900", text: "OTRO MODELO" }
      ]
    },
    // === LAPTOPS ===
    11: {
      "161": [ // APPLE
        { value: "L1001", text: "MACBOOK AIR M2 (2024)" },
        { value: "L1002", text: "MACBOOK AIR M2 (2022)" },
        { value: "L1003", text: "MACBOOK AIR M1 (2020)" },
        { value: "L1004", text: "MACBOOK PRO 14 M3 PRO" },
        { value: "L1005", text: "MACBOOK PRO 16 M3 MAX" },
        { value: "L1006", text: "MACBOOK PRO 13 M2" },
        { value: "L1007", text: "MACBOOK PRO 14 M2 PRO" }
      ],
      "62": [ // HP
        { value: "L2001", text: "HP PAVILION 15" },
        { value: "L2002", text: "HP PAVILION X360 14" },
        { value: "L2003", text: "HP ENVY X360 15" },
        { value: "L2004", text: "HP SPECTRE X360 14" },
        { value: "L2005", text: "HP VICTUS 16" },
        { value: "L2006", text: "HP OMEN 16" },
        { value: "L2007", text: "HP 245 G9" },
        { value: "L2008", text: "HP 250 G9" }
      ],
      "83": [ // LENOVO
        { value: "L3001", text: "LENOVO IDEAPAD 3 15" },
        { value: "L3002", text: "LENOVO IDEAPAD 5 PRO" },
        { value: "L3003", text: "LENOVO YOGA 7I" },
        { value: "L3004", text: "LENOVO THINKPAD X1 CARBON" },
        { value: "L3005", text: "LENOVO LEGION 5" },
        { value: "L3006", text: "LENOVO LEGION 5 PRO" },
        { value: "L3007", text: "LENOVO V15 G4" }
      ],
      "35": [ // DELL
        { value: "L4001", text: "DELL INSPIRON 15 3520" },
        { value: "L4002", text: "DELL INSPIRON 16 5630" },
        { value: "L4003", text: "DELL LATITUDE 5540" },
        { value: "L4004", text: "DELL XPS 13 PLUS" },
        { value: "L4005", text: "DELL XPS 15" },
        { value: "L4006", text: "DELL G15 5530" }
      ],
      "1": [ // ACER
        { value: "L5001", text: "ACER ASPIRE 3" },
        { value: "L5002", text: "ACER ASPIRE 5" },
        { value: "L5003", text: "ACER NITRO 5" },
        { value: "L5004", text: "ACER SWIFT 3" },
        { value: "L5005", text: "ACER PREDATOR HELIOS 300" }
      ],
      "162": [ // ASUS
        { value: "L6001", text: "ASUS VIVOBOOK 15" },
        { value: "L6002", text: "ASUS ZENBOOK 14" },
        { value: "L6003", text: "ASUS ROG STRIX G16" },
        { value: "L6004", text: "ASUS TUF GAMING F15" }
      ],
      "126": [ // SAMSUNG
        { value: "L7001", text: "SAMSUNG GALAXY BOOK 3 PRO" },
        { value: "L7002", text: "SAMSUNG GALAXY BOOK 3" },
        { value: "L7003", text: "SAMSUNG GALAXY BOOK GO" }
      ],
      "507": [ // MSI
        { value: "L8001", text: "MSI GF63 THIN" },
        { value: "L8002", text: "MSI KATANA GF66" },
        { value: "L8003", text: "MSI RAIDER GE78" }
      ],
      "167": [ // HUAWEI
        { value: "L9001", text: "HUAWEI MATEBOOK D15" },
        { value: "L9002", text: "HUAWEI MATEBOOK 14S" }
      ],
      "110": [{ value: "L9900", text: "OTRO MODELO" }],
      "3555": [{ value: "L0001", text: "ACEMAGIC AX15" }],
      "160": [{ value: "L0101", text: "AOC U2790PQU" }],
      "1446": [{ value: "L0201", text: "CHUWI HEROBOOK PRO" }],
      "3003": [{ value: "L0301", text: "EVOLVE III MAESTRO" }],
      "316": [{ value: "L0401", text: "GHIA LIBERO" }],
      "723": [{ value: "L0501", text: "GIGABYTE AERO 16" }],
      "313": [{ value: "L0601", text: "HONOR MAGICBOOK X16" }],
      "63": [{ value: "L0701", text: "HYUNDAI THINNOTE-A" }],
      "170": [{ value: "L0801", text: "LANIX NEURON X" }],
      "136": [{ value: "L0901", text: "TOSHIBA DYNABOOK" }],
      "1453": [{ value: "L1101", text: "VAIO SX14" }]
    },
    // === MOTOS ===
    7: {
      "170": [ // ITALIKA
        { value: "M1001", text: "ITALIKA FT 150" },
        { value: "M1002", text: "ITALIKA FT 125" },
        { value: "M1003", text: "ITALIKA DM 150" },
        { value: "M1004", text: "ITALIKA DM 200" },
        { value: "M1005", text: "ITALIKA DT 200" },
        { value: "M1006", text: "ITALIKA VORT-X 300" },
        { value: "M1007", text: "ITALIKA AT 110" },
        { value: "M1008", text: "ITALIKA 150Z" },
        { value: "M1009", text: "ITALIKA GTS 175" }
      ],
      "62": [ // HONDA
        { value: "M2001", text: "HONDA CGL 125" },
        { value: "M2002", text: "HONDA XR 150L" },
        { value: "M2003", text: "HONDA NAVI" },
        { value: "M2004", text: "HONDA CB 190R" },
        { value: "M2005", text: "HONDA CB 300R" },
        { value: "M2006", text: "HONDA CRF 300L" },
        { value: "M2007", text: "HONDA ADV 160" }
      ],
      "314": [ // YAMAHA
        { value: "M3001", text: "YAMAHA FZ 25" },
        { value: "M3002", text: "YAMAHA MT-03" },
        { value: "M3003", text: "YAMAHA R3" },
        { value: "M3004", text: "YAMAHA NMAX 155" },
        { value: "M3005", text: "YAMAHA XMAX 300" },
        { value: "M3006", text: "YAMAHA XTZ 250" }
      ],
      "507": [ // KAWASAKI
        { value: "M4001", text: "KAWASAKI NINJA 400" },
        { value: "M4002", text: "KAWASAKI Z400" },
        { value: "M4003", text: "KAWASAKI VERSYS 650" }
      ],
      "132": [ // SUZUKI
        { value: "M5001", text: "SUZUKI GIXXER 250" },
        { value: "M5002", text: "SUZUKI V-STROM 250" },
        { value: "M5003", text: "SUZUKI GSX-S750" }
      ],
      "163": [{ value: "M6001", text: "BMW G 310 R" }],
      "501": [{ value: "M7001", text: "BAJAJ DOMINAR 400" }],
      "83": [{ value: "M8001", text: "KTM DUKE 390" }],
      "503": [{ value: "M9001", text: "VENTO TORNADO 250" }],
      "110": [{ value: "M9900", text: "OTRO MODELO" }],
      "2805": [{ value: "M0101", text: "CARABELA MILESTONE" }],
      "509": [{ value: "M0201", text: "CF MOTO 650 MT" }],
      "35": [{ value: "M0301", text: "DUCATI MONSTER" }],
      "316": [{ value: "M0401", text: "HARLEY DAVIDSON SPORTSTER" }],
      "313": [{ value: "M0501", text: "HERO XPULSE 200" }],
      "167": [{ value: "M0601", text: "HUSQVARNA SVARTPILEN 401" }],
      "723": [{ value: "M0701", text: "INDIAN SCOUT" }],
      "508": [{ value: "M0801", text: "ROYAL ENFIELD CLASSIC 350" }],
      "136": [{ value: "M0901", text: "TRIUMPH TRIDENT 660" }]
    },
    // === PANTALLAS ===
    10: {
      "126": [ // SAMSUNG
        { value: "P1001", text: "SAMSUNG 55\" CRYSTAL UHD 4K" },
        { value: "P1002", text: "SAMSUNG 65\" CRYSTAL UHD 4K" },
        { value: "P1003", text: "SAMSUNG 43\" CRYSTAL UHD 4K" },
        { value: "P1004", text: "SAMSUNG 75\" CRYSTAL UHD 4K" },
        { value: "P1005", text: "SAMSUNG 50\" QLED 4K" },
        { value: "P1006", text: "SAMSUNG 55\" QLED 4K" },
        { value: "P1007", text: "SAMSUNG 32\" HD SMART TV" }
      ],
      "83": [ // LG
        { value: "P2001", text: "LG 55\" OLED C3" },
        { value: "P2002", text: "LG 65\" OLED C3" },
        { value: "P2003", text: "LG 55\" NANOCELL 4K" },
        { value: "P2004", text: "LG 50\" UHD 4K" },
        { value: "P2005", text: "LG 43\" UHD 4K" },
        { value: "P2006", text: "LG 32\" HD SMART TV" }
      ],
      "132": [ // SONY
        { value: "P3001", text: "SONY 55\" BRAVIA XR A80L" },
        { value: "P3002", text: "SONY 65\" BRAVIA XR X90L" },
        { value: "P3003", text: "SONY 50\" X75K" }
      ],
      "62": [ // HISENSE
        { value: "P4001", text: "HISENSE 55\" A6 SERIES" },
        { value: "P4002", text: "HISENSE 65\" U7H" },
        { value: "P4003", text: "HISENSE 50\" A6H" }
      ],
      "1522": [ // TCL
        { value: "P5001", text: "TCL 55\" S4 4K" },
        { value: "P5002", text: "TCL 65\" C835" },
        { value: "P5003", text: "TCL 50\" S4" }
      ],
      "314": [ // XIAOMI
        { value: "P6001", text: "XIAOMI TV A 55\"" },
        { value: "P6002", text: "XIAOMI TV P1 50\"" }
      ],
      "110": [{ value: "P9900", text: "OTRO MODELO" }],
      "160": [{ value: "P0101", text: "AOC 50\" 4K UHD" }],
      "3555": [{ value: "P0201", text: "DAEWOO 43\" FHD" }],
      "63": [{ value: "P0301", text: "HYUNDAI 50\" 4K" }],
      "316": [{ value: "P0401", text: "SHARP AQUOS 55\"" }],
      "136": [{ value: "P0501", text: "TOSHIBA 50\" 4K FIRE TV" }],
      "503": [{ value: "P0601", text: "VIZIO V-SERIES 50\"" }]
    },
    // === VIDEOJUEGOS ===
    12: {
      "132": [ // SONY
        { value: "V1001", text: "PLAYSTATION 5" },
        { value: "V1002", text: "PLAYSTATION 5 DIGITAL" },
        { value: "V1003", text: "PLAYSTATION 4 PRO" },
        { value: "V1004", text: "PLAYSTATION 4 SLIM" },
        { value: "V1005", text: "PS VR2" }
      ],
      "507": [ // MICROSOFT
        { value: "V2001", text: "XBOX SERIES X" },
        { value: "V2002", text: "XBOX SERIES S" },
        { value: "V2003", text: "XBOX ONE X" },
        { value: "V2004", text: "XBOX ONE S" }
      ],
      "83": [ // NINTENDO
        { value: "V3001", text: "NINTENDO SWITCH OLED" },
        { value: "V3002", text: "NINTENDO SWITCH" },
        { value: "V3003", text: "NINTENDO SWITCH LITE" }
      ],
      "1453": [ // VALVE
        { value: "V4001", text: "STEAM DECK 64GB" },
        { value: "V4002", text: "STEAM DECK 256GB" },
        { value: "V4003", text: "STEAM DECK 512GB" }
      ],
      "110": [{ value: "V9900", text: "OTRO MODELO" }]
    },
    // === TABLETS ===
    5: {
      "161": [ // APPLE
        { value: "T1001", text: "IPAD PRO 12.9\" (6TH GEN)" },
        { value: "T1002", text: "IPAD PRO 11\" (4TH GEN)" },
        { value: "T1003", text: "IPAD AIR (5TH GEN) M1" },
        { value: "T1004", text: "IPAD 10TH GEN (2022)" },
        { value: "T1005", text: "IPAD 9TH GEN (2021)" },
        { value: "T1006", text: "IPAD MINI 6TH GEN" }
      ],
      "126": [ // SAMSUNG
        { value: "T2001", text: "GALAXY TAB S9 ULTRA" },
        { value: "T2002", text: "GALAXY TAB S9+" },
        { value: "T2003", text: "GALAXY TAB S9" },
        { value: "T2004", text: "GALAXY TAB S8" },
        { value: "T2005", text: "GALAXY TAB A9+" },
        { value: "T2006", text: "GALAXY TAB A9" },
        { value: "T2007", text: "GALAXY TAB A8" }
      ],
      "83": [ // LENOVO
        { value: "T3001", text: "LENOVO TAB P12 PRO" },
        { value: "T3002", text: "LENOVO TAB P11 PRO" },
        { value: "T3003", text: "LENOVO TAB M10 PLUS" }
      ],
      "167": [ // HUAWEI
        { value: "T4001", text: "HUAWEI MATEPAD 11.5\"" },
        { value: "T4002", text: "HUAWEI MATEPAD SE" }
      ],
      "314": [ // XIAOMI
        { value: "T5001", text: "XIAOMI PAD 6" },
        { value: "T5002", text: "XIAOMI REDMI PAD SE" }
      ],
      "110": [{ value: "T9900", text: "OTRO MODELO" }],
      "313": [{ value: "T0101", text: "HONOR PAD X9" }],
      "1364": [{ value: "T0201", text: "REALME PAD 2" }]
    },
    // === SMARTWATCH ===
    15: {
      "161": [ // APPLE
        { value: "S1001", text: "APPLE WATCH ULTRA 2" },
        { value: "S1002", text: "APPLE WATCH SERIES 9 (45MM)" },
        { value: "S1003", text: "APPLE WATCH SERIES 9 (41MM)" },
        { value: "S1004", text: "APPLE WATCH SE (2ND GEN)" },
        { value: "S1005", text: "APPLE WATCH SERIES 8" },
        { value: "S1006", text: "APPLE WATCH SERIES 7" }
      ],
      "126": [ // SAMSUNG
        { value: "S2001", text: "GALAXY WATCH 6 CLASSIC" },
        { value: "S2002", text: "GALAXY WATCH 6" },
        { value: "S2003", text: "GALAXY WATCH 5 PRO" },
        { value: "S2004", text: "GALAXY WATCH 5" },
        { value: "S2005", text: "GALAXY WATCH 4" }
      ],
      "167": [ // HUAWEI
        { value: "S3001", text: "HUAWEI WATCH GT 4" },
        { value: "S3002", text: "HUAWEI WATCH GT 3" },
        { value: "S3003", text: "HUAWEI BAND 8" }
      ],
      "316": [ // GARMIN
        { value: "S4001", text: "GARMIN FENIX 7" },
        { value: "S4002", text: "GARMIN VENU 3" },
        { value: "S4003", text: "GARMIN VIVOACTIVE 5" }
      ],
      "314": [ // XIAOMI
        { value: "S5001", text: "XIAOMI WATCH 2 PRO" },
        { value: "S5002", text: "XIAOMI SMART BAND 8" }
      ],
      "110": [{ value: "S9900", text: "OTRO MODELO" }]
    },
    // === COMPUTADORAS DE ESCRITORIO ===
    16: {
      "161": [ // APPLE
        { value: "C1001", text: "IMAC 24\" M3" },
        { value: "C1002", text: "IMAC 24\" M1" },
        { value: "C1003", text: "MAC MINI M2" },
        { value: "C1004", text: "MAC MINI M2 PRO" },
        { value: "C1005", text: "MAC STUDIO M2 MAX" },
        { value: "C1006", text: "MAC PRO M2 ULTRA" }
      ],
      "62": [ // HP
        { value: "C2001", text: "HP DESKTOP M01" },
        { value: "C2002", text: "HP ALL-IN-ONE 24" },
        { value: "C2003", text: "HP ALL-IN-ONE 27" },
        { value: "C2004", text: "HP OMEN 45L" }
      ],
      "83": [ // LENOVO
        { value: "C3001", text: "LENOVO IDEACENTRE AIO 3" },
        { value: "C3002", text: "LENOVO THINKCENTRE M90S" },
        { value: "C3003", text: "LENOVO LEGION TOWER 5I" }
      ],
      "35": [ // DELL
        { value: "C4001", text: "DELL INSPIRON DESKTOP" },
        { value: "C4002", text: "DELL OPTIPLEX 7010" },
        { value: "C4003", text: "DELL XPS DESKTOP" }
      ],
      "1": [{ value: "C5001", text: "ACER ASPIRE TC" }],
      "162": [{ value: "C6001", text: "ASUS ROG STRIX G16CH" }],
      "316": [{ value: "C7001", text: "GHIA FRONTIER SLIM" }],
      "167": [{ value: "C8001", text: "HUAWEI MATESTATION S" }],
      "126": [{ value: "C9001", text: "SAMSUNG ALL IN ONE" }],
      "110": [{ value: "C9900", text: "OTRO MODELO" }]
    }
  },

  // ---- ELECTRÓNICOS Y VARIOS: ARTÍCULOS ----
  electronicosItems: [
    "ACCESORIO PARA CELULAR", "ACCESORIO PARA COMPUTADORA", "ACCESORIOS PARA BEBE",
    "ACCESORIOS PARA CONSOLAS DE VIDEOJUEGO", "ACORDEON", "AHOYADORA",
    "AIRE ACONDICIONADO DE VENTANA", "AIRE ACONDICIONADO PORTATIL",
    "AMPLIFICADOR", "AMPLIFICADOR DE SEÑAL WIFI", "AMPLIFICADOR PARA AUTO",
    "AMPLIFICADOR PARA BAJO", "AMPLIFICADOR PARA GUITARRA ELECTRICA",
    "ARRANCADOR PARA BATERIAS", "ASADOR", "ASPERSORA", "ASPIRADORA",
    "ASPIRADORA INDUSTRIAL", "AUDIFONOS", "AUTOESTEREO",
    "BAFLE", "BAJO ELECTRICO", "BARRA DE SONIDO", "BASCULA", "BATERIA",
    "BATERIA ELECTRONICA", "BATIDORA", "BICICLETA", "BICICLETA ELECTRICA",
    "BINOCULARES", "BLU RAY", "BOCINA", "BOCINA INTELIGENTE",
    "BOMBA DE AGUA", "BOMBA DE AIRE",
    "CAFETERA", "CALENTADOR DE AGUA", "CAMARA DIGITAL", "CAMARA DE VIDEO",
    "CAMINADORA", "CARGADOR PARA AUTO ELECTRICO", "CAUTIN",
    "CELULAR", "CENTRO DE LAVADO", "CEPILLO DENTAL ELECTRICO",
    "CILINDRO DE GAS", "CLIMATIZADOR", "COCINETA", "COMPRESOR",
    "CONCENTRADOR DE OXIGENO", "CONTROL REMOTO",
    "DESHIDRATADOR", "DESHUMIDIFICADOR", "DETECTOR DE METALES",
    "DISCO DURO", "DISPENSADOR DE AGUA", "DRONE",
    "ELIPTICA", "ENMICADORA", "EQUIPO DE SONIDO", "ESCALADORA",
    "ESMERILADORA", "ESTACION DE TRABAJO",
    "FRIGOBAR", "FREIDORA DE AIRE",
    "GENERADOR DE LUZ", "GRABADORA", "GUITAR HERO", "GUITARRA ELECTRICA",
    "HORNO DE MICROONDAS", "HORNO ELECTRICO",
    "IMPRESORA", "IMPRESORA 3D", "IMPRESORA MULTIFUNCIONAL",
    "KAYAK", "KIT DE HERRAMIENTAS",
    "LAMPARA", "LAVADORA", "LAVAVAJILLAS", "LECTOR DE CODIGO DE BARRAS",
    "LENTE PARA CAMARA", "MAQUINA DE COSER", "MAQUINA DE ESCRIBIR",
    "MAQUINA DE SOLDAR", "MEDIDOR DE DISTANCIA LASER",
    "MESA DE MEZCLAS", "MICROSCOPIO", "MINI SPLIT",
    "MONITOR", "MOTOSIERRA", "MULTIMETRO",
    "NEBULIZADOR", "NO BREAK",
    "OXIMETRO",
    "PATIN ELECTRICO", "PIANO ELECTRICO", "PLANCHAS PARA CABELLO",
    "PLANTA DE LUZ", "PLOTTER", "PODADORA",
    "PROCESADOR DE ALIMENTOS", "PROYECTOR", "PULIDORA",
    "RADIO", "RADIO DE COMUNICACION", "RASURADORA ELECTRICA",
    "RECEPTOR AV", "REFRIGERADOR", "RELOJ DEPORTIVO", "ROBOT ASPIRADORA",
    "ROMPEDORA", "ROTOMARTILLO", "ROUTER",
    "SAXOFON", "SCANNER", "SECADORA", "SILLA GAMER",
    "SISTEMA DE VIGILANCIA", "SINTETIZADOR", "SIERRA", "SOLDADORA",
    "TABLET GRAFICA", "TALADRO", "TECLADO ELECTRONICO", "TECLADO GAMER",
    "TELESCOPIO", "TELEVISOR", "TERMO", "TERMOVENTILADOR",
    "TORNAMESA", "TORNO", "TOSTADOR", "TROMPETA", "TURBINA",
    "VENTILADOR", "VIOLIN",
    "WOOFER"
  ],

  // ---- MARCAS GENÉRICAS PARA ELECTRÓNICOS ----
  electronicosBrands: [
    "ACER", "AOC", "APPLE", "ASUS", "BLACK & DECKER", "BOSCH",
    "BROTHER", "CANON", "CASIO", "DAEWOO", "DELL", "DENON",
    "DEWALT", "DJI", "DYSON", "ELECTROLUX", "EPSON", "FENDER",
    "GARMIN", "GE", "GHIA", "GIBSON", "GOPRO", "HAMILTON BEACH",
    "HISENSE", "HITACHI", "HONEYWELL", "HP", "HUAWEI", "HYUNDAI",
    "ILIFE", "IROBOT", "JBL", "JVC", "KARCHER", "KENMORE",
    "KOBLENZ", "LENOVO", "LG", "LOGITECH", "MABE", "MAKITA",
    "MARSHALL", "MILWAUKEE", "MSI", "NIKON", "NUTRIBULLET",
    "OSTER", "OTRAS MARCAS", "PANASONIC", "PHILIPS", "PIONEER",
    "SAMSUNG", "SHARK", "SHARP", "SINGER", "SONY", "STIHL",
    "TOSHIBA", "TRUPER", "URREA", "VITAMIX", "WHIRLPOOL",
    "XIAOMI", "YAMAHA"
  ],

  // ---- REQUISITOS POR CATEGORÍA ----
  requirements: {
    celulares: {
      title: "REQUISITOS BÁSICOS",
      items: [
        "Sólo aceptamos celulares liberados (no asociados a ninguna compañía telefónica).",
        "Es recomendable tener cargador.",
        "Es necesario tener un mínimo de 50% de batería."
      ]
    },
    autos: {
      title: "REQUISITOS BÁSICOS",
      items: [
        "No se aceptan autos con una antigüedad mayor a 12 años.",
        "El auto deberá de portar las dos placas de circulación."
      ]
    },
    motos: {
      title: "REQUISITOS BÁSICOS",
      items: [
        "Que tu Moto no tenga una antigüedad mayor a 5 años."
      ]
    }
  },

  // ---- FRECUENCIAS DE PAGO ----
  paymentFrequencies: {
    tradicional: [
      { value: "mensual", text: "Mensual", months: 1 },
      { value: "bimestral", text: "Bimestral", months: 2 },
      { value: "trimestral", text: "Trimestral", months: 3 },
      { value: "cuatrimestral", text: "Cuatrimestral", months: 4 },
      { value: "semestral", text: "Semestral", months: 6 }
    ],
    fijo: [
      { value: "quincenal", text: "Quincenal", days: 15 },
      { value: "mensual", text: "Mensual", days: 30 }
    ]
  },

  // ---- CAT (Costo Anual Total) POR CATEGORÍA ----
  catRates: {
    1: { fijo: 191.46, tradicional: 1036.58 },    // Oro y Joyas
    4: { fijo: 1285.61, tradicional: 2166.63 },    // Celulares
    11: { fijo: 1285.61, tradicional: 2166.63 },   // Laptops
    7: { fijo: 500.0, tradicional: 800.0 },         // Motos
    10: { fijo: 1285.61, tradicional: 2166.63 },   // Pantallas
    12: { fijo: 1285.61, tradicional: 2166.63 },   // Videojuegos
    5: { fijo: 1285.61, tradicional: 2166.63 },    // Tablets
    15: { fijo: 1285.61, tradicional: 2166.63 },   // Smartwatch
    16: { fijo: 1285.61, tradicional: 2166.63 },   // Computadoras
    17: { fijo: 1285.61, tradicional: 2166.63 }    // Electrónicos
  }
};
