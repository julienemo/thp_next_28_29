### Project: Webistic

20200513-14 Julie Kwok

---

**To see result**

1. clone repo
2. run `npm install`
3. run `npm start`

---

**Page behaviour**

1. Default language is FR. On top right, there are 2 btns for the other 2 available languages. Hover shows indication, click changes site language.
2. Last used language is save for next visit.
3. Every language has its own URL

---

**Discoveries**

1. Let's see how to escape simplified chinese chars, hum.
2. Flag icons come from [here](https://www.iconfinder.com/iconsets/flags-37)
3. Closing a tab or a page won't trigger `unmount` hook. Things are interrupted so no way of doing anything. To save the "last" language preference, I actually had to save it everytime it changes.

---

**Difficulties**

---

**Bug reporst**

[here](https://github.com/julienemo/thp_next_28_29/issues)
