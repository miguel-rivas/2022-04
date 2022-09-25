<template lang="pug">
nn-scroll-area(nn-no-horizontal="false", nn-color="royal-purple")
  section#intro
    span.line.line_01
    span.line.line_02
    span.line.line_03

    .mainTitle
      h1 How<br>to<em>HTML</em>
      span.heart_01
      span.heart_02
      span.heart_03

  section#newFriends
    span.letter_01 K
    span.letter_02 K

    .mainTitle
      h2 KNOW<br>YOUR<br>FRIENDS
      p These are some HTML5 tags that you should be aware

    .txtInfo
      h3 SECTION
      p I represent as my name say, "a section of your page"<br>also I can be a section of another section.

    .txtInfo
      h3 ARTICLE
      p I'm the tag that contain your comment or forum post.

    .txtInfo
      h3 TIME
      p Don't get me wrong, am not just to highlight time,<br>I also specified date.

    .txtInfo
      h3 NAV
      p I'm the menu that contain navigation in your page, but not every link should be inside me, just the major block of navigation links.

    .txtInfo
      h3 ASIDE
      p I'm not the first section or the last, I'm just some kind of section that is floating away without specific order.

  section#oldFriends
    span.ball
    span.line.line_01
    span.line.line_02
    span.letter_01 N
    span.letter_02 N

    .mainTitle
      h2 BUT<br>NEVER<br>FORGET
      p Your old tags that love so much :&#40;

    .txtInfo
      h3 CODE
      p I'm the one that specify a piece of computer code.

    .txtInfo
      h3 STRONG
      p I define important text.

    .txtInfo
      h3 S
      p I mark text that is not longer correct accurate or relevant.<br>I was deprecated in HTML 4.01 and redefined in HTML5.

    .txtInfo
      h3 DEL
      p I define replaced or deleted text.

    .txtInfo
      h3 INS
      p I define the text that was inserted after DEL.

    .txtInfo
      h3 ADDRESS
      p I define the author or owner of some content.<br>If i'm on the body I can be contact information.

  section#notFriends
    span.line.line_01
    span.line.line_02
    span.line.line_03
    span.bar.bar_01
    span.bar.bar_02
    span.bar.bar_03
    span.bar.bar_04

    .mainTitle
      h2 EVOLVE<br>AND<br>FORGIVE

    .txtInfo
      h3 CENTER
      p I used to align text to the center. I was replaced for a CSS property because I was presentation over structure and the CSS is specific for presentation.

    .txtInfo
      h3 BLINK
      p I used to give blink effect to content in Netscape Navigator (and seizures to users), now I am in prison.

    .txtInfo
      h3 B / I / U
      p We do exist, but as last resort according to the HTML5 specification.<br>We are also presentation over structure, so we can fade any time.<br>We could be replaced for STRONG, EM, H1 to H6 and MARK.

    .txtInfo
      h3 STRIKE
      p I'm no longer supported in HTML5. I was replaced in structure for S because I was presentation over structure.

    .txtInfo
      h3 FONT
      p I used to define font face, now I steal for a living.

    .txtInfo
      h3 MARQUEE
      p I’m really crazy, I don’t know how I got here...

  footer
    address 2016 / <a href="../../">aguacatekun</a>
</template>