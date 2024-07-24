class TopMenuPopover extends HTMLElement {
  constructor() {
    super();
    // this.attachShadow({ mode: 'open' }); // Attach shadow root
    this.popovers = [];
    this.catalog = {
      grouped: [
        {
          title: "Все курсы",
          type: "inverted",
          link: "https://slurm.io/catalog",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Инженер",
          link: "https://slurm.io/catalog?direction_ids=30",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Разработчик",
          link: "https://slurm.io/catalog?direction_ids=17",
          info: "Integer sit amet hendrerit nisl, ac auctor ante.",
        },
        {
          title: "Начинающий",
          link: "https://slurm.io/catalog?experience_level=1",
          info: "Praesent id odio finibus, vehicula orci eget, elementum urna.",
        },
      ],
      courses: [
        {
          title: "Архитектура",
          link: "https://slurm.io/catalog?direction_ids=22",
          info: "Cras faucibus, augue sed dictum aliquet, felis dolor pretium mi, et maximus purus ante ut leo.<br />Mauris a tempor nisl.",
          type: "direction",
        },
        {
          title: "Факультет Kubernetes",
          link: "https://slurm.io/catalog?direction_ids=19",
          info: "Cras faucibus, augue sed dictum aliquet, felis dolor pretium mi, et maximus purus ante ut leo.<br />Mauris a tempor nisl.",
          type: "direction",
        },
        {
          title: "DevOps и SRE",
          link: "https://slurm.io/catalog?direction_ids=16",
          info: "Aenean a finibus ligula, ac interdum neque.<br />Fusce non viverra est, a aliquet lorem.",
          type: "direction",
        },
        {
          title: "CI/CD и IaC",
          link: "https://slurm.io/catalog?direction_ids=15",
          info: "Sed pretium malesuada justo, in interdum neque blandit vel.<br />Sed mauris mauris, dictum nec aliquet id, dapibus et sem.",
          type: "direction",
        },
        {
          title: "Docker",
          link: "https://slurm.io/catalog?direction_ids=29",
          info: "Phasellus at tincidunt elit, vitae consectetur nibh.<br />Fusce nulla justo, vulputate non nulla et, laoreet tristique arcu.",
          type: "direction",
        },
        {
          title: "Мониторинг",
          link: "https://slurm.io/catalog?direction_ids=18",
          info: "Cras tortor felis, aliquam sit amet maximus eget, blandit mattis diam.<br />Quisque eleifend a nulla non convallis.",
          type: "direction",
        },
        {
          title: "Облака",
          link: "https://slurm.io/catalog?direction_ids=28",
          info: "Curabitur porttitor dui justo, at convallis orci egestas et.<br />Morbi sit amet mattis ex.",
          type: "direction",
        },
        {
          title: "Работа с данными",
          link: "https://slurm.io/catalog?direction_ids=21",
          info: "Suspendisse potenti.<br />Fusce euismod tellus mi, vitae laoreet ante dignissim mollis.",
          type: "direction",
        },
        {
          title: "Безопасность",
          link: "https://slurm.io/catalog?direction_ids=20",
          info: "Duis vulputate orci in est condimentum lacinia.<br />Quisque eget velit id massa iaculis consequat a non leo.",
          type: "direction",
        },
        {
          title: "Программирование",
          link: "https://slurm.io/catalog?direction_ids=27",
          info: "In hac habitasse platea dictumst.<br />Phasellus ac erat tempor, tincidunt nibh bibendum, ultrices nisi.",
          type: "direction",
        },
        {
          title: "Soft skills",
          link: "https://slurm.io/catalog?direction_ids=26",
          info: "Praesent in massa laoreet, dapibus erat at, posuere erat.<br />Maecenas dapibus augue nec elit cursus scelerisque.",
          type: "direction",
        },
        {
          title: "Бесплатные курсы",
          type: "free",
          link: "https://slurm.io/catalog?price_category=free",
          info: "Etiam et tellus a massa condimentum placerat.<br />Sed efficitur maximus leo, ut laoreet dolor congue nec.",
        },
      ],
      info: [
        {
          title: "Календарь запуска курсов",
          link: "https://slurm.io/calendar",
        },
      ],
    };
    this.buy = {
      resources: [
        {
          title: "Для людей",
          links: [
            {
              title: "Комплекты Kubernetes",
              link: "https://slurm.io/videocourse-kit",
            },
            {
              title: "Бесплатные курсы",
              link: "https://slurm.io/catalog?price_category=free",
            },
          ],
        },
        {
          title: "Для компаний",
          links: [
            {
              title: "Универсальные доступы",
              link: "https://slurm.io/universal-tickets",
            },
            {
              title: "Специальные цены для команд",
              link: "https://slurm.io/metacarman#team",
            },
          ],
        },
      ],
      info: [
        {
          title: "Рассрочка",
          link: "https://slurm.io/metacarman#installment-plan",
        },
        {
          title: "Налоговый вычет",
          link: "https://slurm.io/metacarman#tax",
        },
        {
          title: "Как купить курс для сотрудника",
          link: "https://slurm.io/metacarman#company",
        },
      ],
    };
    this.companies = {
      resources: [
        {
          title: "Обучение",
          links: [
            {
              title: "Корпоративное обучение",
              link: "https://slurm.io/corporate",
            },
            {
              title: "Универсальные доступы",
              link: "https://slurm.io/universal-tickets",
            },
            {
              title: "Повышение квалификации",
              link: "https://slurm.io/devops-upgrade-b2b",
            },
          ],
        },
        {
          title: "Маркетинг",
          links: [
            {
              title: "Спецпроекты",
              link: "https://slurm.io/special-projects",
            },
            {
              title: "Обучение продукту",
              link: "https://slurm.io/your-product-course",
            },
          ],
        },
      ],
      info: [
        {
          title: "Как купить курс для сотрудника",
          link: "https://slurm.io/metacarman#company",
        },
        {
          title: "Документы",
          link: "https://slurm.io/faq-for-oformitel",
        },
      ],
    };
    this.events = {
      resources: [
        {
          title: "Онлайн",
          links: [
            {
              title: "Слёрм Бар",
              link: "https://slurm.io/bar",
            },
            {
              title: "Вебинары",
              link: "https://slurm.io/webinars",
            },
          ],
        },
        {
          title: "Подкаст",
          links: [
            {
              title: "В поисках бирюзовых компаний",
              link: "https://slurm.mave.digital/",
            },
          ],
        },
      ],
      info: [
        {
          title: "Календарь",
          link: "https://slurm.io/events#future",
        },
        {
          title: "Архив",
          link: "https://slurm.io/events#past",
        },
      ],
    };
  }

  connectedCallback() {
    this.innerHTML = `
          <nav>
            <div class="navigation-panel">
              <a href="https://slurm.io/" style="padding: 1rem;">
                  <svg width="104" height="40" viewBox="0 0 104 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M40 2L64 0V38L40 40V2Z" fill="#5C76FF" data-v-32ab597f=""></path>
                      <path d="M46.1333 31.0001V12.3867H58.0266V15.6667H50.1333V19.9334H57.76V23.2134H50.1333V27.7201H58.0266V31.0001H46.1333ZM49.1466 10.7067C48.3466 10.7067 47.7866 10.5467 47.4666 10.2267C47.1644 9.88894 47.0133 9.48894 47.0133 9.02672V8.33339C47.0133 7.87117 47.1644 7.48005 47.4666 7.16005C47.7866 6.84005 48.3466 6.68005 49.1466 6.68005C49.9466 6.68005 50.5066 6.84005 50.8266 7.16005C51.1466 7.48005 51.3066 7.87117 51.3066 8.33339V9.02672C51.3066 9.48894 51.1466 9.88894 50.8266 10.2267C50.5066 10.5467 49.9466 10.7067 49.1466 10.7067ZM55.0133 10.7067C54.2133 10.7067 53.6533 10.5467 53.3333 10.2267C53.0133 9.88894 52.8533 9.48894 52.8533 9.02672V8.33339C52.8533 7.87117 53.0133 7.48005 53.3333 7.16005C53.6533 6.84005 54.2133 6.68005 55.0133 6.68005C55.8133 6.68005 56.3644 6.84005 56.6666 7.16005C56.9866 7.48005 57.1466 7.87117 57.1466 8.33339V9.02672C57.1466 9.48894 56.9866 9.88894 56.6666 10.2267C56.3644 10.5467 55.8133 10.7067 55.0133 10.7067Z" fill="white" data-v-32ab597f=""></path>
                      <path d="M8.42672 31.3201C5.93783 31.3201 4.08894 30.4846 2.88005 28.8134C1.68894 27.1246 1.09338 24.7512 1.09338 21.6934C1.09338 18.6357 1.68894 16.2712 2.88005 14.6001C4.08894 12.9112 5.93783 12.0668 8.42672 12.0668C9.38672 12.0668 10.2312 12.2001 10.9601 12.4668C11.7067 12.7157 12.3467 13.0712 12.8801 13.5334C13.4134 13.9957 13.8489 14.5557 14.1867 15.2134C14.5423 15.8712 14.8178 16.609 15.0134 17.4268L11.2801 18.3334C11.1734 17.889 11.0489 17.4801 10.9067 17.1068C10.7645 16.7334 10.5778 16.4134 10.3467 16.1468C10.1334 15.8801 9.85783 15.6757 9.52005 15.5334C9.20005 15.3734 8.80894 15.2934 8.34672 15.2934C7.26227 15.2934 6.48894 15.7201 6.02672 16.5734C5.58227 17.409 5.36005 18.5734 5.36005 20.0668V23.3201C5.36005 24.8134 5.58227 25.9868 6.02672 26.8401C6.48894 27.6757 7.26227 28.0934 8.34672 28.0934C9.27116 28.0934 9.93783 27.809 10.3467 27.2401C10.7734 26.6712 11.0845 25.9423 11.2801 25.0534L15.0134 25.9601C14.8178 26.7779 14.5423 27.5157 14.1867 28.1734C13.8489 28.8312 13.4134 29.4001 12.8801 29.8801C12.3467 30.3423 11.7067 30.6979 10.9601 30.9468C10.2312 31.1957 9.38672 31.3201 8.42672 31.3201Z" fill="#161518" data-v-32ab597f=""></path>
                      <path d="M29.8296 15.6668H26.8963V18.8668C26.8963 20.5023 26.8341 21.9246 26.7096 23.1334C26.5852 24.3246 26.4074 25.3468 26.1763 26.2001C25.9452 27.0534 25.6785 27.7557 25.3763 28.3068C25.0741 28.8579 24.7541 29.3023 24.4163 29.6401C23.8652 30.1912 23.2696 30.5823 22.6296 30.8134C22.0074 31.0446 21.2252 31.1601 20.283 31.1601H19.5096V27.7201H21.3496C21.6341 27.4179 21.883 27.0268 22.0963 26.5468C22.3274 26.049 22.523 25.4268 22.683 24.6801C22.843 23.9334 22.9674 23.0446 23.0563 22.0134C23.1452 20.9646 23.1896 19.729 23.1896 18.3068V12.3868H33.8563V31.0001H29.8296V15.6668Z" fill="#161518" data-v-32ab597f=""></path>
                      <path d="M70.0266 31.0001V12.3867H77.2266C78.1333 12.3867 78.9422 12.5289 79.6533 12.8134C80.3644 13.0801 80.9599 13.4712 81.4399 13.9867C81.9377 14.5023 82.3111 15.1245 82.5599 15.8534C82.8088 16.5823 82.9333 17.4001 82.9333 18.3067C82.9333 19.2134 82.8088 20.0312 82.5599 20.7601C82.3111 21.4889 81.9377 22.1112 81.4399 22.6267C80.9599 23.1423 80.3644 23.5423 79.6533 23.8267C78.9422 24.0934 78.1333 24.2267 77.2266 24.2267H74.0533V31.0001H70.0266ZM74.0533 21.0001H76.2133C77.1555 21.0001 77.8044 20.8223 78.1599 20.4667C78.5333 20.1112 78.7199 19.5245 78.7199 18.7067V17.9067C78.7199 17.0889 78.5333 16.5023 78.1599 16.1467C77.8044 15.7912 77.1555 15.6134 76.2133 15.6134H74.0533V21.0001Z" fill="#161518"></path>
                      <path d="M98.6829 22.7067L98.8962 17.5067H98.6562L95.1895 27.0801L91.7229 17.5067H91.4829L91.6962 22.7067V31.0001H88.2295V12.3867H92.9495L95.2429 18.6534H95.4562L97.7495 12.3867H102.15V31.0001H98.6829V22.7067Z" fill="#161518"></path>
                  </svg>
              </a>
              <div class="navigation-panel__nav">
                <button popovertarget="catalog" class="menu-button">Каталог курсов</button>
                <div id="catalog" class="menu popover__content" popover>
                  <div class="popover__main">
                    <ul class="links">
                      ${this.catalog.grouped.map((item) => `<li><a class="${item.type}" href="${item.link}">${item.title}</a></li>`).join("")}
                    </ul>
                    <ul class="links">
                      ${this.catalog.courses.map((item) => `<li><a class="${item.type}" href="${item.link}">${item.title}</a></li>`).join("")}
                    </ul>
                  </div>
                  <hr class="popover__hr"/>
                  <ul class="info">
                    ${this.catalog.info.map((item) => `<li><a href="${item.link}">${item.title}</a></li>`).join("")}
                  </ul>
                </div>
                <button popovertarget="buy" class="menu-button">Варианты покупки</button>
                <div id="buy" class="menu popover__content" popover>
                  <div class="popover__main">
                    ${this.buy.resources.map((item) => `<div class="popover__group"><h3 class="popover__group-title">${item.title}</h3><ul class="links">${item.links.map((item) => `<li><a href="${item.link}">${item.title}</a></li>`).join("")}</ul></div>`).join("")}
                  </div>
                  <hr class="popover__hr"/>
                  <ul class="info">
                    ${this.buy.info.map((item) => `<li><a href="${item.link}">${item.title}</a></li>`).join("")}
                  </ul>
                </div>
                <button popovertarget="companies" class="menu-button">Компаниям</button>
                <div id="companies" class="menu popover__content" popover>
                  <div class="popover__main">${this.companies.resources.map((item) => `<div class="popover__group"><h3 class="popover__group-title">${item.title}</h3><ul class="links">${item.links.map((item) => `<li><a href="${item.link}">${item.title}</a></li>`).join("")}</ul></div>`).join("")}
                  </div>
                  <hr class="popover__hr"/>
                  <ul class="info">
                    ${this.companies.info.map((item) => `<li><a href="${item.link}">${item.title}</a></li>`).join("")}
                  </ul>
                </div>
                <button popovertarget="events" class="menu-button">Мероприятия</button>
                <div id="events" class="menu popover__content" popover>
                  <div class="popover__main">${this.events.resources.map((item) => `<div class="popover__group"><h3 class="popover__group-title">${item.title}</h3><ul class="links">${item.links.map((item) => `<li><a href="${item.link}">${item.title}</a></li>`).join("")}</ul></div>`).join("")}
                  </div> 
                  <hr class="popover__hr"/>
                  <ul class="info">
                    ${this.events.info.map((item) => `<li><a href="${item.link}">${item.title}</a></li>`).join("")}
                  </ul>
                </div>
              </div>
            </div>
            <div class="controls">
              <a class="controls__enter-button" href="https://slurm.io/">Войти</a>
            </div>
          </nav>
          `;
    this.popovers = Array.from(this.querySelectorAll("[popover]"));
    this.popovers.forEach((popover) => {
      const targetID = popover.id;
      const button = this.querySelector(`[popovertarget="${targetID}"]`);
      button.addEventListener("click", () => {
        popover.classList.toggle("popover-open");
      });
    });
    // this.querySelector('#top-menu-popover').classList.add('popover-open');
  }
}

customElements.define("top-menu-popover", TopMenuPopover);
