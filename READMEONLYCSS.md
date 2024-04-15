## nav links jumping

set the default li border:1px solid nav color - then it will not "add" a line on hover.

## setting active class (Nav comp) to the nav link (if the navbar is fixed on the top to see which page are we on.)

I use "window Object" to define where we are. It is an object with many properties. I use "location" to get the correct URL.
Use JS method to extract the last part of the URL.

```jsx
const url = new URL(window.location.href);
  const path = url.pathname; // Gets the pathname, e.g., "/about"
  const lastPart = path.substring(path.lastIndexOf('/')); // Extracts the last part after the last "/"
  console.log(lastPart, 'lastPart');

  <li className='p__opensans '>
          <a
            href='/'
            className={
              lastPart === '/' || lastPart === '/home' ? 'nav-links-active' : ''
            }
          >
            {t('nav.home')}
          </a>
```

## shadow on the side(MatesWord comp)
```css
.matesword*longcontent {
margin-top: 15px;
position: relative; /* Ensure relative positioning for pseudo-elements \_/
}
.matesword_longcontent-scroll {
max-height: 150px;
overflow: hidden;
overflow-y: scroll;
padding: 20px;
}

.matesword*longcontent::before,
.matesword_longcontent::after {
content: '';
position: absolute;
top: 0;
bottom: 0;
width: 10px; /* Adjust the width of the shadow _/
box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /_ Add shadow \_/
}

.matesword_longcontent::before {
left: 0;
}

.matesword_longcontent::after {
right: 0;
}
``````

```jsx
<div className='matesword_longcontent'>
  <div className='matesword_longcontent-scroll'>
    <p className='p__opensans-grey'>
      From my early years, the stage has been my dream, and through hard work
      and dedication, I've brought to life various characters such as der Tod,
      Tony, Jean Valjean, Nick, and many more. My journey has taken me from
      Hungary to Vienna and then to Japan. When I began my career, I never
      imagined singing in German, English, and even Japanese. Besides Hungary,
      Vienna, and Tokyo have become my second homes. Grateful for the
      opportunities my career has provided, I've learned that life is a mix of
      ups and downs, luck, and disasters. Every moment is special, and I strive
      to cherish each one. Each role I've undertaken is a testament to the
      dedication and passion I bring to my craft. Achieving success demands
      perseverance and an unwavering commitment to never give up on your dreams.
      That is what I believe.
    </p>
  </div>
</div>
```
