export type CatalogHouseRoom = {
  name: string;
  area: number;
};

export type CatalogHouse = {
  id: string;
  title: string;
  area: number;
  warmContourPrice: number;
  whiteBoxPrice: number;
  mortgageFrom: number;
  rooms: CatalogHouseRoom[];
};

export const catalogHouses: CatalogHouse[] = [
  {
    id: "villa-premier-158",
    title: "Вилла Премьер 158",
    area: 158.41,
    warmContourPrice: 7_550_000,
    whiteBoxPrice: 8_950_000,
    mortgageFrom: 41_900,
    rooms: [
      { name: "Гостиная", area: 27.01 },
      { name: "Терраса", area: 20.01 },
      { name: "Спальня 1", area: 17.34 },
      { name: "Кухня", area: 17.28 },
      { name: "Холл", area: 15.41 },
      { name: "Спальня 2", area: 16.14 },
      { name: "Спальня 3", area: 13.7 },
      { name: "Санузел", area: 5.6 },
      { name: "Ванная", area: 5.23 },
      { name: "Прихожая", area: 4.48 },
      { name: "Тех. помещение", area: 2.77 },
      { name: "Гардероб 1", area: 2.77 },
      { name: "Гардероб 2", area: 2.76 },
      { name: "Гардероб 3", area: 2.39 },
      { name: "Гардероб 4", area: 2.39 },
      { name: "Крыльцо", area: 2.87 },
    ],
  },
  {
    id: "semeyniy-139",
    title: "Семейный +139",
    area: 139,
    warmContourPrice: 7_050_000,
    whiteBoxPrice: 8_250_000,
    mortgageFrom: 39_100,
    rooms: [
      { name: "Кухня-гостиная", area: 26.0 },
      { name: "Спальня 1", area: 15.8 },
      { name: "Спальня 2", area: 15.1 },
      { name: "Спальня 3", area: 12.9 },
      { name: "Холл", area: 13.1 },
      { name: "Тамбур", area: 5.8 },
      { name: "Санузел 1", area: 6.7 },
      { name: "Санузел 2", area: 1.9 },
      { name: "Ванная", area: 3.5 },
      { name: "Тех. помещение", area: 5.6 },
      { name: "Терраса", area: 12.4 },
      { name: "Крыльцо", area: 3.9 },
    ],
  },
  {
    id: "simfoniya-131",
    title: "Симфония 131",
    area: 131.8,
    warmContourPrice: 6_530_000,
    whiteBoxPrice: 7_530_000,
    mortgageFrom: 36_300,
    rooms: [
      { name: "Кухня-гостиная", area: 27.7 },
      { name: "Спальня 1", area: 14.8 },
      { name: "Спальня 2", area: 14.7 },
      { name: "Спальня 3", area: 13.9 },
      { name: "Холл", area: 12.4 },
      { name: "Прихожая", area: 6.1 },
      { name: "Санузел", area: 6.5 },
      { name: "Ванная", area: 6.0 },
      { name: "Топочная", area: 5.2 },
      { name: "Терраса", area: 18.0 },
      { name: "Крыльцо", area: 6.5 },
    ],
  },
  {
    id: "semeyniy-122",
    title: "Семейный 122",
    area: 122.7,
    warmContourPrice: 6_350_000,
    whiteBoxPrice: 7_350_000,
    mortgageFrom: 35_300,
    rooms: [
      { name: "Кухня-гостиная", area: 26.0 },
      { name: "Спальня 1", area: 15.8 },
      { name: "Спальня 2", area: 15.1 },
      { name: "Спальня 3", area: 12.9 },
      { name: "Терраса", area: 12.4 },
      { name: "Холл", area: 13.1 },
      { name: "Тамбур", area: 5.8 },
      { name: "Санузел 1", area: 6.7 },
      { name: "Санузел 2", area: 1.9 },
      { name: "Ванная", area: 3.5 },
      { name: "Тех. помещение", area: 5.6 },
      { name: "Крыльцо", area: 3.9 },
    ],
  },
  {
    id: "geometriya-117",
    title: "Геометрия 117",
    area: 117.51,
    warmContourPrice: 6_300_000,
    whiteBoxPrice: 7_300_000,
    mortgageFrom: 35_000,
    rooms: [
      { name: "Гостиная", area: 21.73 },
      { name: "Спальня 1", area: 14.56 },
      { name: "Спальня 2", area: 12.4 },
      { name: "Спальня 3", area: 11.61 },
      { name: "Кухня", area: 9.14 },
      { name: "Холл 1", area: 7.09 },
      { name: "Холл 2", area: 6.69 },
      { name: "Тех. помещение", area: 4.45 },
      { name: "Гардеробная", area: 2.99 },
      { name: "Тамбур", area: 2.38 },
      { name: "Ванная", area: 3.67 },
      { name: "Санузел", area: 1.95 },
      { name: "Терраса", area: 14.1 },
      { name: "Крыльцо", area: 4.75 },
    ],
  },
  {
    id: "dom-mechty-120",
    title: "Дом мечты 120",
    area: 120.8,
    warmContourPrice: 6_300_000,
    whiteBoxPrice: 7_300_000,
    mortgageFrom: 35_000,
    rooms: [
      { name: "Кухня-гостиная", area: 29.3 },
      { name: "Спальня 1", area: 16.4 },
      { name: "Спальня 2", area: 14.2 },
      { name: "Спальня 3", area: 14.2 },
      { name: "Санузел", area: 6.0 },
      { name: "Холл", area: 12.3 },
      { name: "Прихожая", area: 5.6 },
      { name: "Тех. помещение", area: 6.5 },
      { name: "Терраса", area: 13.5 },
      { name: "Крыльцо", area: 2.8 },
    ],
  },
  {
    id: "panorama-99",
    title: "Панорама 99",
    area: 99.4,
    warmContourPrice: 5_870_000,
    whiteBoxPrice: 6_870_000,
    mortgageFrom: 32_600,
    rooms: [
      { name: "Кухня-гостиная", area: 23.8 },
      { name: "Спальня 1", area: 14.2 },
      { name: "Спальня 2", area: 14.2 },
      { name: "Спальня 3", area: 13.2 },
      { name: "Тех. помещение", area: 7.5 },
      { name: "Холл", area: 8.3 },
      { name: "Ванная", area: 5.5 },
      { name: "Гардеробная", area: 3.7 },
      { name: "Тамбур", area: 3.6 },
      { name: "Санузел", area: 3.0 },
    ],
  },
  {
    id: "standard-94",
    title: "Стандарт 94",
    area: 94.7,
    warmContourPrice: 5_850_000,
    whiteBoxPrice: 6_850_000,
    mortgageFrom: 32_500,
    rooms: [
      { name: "Кухня-гостиная", area: 29.2 },
      { name: "Спальня 1", area: 14.5 },
      { name: "Спальня 2", area: 11.8 },
      { name: "Спальня 3", area: 11.8 },
      { name: "Коридор", area: 7.7 },
      { name: "Ванная", area: 5.1 },
      { name: "Тамбур", area: 4.6 },
      { name: "Гардероб", area: 3.3 },
      { name: "Санузел", area: 2.7 },
      { name: "Крыльцо", area: 4.0 },
    ],
  },
  {
    id: "mirazh-89",
    title: "Мираж 89",
    area: 89.1,
    warmContourPrice: 5_550_000,
    whiteBoxPrice: 6_550_000,
    mortgageFrom: 30_800,
    rooms: [
      { name: "Кухня-гостиная", area: 22.0 },
      { name: "Спальня 1", area: 12.8 },
      { name: "Спальня 2", area: 11.5 },
      { name: "Спальня 3", area: 10.3 },
      { name: "Коридор", area: 5.6 },
      { name: "Топочная", area: 5.2 },
      { name: "Прихожая", area: 5.1 },
      { name: "Ванная", area: 4.6 },
      { name: "Гардеробная", area: 3.1 },
      { name: "Крыльцо", area: 8.9 },
    ],
  },
  {
    id: "uyutniy-74",
    title: "Уютный 74",
    area: 74.22,
    warmContourPrice: 5_000_000,
    whiteBoxPrice: 6_100_000,
    mortgageFrom: 27_800,
    rooms: [
      { name: "Гостиная", area: 10.71 },
      { name: "Кухня", area: 7.9 },
      { name: "Спальня 1", area: 16.07 },
      { name: "Спальня 2", area: 16.07 },
      { name: "Спальня 3", area: 7.9 },
      { name: "Санузел", area: 3.68 },
      { name: "Прихожая", area: 6.74 },
      { name: "Холл", area: 5.15 },
    ],
  },
  {
    id: "compact-70",
    title: "Компакт +70",
    area: 70.33,
    warmContourPrice: 4_600_000,
    whiteBoxPrice: 5_590_000,
    mortgageFrom: 25_500,
    rooms: [
      { name: "Кухня-гостиная", area: 28.4 },
      { name: "Спальня 1", area: 11.2 },
      { name: "Спальня 2", area: 11.2 },
      { name: "Холл", area: 7.3 },
      { name: "Санузел", area: 4.4 },
      { name: "Прихожая", area: 4.1 },
      { name: "Крыльцо", area: 4.0 },
    ],
  },
  {
    id: "compact-59",
    title: "Компакт +59",
    area: 59.12,
    warmContourPrice: 4_300_000,
    whiteBoxPrice: 5_300_000,
    mortgageFrom: 23_900,
    rooms: [
      { name: "Кухня-гостиная", area: 23.51 },
      { name: "Спальня 1", area: 10.5 },
      { name: "Спальня 2", area: 10.5 },
      { name: "Санузел", area: 4.38 },
      { name: "Прихожая", area: 4.15 },
      { name: "Холл", area: 4.15 },
    ],
  },
  {
    id: "gorizont-162",
    title: "Горизонт 162",
    area: 162,
    warmContourPrice: 6_350_000,
    whiteBoxPrice: 7_500_000,
    mortgageFrom: 35_200,
    rooms: [
      { name: "Гостиная-кухня", area: 38.22 },
      { name: "Терраса", area: 35.0 },
      { name: "Спальня 1", area: 15.2 },
      { name: "Спальня 2", area: 15.2 },
      { name: "Спальня 3", area: 13.8 },
      { name: "Коридор", area: 11.4 },
      { name: "Прихожая", area: 10.4 },
      { name: "Топочная", area: 8.0 },
      { name: "Кабинет", area: 6.2 },
      { name: "Санузел", area: 6.1 },
      { name: "Санузел", area: 3.2 },
    ],
  },
  {
    id: "rubin-160",
    title: "Рубин 160",
    area: 160,
    warmContourPrice: 7_650_000,
    whiteBoxPrice: 8_900_000,
    mortgageFrom: 42_400,
    rooms: [
      { name: "Гостиная", area: 24.12 },
      { name: "Терраса", area: 22.48 },
      { name: "Спальня 1", area: 18.23 },
      { name: "Холл", area: 15.28 },
      { name: "Спальня 2", area: 14.37 },
      { name: "Спальня 3", area: 14.37 },
      { name: "Кухня", area: 13.27 },
      { name: "Прихожая", area: 9.23 },
      { name: "Гардероб", area: 6.6 },
      { name: "Тех. помещение", area: 5.48 },
      { name: "Ванная", area: 5.04 },
      { name: "Крыльцо", area: 4.71 },
      { name: "Гардероб", area: 3.81 },
      { name: "Санузел", area: 3.73 },
    ],
  },
];

