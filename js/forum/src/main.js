import app from 'flarum/app';

app.initializers.add('extum/flarum-ext-material', () => {

  document.getElementById("Button").className = "Button mdl-js-button mdl-button--raised mdl-js-ripple-effect";

});
