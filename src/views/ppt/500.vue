<template lang="pug">
nn-scroll-area(color="royal-purple")
  .dialog
    .images
      img(:src="getZapp('img/ppt/5.png')")
      img.ruby(:src="getZapp('img/ppt/ruby.png')")
      img.ruby(:src="getZapp('img/ppt/ruby.png')")

    p
      strong Hello, Neo.&nbsp;
      | I am the Architect. I created the Matrix. I've been waiting for you. You have many questions, and although the process has altered your consciousness, you remain irrevocably human. Ergo, some of my answers you will understand, and some of them you will not. Concordantly, while your first question may be the most pertinent, you may or may not realize it is also the most irrelevant.

    a(href="#") Go Back Home
</template>