export function getCatalogHouse(id: string) {
  return catalogHouses.find((house) => house.id === id);
}

export type PackageFeature = {
  label: string;
  inWarmContour: boolean;
};

export const packageFeatures: PackageFeature[] = [
  { label: "Фундамент (определяется после геологии участка)", inWarmContour: true },
  {
    label: "Несущие стены (газобетонный блок D400 или керамзитобетонный блок D400)",
    inWarmContour: true,
  },
  {
    label: "Перегородки (кирпич марки М250 или газобетонный блок D500)",
    inWarmContour: true,
  },
  { label: "Утепление стен (пенопласт 100 мм)", inWarmContour: true },
  { label: "Отделка фасада (декоративная штукатурка)", inWarmContour: true },
  {
    label:
      "Кровля (стропильная система на деревянном каркасе с гибкой металлочерепицей «Технониколь»)",
    inWarmContour: true,
  },
  {
    label: "Устройство кровли (подшивка свесов, водосточная система, отделка вентканала)",
    inWarmContour: true,
  },
  { label: "Окна пластиковые двухкамерные «Rehau» 70 мм", inWarmContour: true },
  { label: "Входная металлическая дверь (временная)", inWarmContour: true },
  { label: "Утепление кровли (напыляемая эковата 200 мм)", inWarmContour: false },
  {
    label: "Утепление пола (пеноплэкс 50 мм с изоляцией порилекс)",
    inWarmContour: false,
  },
  { label: "Монтаж (водяных) теплых полов", inWarmContour: false },
  { label: "Механизированная полусухая стяжка пола", inWarmContour: false },
  { label: "Механизированная штукатурка стен", inWarmContour: false },
  {
    label:
      "Инженерные коммуникации (разводка сантехники внутри дома без выхода на улицу, монтаж электрики)",
    inWarmContour: false,
  },
];

