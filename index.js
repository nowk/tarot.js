
(function() {
  /*
   * Tarot
   *
   * @param {String} track
   * @constructor
   */

  function Tarot(track) {
    var tracks = track.split(/\n/);
    var arr = tracks[0].split('^');

    this.number = arr[0].slice(2);

    this.cardHolder = arr[1].trim()
      .split("/")
      .reverse()
      .join(" ");

    this.expiration = arr[2].slice(0, 4)
      .split(/(\d{2})/)
      .reverse()
      .reduce(function(a, b) {
        a+= b;
        return a;
      }, '');
  }

  /*
   * expose
   */

  if ('undefined' !== module && 'undefined' !== module.exports) {
    module.exports = Tarot;
  } else {
    window.Tarot = Tarot;
  }
})();

