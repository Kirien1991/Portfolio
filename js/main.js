class Menu {
  constructor() {
    this.menu_active = document.querySelector(".mobile__hamburger");
    this.menu_active_list = document.querySelector(".nav");

    this.init();
  }

  init() {
    this.menu_active.addEventListener("click", (e) => {
      e.stopPropagation();

      this.toggleClass();
    });
  }

  toggleClass() {
    this.menu_active.classList.toggle("mobile__hamburger--active");
    this.menu_active_list.classList.toggle("open");
  }

  addMenuitem(name) {
    const item = this.menu_active_list.children[1].cloneNode(true);

    item.innerText = name;

    this.menu_active_list.appendChild(item);
  }
}

const menu = new Menu();