export const additionalOptions = [
  { label: "Отделка фасада (облицовочный кирпич)", price: 600_000 },
  { label: "Несущие стены (полнотелый или керамический кирпич)", price: 200_000 },
  { label: "Монтаж фальцевой кровли", price: 300_000 },
  { label: "Инженерные коммуникации (установка септика на участок)", price: 100_000 },
  { label: "Дверь металлическая «Torex» с терморазрывом", price: 80_000 },
  {
    label: "Окна пластиковые двухкамерные Rehau 70 мм с ламинацией в цвет кровли",
    price: 70_000,
  },
];

export const paymentMethods = [
  {
    label: "Семейная ипотека",
    detail:
      "Для семей с детьми, которые хотят построить собственный дом на льготных условиях — ставка от 6%",
    kind: "rate" as const,
  },
  {
    label: "Семейная комбо ипотека",
    detail: "Семейная ипотека в комбинации с рыночной ставкой",
    kind: "rate" as const,
  },
  {
    label: "Ипотека для IT-специалистов",
    detail: "Для сотрудников аккредитованных IT-компаний — ставка от 5%",
    kind: "rate" as const,
  },
  {
    label: "Наличный расчет",
    detail:
      "Поэтапная оплата через расчетный счет для физических и юридических лиц",
    kind: "cash" as const,
  },
  {
    label: "Безналичный расчет",
    detail:
      "Поэтапная оплата строительства со скидкой (рассчитывается индивидуально)",
    kind: "card" as const,
  },
];

