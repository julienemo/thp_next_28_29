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
3. All languages share a common url

---

**Discoveries**

1. Let's see how to escape simplified chinese chars, hum.
2. Flag icons come from [here](https://www.iconfinder.com/iconsets/flags-37)
3. Closing a tab or a page won't trigger `unmount` hook. Things are interrupted so no way of doing anything. To save the "last" language preference, I actually had to save it everytime it changes.

---

**Difficulties**

1. in current setup, when changing language, url ooesn't change, messsage

2. Didn't manage the url separation for languages. Coz when language changes, URL stays the same (can force replace in some cases) but page is empty

3. So...if there is no `exact` in `Route` of `/`, you might have the content of `/` before the content of any page.

---

**Bug reporst**

[here](https://github.com/julienemo/thp_next_28_29/issues)
