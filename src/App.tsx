import { useEffect, useState, type ReactNode } from "react";

type IconName =
  | "arrow"
  | "briefcase"
  | "card"
  | "car"
  | "chevron"
  | "clock"
  | "close"
  | "coins"
  | "document"
  | "gift"
  | "home"
  | "location"
  | "menu"
  | "message"
  | "moon"
  | "navigation"
  | "pin"
  | "power"
  | "route"
  | "search"
  | "shield"
  | "user";

const paths: Record<IconName, ReactNode> = {
  arrow: <path d="m15 18-6-6 6-6" />,
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="3" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
    </>
  ),
  card: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="3" />
      <path d="M2 10h20M6 15h4" />
    </>
  ),
  car: (
    <>
      <path d="m5 16-1-1 1.8-6.1A2.6 2.6 0 0 1 8.3 7h7.4a2.6 2.6 0 0 1 2.5 1.9L20 15l-1 1" />
      <path d="M5 13h14v5H5zM7 18v2M17 18v2M8 10h8" />
    </>
  ),
  chevron: <path d="m9 18 6-6-6-6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  close: <path d="M18 6 6 18M6 6l12 12" />,
  coins: (
    <>
      <ellipse cx="9" cy="7" rx="6" ry="3" />
      <path d="M3 7v4c0 1.7 2.7 3 6 3 1 0 2-.1 2.8-.4M3 11v4c0 1.7 2.7 3 6 3h1" />
      <ellipse cx="16" cy="15" rx="5" ry="3" />
      <path d="M11 15v3c0 1.7 2.2 3 5 3s5-1.3 5-3v-3" />
    </>
  ),
  document: (
    <>
      <path d="M6 2h8l4 4v16H6z" />
      <path d="M14 2v5h5M9 12h6M9 16h6" />
    </>
  ),
  gift: (
    <>
      <rect x="3" y="8" width="18" height="13" rx="2" />
      <path d="M12 8v13M3 12h18M12 8H8.5a2.5 2.5 0 1 1 2.2-3.7L12 8Zm0 0h3.5a2.5 2.5 0 1 0-2.2-3.7L12 8Z" />
    </>
  ),
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10M9 20v-6h6v6" />
    </>
  ),
  location: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      <circle cx="12" cy="12" r="8" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  message: (
    <>
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3 1.5-5A8 8 0 1 1 21 15Z" />
      <path d="M8 11h8M8 15h5" />
    </>
  ),
  moon: <path d="M21 14.2A8.5 8.5 0 0 1 9.8 3 9 9 0 1 0 21 14.2Z" />,
  navigation: <path d="m21 3-7.5 18-2.7-7.8L3 10.5 21 3Z" />,
  pin: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  power: (
    <>
      <path d="M12 2v10" />
      <path d="M6.4 5.6a8 8 0 1 0 11.2 0" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <path d="M8 18h2a2 2 0 0 0 2-2V8a2 2 0 0 1 2-2h2" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Zm-3-10 2 2 4-5" />,
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
};

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      {paths[name]}
    </svg>
  );
}

function Brand() {
  return (
    <div className="brand" aria-label="JOL">
      <span className="brand-mark">
        <svg aria-hidden="true" viewBox="0 0 40 40">
          <path d="M9 32c0-9 3-11 10-13 7-2 9-5 10-11" />
          <path d="M15 32c0-5 2-6 7-8 8-3 11-7 12-16" />
        </svg>
      </span>
      <span className="brand-name">JOL</span>
    </div>
  );
}

function MapCanvas({
  routeVisible = false,
  showUserLocation = true,
}: {
  routeVisible?: boolean;
  showUserLocation?: boolean;
}) {
  return (
    <div className="map-canvas" aria-label="Карта Алматы">
      <div className="map-green green-one" />
      <div className="map-green green-two" />
      <svg className="map-lines" viewBox="0 0 900 900" preserveAspectRatio="none" aria-hidden="true">
        <path className="road major" d="M-40 760C150 670 237 614 376 464S646 198 932 120" />
        <path className="road major" d="M50-20c88 154 184 231 298 311s263 247 352 630" />
        <path className="road" d="M-40 262c189 40 311 22 475-17s308-41 505 30" />
        <path className="road" d="M-20 522c174-16 305 15 463 75s309 67 494 7" />
        <path className="road" d="M163-20c28 184 31 324 14 473s4 299 57 485" />
        <path className="road" d="M580-20c-32 161-29 303 1 429s69 299 41 531" />
        <path className="street" d="M0 370h900M0 690h900M300 0v900M740 0v900" />
        {routeVisible && (
          <path className="route-line" d="M272 633C315 574 329 504 393 452s111-35 153-104 61-91 110-116" />
        )}
      </svg>
      <span className="district district-one">Алмалы</span>
      <span className="district district-two">Медеу</span>
      <span className="street-name street-one">пр. Абая</span>
      <span className="street-name street-two">ул. Толе би</span>
      {routeVisible ? (
        <>
          <span className="map-pin pickup"><span>А</span></span>
          <span className="map-pin destination"><Icon name="pin" size={18} /></span>
          <span className="eta-bubble">6 мин</span>
        </>
      ) : showUserLocation ? (
        <span className="user-location"><span /></span>
      ) : null}
    </div>
  );
}

function ActionButton({
  children,
  onClick,
  kind = "primary",
}: {
  children: ReactNode;
  onClick?: () => void;
  kind?: "primary" | "quiet";
}) {
  return (
    <button className={`action-button ${kind}`} onClick={onClick} type="button">
      {children}
    </button>
  );
}

const recentPlaces = [
  { icon: "clock" as IconName, title: "Esentai Mall", subtitle: "пр. Аль-Фараби, 77/8" },
  { icon: "briefcase" as IconName, title: "Работа", subtitle: "ул. Желтоксан, 115" },
];

function HomePanel({
  language,
  locationAvailable,
  onSearch,
}: {
  language: Language;
  locationAvailable: boolean;
  onSearch: () => void;
}) {
  const text = language === "kk"
    ? {
        greeting: "Қайырлы күн",
        title: "Қайда барамыз?",
        address: "Мекенжайды енгізіңіз",
        home: "Үй",
        add: "Мекенжай қосу",
        work: "Жұмыс",
      }
    : {
        greeting: "Добрый день",
        title: "Куда поедем?",
        address: "Введите адрес",
        home: "Дом",
        add: "Добавить адрес",
        work: "Работа",
      };
  return (
    <section className="bottom-sheet home-sheet">
      <div className="sheet-handle" />
      <div className="welcome-row">
        <div>
          <p className="eyebrow">{text.greeting}</p>
          <h1>{text.title}</h1>
        </div>
        <span className="weather">+18°</span>
      </div>
      <button className="search-field" type="button" onClick={onSearch}>
        <span className="search-dot" />
        <span>{text.address}</span>
        <Icon name="search" size={20} />
      </button>
      {!locationAvailable && (
        <button className="location-unavailable" onClick={onSearch} type="button">
          <Icon name="location" size={19} />
          <span>
            <strong>{language === "kk" ? "Орналасқан жер анықталмады" : "Местоположение недоступно"}</strong>
            <small>{language === "kk" ? "Отырғызу нүктесін қолмен таңдаңыз" : "Выберите точку посадки вручную"}</small>
          </span>
          <Icon name="chevron" size={16} />
        </button>
      )}
      <div className="quick-places">
        <button type="button" onClick={onSearch}>
          <span className="quick-icon"><Icon name="home" size={20} /></span>
          <span><strong>{text.home}</strong><small>{text.add}</small></span>
        </button>
        <button type="button" onClick={onSearch}>
          <span className="quick-icon"><Icon name="briefcase" size={20} /></span>
          <span><strong>{text.work}</strong><small>Желтоқсан, 115</small></span>
        </button>
      </div>
    </section>
  );
}

function SearchPanel({
  language,
  onClose,
  onSelect,
}: {
  language: Language;
  onClose: () => void;
  onSelect: () => void;
}) {
  const text = language === "kk"
    ? {
        route: "Бағыт",
        from: "Қайдан",
        location: "Менің орналасқан жерім",
        to: "Қайда",
        address: "Мекенжайды енгізіңіз",
        recent: "Соңғы мекенжайлар",
        map: "Картадан таңдау",
        manual: "Нүктені қолмен көрсетіңіз",
      }
    : {
        route: "Маршрут",
        from: "Откуда",
        location: "Моё местоположение",
        to: "Куда",
        address: "Введите адрес",
        recent: "Недавние",
        map: "Выбрать на карте",
        manual: "Укажите точку вручную",
      };
  return (
    <section className="search-overlay">
      <div className="search-header">
        <button className="circle-button plain" onClick={onClose} type="button" aria-label="Назад">
          <Icon name="arrow" />
        </button>
        <h1>{text.route}</h1>
      </div>
      <div className="route-inputs">
        <div className="route-rail"><span /><i /><span /></div>
        <div className="input-stack">
          <button type="button"><small>{text.from}</small><strong>{text.location}</strong></button>
          <button className="active-input" type="button"><small>{text.to}</small><strong>{text.address}</strong></button>
        </div>
      </div>
      <div className="search-results">
        <p className="section-label">{text.recent}</p>
        {recentPlaces.map((place) => (
          <button className="place-row" key={place.title} onClick={onSelect} type="button">
            <span className="place-icon"><Icon name={place.icon} size={20} /></span>
            <span className="place-copy"><strong>{place.title}</strong><small>{place.subtitle}</small></span>
            <Icon name="chevron" size={18} />
          </button>
        ))}
        <button className="place-row" onClick={onSelect} type="button">
          <span className="place-icon gold"><Icon name="pin" size={20} /></span>
          <span className="place-copy"><strong>{text.map}</strong><small>{text.manual}</small></span>
          <Icon name="chevron" size={18} />
        </button>
      </div>
    </section>
  );
}

function ConfirmPanel({
  language,
  onBack,
  onOrder,
}: {
  language: Language;
  onBack: () => void;
  onOrder: () => void;
}) {
  const [tariff, setTariff] = useState<"standard" | "comfort">("standard");
  const text = language === "kk"
    ? {
        eta: "4–6 минутта келеді",
        title: "Тарифті таңдаңыз",
        standard: "Стандарт",
        comfort: "Комфорт",
        card: "Картамен төлеу",
        order: "Тапсырыс беру",
        terms: "Баға таңдалған бағыт үшін бекітілген",
      }
    : {
        eta: "Подача через 4–6 мин",
        title: "Выберите тариф",
        standard: "Стандарт",
        comfort: "Комфорт",
        card: "Оплата картой",
        order: "Заказать за",
        terms: "Цена зафиксирована для выбранного маршрута",
      };
  return (
    <section className="bottom-sheet confirm-sheet">
      <div className="sheet-handle" />
      <div className="confirm-title">
        <div>
          <p className="eyebrow">{text.eta}</p>
          <h1>{text.title}</h1>
        </div>
        <button className="circle-button plain" onClick={onBack} type="button" aria-label="Закрыть">
          <Icon name="close" size={20} />
        </button>
      </div>
      <div className="tariffs">
        <button
          className={`tariff-card ${tariff === "standard" ? "selected" : ""}`}
          onClick={() => setTariff("standard")}
          type="button"
        >
          <span className="car-visual standard-car"><Icon name="car" size={32} /></span>
          <span><strong>{text.standard}</strong><small>4–6 мин</small></span>
          <b>1 850 ₸</b>
        </button>
        <button
          className={`tariff-card ${tariff === "comfort" ? "selected" : ""}`}
          onClick={() => setTariff("comfort")}
          type="button"
        >
          <span className="car-visual comfort-car"><Icon name="car" size={32} /></span>
          <span><strong>{text.comfort}</strong><small>6–8 мин</small></span>
          <b>2 490 ₸</b>
        </button>
      </div>
      <button className="payment-row" type="button">
        <span className="payment-icon"><Icon name="card" size={20} /></span>
        <span><strong>•••• 4821</strong><small>{text.card}</small></span>
        <Icon name="chevron" size={18} />
      </button>
      <ActionButton onClick={onOrder}>
        {text.order} {tariff === "standard" ? "1 850" : "2 490"} ₸
      </ActionButton>
      <p className="terms">{text.terms}</p>
    </section>
  );
}

