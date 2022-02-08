class Theme {

    #themes = {
        DARK_THEME: 'theme--dark',
        LIGHT_THEME: 'theme--light'
    }
    #theme;
    
    constructor(refs) {
        this.refs = refs;
    }

    toggleTheme = () => {
      if (this.#theme === this.#themes.DARK_THEME) {
        this.#theme = this.#themes.LIGHT_THEME;
        this.refs.html.classList.add(this.#theme);
        this.refs.html.classList.remove('theme--dark');
        this.refs.themeBtnRef.innerHTML = 'Dark theme';
      } else {
        this.#theme = this.#themes.DARK_THEME;
        this.refs.html.classList.add(this.#theme);
        this.refs.html.classList.remove('theme--light');
        this.refs.themeBtnRef.innerHTML = 'Light theme';
      }
    }

    loadListeners() {
        this.refs.themeBtnRef.addEventListener('click', this.toggleTheme);
    }

    init = () => {
        this.loadListeners();
        this.#theme = this.#themes.DARK_THEME;
    }
}

let refObj = {
    themeBtnRef: document.querySelector('#button--theme'),
    html: document.querySelector('html')
}

let theme = new Theme(refObj);
theme.init();