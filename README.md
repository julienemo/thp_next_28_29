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

---

**Discoveries**

1. Chinese quotes don't need to be escaped in json, but numbers do have to be quoted.

2. Closing a tab or a page won't trigger `unmount` hook. Things are interrupted so no way of doing anything. To save the "last" language preference, I actually had to save it every time it changes.

3. So...if there is no `exact` in `Route` of `/`, you might have the content of `/` before the content of any page.

4. Oh my god why are there footers in the world ?

- it seems that a negative margin-bottom and a hight keeps them where they belong
- `position:absolute;` plus `width:100%;` will go all along to the right extreme ignoring whatever margin and padding on the right you might have

5. If there are things I only do in useEffect, I shall avoid defining it outside of the effect, so that not to trigger warning.

---

**Difficulties**

1. in current setup, when changing language, url ooesn't change, messsage

2. Didn't manage the url separation for languages.

- quite easy to have a separated Url that updates but page wouldn't fill
- language changes, URL stays the same
- can force page recharge by assigning a `key={currentLanguage}` to fill content
- can force URL to change by replacing language basename in `window.location.href` BUT English is tricky coz it doesn't have a language basename.
- Wouldn't need to force recharge if used dynamic routing with `:pageSlug` but home page doesn't have a slug (moreoever when it's in other languages the slug isn't what we really want)
- Would have put home as a separated component but the case pages are a mess in dynamic routing
- .........

3. Wanted to use one single page component for home/about/work and the case studies. Blocked at the dynamic routing part: can I provide slug with a single format ?

4. Didn't manage to push on GH page because

- routing uses `/`, meaning it can't work where the url contains another slash
- gh pages normally already contains a slash (`/repo_name`)
- tried to push to the repo that normally gets shown as default, deploy throws no error but page shows `README` instead of the page
- deploy also changes local port.....

---

**Bug report**

[here](https://github.com/julienemo/thp_next_28_29/issues)