function DemoNotice({
  language,
  onClose,
  onStart,
}: {
  language: Language;
  onClose: () => void;
  onStart: () => void;
}) {
  const kk = language === "kk";
  return (
    <div className="notice-backdrop" role="presentation">
      <section className="notice-card" role="dialog" aria-modal="true" aria-labelledby="notice-title">
        <span className="notice-icon"><Icon name="shield" size={30} /></span>
        <p className="eyebrow">{kk ? "Қауіпсіз демо режимі" : "Безопасный демо-режим"}</p>
        <h2 id="notice-title">{kk ? "Интерфейс қосуға дайын" : "Интерфейс готов к подключению"}</h2>
        <p>
          {kk
            ? "Тапсырыс жіберілген жоқ: нақты сапар үшін сервер, тексерілген жүргізушілер және төлем провайдері қажет."
            : "Заказ не отправлен: для реальной поездки нужны сервер, проверенные водители и платёжный провайдер."}
        </p>
        <div className="notice-actions">
          <ActionButton kind="quiet" onClick={onClose}>{kk ? "Бас тарту" : "Отмена"}</ActionButton>
          <ActionButton onClick={onStart}>{kk ? "Тест тапсырысын жасау" : "Создать тестовый заказ"}</ActionButton>
        </div>
      </section>
    </div>
  );
}

const pastTrips = [
  {
    id: "JOL-2718",
    date: "Сегодня, 14:32",
    from: "мкр. Самал-2, 26",
    to: "Esentai Mall",
    amount: "1 850 ₸",
    status: "Завершена",
  },
  {
    id: "JOL-2691",
    date: "Вчера, 20:18",
    from: "пр. Абая, 44",
    to: "ЖК 4YOU",
    amount: "2 240 ₸",
    status: "Завершена",
  },
  {
    id: "JOL-2644",
    date: "12 октября, 09:05",
    from: "ул. Желтоксан, 115",
    to: "Аэропорт Алматы",
    amount: "Отменена",
    status: "Отменена",
  },
];

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="section-header">
      <Brand />
      <div><p className="eyebrow">{subtitle}</p><h1>{title}</h1></div>
    </header>
  );
}

function TripHistory({ language }: { language: Language }) {
  const [selected, setSelected] = useState<(typeof pastTrips)[number] | null>(null);
  const [filter, setFilter] = useState<"all" | "completed" | "cancelled">("all");
  const kk = language === "kk";
  const localDate = (date: string) =>
    kk ? date.replace("Сегодня", "Бүгін").replace("Вчера", "Кеше").replace("12 октября", "12 қазан") : date;
  const localAmount = (amount: string) => kk && amount === "Отменена" ? "Бас тартылды" : amount;
  const visibleTrips = pastTrips.filter((trip) => {
    if (filter === "completed") return trip.status === "Завершена";
    if (filter === "cancelled") return trip.status === "Отменена";
    return true;
  });
  return (
    <section className="passenger-section">
      <SectionHeader title={kk ? "Сапарлар тарихы" : "История поездок"} subtitle={kk ? "Соңғы тапсырыстар" : "Последние заказы"} />
      <div className="history-filter">
        <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")} type="button">{kk ? "Барлығы" : "Все"}</button>
        <button className={filter === "completed" ? "active" : ""} onClick={() => setFilter("completed")} type="button">{kk ? "Аяқталған" : "Завершённые"}</button>
        <button className={filter === "cancelled" ? "active" : ""} onClick={() => setFilter("cancelled")} type="button">{kk ? "Бас тартылған" : "Отменённые"}</button>
      </div>
      <div className="trip-history-list">
        {visibleTrips.map((trip) => (
          <button className="history-trip" key={trip.id} onClick={() => setSelected(trip)} type="button">
            <span className={`history-icon ${trip.status === "Отменена" ? "cancelled" : ""}`}>
              <Icon name={trip.status === "Отменена" ? "close" : "route"} size={19} />
            </span>
            <span className="history-copy">
              <small>{localDate(trip.date)}</small>
              <strong>{trip.to}</strong>
              <span>{trip.from}</span>
            </span>
            <span className="history-price">
              <strong>{localAmount(trip.amount)}</strong>
              <Icon name="chevron" size={16} />
            </span>
          </button>
        ))}
      </div>
      {selected && (
        <div className="section-modal-backdrop" onClick={() => setSelected(null)} role="presentation">
          <section className="trip-receipt" onClick={(event) => event.stopPropagation()}>
            <div className="switcher-head">
              <div><p className="eyebrow">{kk ? "Сапар мәліметтері" : "Детали поездки"}</p><h2>{selected.id}</h2></div>
              <button className="circle-button plain" onClick={() => setSelected(null)} type="button">
                <Icon name="close" size={18} />
              </button>
            </div>
            <div className="receipt-map">
              <Icon name="route" size={28} />
              <span>{selected.from}</span><i /><span>{selected.to}</span>
            </div>
            <div className="receipt-lines">
              <span><small>{kk ? "Күні мен уақыты" : "Дата и время"}</small><strong>{localDate(selected.date)}</strong></span>
              <span><small>{kk ? "Тариф" : "Тариф"}</small><strong>Стандарт</strong></span>
              <span>
                <small>{kk ? "Төлем" : "Оплата"}</small>
                <strong>{selected.status === "Отменена" ? (kk ? "Алынбады" : "Не списывалась") : "Карта •••• 4821"}</strong>
              </span>
              <span className="receipt-total"><small>{kk ? "Барлығы" : "Итого"}</small><strong>{localAmount(selected.amount)}</strong></span>
            </div>
            <ActionButton kind="quiet">{kk ? "Бағытты қайталау" : "Повторить маршрут"}</ActionButton>
            <button className="receipt-support" type="button">{kk ? "Сапар бойынша көмек" : "Помощь по поездке"}</button>
          </section>
        </div>
      )}
    </section>
  );
}

function Bonuses({ language }: { language: Language }) {
  const kk = language === "kk";
  return (
    <section className="passenger-section">
      <SectionHeader title={kk ? "Бонустар" : "Бонусы"} subtitle={kk ? "Сіздің пайдаңыз" : "Ваша выгода"} />
      <div className="bonus-balance">
        <span className="bonus-pattern" />
        <p>{kk ? "Сапарларға қолжетімді" : "Доступно для поездок"}</p>
        <strong>2 450 <small>{kk ? "бонус" : "бонусов"}</small></strong>
        <span className="bonus-expiry"><Icon name="clock" size={14} /> {kk ? "450 бонус 30 қарашада жойылады" : "450 сгорят 30 ноября"}</span>
      </div>
      <div className="promo-card">
        <span><Icon name="gift" size={22} /></span>
        <div><strong>{kk ? "Промокод бар ма?" : "Есть промокод?"}</strong><small>{kk ? "Тапсырыс алдында белсендіріңіз" : "Активируйте перед заказом"}</small></div>
        <button type="button">{kk ? "Енгізу" : "Ввести"}</button>
      </div>
      <p className="section-label bonus-label">{kk ? "Бұл қалай жұмыс істейді" : "Как это работает"}</p>
      <div className="bonus-rules">
        <div><b>1</b><span><strong>{kk ? "Бонус жинаңыз" : "Получайте бонусы"}</strong><small>{kk ? "Сапарлар мен арнайы ұсыныстар үшін" : "За поездки и специальные предложения"}</small></span></div>
        <div><b>2</b><span><strong>{kk ? "Сапарды төлеңіз" : "Оплачивайте поездки"}</strong><small>{kk ? "Құнының 20%-на дейін бонуспен" : "До 20% стоимости доступными бонусами"}</small></span></div>
        <div><b>3</b><span><strong>{kk ? "Мерзімді бақылаңыз" : "Следите за сроком"}</strong><small>{kk ? "Әр есептеудің мерзімі алдын ала көрінеді" : "Срок каждого начисления виден заранее"}</small></span></div>
      </div>
    </section>
  );
}

function Profile({
  language,
  largeText,
  onLanguage,
  onLargeText,
  theme,
  onTheme,
}: {
  language: Language;
  largeText: boolean;
  onLanguage: (language: Language) => void;
  onLargeText: () => void;
  theme: "light" | "dark";
  onTheme: () => void;
}) {
  const [sheet, setSheet] = useState<"payment" | "safety" | "support" | "language" | null>(null);
  const kk = language === "kk";
  return (
    <section className="passenger-section profile-section">
      <SectionHeader title={kk ? "Профиль" : "Профиль"} subtitle={kk ? "JOL баптаулары" : "Настройки JOL"} />
      <div className="profile-person">
        <span>АҚ</span>
        <div><strong>Айгерім Қ.</strong><small>+7 701 ••• 42 18</small></div>
        <button type="button">{kk ? "Өзгерту" : "Изменить"}</button>
      </div>
      <p className="section-label profile-label">{kk ? "Сапарлар мен төлем" : "Поездки и оплата"}</p>
      <div className="settings-card">
        <button onClick={() => setSheet("payment")} type="button">
          <span><Icon name="card" size={19} /></span>
          <div><strong>{kk ? "Төлем әдістері" : "Способы оплаты"}</strong><small>Карта •••• 4821</small></div>
          <Icon name="chevron" size={17} />
        </button>
        <button type="button">
          <span><Icon name="home" size={19} /></span>
          <div><strong>{kk ? "Таңдаулы мекенжайлар" : "Избранные адреса"}</strong><small>{kk ? "Үй және Жұмыс" : "Дом и Работа"}</small></div>
          <Icon name="chevron" size={17} />
        </button>
      </div>
      <p className="section-label profile-label">{kk ? "Көмек және қауіпсіздік" : "Помощь и безопасность"}</p>
      <div className="settings-card">
        <button onClick={() => setSheet("safety")} type="button">
          <span><Icon name="shield" size={19} /></span>
          <div><strong>{kk ? "Қауіпсіздік" : "Безопасность"}</strong><small>{kk ? "Шұғыл әрекеттер мен байланыстар" : "Экстренные действия и контакты"}</small></div>
          <Icon name="chevron" size={17} />
        </button>
        <button onClick={() => setSheet("support")} type="button">
          <span><Icon name="message" size={19} /></span>
          <div><strong>{kk ? "Қолдау" : "Поддержка"}</strong><small>{kk ? "Әдетте 2 минутта жауап береміз" : "Обычно отвечаем за 2 минуты"}</small></div>
          <Icon name="chevron" size={17} />
        </button>
      </div>
      <p className="section-label profile-label">{kk ? "Қолданба" : "Приложение"}</p>
      <div className="settings-card">
        <button onClick={() => setSheet("language")} type="button">
          <span><Icon name="document" size={19} /></span>
          <div><strong>Язык · Тіл</strong><small>{language === "kk" ? "Қазақша" : "Русский"}</small></div>
          <Icon name="chevron" size={17} />
        </button>
        <button onClick={onTheme} type="button" aria-pressed={theme === "dark"}>
          <span><Icon name="moon" size={19} /></span>
          <div>
            <strong>{kk ? "Қараңғы тақырып" : "Тёмная тема"}</strong>
            <small>{theme === "dark" ? (kk ? "Қосулы" : "Включена") : (kk ? "Өшірулі" : "Выключена")}</small>
          </div>
          <i className={`theme-switch ${theme === "dark" ? "active" : ""}`}><b /></i>
        </button>
        <button onClick={onLargeText} type="button" aria-pressed={largeText}>
          <span className="text-size-icon">Аа</span>
          <div>
            <strong>{kk ? "Үлкейтілген мәтін" : "Крупный текст"}</strong>
            <small>{largeText ? (kk ? "Қосулы" : "Включён") : (kk ? "Өшірулі" : "Выключен")}</small>
          </div>
          <i className={`theme-switch ${largeText ? "active" : ""}`}><b /></i>
        </button>
      </div>
      {sheet && (
        <ProfileSheet
          type={sheet}
          language={language}
          onLanguage={onLanguage}
          onClose={() => setSheet(null)}
        />
      )}
    </section>
  );
}

