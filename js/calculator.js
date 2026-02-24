// ============================================
// LÓGICA DE CÁLCULO DE PRÉSTAMOS
// ============================================

const Calculator = {
  // Tasas mensuales de interés por categoría (aproximadas)
  monthlyRates: {
    1:  { tradicional: 0.04, fijo: 0.025 },   // Oro y Joyas
    4:  { tradicional: 0.06, fijo: 0.04 },     // Celulares
    5:  { tradicional: 0.06, fijo: 0.04 },     // Tablets
    7:  { tradicional: 0.05, fijo: 0.035 },    // Motos
    10: { tradicional: 0.06, fijo: 0.04 },     // Pantallas
    11: { tradicional: 0.06, fijo: 0.04 },     // Laptops
    12: { tradicional: 0.06, fijo: 0.04 },     // Videojuegos
    15: { tradicional: 0.06, fijo: 0.04 },     // Smartwatch
    16: { tradicional: 0.06, fijo: 0.04 },     // Computadoras
    17: { tradicional: 0.06, fijo: 0.04 }      // Electrónicos
  },

  // Porcentaje de préstamo sobre valor del artículo
  loanPercentages: {
    1:  0.70,  // Oro - alto porcentaje
    4:  0.40,  // Celulares
    5:  0.35,  // Tablets
    7:  0.50,  // Motos
    10: 0.30,  // Pantallas
    11: 0.35,  // Laptops
    12: 0.35,  // Videojuegos
    15: 0.35,  // Smartwatch
    16: 0.30,  // Computadoras
    17: 0.30   // Electrónicos
  },

  // Valores estimados de referencia por modelo (simplificado)
  estimatedValues: {
    // Celulares
    "IPHONE 16 PRO MAX": 28000, "IPHONE 16 PRO": 24000, "IPHONE 16 PLUS": 21000, "IPHONE 16": 19000,
    "IPHONE 15 PRO MAX": 24000, "IPHONE 15 PRO": 21000, "IPHONE 15 PLUS": 18000, "IPHONE 15": 16000,
    "IPHONE 14 PRO MAX": 20000, "IPHONE 14 PRO": 17000, "IPHONE 14 PLUS": 15000, "IPHONE 14": 13000,
    "IPHONE 13 PRO MAX": 16000, "IPHONE 13 PRO": 14000, "IPHONE 13": 11000, "IPHONE 13 MINI": 9000,
    "IPHONE 12 PRO MAX": 12000, "IPHONE 12 PRO": 10000, "IPHONE 12": 8500, "IPHONE 12 MINI": 7000,
    "IPHONE 11 PRO MAX": 9000, "IPHONE 11 PRO": 8000, "IPHONE 11": 7000,
    "IPHONE SE (3RA GENERACIÓN)": 7000, "IPHONE SE (2DA GENERACIÓN)": 5000,
    "IPHONE XR": 5500, "IPHONE XS MAX": 6000, "IPHONE XS": 5500,
    "GALAXY S24 ULTRA": 26000, "GALAXY S24+": 20000, "GALAXY S24": 17000,
    "GALAXY S23 ULTRA": 20000, "GALAXY S23+": 16000, "GALAXY S23": 14000, "GALAXY S23 FE": 10000,
    "GALAXY S22 ULTRA": 16000, "GALAXY S22+": 13000, "GALAXY S22": 11000,
    "GALAXY S21 ULTRA": 13000, "GALAXY S21+": 10000, "GALAXY S21": 8500, "GALAXY S21 FE": 7000,
    "GALAXY Z FOLD 5": 35000, "GALAXY Z FLIP 5": 18000,
    "GALAXY Z FOLD 4": 28000, "GALAXY Z FLIP 4": 14000,
    "GALAXY A54 5G": 7500, "GALAXY A34 5G": 5500, "GALAXY A24": 4000,
    "GALAXY A14": 3000, "GALAXY A04": 2500,
    "GALAXY A53 5G": 6000, "GALAXY A33 5G": 4500, "GALAXY A23": 3500,
    "GALAXY A13": 2800, "GALAXY A03": 2200,
    "GALAXY M14": 3500, "GALAXY M34": 5000, "GALAXY M54": 7000,
    // Motorola
    "MOTO G84 5G": 6000, "MOTO G73 5G": 5000, "MOTO G53 5G": 4000,
    "MOTO G34 5G": 3500, "MOTO G24": 3000, "MOTO G14": 2500, "MOTO G04": 2000,
    "MOTO EDGE 40 PRO": 12000, "MOTO EDGE 40": 9000,
    "MOTO EDGE 30 ULTRA": 10000, "MOTO EDGE 30 FUSION": 7000, "MOTO EDGE 30 NEO": 5500,
    "MOTOROLA RAZR 40 ULTRA": 18000, "MOTOROLA RAZR 40": 13000,
    "MOTO E22": 2500, "MOTO E13": 2000,
    // Xiaomi
    "XIAOMI 14": 14000, "XIAOMI 13T PRO": 10000, "XIAOMI 13T": 8000, "XIAOMI 13": 12000,
    "REDMI NOTE 13 PRO+": 7000, "REDMI NOTE 13 PRO": 5500, "REDMI NOTE 13": 4000,
    "REDMI NOTE 12 PRO+": 6000, "REDMI NOTE 12 PRO": 4500, "REDMI NOTE 12": 3500,
    "REDMI 13C": 2500, "REDMI 12": 3000, "REDMI A2": 2000,
    "POCO X6 PRO": 7000, "POCO X5 PRO": 5500, "POCO M6 PRO": 4000, "POCO F5": 6500,
    // Huawei
    "HUAWEI P60 PRO": 14000, "HUAWEI P50 PRO": 10000,
    "HUAWEI NOVA 12": 7000, "HUAWEI NOVA 11": 6000, "HUAWEI NOVA 10": 5000,
    "HUAWEI MATE 50 PRO": 16000,
    // Others
    "HONOR 90": 7000, "HONOR X8B": 4000, "HONOR X7B": 3500, "HONOR X6A": 2500, "HONOR MAGIC 6 PRO": 12000,
    "ONEPLUS 12": 15000, "ONEPLUS 11": 11000, "ONEPLUS NORD 3": 7000, "ONEPLUS NORD CE 3 LITE": 4500,
    "PIXEL 8 PRO": 16000, "PIXEL 8": 12000, "PIXEL 7A": 7000, "PIXEL 7 PRO": 13000, "PIXEL 7": 10000,
    "NOTHING PHONE (2)": 10000, "NOTHING PHONE (1)": 6000,
    "CMF PHONE 1": 5000,
    "ROG PHONE 7": 16000, "ZENFONE 10": 12000,

    // Laptops
    "MACBOOK AIR M2 (2024)": 25000, "MACBOOK AIR M2 (2022)": 22000, "MACBOOK AIR M1 (2020)": 17000,
    "MACBOOK PRO 14 M3 PRO": 42000, "MACBOOK PRO 16 M3 MAX": 60000,
    "MACBOOK PRO 13 M2": 28000, "MACBOOK PRO 14 M2 PRO": 38000,
    "HP PAVILION 15": 12000, "HP PAVILION X360 14": 14000, "HP ENVY X360 15": 18000,
    "HP SPECTRE X360 14": 28000, "HP VICTUS 16": 16000, "HP OMEN 16": 25000,
    "HP 245 G9": 8000, "HP 250 G9": 9000,
    "LENOVO IDEAPAD 3 15": 10000, "LENOVO IDEAPAD 5 PRO": 16000, "LENOVO YOGA 7I": 20000,
    "LENOVO THINKPAD X1 CARBON": 30000, "LENOVO LEGION 5": 22000, "LENOVO LEGION 5 PRO": 28000,
    "LENOVO V15 G4": 9000,
    "DELL INSPIRON 15 3520": 11000, "DELL INSPIRON 16 5630": 15000, "DELL LATITUDE 5540": 22000,
    "DELL XPS 13 PLUS": 28000, "DELL XPS 15": 32000, "DELL G15 5530": 18000,
    "ACER ASPIRE 3": 8000, "ACER ASPIRE 5": 12000, "ACER NITRO 5": 16000,
    "ACER SWIFT 3": 14000, "ACER PREDATOR HELIOS 300": 25000,
    "ASUS VIVOBOOK 15": 10000, "ASUS ZENBOOK 14": 20000,
    "ASUS ROG STRIX G16": 28000, "ASUS TUF GAMING F15": 18000,
    "SAMSUNG GALAXY BOOK 3 PRO": 22000, "SAMSUNG GALAXY BOOK 3": 16000, "SAMSUNG GALAXY BOOK GO": 8000,
    "MSI GF63 THIN": 14000, "MSI KATANA GF66": 18000, "MSI RAIDER GE78": 40000,
    "HUAWEI MATEBOOK D15": 12000, "HUAWEI MATEBOOK 14S": 18000,

    // Consolas
    "PLAYSTATION 5": 10000, "PLAYSTATION 5 DIGITAL": 8000,
    "PLAYSTATION 4 PRO": 5500, "PLAYSTATION 4 SLIM": 4500, "PS VR2": 10000,
    "XBOX SERIES X": 10000, "XBOX SERIES S": 5500,
    "XBOX ONE X": 4500, "XBOX ONE S": 3500,
    "NINTENDO SWITCH OLED": 6500, "NINTENDO SWITCH": 5000, "NINTENDO SWITCH LITE": 3500,
    "STEAM DECK 64GB": 7000, "STEAM DECK 256GB": 9000, "STEAM DECK 512GB": 11000,

    // Tablets
    "IPAD PRO 12.9\" (6TH GEN)": 25000, "IPAD PRO 11\" (4TH GEN)": 18000,
    "IPAD AIR (5TH GEN) M1": 13000, "IPAD 10TH GEN (2022)": 8500,
    "IPAD 9TH GEN (2021)": 6500, "IPAD MINI 6TH GEN": 10000,
    "GALAXY TAB S9 ULTRA": 22000, "GALAXY TAB S9+": 16000, "GALAXY TAB S9": 13000,
    "GALAXY TAB S8": 10000, "GALAXY TAB A9+": 5000, "GALAXY TAB A9": 3500, "GALAXY TAB A8": 4000,
    "LENOVO TAB P12 PRO": 12000, "LENOVO TAB P11 PRO": 8000, "LENOVO TAB M10 PLUS": 4000,
    "XIAOMI PAD 6": 6000, "XIAOMI REDMI PAD SE": 3500,

    // Smartwatch
    "APPLE WATCH ULTRA 2": 16000, "APPLE WATCH SERIES 9 (45MM)": 9000,
    "APPLE WATCH SERIES 9 (41MM)": 8000, "APPLE WATCH SE (2ND GEN)": 5000,
    "APPLE WATCH SERIES 8": 7000, "APPLE WATCH SERIES 7": 6000,
    "GALAXY WATCH 6 CLASSIC": 7000, "GALAXY WATCH 6": 5500,
    "GALAXY WATCH 5 PRO": 6000, "GALAXY WATCH 5": 4500, "GALAXY WATCH 4": 3500,
    "HUAWEI WATCH GT 4": 4500, "HUAWEI WATCH GT 3": 3500, "HUAWEI BAND 8": 1000,
    "GARMIN FENIX 7": 12000, "GARMIN VENU 3": 8000, "GARMIN VIVOACTIVE 5": 6000,

    // Pantallas
    "SAMSUNG 55\" CRYSTAL UHD 4K": 10000, "SAMSUNG 65\" CRYSTAL UHD 4K": 15000,
    "SAMSUNG 43\" CRYSTAL UHD 4K": 7000, "SAMSUNG 75\" CRYSTAL UHD 4K": 22000,
    "SAMSUNG 50\" QLED 4K": 12000, "SAMSUNG 55\" QLED 4K": 16000,
    "SAMSUNG 32\" HD SMART TV": 4500,
    "LG 55\" OLED C3": 22000, "LG 65\" OLED C3": 32000,
    "LG 55\" NANOCELL 4K": 12000, "LG 50\" UHD 4K": 8000,
    "LG 43\" UHD 4K": 6500, "LG 32\" HD SMART TV": 4000,
    "SONY 55\" BRAVIA XR A80L": 25000, "SONY 65\" BRAVIA XR X90L": 20000, "SONY 50\" X75K": 10000,
    "HISENSE 55\" A6 SERIES": 7000, "HISENSE 65\" U7H": 12000, "HISENSE 50\" A6H": 6000,
    "TCL 55\" S4 4K": 6500, "TCL 65\" C835": 12000, "TCL 50\" S4": 5500,

    // Computadoras de escritorio
    "IMAC 24\" M3": 30000, "IMAC 24\" M1": 22000,
    "MAC MINI M2": 12000, "MAC MINI M2 PRO": 22000,
    "MAC STUDIO M2 MAX": 40000, "MAC PRO M2 ULTRA": 120000,
    "HP DESKTOP M01": 10000, "HP ALL-IN-ONE 24": 15000,
    "HP ALL-IN-ONE 27": 20000, "HP OMEN 45L": 35000,

    // Motos
    "ITALIKA FT 150": 18000, "ITALIKA FT 125": 14000, "ITALIKA DM 150": 22000,
    "ITALIKA DM 200": 28000, "ITALIKA DT 200": 32000, "ITALIKA VORT-X 300": 45000,
    "ITALIKA AT 110": 12000, "ITALIKA 150Z": 20000, "ITALIKA GTS 175": 25000,
    "HONDA CGL 125": 22000, "HONDA XR 150L": 35000, "HONDA NAVI": 28000,
    "HONDA CB 190R": 40000, "HONDA CB 300R": 75000, "HONDA CRF 300L": 80000,
    "YAMAHA FZ 25": 55000, "YAMAHA MT-03": 90000, "YAMAHA R3": 95000,
    "YAMAHA NMAX 155": 55000, "YAMAHA XMAX 300": 85000,
    "KAWASAKI NINJA 400": 110000, "KAWASAKI Z400": 100000, "KAWASAKI VERSYS 650": 160000,
    "SUZUKI GIXXER 250": 60000, "SUZUKI V-STROM 250": 70000,
    "BMW G 310 R": 95000, "BAJAJ DOMINAR 400": 80000, "KTM DUKE 390": 100000,
  },

  // Calcular préstamo para Oro
  calculateGold(kilataje, gramos) {
    const kData = CATALOGS.kilatajes.find(k => k.value === kilataje);
    if (!kData) return null;
    const avaluo = kData.precioGramo * gramos;
    const prestamo = Math.round(avaluo * this.loanPercentages[1]);
    return { avaluo, prestamo, categoryId: 1 };
  },

  // Calcular préstamo para artículos con marca/modelo
  calculateByModel(categoryId, modelText) {
    // Buscar en valores estimados (limpiar el texto para matching)
    const cleanText = modelText.replace(/\s*\(.*?\)\s*/g, '').trim();
    let valor = this.estimatedValues[cleanText] || this.estimatedValues[modelText];

    // Si no se encuentra, intentar matching parcial
    if (!valor) {
      for (const [key, val] of Object.entries(this.estimatedValues)) {
        if (modelText.toUpperCase().includes(key) || key.includes(cleanText.toUpperCase())) {
          valor = val;
          break;
        }
      }
    }

    // Valor default si no se encuentra
    if (!valor) {
      valor = 5000;
    }

    const percentage = this.loanPercentages[categoryId] || 0.35;
    const prestamo = Math.round(valor * percentage);
    return { avaluo: valor, prestamo, categoryId };
  },

  // Calcular préstamo para Electrónicos con valor manual
  calculateElectronicos(valorAprox) {
    const prestamo = Math.round(valorAprox * this.loanPercentages[17]);
    return { avaluo: valorAprox, prestamo, categoryId: 17 };
  },

  // Calcular plan de pagos Tradicional
  calculateTradicional(prestamo, categoryId, frecuencia) {
    const rate = this.monthlyRates[categoryId]?.tradicional || 0.05;
    const freq = CATALOGS.paymentFrequencies.tradicional.find(f => f.value === frecuencia);
    if (!freq) return null;

    const periodRate = rate * freq.months;
    const numRefrendos = Math.floor(24 / freq.months); // Máximo 24 meses
    const interesRefrendo = Math.round(prestamo * periodRate);
    const desempeno = prestamo + interesRefrendo;

    // Generar tabla de pagos
    const payments = [];
    for (let i = 1; i <= numRefrendos; i++) {
      const amortizacion = 0; // En tradicional no hay amortización por refrendo
      const interes = interesRefrendo;
      const refrendo = interes;
      const desempenoI = prestamo + interes;
      payments.push({
        numero: i,
        amortizacion: formatCurrency(amortizacion),
        interes: formatCurrency(interes),
        refrendo: formatCurrency(refrendo),
        desempeno: formatCurrency(desempenoI)
      });
    }

    return {
      type: 'tradicional',
      frecuencia: freq.text,
      refrendo: interesRefrendo,
      ultimoPago: desempeno,
      payments,
      numRefrendos
    };
  },

  // Calcular plan de pagos Fijo
  calculateFijo(prestamo, categoryId, frecuencia) {
    const rate = this.monthlyRates[categoryId]?.fijo || 0.035;
    const freq = CATALOGS.paymentFrequencies.fijo.find(f => f.value === frecuencia);
    if (!freq) return null;

    const periodMonths = freq.days / 30;
    const periodRate = rate * periodMonths;
    const totalPeriods = 12; // 12 meses fijo
    const numPayments = Math.round(totalPeriods / periodMonths);

    // Cálculo de cuota fija (amortización francesa)
    const cuotaFija = Math.round(
      (prestamo * periodRate * Math.pow(1 + periodRate, numPayments)) /
      (Math.pow(1 + periodRate, numPayments) - 1)
    );

    // Generar tabla de pagos
    const payments = [];
    let saldo = prestamo;
    for (let i = 1; i <= numPayments; i++) {
      const interes = Math.round(saldo * periodRate);
      const amortizacion = cuotaFija - interes;
      saldo = Math.max(0, saldo - amortizacion);
      const desempeno = saldo + cuotaFija;
      payments.push({
        numero: i,
        amortizacion: formatCurrency(amortizacion),
        interes: formatCurrency(interes),
        refrendo: formatCurrency(cuotaFija),
        desempeno: formatCurrency(desempeno)
      });
    }

    return {
      type: 'fijo',
      frecuencia: freq.text,
      plazo: '12 Meses',
      refrendo: cuotaFija,
      ultimoPago: cuotaFija,
      payments,
      numPayments
    };
  }
};

// Utilidad para formatear moneda
function formatCurrency(amount) {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}
