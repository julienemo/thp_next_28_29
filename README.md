### Project: Webistic

20200513-14 Julie Kwok

---

**To see result**

1. clone repo
2. run `npm install`
3. run `npm start`

_There is no github page version for this page._

**Page behaviour**

1. Default language is FR. On top right, there are 2 btns for the other 2 available languages. Hover shows indication, click changes site language.
2. Last used language is saved for next visit.
3. All languages share a common url on the same page
4. Click on navbar links to see 3 main pages
5. Click on link of `works` page for separated cases

**Other disclosures**

1. all pages except for home is render with exactly the same component.
2. Can handle cases where translation doesn't fil the original in terms of number of sections or paragraphs. But CSS is always the same: a `h3` and a `p`
3. To add translations, pages and case, only need to 1) add jsons in `Translations`, add language flag in `images`, add language in `index.jsx`, add corresponding items in `Constants`. Everthing else is done by iteration.
4. It is SLOW

---

**Discoveries**

1. Chinese quotes don't need to be escaped in json, but numbers do have to be quoted.

2. Closing a tab or a page won't trigger `unmount` hook. Things are interrupted so no way of doing anything. To save the "last" language preference, I actually had to save it every time it changes.

3. So...if there is no `exact` in `Route` of `/`, you might have the content of `/` before the content of any page. Exact means exact: the path will be "root + what you write", elimination any possible existing url params.

4. Oh my god why are there footers in the world ?

- it seems that a negative margin-bottom and a hight keeps them where they belong
- `position:absolute;` plus `width:100%;` will go all along to the right extreme ignoring whatever margin and padding on the right you might have

5. If there are things I only do in useEffect, I shall avoid defining it outside of the effect, so that not to trigger warning.

6. Seems that `/` path doesn't get to use dynamic routing coz slug is `undefined`. It is possible to add optional slugs (after something that is sure to exist but before nothing else) by adding `:optionalSlug?`

---

**Difficulties**

1. Didn't manage the url separation for languages.

- quite easy to have a separated Url that updates but page wouldn't fill
- language changes, URL stays the same
- did try out dynamic routing and language basename for every page. Now when I change the lang with a btn, URL is still the same. If I change manually the url and even refresh, the content doesn't change
- `react-router-dom` has a `useHistory` option. But it does not give access to the lang basename.
- .........

---

**Bug report**

[here](https://github.com/julienemo/thp_next_28_29/issues)