function ProfileSheet({
  type,
  language,
  onLanguage,
  onClose,
}: {
  type: "payment" | "safety" | "support" | "language";
  language: Language;
  onLanguage: (language: Language) => void;
  onClose: () => void;
}) {
  const kk = language === "kk";
  if (type === "language") {
    return (
      <div className="section-modal-backdrop" onClick={onClose} role="presentation">
        <section className="profile-sheet" onClick={(event) => event.stopPropagation()}>
          <div className="switcher-head">
            <div><p className="eyebrow">Тіл · Язык</p><h2>Интерфейс тілі</h2></div>
            <button className="circle-button plain" onClick={onClose} type="button"><Icon name="close" size={18} /></button>
          </div>
          <div className="profile-language-options">
            <button className={language === "kk" ? "active" : ""} onClick={() => onLanguage("kk")} type="button">
              <span>Қ</span><div><strong>Қазақша</strong><small>Қазақстанның мемлекеттік тілі</small></div><Icon name="shield" size={18} />
            </button>
            <button className={language === "ru" ? "active" : ""} onClick={() => onLanguage("ru")} type="button">
              <span>Р</span><div><strong>Русский</strong><small>Русский язык интерфейса</small></div><Icon name="shield" size={18} />
            </button>
          </div>
          <p className="language-note">Выбор сохраняется для следующего запуска. Состояние активной поездки не изменяется.</p>
        </section>
      </div>
    );
  }
  const content = {
    payment: {
      eyebrow: kk ? "Төлем" : "Оплата",
      title: kk ? "Төлем әдістері" : "Способы оплаты",
      icon: "card" as IconName,
      body: (
        <>
          <div className="saved-card"><span>JOL</span><strong>•••• 4821</strong><small>{kk ? "Негізгі · 08/28" : "Основная · 08/28"}</small></div>
          <button className="sheet-list-action" type="button"><Icon name="card" size={18} />{kk ? "Карта қосу" : "Добавить карту"}<Icon name="chevron" size={16} /></button>
        </>
      ),
    },
    safety: {
      eyebrow: kk ? "Әрқашан жанымызда" : "Всегда рядом",
      title: kk ? "Қауіпсіздік" : "Безопасность",
      icon: "shield" as IconName,
      body: (
        <div className="sheet-options">
          <button type="button"><Icon name="shield" size={19} /><span><strong>{kk ? "Шұғыл қоңырау" : "Экстренный звонок"}</strong><small>{kk ? "112 · тек нақты қауіп кезінде" : "112 · только при реальной угрозе"}</small></span></button>
          <button type="button"><Icon name="route" size={19} /><span><strong>{kk ? "Сапармен бөлісу" : "Поделиться поездкой"}</strong><small>{kk ? "Бағытты жақын адамға жіберу" : "Отправить маршрут близкому"}</small></span></button>
          <button type="button"><Icon name="message" size={19} /><span><strong>{kk ? "Операторға хабарлау" : "Сообщить оператору"}</strong><small>{kk ? "Жағдайды чатта сипаттау" : "Описать ситуацию в чате"}</small></span></button>
        </div>
      ),
    },
    support: {
      eyebrow: kk ? "Қолдау" : "Поддержка",
      title: kk ? "Қалай көмектесеміз?" : "Чем помочь?",
      icon: "message" as IconName,
      body: (
        <div className="sheet-options">
          <button type="button"><Icon name="car" size={19} /><span><strong>{kk ? "Сапар мәселесі" : "Проблема с поездкой"}</strong><small>{kk ? "Баға, бағыт немесе жүргізуші" : "Стоимость, маршрут или водитель"}</small></span></button>
          <button type="button"><Icon name="card" size={19} /><span><strong>{kk ? "Төлем және қайтару" : "Оплата и возврат"}</strong><small>{kk ? "Операцияны тексеру" : "Проверить операцию"}</small></span></button>
          <button type="button"><Icon name="gift" size={19} /><span><strong>{kk ? "Бонустар мен промокодтар" : "Бонусы и промокоды"}</strong><small>{kk ? "Есептеу шарттары" : "Условия начисления"}</small></span></button>
        </div>
      ),
    },
  }[type];
  return (
    <div className="section-modal-backdrop" onClick={onClose} role="presentation">
      <section className="profile-sheet" onClick={(event) => event.stopPropagation()}>
        <div className="switcher-head">
          <div><p className="eyebrow">{content.eyebrow}</p><h2>{content.title}</h2></div>
          <button className="circle-button plain" onClick={onClose} type="button"><Icon name="close" size={18} /></button>
        </div>
        <span className="profile-sheet-icon"><Icon name={content.icon} size={25} /></span>
        {content.body}
      </section>
    </div>
  );
}

function PassengerSection({
  language,
  largeText,
  onLanguage,
  onLargeText,
  tab,
  theme,
  onTheme,
}: {
  language: Language;
  largeText: boolean;
  onLanguage: (language: Language) => void;
  onLargeText: () => void;
  tab: string;
  theme: "light" | "dark";
  onTheme: () => void;
}) {
  if (tab === "history") return <TripHistory language={language} />;
  if (tab === "gifts") return <Bonuses language={language} />;
  return (
    <Profile
      language={language}
      largeText={largeText}
      onLanguage={onLanguage}
      onLargeText={onLargeText}
      theme={theme}
      onTheme={onTheme}
    />
  );
}