export type HouseForSale = {
  id: string;
  title: string;
  price: number;
  area: number;
  plotArea: number;
  address: string;
  description: string;
  images: string[];
};

export const housesForSale: HouseForSale[] = [
  {
    id: "house96",
    title: "Дом 96 м²",
    price: 7_000_000,
    area: 96,
    plotArea: 4.5,
    address: "Саратовская обл., Энгельсский р-н, с. Шумейка, Центральная ул., д. 24",
    description:
      "Одноэтажный дом из газобетонных блоков «Грасс» 375 мм с облицовкой кирпичом «Римкер». 3 спальни, кухня-гостиная 29,2 м². Скважина, септик (3 кольца), газ и электричество по границе участка.",
    images: ["house96-2.png", "house96-3.png", "house96-1.png"],
  },
  {
    id: "house103",
    title: "Дом 103 м²",
    price: 8_800_000,
    area: 103,
    plotArea: 6.8,
    address: "Саратовская обл., Энгельсский р-н, г. Энгельс, п. Лесозащитная станция, д. 9",
    description:
      "Дом из газобетонного блока «Грасс» 300 мм с кирпичными перегородками и утеплением. Кухня-гостиная 30,91 м², 3 спальни, котельная. Центральное водоснабжение, септик (3 кольца), газ и электричество по границе участка.",
    images: ["house103-2.png", "house103-3.png", "house103-1.png"],
  },
  {
    id: "house108",
    title: "Дом 108,8 м²",
    price: 7_800_000,
    area: 108.8,
    plotArea: 5.6,
    address: "Саратовская обл., Энгельсский р-н, с. Шумейка, Центральная ул., д. 24",
    description:
      "Дом из газобетонных блоков «Грасс» 375 мм с кирпичным фасадом. Кухня-гостиная 29,2 м², терраса 20,3 м², 3 спальни. Скважина, септик (3 кольца), газ и электричество по границе участка.",
    images: ["house108-2.png", "house108-3.png", "house108-1.png"],
  },
  {
    id: "house139",
    title: "Дом 139,2 м²",
    price: 7_300_000,
    area: 139.2,
    plotArea: 7,
    address: "Саратовская обл., Энгельсский р-н, п. Пробуждение, Пушкинская ул., д. 55",
    description:
      "Дом из газобетонного блока «Грасс» 375 мм с утеплением и кирпичным фасадом «Римкер». Кухня-гостиная 26 м², 3 спальни, терраса. Скважина, септик (3 кольца), газ и электричество по границе участка.",
    images: ["house139-2.png", "house139-3.png", "house139-1.png"],
  },
];