function BottomNav({
  active,
  language,
  onChange,
}: {
  active: string;
  language: Language;
  onChange: (tab: string) => void;
}) {
  const labels = language === "kk"
    ? ["Сапар", "Тарих", "Бонустар", "Профиль"]
    : ["Поездка", "История", "Бонусы", "Профиль"];
  const items: [string, string, IconName][] = [
    ["ride", labels[0], "route"],
    ["history", labels[1], "clock"],
    ["gifts", labels[2], "gift"],
    ["profile", labels[3], "user"],
  ];
  return (
    <nav className="bottom-nav" aria-label="Основная навигация">
      {items.map(([key, label, icon]) => (
        <button
          className={active === key ? "active" : ""}
          key={key}
          onClick={() => onChange(key)}
          type="button"
        >
          <Icon name={icon} size={21} />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}

type DriverStage = "offline" | "online" | "offer" | "pickup" | "waiting" | "trip" | "complete" | "no-car";
type PaymentStatus = "idle" | "pending" | "failed" | "paid";

function DriverNav({
  active,
  language,
  onChange,
}: {
  active: string;
  language: Language;
  onChange: (tab: string) => void;
}) {
  const labels = language === "kk"
    ? ["Желі", "Табыс", "Тапсырыстар", "Профиль"]
    : ["Линия", "Доход", "Заказы", "Профиль"];
  const items: [string, string, IconName][] = [
    ["line", labels[0], "navigation"],
    ["income", labels[1], "coins"],
    ["orders", labels[2], "document"],
    ["profile", labels[3], "user"],
  ];
  return (
    <nav className="bottom-nav driver-nav" aria-label="Навигация водителя">
      {items.map(([key, label, icon]) => (
        <button
          className={active === key ? "active" : ""}
          key={key}
          onClick={() => onChange(key)}
          type="button"
        >
          <Icon name={icon} size={21} />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}

function DriverHeader({
  language,
  online,
  onMenu,
}: {
  language: Language;
  online: boolean;
  onMenu: () => void;
}) {
  return (
    <header className="top-bar driver-header">
      <button className="menu-button" onClick={onMenu} type="button" aria-label="Меню">
        <Icon name="menu" size={20} />
      </button>
      <div className="driver-status">
        <span className={online ? "online" : ""} />
        <strong>{online ? (language === "kk" ? "Желіде" : "На линии") : (language === "kk" ? "Желіде емес" : "Не на линии")}</strong>
      </div>
      <span className="driver-balance">12 480 ₸</span>
    </header>
  );
}

function DriverIdleCard({
  language,
  online,
  onToggle,
}: {
  language: Language;
  online: boolean;
  onToggle: () => void;
}) {
  const kk = language === "kk";
  return (
    <section className="bottom-sheet driver-idle">
      <div className="sheet-handle" />
      <div className="driver-summary">
        <div>
          <p className="eyebrow">
            {online ? (kk ? "Демо контуры белсенді" : "Демо-контур активен") : (kk ? "Тапсырыстарға дайынсыз ба?" : "Готовы к заказам?")}
          </p>
          <h1>{online ? (kk ? "Тест тапсырысын іздейміз" : "Ищем тестовый заказ") : (kk ? "Сіз желіде емессіз" : "Вы не на линии")}</h1>
        </div>
        <span className={`pulse-state ${online ? "active" : ""}`} />
      </div>
      <div className="driver-stats">
        <span><strong>0</strong><small>{kk ? "сапар" : "поездок"}</small></span>
        <span><strong>0 ₸</strong><small>{kk ? "бүгін" : "за сегодня"}</small></span>
        <span><strong>4,96</strong><small>{kk ? "рейтинг" : "рейтинг"}</small></span>
      </div>
      <ActionButton onClick={onToggle}>
        <span className="button-content">
          <Icon name="power" size={20} />
          {online ? (kk ? "Желіден шығу" : "Выйти с линии") : (kk ? "Желіге шығу" : "Выйти на линию")}
        </span>
      </ActionButton>
      {online && <p className="demo-caption">{kk ? "Ұсыныс тек сіздің әрекетіңізден кейін пайда болады" : "Предложение появится только после вашего действия"}</p>}
    </section>
  );
}

function OfferCard({
  language,
  onAccept,
  onSkip,
}: {
  language: Language;
  onAccept: () => void;
  onSkip: () => void;
}) {
  const kk = language === "kk";
  return (
    <section className="bottom-sheet driver-order-card">
      <div className="offer-banner">
        <span>{kk ? "Тест ұсынысы" : "Тестовое предложение"}</span>
        <strong>18 сек</strong>
      </div>
      <div className="offer-heading">
        <span className="car-visual standard-car"><Icon name="car" size={29} /></span>
        <div><p>Стандарт · {kk ? "Карта" : "Карта"}</p><h1>1 850 ₸</h1></div>
        <div className="earning"><small>{kk ? "Сіздің табысыңыз" : "Ваш доход"}</small><strong>1 628 ₸</strong></div>
      </div>
      <div className="route-summary">
        <span className="route-point pickup-point" />
        <div><small>{kk ? "Келуге 6 мин · 2,4 км" : "6 мин · 2,4 км до подачи"}</small><strong>Самал-2 ықшам ауданы</strong></div>
        <span className="route-point finish-point" />
        <div><small>{kk ? "Сапар 18 мин · 8,7 км" : "18 мин · 8,7 км поездка"}</small><strong>{kk ? "Алмалы ауданы" : "Район Алмалы"}</strong></div>
      </div>
      <div className="offer-actions">
        <ActionButton kind="quiet" onClick={onSkip}>{kk ? "Өткізу" : "Пропустить"}</ActionButton>
        <ActionButton onClick={onAccept}>{kk ? "Қабылдау" : "Принять"}</ActionButton>
      </div>
      <p className="demo-caption">{kk ? "Демонстрациялық деректер, нақты тапсырыс тағайындалмайды" : "Демонстрационные данные, реальный заказ не назначается"}</p>
    </section>
  );
}

function ActiveDriverCard({
  language,
  stage,
  onNext,
}: {
  language: Language;
  stage: "pickup" | "waiting" | "trip";
  onNext: () => void;
}) {
  const kk = language === "kk";
  const details = {
    pickup: {
      eyebrow: kk ? "Жолаушыға дейін 6 минут" : "До пассажира 6 минут",
      title: kk ? "Самал-2 ықшам ауданы, 26 үй" : "мкр. Самал-2, дом 26",
      note: kk ? "Достық даңғылы жағынан кіріңіз" : "Въезд со стороны проспекта Достык",
      action: kk ? "Мен келдім" : "Я прибыл",
    },
    waiting: {
      eyebrow: kk ? "Жолаушыға хабарланды" : "Пассажир уведомлён",
      title: kk ? "А нүктесінде күтіңіз" : "Ожидайте у точки А",
      note: kk ? "Жолаушының PIN-коды: 4826" : "PIN пассажира: 4826",
      action: kk ? "Сапарды бастау" : "Начать поездку",
    },
    trip: {
      eyebrow: kk ? "Сапарда · 14 минут" : "В поездке · 14 минут",
      title: "Esentai Mall",
      note: kk ? "Әл-Фараби даңғылы, 77/8" : "пр. Аль-Фараби, 77/8",
      action: kk ? "Сапарды аяқтау" : "Завершить поездку",
    },
  }[stage];

  return (
    <section className="bottom-sheet driver-order-card active-order">
      <div className="active-order-head">
        <div>
          <p className="eyebrow">{details.eyebrow}</p>
          <h1>{details.title}</h1>
        </div>
        <button className="circle-button support-button" type="button" aria-label="Связаться">
          <Icon name="message" size={20} />
        </button>
      </div>
      <div className="driver-note">
        <Icon name={stage === "waiting" ? "shield" : "pin"} size={19} />
        <span>{details.note}</span>
      </div>
      {stage === "waiting" && (
        <div className="pin-code" aria-label="PIN-код 4826">
          {"4826".split("").map((digit) => <span key={digit}>{digit}</span>)}
        </div>
      )}
      <ActionButton onClick={onNext}>
        <span className="button-content">
          {stage === "pickup" && <Icon name="location" size={20} />}
          {stage === "trip" && <Icon name="shield" size={20} />}
          {details.action}
        </span>
      </ActionButton>
    </section>
  );
}

function EarningsCard({
  language,
  onDone,
  paymentStatus,
}: {
  language: Language;
  onDone: () => void;
  paymentStatus: PaymentStatus;
}) {
  const kk = language === "kk";
  return (
    <section className="bottom-sheet earnings-card">
      <span className="success-mark"><Icon name="coins" size={30} /></span>
      <p className="eyebrow">{kk ? "Тест сапары аяқталды" : "Тестовая поездка завершена"}</p>
      <h1>{kk ? "1 628 ₸ есептелді" : "Начислено 1 628 ₸"}</h1>
      <div className={`earning-payment-state ${paymentStatus === "paid" ? "paid" : ""}`}>
        <Icon name={paymentStatus === "paid" ? "shield" : "clock"} size={16} />
        <span>
          {paymentStatus === "paid"
            ? (kk ? "Жолаушының төлемі расталды" : "Оплата пассажира подтверждена")
            : paymentStatus === "failed"
              ? (kk ? "Жолаушы төлемді қайталауы керек" : "Оплата пассажира требует повторной попытки")
              : (kk ? "Жолаушының төлемі растауды күтуде" : "Оплата пассажира ожидает подтверждения")}
        </span>
      </div>
      <div className="money-breakdown">
        <span><small>{kk ? "Сапар құны" : "Стоимость поездки"}</small><strong>1 850 ₸</strong></span>
        <span><small>{kk ? "Сервис комиссиясы · 12%" : "Комиссия сервиса · 12%"}</small><strong>−222 ₸</strong></span>
        <span className="money-total"><small>{kk ? "Сіздің табысыңыз" : "Ваш доход"}</small><strong>1 628 ₸</strong></span>
      </div>
      <ActionButton onClick={onDone}>{kk ? "Желіге оралу" : "Вернуться на линию"}</ActionButton>
      <p className="demo-caption">{kk ? "Есептеу тек демо контур интерфейсінде көрсетілген" : "Начисление показано только в интерфейсе демо-контура"}</p>
    </section>
  );
}

function DriverSectionHeader({
  title,
  subtitle,
  onMenu,
}: {
  title: string;
  subtitle: string;
  onMenu: () => void;
}) {
  return (
    <header className="driver-section-header">
      <button className="menu-button" onClick={onMenu} type="button" aria-label="Меню">
        <Icon name="menu" size={20} />
      </button>
      <div><p className="eyebrow">{subtitle}</p><h1>{title}</h1></div>
      <span className="driver-balance">12 480 ₸</span>
    </header>
  );
}

function DriverIncome({ language, onMenu }: { language: Language; onMenu: () => void }) {
  const kk = language === "kk";
  return (
    <section className="driver-section">
      <DriverSectionHeader title={kk ? "Табыс" : "Доход"} subtitle={kk ? "Сіздің есептеулеріңіз" : "Ваши начисления"} onMenu={onMenu} />
      <div className="income-hero">
        <p>{kk ? "Бүгінгі табыс" : "Заработано сегодня"}</p>
        <strong>18 640 ₸</strong>
        <span><Icon name="clock" size={14} /> {kk ? "Желіде 6 сағ 24 мин" : "6 ч 24 мин на линии"}</span>
      </div>
      <div className="income-stats">
        <div><small>{kk ? "Сапарлар" : "Поездки"}</small><strong>11</strong><span>{kk ? "9 аяқталды" : "9 завершено"}</span></div>
        <div><small>{kk ? "Белсенді сағатқа" : "За активный час"}</small><strong>3 280 ₸</strong><span>5 сағ 41 мин</span></div>
        <div><small>{kk ? "Комиссия" : "Комиссия"}</small><strong>2 542 ₸</strong><span>{kk ? "Сервис 12%" : "12% сервиса"}</span></div>
      </div>
      <div className="payout-card">
        <div className="payout-heading">
          <span><Icon name="card" size={20} /></span>
          <div><small>{kk ? "Төлемге қолжетімді" : "Доступно к выплате"}</small><strong>12 480 ₸</strong></div>
          <button type="button">{kk ? "Шығару" : "Вывести"}</button>
        </div>
        <div className="payout-account"><span>{kk ? "Төлем картасы" : "Карта для выплат"}</span><strong>Kaspi Gold •••• 3147</strong></div>
      </div>
      <div className="driver-list-heading"><h2>{kk ? "Соңғы есептеулер" : "Последние начисления"}</h2><button type="button">{kk ? "Барлық тарих" : "Вся история"}</button></div>
      <div className="earning-list">
        {[
          ["JOL-2841", "Самал-2 → Esentai Mall", "+1 628 ₸", "18:58"],
          ["JOL-2822", "Атакент → пр. Абая", "+1 214 ₸", "17:36"],
          ["JOL-2816", "Орбита-3 → Коктем", "+1 892 ₸", "16:51"],
        ].map(([id, route, amount, time]) => (
          <button key={id} type="button">
            <span className="earning-list-icon"><Icon name="route" size={18} /></span>
            <span><small>{id} · {time}</small><strong>{route}</strong></span>
            <b>{amount}</b>
          </button>
        ))}
      </div>
    </section>
  );
}

function DriverOrders({ language, onMenu }: { language: Language; onMenu: () => void }) {
  const kk = language === "kk";
  const [filter, setFilter] = useState<"all" | "completed" | "cancelled">("all");
  const orders = [
    ["JOL-2841", "Самал-2 → Esentai Mall", "1 628 ₸", "18:31–18:58", "Завершён"],
    ["JOL-2822", "Атакент → пр. Абая", "1 214 ₸", "17:12–17:36", "Завершён"],
    ["JOL-2819", "ул. Жарокова → Орбита", "0 ₸", "17:02", "Отменён"],
    ["JOL-2816", "Орбита-3 → Коктем", "1 892 ₸", "16:24–16:51", "Завершён"],
  ];
  const visibleOrders = orders.filter((order) => {
    if (filter === "completed") return order[4] === "Завершён";
    if (filter === "cancelled") return order[4] === "Отменён";
    return true;
  });
  return (
    <section className="driver-section">
      <DriverSectionHeader title={kk ? "Тапсырыстар" : "Заказы"} subtitle={kk ? "Жұмыс тарихы" : "История работы"} onMenu={onMenu} />
      <div className="driver-order-tabs">
        <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")} type="button">{kk ? "Барлығы" : "Все"}</button>
        <button className={filter === "completed" ? "active" : ""} onClick={() => setFilter("completed")} type="button">{kk ? "Аяқталған" : "Завершённые"}</button>
        <button className={filter === "cancelled" ? "active" : ""} onClick={() => setFilter("cancelled")} type="button">{kk ? "Бас тартылған" : "Отменённые"}</button>
      </div>
      <p className="section-label driver-date-label">{kk ? "Бүгін" : "Сегодня"} · 18 640 ₸</p>
      <div className="driver-orders-list">
        {visibleOrders.map(([id, route, amount, time, status]) => (
          <button key={id} type="button">
            <span className={`history-icon ${status === "Отменён" ? "cancelled" : ""}`}>
              <Icon name={status === "Отменён" ? "close" : "car"} size={19} />
            </span>
            <span className="driver-order-copy">
              <small>{id} · {time}</small><strong>{route}</strong>
              <span>{kk ? (status === "Отменён" ? "Бас тартылды" : "Аяқталды") : status}</span>
            </span>
            <span className="driver-order-amount"><strong>{amount}</strong><Icon name="chevron" size={16} /></span>
          </button>
        ))}
      </div>
    </section>
  );
}

function DriverProfile({ language, onMenu }: { language: Language; onMenu: () => void }) {
  const kk = language === "kk";
  return (
    <section className="driver-section">
      <DriverSectionHeader title="Профиль" subtitle="JOL Driver" onMenu={onMenu} />
      <div className="driver-profile-person">
        <span>АС</span>
        <div><strong>Арман Садыков</strong><small>★ 4,96 · 1 248 {kk ? "сапар" : "поездок"}</small></div>
        <b>{kk ? "Тексерілген" : "Проверен"}</b>
      </div>
      <div className="quality-card">
        <div><p className="eyebrow">{kk ? "Сапа" : "Качество"}</p><strong>{kk ? "Өте жақсы деңгей" : "Отличный уровень"}</strong><small>{kk ? "Сапарлардың 98%-ы шағымсыз" : "98% поездок без обращений"}</small></div>
        <span>4,96</span>
      </div>
      <p className="section-label profile-label">{kk ? "Көлік және құжаттар" : "Автомобиль и документы"}</p>
      <div className="settings-card driver-settings">
        <button type="button">
          <span><Icon name="car" size={19} /></span>
          <div><strong>Toyota Camry · 707 KZA 02</strong><small>{kk ? "Стандарт · Ақ · Рұқсат етілген" : "Стандарт · Белый · Допущен"}</small></div>
          <Icon name="chevron" size={17} />
        </button>
        <button type="button">
          <span><Icon name="document" size={19} /></span>
          <div><strong>{kk ? "Құжаттар" : "Документы"}</strong><small>{kk ? "Барлығы жарамды · жақын мерзім 46 күн" : "Все действуют · ближайший срок 46 дней"}</small></div>
          <Icon name="chevron" size={17} />
        </button>
      </div>
      <p className="section-label profile-label">{kk ? "Жұмыс шарттары" : "Условия работы"}</p>
      <div className="commission-card">
        <span><small>{kk ? "Сервис комиссиясы" : "Комиссия сервиса"}</small><strong>12%</strong></span>
        <span><small>{kk ? "Төлемдер" : "Выплаты"}</small><strong>{kk ? "Күн сайын" : "Каждый день"}</strong></span>
        <p>{kk ? "Ұсталымдар тапсырысты қабылдауға дейін және әр есептеуде көрсетіледі." : "Удержания всегда показываются до принятия заказа и в каждом начислении."}</p>
      </div>
      <div className="settings-card driver-settings">
        <button type="button">
          <span><Icon name="shield" size={19} /></span>
          <div><strong>{kk ? "Қауіпсіздік және көмек" : "Безопасность и помощь"}</strong><small>{kk ? "Оқиға, апат немесе дау" : "Инцидент, авария или спор"}</small></div>
          <Icon name="chevron" size={17} />
        </button>
        <button type="button">
          <span><Icon name="document" size={19} /></span>
          <div><strong>{kk ? "Келісімдер" : "Соглашения"}</strong><small>{kk ? "Шарттар нұсқасы және қабылдау күні" : "Версии условий и дата принятия"}</small></div>
          <Icon name="chevron" size={17} />
        </button>
      </div>
    </section>
  );
}

function DriverSection({
  language,
  tab,
  onMenu,
}: {
  language: Language;
  tab: string;
  onMenu: () => void;
}) {
  if (tab === "income") return <DriverIncome language={language} onMenu={onMenu} />;
  if (tab === "orders") return <DriverOrders language={language} onMenu={onMenu} />;
  return <DriverProfile language={language} onMenu={onMenu} />;
}

function DriverApp({
  language,
  onMenu,
  stage,
  setStage,
  paymentStatus,
}: {
  language: Language;
  onMenu: () => void;
  stage: DriverStage;
  setStage: (stage: DriverStage) => void;
  paymentStatus: PaymentStatus;
}) {
  const [tab, setTab] = useState("line");
  const online = stage !== "offline";
  const routeVisible = ["pickup", "waiting", "trip"].includes(stage);
  const hasActiveOrder = ["offer", "pickup", "waiting", "trip", "complete"].includes(stage);
  const showLine = tab === "line" || hasActiveOrder;

  function toggleLine() {
    if (stage === "offline") {
      setStage("online");
      window.setTimeout(() => setStage("offer"), 700);
    } else {
      setStage("offline");
    }
  }

  return (
    <>
      {showLine ? (
        <>
          <MapCanvas routeVisible={routeVisible} />
          <DriverHeader language={language} online={online} onMenu={onMenu} />
          {stage === "offline" || stage === "online" || stage === "no-car" ? (
            <DriverIdleCard language={language} online={online} onToggle={toggleLine} />
          ) : stage === "offer" ? (
            <OfferCard language={language} onAccept={() => setStage("pickup")} onSkip={() => setStage("no-car")} />
          ) : stage === "complete" ? (
            <EarningsCard language={language} paymentStatus={paymentStatus} onDone={() => setStage("online")} />
          ) : (
            <ActiveDriverCard
              language={language}
              stage={stage}
              onNext={() =>
                setStage(stage === "pickup" ? "waiting" : stage === "waiting" ? "trip" : "complete")
              }
            />
          )}
        </>
      ) : (
        <DriverSection language={language} tab={tab} onMenu={onMenu} />
      )}
      {!hasActiveOrder && <DriverNav active={tab} language={language} onChange={setTab} />}
      {(stage === "online" || stage === "no-car") && showLine && (
        <button className="test-offer-trigger" onClick={() => setStage("offer")} type="button">
          {language === "kk" ? "Тест тапсырысын көрсету" : "Показать тестовый заказ"}
        </button>
      )}
    </>
  );
}

function PassengerTripPanel({
  language,
  stage,
  onFinish,
  onRetry,
  paymentStatus,
  onPayment,
}: {
  language: Language;
  stage: "offer" | "pickup" | "waiting" | "trip" | "complete" | "no-car";
  onFinish: () => void;
  onRetry: () => void;
  paymentStatus: PaymentStatus;
  onPayment: () => void;
}) {
  const [cancelConfirm, setCancelConfirm] = useState(false);
  const [rating, setRating] = useState(0);
  const kk = language === "kk";
  if (stage === "offer") {
    return (
      <>
        <section className="bottom-sheet passenger-trip-card searching-card">
          <div className="sheet-handle" />
          <div className="searching-visual"><span /><span /><span /></div>
          <p className="eyebrow">{kk ? "JOL-2846 тест тапсырысы" : "Тестовый заказ JOL-2846"}</p>
          <h1>{kk ? "Жүргізушінің қабылдауын күтеміз" : "Ждём принятия водителем"}</h1>
          <p className="trip-description">
            {kk
              ? "Мәзір арқылы JOL Driver қолданбасына өтіп, ұсынысты қабылдаңыз немесе өткізіп жіберіңіз."
              : "Переключитесь в JOL Driver через меню и примите или пропустите предложение."}
          </p>
          <div className="searching-meta">
            <span><small>{kk ? "Тариф" : "Тариф"}</small><strong>Стандарт</strong></span>
            <span><small>{kk ? "Бағасы" : "Стоимость"}</small><strong>1 850 ₸</strong></span>
            <span><small>{kk ? "Төлем" : "Оплата"}</small><strong>•••• 4821</strong></span>
          </div>
          <button className="cancel-search-button" onClick={() => setCancelConfirm(true)} type="button">
            {kk ? "Тапсырыстан бас тарту" : "Отменить заказ"}
          </button>
        </section>
        {cancelConfirm && (
          <div className="section-modal-backdrop" onClick={() => setCancelConfirm(false)} role="presentation">
            <section className="cancel-confirmation" onClick={(event) => event.stopPropagation()}>
              <span className="cancel-icon"><Icon name="close" size={24} /></span>
              <p className="eyebrow">{kk ? "Жүргізуші тағайындалғанға дейін" : "До назначения водителя"}</p>
              <h2>{kk ? "Тапсырыстан бас тартасыз ба?" : "Отменить заказ?"}</h2>
              <p>
                {kk
                  ? "Қазір бас тарту тегін. Картадан қаражат алынбайды."
                  : "Сейчас отмена бесплатна. С карты ничего не будет списано."}
              </p>
              <div>
                <ActionButton kind="quiet" onClick={() => setCancelConfirm(false)}>
                  {kk ? "Іздеуді жалғастыру" : "Продолжить поиск"}
                </ActionButton>
                <button onClick={onFinish} type="button">{kk ? "Тегін бас тарту" : "Отменить бесплатно"}</button>
              </div>
            </section>
          </div>
        )}
      </>
    );
  }

  if (stage === "no-car") {
    return (
      <section className="bottom-sheet passenger-trip-card no-car-card">
        <span className="no-car-icon"><Icon name="car" size={29} /></span>
        <p className="eyebrow">{kk ? "Іздеу аяқталды" : "Поиск завершён"}</p>
        <h1>{kk ? "Әзірге бос көлік жоқ" : "Пока нет свободной машины"}</h1>
        <p>
          {kk
            ? "Жүргізуші тест ұсынысын өткізіп жіберді. Қайта іздеуге немесе тапсырыс шарттарын өзгертуге болады."
            : "Водитель пропустил тестовое предложение. Можно повторить поиск или изменить условия заказа."}
        </p>
        <div className="no-car-suggestion">
          <Icon name="clock" size={19} />
          <span>
            <strong>{kk ? "Қайта байқап көріңіз" : "Попробуйте ещё раз"}</strong>
            <small>{kk ? "Бірнеше минуттан кейін көлік табылуы мүмкін" : "Доступность может измениться через несколько минут"}</small>
          </span>
        </div>
        <ActionButton onClick={onRetry}>{kk ? "Іздеуді жалғастыру" : "Продолжить поиск"}</ActionButton>
        <button className="secondary-text-button" onClick={onFinish} type="button">
          {kk ? "Бағытты немесе тарифті өзгерту" : "Изменить маршрут или тариф"}
        </button>
      </section>
    );
  }

  if (stage === "complete") {
    if (paymentStatus !== "paid") {
      return (
        <section className="bottom-sheet passenger-trip-card payment-result-card">
          <span className={`payment-result-icon ${paymentStatus === "failed" ? "failed" : ""}`}>
            <Icon name={paymentStatus === "failed" ? "close" : "card"} size={28} />
          </span>
          <p className="eyebrow">
            {paymentStatus === "failed"
              ? (kk ? "Төлем расталмады" : "Платёж не подтверждён")
              : (kk ? "Сапар аяқталды" : "Поездка завершена")}
          </p>
          <h1>
            {paymentStatus === "failed"
              ? (kk ? "Қайта төлеп көріңіз" : "Попробуйте оплатить ещё раз")
              : (kk ? "Төлем сомасы 1 850 ₸" : "К оплате 1 850 ₸")}
          </h1>
          <p>
            {paymentStatus === "failed"
              ? (kk
                  ? "Тест провайдері алғашқы әрекетті қабылдамады. Қайта басу сол операцияны пайдаланады және қосарланған есептен шығару болмайды."
                  : "Тестовый провайдер отклонил первую попытку. Повторное нажатие использует ту же операцию и не создаёт двойное списание.")
              : (kk
                  ? "Сапар төлемге тәуелсіз аяқталды. •••• 4821 картасымен тест операциясын растаңыз."
                  : "Перевозка завершена независимо от платежа. Подтвердите тестовую операцию картой •••• 4821.")}
          </p>
          <div className="payment-operation">
            <span><small>{kk ? "Операция" : "Операция"}</small><strong>PAY-DEMO-4826</strong></span>
            <b>{paymentStatus === "failed" ? (kk ? "Қате" : "Ошибка") : (kk ? "Күтуде" : "Ожидает")}</b>
          </div>
          <ActionButton onClick={onPayment}>
            {paymentStatus === "failed"
              ? (kk ? "Төлемді қайталау" : "Повторить оплату")
              : (kk ? "Тест картасымен төлеу" : "Оплатить тестовой картой")}
          </ActionButton>
          <button className="secondary-text-button" type="button">
            {kk ? "Басқа төлем әдісін таңдау" : "Выбрать другой способ"}
          </button>
        </section>
      );
    }
    return (
      <section className="bottom-sheet passenger-trip-card passenger-complete">
        <span className="success-mark"><Icon name="shield" size={29} /></span>
        <p className="eyebrow">{kk ? "Тест сапары аяқталды" : "Тестовая поездка завершена"}</p>
        <h1>{kk ? "Сапар қалай өтті?" : "Как прошла поездка?"}</h1>
        <div className="rating-row" aria-label="Оценка поездки">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              className={star <= rating ? "selected" : ""}
              key={star}
              onClick={() => setRating(star)}
              type="button"
              aria-label={kk ? `${star} / 5` : `${star} из 5`}
            >
              ★
            </button>
          ))}
        </div>
        <div className="passenger-receipt">
          <span><small>{kk ? "Барлығы" : "Итого"}</small><strong>1 850 ₸</strong></span>
          <span><small>{kk ? "Төлем күйі" : "Статус оплаты"}</small><strong>{kk ? "Тест есебі" : "Тестовый расчёт"}</strong></span>
        </div>
        <ActionButton onClick={onFinish}>{kk ? "Дайын" : "Готово"}</ActionButton>
      </section>
    );
  }

  const state = {
    pickup: {
      eyebrow: kk ? "Жүргізуші 6 минутта келеді" : "Водитель будет через 6 минут",
      title: kk ? "Арман сізге келе жатыр" : "Арман едет к вам",
      status: kk ? "Келе жатыр" : "Подача",
    },
    waiting: {
      eyebrow: kk ? "Көлік келді" : "Машина на месте",
      title: kk ? "А нүктесіне шығыңыз" : "Выходите к точке А",
      status: kk ? "Күтуде" : "Ожидание",
    },
    trip: {
      eyebrow: kk ? "Сапарда · 14 минут қалды" : "В поездке · осталось 14 минут",
      title: kk ? "Esentai Mall-ға барамыз" : "Едем в Esentai Mall",
      status: kk ? "Жолда" : "В пути",
    },
  }[stage as "pickup" | "waiting" | "trip"];

  return (
    <section className="bottom-sheet passenger-trip-card assigned-card">
      <div className="sheet-handle" />
      <div className="passenger-status-line">
        <div><p className="eyebrow">{state.eyebrow}</p><h1>{state.title}</h1></div>
        <span className={`status-pill ${stage}`}>{state.status}</span>
      </div>
      <div className="driver-identity">
        <span className="driver-avatar">АС</span>
        <div><strong>Арман С.</strong><small>★ 4,96 · 1 248 {kk ? "сапар" : "поездок"}</small></div>
        <div className="car-number"><strong>707 KZA 02</strong><small>{kk ? "Ақ Toyota Camry" : "Белая Toyota Camry"}</small></div>
      </div>
      {stage === "waiting" && (
        <div className="passenger-pin">
          <div><small>{kk ? "PIN-кодты жүргізушіге айтыңыз" : "Сообщите PIN водителю"}</small><strong>4826</strong></div>
          <Icon name="shield" size={24} />
        </div>
      )}
      {stage !== "waiting" && (
        <div className="passenger-route-row">
          <Icon name={stage === "trip" ? "navigation" : "pin"} size={20} />
          <div>
            <small>
              {stage === "trip"
                ? (kk ? "Баратын жер" : "Пункт назначения")
                : (kk ? "Кездесу нүктесі" : "Точка встречи")}
            </small>
            <strong>{stage === "trip" ? "пр. Аль-Фараби, 77/8" : "мкр. Самал-2, дом 26"}</strong>
          </div>
        </div>
      )}
      <div className="passenger-contact-actions">
        <button type="button"><Icon name="message" size={19} />{kk ? "Хабарлама" : "Сообщение"}</button>
        <button type="button"><Icon name="shield" size={19} />{kk ? "Қауіпсіздік" : "Безопасность"}</button>
      </div>
      <p className="demo-caption">
        {kk
          ? "Күй тест JOL Driver қолданбасындағы әрекеттермен синхрондалған"
          : "Статус синхронизирован с действиями в тестовом JOL Driver"}
      </p>
    </section>
  );
}

const liveTrips = [
  {
    id: "JOL-2841",
    route: "Самал-2 → Esentai Mall",
    driver: "Арман С.",
    car: "707 KZA 02",
    status: "В пути",
    tone: "moving",
    time: "14 мин",
    amount: "1 850 ₸",
  },
  {
    id: "JOL-2839",
    route: "Орбита-3 → ул. Толе би",
    driver: "Айдана К.",
    car: "115 ABA 02",
    status: "Ожидание",
    tone: "waiting",
    time: "6 мин",
    amount: "2 140 ₸",
  },
  {
    id: "JOL-2837",
    route: "Атакент → мкр. Коктем",
    driver: "Данияр М.",
    car: "928 AAD 02",
    status: "Подача",
    tone: "pickup",
    time: "3 мин",
    amount: "1 420 ₸",
  },
  {
    id: "JOL-2834",
    route: "ЖК 4YOU → пр. Абая",
    driver: "Марат Е.",
    car: "441 KAZ 02",
    status: "Оплата",
    tone: "payment",
    time: "1 мин",
    amount: "2 680 ₸",
  },
];

function AdminSidebar({
  active,
  onChange,
  onMenu,
}: {
  active: string;
  onChange: (section: string) => void;
  onMenu: () => void;
}) {
  const sections: [string, string, IconName][] = [
    ["overview", "Обзор", "route"],
    ["trips", "Поездки", "car"],
    ["drivers", "Водители", "user"],
    ["incidents", "Инциденты", "shield"],
    ["payments", "Платежи", "card"],
    ["reports", "Отчёты", "document"],
  ];
  return (
    <aside className="admin-sidebar">
      <button className="admin-brand" onClick={onMenu} type="button" aria-label="Сменить приложение">
        <Brand />
        <span>Управление</span>
      </button>
      <nav aria-label="Разделы панели">
        {sections.map(([key, label, icon]) => (
          <button
            className={active === key ? "active" : ""}
            key={key}
            onClick={() => onChange(key)}
            type="button"
          >
            <Icon name={icon} size={19} />
            <span>{label}</span>
            {label === "Инциденты" && <b>3</b>}
          </button>
        ))}
      </nav>
      <div className="admin-user">
        <span>АК</span>
        <div><strong>Алия К.</strong><small>Оператор Алматы</small></div>
        <Icon name="chevron" size={16} />
      </div>
    </aside>
  );
}

function AdminMetric({
  label,
  value,
  hint,
  icon,
  tone,
}: {
  label: string;
  value: string;
  hint: string;
  icon: IconName;
  tone?: string;
}) {
  return (
    <article className="admin-metric">
      <span className={`metric-icon ${tone ?? ""}`}><Icon name={icon} size={20} /></span>
      <div><small>{label}</small><strong>{value}</strong><p>{hint}</p></div>
    </article>
  );
}

function TripDetail({
  trip,
  onClose,
}: {
  trip: (typeof liveTrips)[number];
  onClose: () => void;
}) {
  return (
    <aside className="trip-detail">
      <div className="detail-head">
        <div><p className="eyebrow">Активная поездка</p><h2>{trip.id}</h2></div>
        <button className="circle-button plain" onClick={onClose} type="button" aria-label="Закрыть">
          <Icon name="close" size={18} />
        </button>
      </div>
      <div className="detail-map">
        <svg viewBox="0 0 400 160" preserveAspectRatio="none" aria-hidden="true">
          <path d="M-20 135C65 110 108 128 168 79s127-34 252-66" />
          <path d="M30-10c32 43 78 72 135 84s113 37 143 100" />
          <path className="detail-route" d="M54 122c65-5 74-38 122-51s92 13 163-45" />
        </svg>
        <span className="detail-pin from">A</span>
        <span className="detail-pin to"><Icon name="pin" size={14} /></span>
      </div>
      <div className="detail-status">
        <span className={`status-pill ${trip.tone}`}>{trip.status}</span>
        <strong>{trip.time}</strong>
      </div>
      <div className="detail-route-copy">
        <span /><div><small>Маршрут</small><strong>{trip.route}</strong></div>
      </div>
      <div className="detail-grid">
        <div><small>Водитель</small><strong>{trip.driver}</strong><p>{trip.car}</p></div>
        <div><small>Стоимость</small><strong>{trip.amount}</strong><p>Карта •••• 4821</p></div>
      </div>
      <div className="timeline">
        <p className="section-label">Последние события</p>
        <div><i /><span><strong>Поездка начата</strong><small>18:42 · PIN подтверждён</small></span></div>
        <div><i /><span><strong>Пассажир найден</strong><small>18:38 · ожидание 2 мин</small></span></div>
        <div><i /><span><strong>Водитель назначен</strong><small>18:31 · offer_8F2A</small></span></div>
      </div>
      <button className="audit-button" type="button"><Icon name="document" size={17} /> Открыть полный аудит</button>
    </aside>
  );
}

const adminDrivers = [
  ["Арман Садыков", "707 KZA 02", "На заказе", "4,96", "Документы действуют"],
  ["Айдана Касымова", "115 ABA 02", "Ожидает", "4,91", "Истекают через 6 дней"],
  ["Данияр Мухтаров", "928 AAD 02", "Свободен", "4,88", "Документы действуют"],
  ["Марат Ермеков", "441 KAZ 02", "Не на линии", "4,93", "Нужна проверка"],
];

const adminIncidents = [
  ["INC-031", "Нет связи с пассажиром", "JOL-2831", "Высокий", "Открыт 4 мин"],
  ["INC-029", "Спор о точке завершения", "JOL-2814", "Средний", "Открыт 18 мин"],
  ["INC-026", "Забытая вещь", "JOL-2788", "Обычный", "Открыт 42 мин"],
];

const adminPayments = [
  ["PAY-88421", "JOL-2841", "1 850 ₸", "Подтверждён", "Halyk test"],
  ["PAY-88418", "JOL-2834", "2 680 ₸", "Сверяется", "Halyk test"],
  ["PAY-88403", "JOL-2828", "1 420 ₸", "Дубликат события", "Требует проверки"],
  ["PAY-88397", "JOL-2822", "1 380 ₸", "Подтверждён", "Halyk test"],
];

function AdminSectionPage({ section }: { section: string }) {
  if (section === "trips") {
    return (
      <section className="admin-page-card">
        <div className="admin-page-tools">
          <div><h2>Все поездки</h2><p>Активные, завершённые и отменённые заказы пилотной зоны</p></div>
          <button type="button"><Icon name="document" size={16} />Экспорт</button>
        </div>
        <div className="admin-filter-row">
          <button className="active" type="button">Активные · 48</button>
          <button type="button">Завершённые</button>
          <button type="button">Отменённые</button>
        </div>
        <AdminDataTable
          headings={["Заказ", "Маршрут", "Водитель", "Статус", "Сумма"]}
          rows={liveTrips.map((trip) => [trip.id, trip.route, `${trip.driver} · ${trip.car}`, `${trip.status} · ${trip.time}`, trip.amount])}
        />
      </section>
    );
  }

  if (section === "drivers") {
    return (
      <>
        <div className="admin-section-metrics">
          <AdminMetric label="На линии" value="126" hint="74 свободны" icon="car" />
          <AdminMetric label="На проверке" value="18" hint="5 требуют документов" icon="document" tone="gold" />
          <AdminMetric label="Истекают документы" value="8" hint="В течение 7 дней" icon="clock" tone="danger" />
        </div>
        <section className="admin-page-card">
          <div className="admin-page-tools">
            <div><h2>Водители и допуск</h2><p>Проверка личности, автомобиля и документов</p></div>
            <button type="button">+ Пригласить</button>
          </div>
          <AdminDataTable headings={["Водитель", "Автомобиль", "Линия", "Рейтинг", "Документы"]} rows={adminDrivers} />
        </section>
      </>
    );
  }

  if (section === "incidents") {
    return (
      <>
        <div className="admin-section-metrics">
          <AdminMetric label="Открытые" value="3" hint="1 высокий приоритет" icon="shield" tone="danger" />
          <AdminMetric label="Среднее решение" value="8 мин" hint="За последние 24 часа" icon="clock" />
          <AdminMetric label="На 1 000 поездок" value="1,8" hint="Подтверждённые случаи" icon="document" />
        </div>
        <section className="admin-page-card">
          <div className="admin-page-tools">
            <div><h2>Инциденты</h2><p>Все действия сотрудников сохраняются в аудит</p></div>
            <button className="danger-tool" type="button"><Icon name="shield" size={16} />Новый инцидент</button>
          </div>
          <AdminDataTable headings={["Номер", "Тема", "Заказ", "Приоритет", "Время"]} rows={adminIncidents} />
        </section>
      </>
    );
  }

  if (section === "payments") {
    return (
      <>
        <div className="reconciliation-banner">
          <span><Icon name="shield" size={21} /></span>
          <div><strong>Сверка за 14 октября</strong><small>247 из 248 операций совпадают с тестовым провайдером</small></div>
          <b>1 расхождение</b>
        </div>
        <div className="admin-section-metrics">
          <AdminMetric label="Оборот сегодня" value="482 640 ₸" hint="248 операций" icon="coins" />
          <AdminMetric label="Возвраты" value="12 400 ₸" hint="6 операций" icon="card" tone="gold" />
          <AdminMetric label="На проверке" value="1" hint="Дубликат webhook" icon="shield" tone="danger" />
        </div>
        <section className="admin-page-card">
          <div className="admin-page-tools">
            <div><h2>Платёжные операции</h2><p>Статус перевозки и платежа учитываются независимо</p></div>
            <button type="button"><Icon name="document" size={16} />Отчёт сверки</button>
          </div>
          <AdminDataTable headings={["Операция", "Заказ", "Сумма", "Статус", "Источник"]} rows={adminPayments} />
        </section>
      </>
    );
  }

  return (
    <>
      <div className="admin-section-metrics">
        <AdminMetric label="Заказов сегодня" value="248" hint="+14% к прошлому вторнику" icon="route" />
        <AdminMetric label="Назначено" value="91,4%" hint="Цель пилота ≥85%" icon="car" />
        <AdminMetric label="Средняя подача" value="7,8 мин" hint="p90: 11,2 мин" icon="clock" tone="gold" />
      </div>
      <section className="admin-page-card reports-page">
        <div className="admin-page-tools">
          <div><h2>Операционный отчёт</h2><p>Воронка поездки за последние 7 дней</p></div>
          <button type="button">Скачать CSV</button>
        </div>
        <div className="funnel-chart">
          {[
            ["Запуск", 100],
            ["Цена", 82],
            ["Подтверждение", 68],
            ["Назначение", 62],
            ["Завершение", 55],
            ["Оплата", 54],
          ].map(([label, value]) => (
            <div key={label as string}>
              <span>{label}</span><i><b className={`bar-${value}`} /></i><strong>{value}%</strong>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function AdminDataTable({
  headings,
  rows,
}: {
  headings: string[];
  rows: string[][];
}) {
  return (
    <div className="admin-data-table">
      <div className="admin-data-head">
        {headings.map((heading) => <span key={heading}>{heading}</span>)}
      </div>
      {rows.map((row) => (
        <button key={row[0]} type="button">
          {row.map((cell, index) => <span key={`${row[0]}-${cell}`} className={index === 0 ? "primary" : ""}>{cell}</span>)}
        </button>
      ))}
    </div>
  );
}

function AdminApp({ onMenu }: { onMenu: () => void }) {
  const [selectedTrip, setSelectedTrip] = useState<(typeof liveTrips)[number] | null>(liveTrips[0]);
  const [section, setSection] = useState("overview");
  const titles: Record<string, [string, string]> = {
    overview: ["Операционный обзор", "Алматы · 18:47"],
    trips: ["Поездки", "Операции в реальном времени"],
    drivers: ["Водители", "Допуск и состояние линии"],
    incidents: ["Инциденты", "Безопасность и поддержка"],
    payments: ["Платежи", "Операции и сверка"],
    reports: ["Отчёты", "Метрики пилотной зоны"],
  };
  const [title, subtitle] = titles[section];
  return (
    <div className="admin-app">
      <AdminSidebar active={section} onChange={(next) => {
        setSection(next);
        setSelectedTrip(next === "overview" ? liveTrips[0] : null);
      }} onMenu={onMenu} />
      <main className="admin-main">
        <header className="admin-topbar">
          <div>
            <p className="eyebrow">{subtitle}</p>
            <h1>{title}</h1>
          </div>
          <div className="admin-actions">
            <span className="system-state"><i />Все системы работают</span>
            <button className="admin-search" type="button"><Icon name="search" size={18} /> Найти заказ</button>
            <button className="mobile-admin-menu" onClick={onMenu} type="button"><Icon name="menu" size={20} /></button>
          </div>
        </header>
        <nav className="admin-mobile-nav" aria-label="Разделы панели управления">
          {[
            ["overview", "Обзор"],
            ["trips", "Поездки"],
            ["drivers", "Водители"],
            ["incidents", "Инциденты"],
            ["payments", "Платежи"],
            ["reports", "Отчёты"],
          ].map(([key, label]) => (
            <button
              className={section === key ? "active" : ""}
              key={key}
              onClick={() => {
                setSection(key);
                setSelectedTrip(key === "overview" ? liveTrips[0] : null);
              }}
              type="button"
            >
              {label}
            </button>
          ))}
        </nav>
        <section className="admin-content">
          {section === "overview" ? (
            <>
            <div className="metrics-grid">
            <AdminMetric label="Активные поездки" value="48" hint="+12 за последний час" icon="route" />
            <AdminMetric label="Водители на линии" value="126" hint="74 свободны" icon="car" tone="gold" />
            <AdminMetric label="Назначение p90" value="42 сек" hint="Цель: до 60 сек" icon="clock" />
            <AdminMetric label="Открытые инциденты" value="3" hint="1 высокий приоритет" icon="shield" tone="danger" />
          </div>
            <div className="admin-columns">
            <section className="live-panel">
              <div className="panel-heading">
                <div><h2>Текущие поездки</h2><p>Обновлено несколько секунд назад</p></div>
                <button type="button">Все поездки <Icon name="chevron" size={15} /></button>
              </div>
              <div className="trips-table">
                <div className="table-head">
                  <span>Заказ и маршрут</span><span>Водитель</span><span>Статус</span><span>Сумма</span>
                </div>
                {liveTrips.map((trip) => (
                  <button
                    className={`trip-row ${selectedTrip?.id === trip.id ? "selected" : ""}`}
                    key={trip.id}
                    onClick={() => setSelectedTrip(trip)}
                    type="button"
                  >
                    <span><strong>{trip.id}</strong><small>{trip.route}</small></span>
                    <span><strong>{trip.driver}</strong><small>{trip.car}</small></span>
                    <span><b className={`status-pill ${trip.tone}`}>{trip.status}</b><small>{trip.time}</small></span>
                    <span><strong>{trip.amount}</strong><Icon name="chevron" size={15} /></span>
                  </button>
                ))}
              </div>
            </section>
            <section className="operations-panel">
              <div className="panel-heading"><div><h2>Требует внимания</h2><p>Приоритет оператора</p></div></div>
              <button className="attention-row critical" type="button">
                <span><Icon name="shield" size={18} /></span>
                <div><strong>Инцидент #INC-031</strong><small>Нет связи с пассажиром · 4 мин</small></div>
                <b>Высокий</b>
              </button>
              <button className="attention-row" type="button">
                <span><Icon name="card" size={18} /></span>
                <div><strong>Платёж на проверке</strong><small>JOL-2828 · событие дублировано</small></div>
              </button>
              <button className="attention-row" type="button">
                <span><Icon name="document" size={18} /></span>
                <div><strong>Документы водителей</strong><small>8 истекают в течение 7 дней</small></div>
              </button>
            </section>
            </div>
            </>
          ) : (
            <AdminSectionPage section={section} />
          )}
        </section>
      </main>
      {section === "overview" && selectedTrip && <TripDetail trip={selectedTrip} onClose={() => setSelectedTrip(null)} />}
    </div>
  );
}

function ProductSwitcher({
  current,
  locationAvailable,
  offline,
  onClose,
  onOffline,
  onLocation,
  onReset,
  onSelect,
}: {
  current: "passenger" | "driver" | "admin";
  locationAvailable: boolean;
  offline: boolean;
  onClose: () => void;
  onOffline: () => void;
  onLocation: () => void;
  onReset: () => void;
  onSelect: (mode: "passenger" | "driver" | "admin") => void;
}) {
  return (
    <div className="switcher-backdrop" onClick={onClose} role="presentation">
      <section className="product-switcher" onClick={(event) => event.stopPropagation()}>
        <div className="switcher-head">
          <div><p className="eyebrow">JOL ecosystem</p><h2>Выберите приложение</h2></div>
          <button className="circle-button plain" onClick={onClose} type="button" aria-label="Закрыть">
            <Icon name="close" size={19} />
          </button>
        </div>
        <button
          className={`product-option ${current === "passenger" ? "selected" : ""}`}
          onClick={() => onSelect("passenger")}
          type="button"
        >
          <span><Icon name="user" size={22} /></span>
          <div><strong>JOL для пассажиров</strong><small>Заказать поездку</small></div>
          <Icon name="chevron" size={18} />
        </button>
        <button
          className={`product-option ${current === "admin" ? "selected" : ""}`}
          onClick={() => onSelect("admin")}
          type="button"
        >
          <span><Icon name="document" size={22} /></span>
          <div><strong>JOL Управление</strong><small>Панель оператора Алматы</small></div>
          <Icon name="chevron" size={18} />
        </button>
        <button
          className={`product-option ${current === "driver" ? "selected" : ""}`}
          onClick={() => onSelect("driver")}
          type="button"
        >
          <span><Icon name="car" size={22} /></span>
          <div><strong>JOL Driver</strong><small>Тестовый контур водителя</small></div>
          <Icon name="chevron" size={18} />
        </button>
        <button className={`network-demo-toggle ${offline ? "offline" : ""}`} onClick={onOffline} type="button">
          <span><Icon name={offline ? "close" : "shield"} size={18} /></span>
          <div>
            <strong>{offline ? "Тест: сеть недоступна" : "Тест сетевого режима"}</strong>
            <small>{offline ? "Критические действия заблокированы" : "Проверить состояния без сети"}</small>
          </div>
          <i className={`theme-switch ${offline ? "active" : ""}`}><b /></i>
        </button>
        <button className={`network-demo-toggle ${!locationAvailable ? "offline" : ""}`} onClick={onLocation} type="button">
          <span><Icon name="location" size={18} /></span>
          <div>
            <strong>{locationAvailable ? "Тест геолокации" : "Тест: геолокация недоступна"}</strong>
            <small>{locationAvailable ? "Проверить ручной выбор посадки" : "Заказ остаётся доступен"}</small>
          </div>
          <i className={`theme-switch ${!locationAvailable ? "active" : ""}`}><b /></i>
        </button>
        <button className="reset-demo-button" onClick={onReset} type="button">
          Сбросить демо и вернуться к экрану входа
        </button>
        <p className="switcher-note">Приложения разделены логически; переключатель доступен только для демонстрации.</p>
      </section>
    </div>
  );
}

type Language = "ru" | "kk";

type StoredSession = {
  authenticated: boolean;
  largeText: boolean;
  language: Language;
  theme: "light" | "dark";
  driverStage: DriverStage;
  paymentStatus: PaymentStatus;
};

const sessionKey = "jol-demo-session-v1";
const driverStages: DriverStage[] = ["offline", "online", "offer", "pickup", "waiting", "trip", "complete", "no-car"];
const paymentStatuses: PaymentStatus[] = ["idle", "pending", "failed", "paid"];

function readStoredSession(): StoredSession {
  const fallback: StoredSession = {
    authenticated: false,
    largeText: false,
    language: "ru",
    theme: "light",
    driverStage: "offline",
    paymentStatus: "idle",
  };
  if (typeof window === "undefined") return fallback;
  try {
    const value = JSON.parse(window.localStorage.getItem(sessionKey) ?? "{}") as Partial<StoredSession>;
    return {
      authenticated: value.authenticated === true,
      largeText: value.largeText === true,
      language: value.language === "kk" ? "kk" : "ru",
      theme: value.theme === "dark" ? "dark" : "light",
      driverStage: driverStages.includes(value.driverStage as DriverStage)
        ? (value.driverStage as DriverStage)
        : "offline",
      paymentStatus: paymentStatuses.includes(value.paymentStatus as PaymentStatus)
        ? (value.paymentStatus as PaymentStatus)
        : "idle",
    };
  } catch {
    return fallback;
  }
}

function AuthFlow({
  language,
  onLanguage,
  onComplete,
}: {
  language: Language;
  onLanguage: (language: Language) => void;
  onComplete: () => void;
}) {
  const [step, setStep] = useState<"welcome" | "phone" | "code">("welcome");
  const [code, setCode] = useState("");
  const [marketing, setMarketing] = useState(false);
  const copy = {
    ru: {
      eyebrow: "Добро пожаловать",
      title: "Поездки по городу — спокойно и понятно",
      description: "Цена известна заранее, водитель проверен, а поддержка доступна в каждой поездке.",
      choose: "Выберите язык",
      continue: "Продолжить",
      phoneEyebrow: "Вход в JOL",
      phoneTitle: "Ваш номер телефона",
      phoneText: "Отправим одноразовый код. В демо SMS не отправляется.",
      terms: "Я принимаю условия сервиса и обработку необходимых данных",
      marketing: "Получать новости и специальные предложения",
      getCode: "Получить тестовый код",
      codeEyebrow: "Проверка номера",
      codeTitle: "Введите код",
      codeText: "Тестовый код для входа: 4826",
      resend: "Получить новый код через 00:28",
      wrong: "Для демо используйте код 4826",
    },
    kk: {
      eyebrow: "Қош келдіңіз",
      title: "Қаладағы сапар — тыныш әрі түсінікті",
      description: "Баға алдын ала белгілі, жүргізуші тексерілген, қолдау әр сапарда қолжетімді.",
      choose: "Тілді таңдаңыз",
      continue: "Жалғастыру",
      phoneEyebrow: "JOL жүйесіне кіру",
      phoneTitle: "Телефон нөміріңіз",
      phoneText: "Бір реттік код жібереміз. Демода SMS жіберілмейді.",
      terms: "Сервис шарттары мен қажетті деректерді өңдеуге келісемін",
      marketing: "Жаңалықтар мен арнайы ұсыныстарды алу",
      getCode: "Тест кодын алу",
      codeEyebrow: "Нөмірді тексеру",
      codeTitle: "Кодты енгізіңіз",
      codeText: "Кіруге арналған тест коды: 4826",
      resend: "Жаңа кодты 00:28 кейін алу",
      wrong: "Демо үшін 4826 кодын пайдаланыңыз",
    },
  }[language];

  function addDigit(digit: string) {
    if (code.length >= 4) return;
    setCode(`${code}${digit}`);
  }

  if (step === "welcome") {
    return (
      <section className="auth-screen welcome-screen">
        <div className="auth-ornament">
          <svg viewBox="0 0 360 250" aria-hidden="true">
            <path d="M-30 238c74-94 150-73 195-137S248 9 390-12" />
            <path d="M-8 270c82-97 154-72 204-136S286 45 402 24" />
          </svg>
          <span className="ornament-car"><Icon name="car" size={27} /></span>
        </div>
        <div className="auth-brand"><Brand /><span>Қазақстан</span></div>
        <div className="welcome-copy">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p>{copy.description}</p>
        </div>
        <div className="language-picker">
          <p>{copy.choose}</p>
          <div>
            <button className={language === "kk" ? "active" : ""} onClick={() => onLanguage("kk")} type="button">
              <span>Қ</span><strong>Қазақша</strong><small>Қазақ тілі</small>
            </button>
            <button className={language === "ru" ? "active" : ""} onClick={() => onLanguage("ru")} type="button">
              <span>Р</span><strong>Русский</strong><small>Русский язык</small>
            </button>
          </div>
        </div>
        <ActionButton onClick={() => setStep("phone")}>{copy.continue}</ActionButton>
      </section>
    );
  }

  if (step === "phone") {
    return (
      <section className="auth-screen auth-form-screen">
        <button className="circle-button plain" onClick={() => setStep("welcome")} type="button" aria-label="Назад">
          <Icon name="arrow" size={21} />
        </button>
        <div className="auth-form-copy">
          <p className="eyebrow">{copy.phoneEyebrow}</p>
          <h1>{copy.phoneTitle}</h1>
          <p>{copy.phoneText}</p>
        </div>
        <button className="phone-field" type="button">
          <span>+7</span>
          <strong>701 555 42 18</strong>
        </button>
        <div className="consent-list">
          <button type="button" className="checked">
            <span><Icon name="shield" size={15} /></span><p>{copy.terms}</p>
          </button>
          <button type="button" className={marketing ? "checked" : ""} onClick={() => setMarketing(!marketing)}>
            <span>{marketing && <Icon name="shield" size={15} />}</span><p>{copy.marketing}</p>
          </button>
        </div>
        <div className="auth-bottom-action">
          <ActionButton onClick={() => setStep("code")}>{copy.getCode}</ActionButton>
        </div>
      </section>
    );
  }

  const invalid = code.length === 4 && code !== "4826";
  return (
    <section className="auth-screen auth-form-screen code-screen">
      <button className="circle-button plain" onClick={() => {
        setCode("");
        setStep("phone");
      }} type="button" aria-label="Назад">
        <Icon name="arrow" size={21} />
      </button>
      <div className="auth-form-copy">
        <p className="eyebrow">{copy.codeEyebrow}</p>
        <h1>{copy.codeTitle}</h1>
        <p>{copy.codeText}</p>
      </div>
      <div className={`otp-boxes ${invalid ? "invalid" : ""}`}>
        {[0, 1, 2, 3].map((index) => <span key={index}>{code[index] ?? ""}</span>)}
      </div>
      <p className={`otp-helper ${invalid ? "error" : ""}`}>{invalid ? copy.wrong : copy.resend}</p>
      <div className="number-pad">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0"].map((digit, index) =>
          digit ? (
            <button key={`${digit}-${index}`} onClick={() => addDigit(digit)} type="button">{digit}</button>
          ) : <span key="empty" />
        )}
        <button onClick={() => setCode(code.slice(0, -1))} type="button" aria-label="Удалить">
          <Icon name="arrow" size={20} />
        </button>
      </div>
      <div className="auth-bottom-action">
        <ActionButton onClick={() => {
          if (code === "4826") onComplete();
        }}>{copy.continue}</ActionButton>
      </div>
    </section>
  );
}

function RecoveryNotice({ onClose }: { onClose: () => void }) {
  return (
    <div className="recovery-notice" role="status">
      <span><Icon name="route" size={18} /></span>
      <div><strong>Активная поездка восстановлена</strong><small>Статусы загружены из сохранённой сессии</small></div>
      <button onClick={onClose} type="button" aria-label="Закрыть"><Icon name="close" size={16} /></button>
    </div>
  );
}

function NetworkNotice({
  offline,
  onRetry,
}: {
  offline: boolean;
  onRetry: () => void;
}) {
  if (!offline) return null;
  return (
    <div className="network-notice" role="alert">
      <span><Icon name="close" size={17} /></span>
      <div><strong>Нет подключения к сети</strong><small>Заказ, поездка и оплата не изменятся до восстановления связи</small></div>
      <button onClick={onRetry} type="button">Повторить</button>
    </div>
  );
}

export default function App() {
  const [initialSession] = useState(readStoredSession);
  const [authenticated, setAuthenticated] = useState(initialSession.authenticated);
  const [language, setLanguage] = useState<Language>(initialSession.language);
  const [largeText, setLargeText] = useState(initialSession.largeText);
  const [theme, setTheme] = useState<"light" | "dark">(initialSession.theme);
  const [mode, setMode] = useState<"passenger" | "driver" | "admin">("passenger");
  const [switcher, setSwitcher] = useState(false);
  const [browserOnline, setBrowserOnline] = useState(
    typeof navigator === "undefined" ? true : navigator.onLine,
  );
  const [demoOffline, setDemoOffline] = useState(false);
  const [locationAvailable, setLocationAvailable] = useState(true);
  const [driverStage, setDriverStage] = useState<DriverStage>(initialSession.driverStage);
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>(initialSession.paymentStatus);
  const [recoveryNotice, setRecoveryNotice] = useState(
    ["offer", "pickup", "waiting", "trip", "complete"].includes(initialSession.driverStage),
  );
  const [tab, setTab] = useState("ride");
  const [screen, setScreen] = useState<"home" | "search" | "confirm">("home");
  const [notice, setNotice] = useState(false);
  const passengerTripActive = ["offer", "pickup", "waiting", "trip", "complete", "no-car"].includes(driverStage);
  const contextual = screen !== "home" || passengerTripActive;
  const offline = !browserOnline || demoOffline;

  useEffect(() => {
    const session: StoredSession = {
      authenticated,
      largeText,
      language,
      theme,
      driverStage,
      paymentStatus,
    };
    window.localStorage.setItem(sessionKey, JSON.stringify(session));
  }, [authenticated, largeText, language, theme, driverStage, paymentStatus]);

  useEffect(() => {
    const handleOnline = () => setBrowserOnline(true);
    const handleOffline = () => setBrowserOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <main className="app-shell">
      <div className={`app-frame ${theme === "dark" ? "theme-dark" : ""} ${largeText ? "large-text" : ""} ${mode === "admin" && authenticated ? "admin-frame" : ""}`}>
        {!authenticated ? (
          <AuthFlow language={language} onLanguage={setLanguage} onComplete={() => setAuthenticated(true)} />
        ) : (
        <>
        {mode === "admin" ? (
          <AdminApp onMenu={() => setSwitcher(true)} />
        ) : mode === "driver" ? (
          <DriverApp
            language={language}
            onMenu={() => setSwitcher(true)}
            stage={driverStage}
            setStage={(nextStage) => {
              if (offline && !["online", "offline", "no-car"].includes(nextStage)) return;
              setDriverStage(nextStage);
              if (nextStage === "complete") setPaymentStatus("pending");
            }}
            paymentStatus={paymentStatus}
          />
        ) : tab === "ride" ? (
          <>
            <MapCanvas
              routeVisible={screen === "confirm" || passengerTripActive}
              showUserLocation={locationAvailable || passengerTripActive}
            />
            {screen !== "search" && (
              <header className="top-bar">
                <button
                  className="menu-button"
                  onClick={() => setSwitcher(true)}
                  type="button"
                  aria-label="Меню"
                >
                  <Icon name="menu" size={20} />
                </button>
                <Brand />
                <button className="city-button" type="button">
                  Алматы <Icon name="chevron" size={15} />
                </button>
              </header>
            )}
            {screen === "home" && !passengerTripActive && (
              <>
                <button
                  className={`location-button ${!locationAvailable ? "unavailable" : ""}`}
                  onClick={() => {
                    if (!locationAvailable) setScreen("search");
                  }}
                  type="button"
                  aria-label={locationAvailable ? "Моё местоположение" : "Выбрать точку вручную"}
                >
                  <Icon name="location" size={22} />
                </button>
                <HomePanel
                  language={language}
                  locationAvailable={locationAvailable}
                  onSearch={() => setScreen("search")}
                />
              </>
            )}
            {screen === "search" && !passengerTripActive && (
              <SearchPanel language={language} onClose={() => setScreen("home")} onSelect={() => setScreen("confirm")} />
            )}
            {screen === "confirm" && !passengerTripActive && (
              <ConfirmPanel language={language} onBack={() => setScreen("home")} onOrder={() => setNotice(true)} />
            )}
            {passengerTripActive && (
              <PassengerTripPanel
                language={language}
                stage={driverStage as "offer" | "pickup" | "waiting" | "trip" | "complete" | "no-car"}
                onFinish={() => {
                  setDriverStage("online");
                  setScreen("home");
                }}
                onRetry={() => {
                  if (!offline) setDriverStage("offer");
                }}
                paymentStatus={paymentStatus}
                onPayment={() => {
                  if (!offline) setPaymentStatus(paymentStatus === "failed" ? "paid" : "failed");
                }}
              />
            )}
          </>
        ) : (
          <PassengerSection
            language={language}
            largeText={largeText}
            onLanguage={setLanguage}
            onLargeText={() => setLargeText(!largeText)}
            tab={tab}
            theme={theme}
            onTheme={() => setTheme(theme === "light" ? "dark" : "light")}
          />
        )}
        {mode === "passenger" && !contextual && (
          <BottomNav active={tab} language={language} onChange={setTab} />
        )}
        {mode === "passenger" && notice && (
          <DemoNotice
            language={language}
            onClose={() => setNotice(false)}
            onStart={() => {
              if (offline) {
                setNotice(false);
                return;
              }
              setDriverStage("offer");
              setPaymentStatus("idle");
              setNotice(false);
              setScreen("home");
            }}
          />
        )}
        {switcher && (
          <ProductSwitcher
            current={mode}
            locationAvailable={locationAvailable}
            offline={offline}
            onClose={() => setSwitcher(false)}
            onOffline={() => setDemoOffline(!demoOffline)}
            onLocation={() => setLocationAvailable(!locationAvailable)}
            onReset={() => {
              window.localStorage.removeItem(sessionKey);
              setAuthenticated(false);
              setMode("passenger");
              setDriverStage("offline");
              setPaymentStatus("idle");
              setTheme("light");
              setLargeText(false);
              setLocationAvailable(true);
              setSwitcher(false);
            }}
            onSelect={(nextMode) => {
              setMode(nextMode);
              setSwitcher(false);
            }}
          />
        )}
        {recoveryNotice && <RecoveryNotice onClose={() => setRecoveryNotice(false)} />}
        <NetworkNotice offline={offline} onRetry={() => {
          setDemoOffline(false);
          setBrowserOnline(navigator.onLine);
        }} />
        </>
        )}
      </div>
    </main>
  );
}