export type LandPlot = {
  id: string;
  title: string;
  price: number;
  area: number;
  location: string;
  image: string;
};

export const landPlots: LandPlot[] = [
  { id: "plot-1", title: "4 участка", area: 24.1, location: "пос. Малая Тополевка", price: 600_000, image: "plot-1.png" },
  { id: "plot-2", title: "Участок", area: 4.9, location: "пос. Коминтерн", price: 700_000, image: "plot-2.png" },
  { id: "plot-3", title: "Участок", area: 4.9, location: "пос. Коминтерн", price: 700_000, image: "plot-3.png" },
  { id: "plot-4", title: "Участки", area: 17.2, location: "с. Шумейка", price: 730_000, image: "plot-4.png" },
  { id: "plot-5", title: "Участок", area: 7.6, location: "СНТ Новое", price: 870_000, image: "plot-5.png" },
  { id: "plot-6", title: "Участок", area: 6, location: "пос. Пробуждение", price: 1_200_000, image: "plot-6.png" },
  { id: "plot-7", title: "Участок", area: 6, location: "пос. Пробуждение", price: 1_300_000, image: "plot-7.png" },
  { id: "plot-8", title: "Участок", area: 6, location: "г. Энгельс", price: 1_500_000, image: "plot-8.png" },
  { id: "plot-9", title: "Участок", area: 10, location: "с. Генеральское", price: 1_600_000, image: "plot-9.png" },
  { id: "plot-10", title: "Участок", area: 4.9, location: "СНТ Строитель-1", price: 1_800_000, image: "plot-10.png" },
  { id: "plot-11", title: "Участок", area: 11.3, location: "г. Саратов", price: 2_000_000, image: "plot-11.png" },
  { id: "plot-12", title: "Участок", area: 6.5, location: "г. Саратов", price: 2_800_000, image: "plot-12.png" },
  { id: "plot-13", title: "Участок", area: 4.5, location: "г. Энгельс", price: 3_500_000, image: "plot-13.png" },
  { id: "plot-14", title: "Участок", area: 5.9, location: "г. Саратов", price: 3_500_000, image: "plot-14.png" },
  { id: "plot-15", title: "Участок", area: 8.2, location: "г. Саратов", price: 7_000_000, image: "plot-15.png" },
];
