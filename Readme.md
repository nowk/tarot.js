# Tarot

Parse *track 1* from Magnetic Card Readers.

# Install

    npm install tarot-js

# Usage

    var cc = new Tarot(...TRACK1STRING...);

    cc.number     // => 1234567812345678
    cc.cardHolder // => John Doe
    cc.expiration // => 0199 (mmyy)

You can pass it in the *track 1* line or the full line set, `Tarot` will only parse *track 1*.

# Note

Can't seem to find a consistent way to parse CVV data across cards. Also, not all cards carry the CVV in the track line (or at least the unencrypted version). AMEX for example, doesn't seem to have the CVV number in the track line, or it's encrypted.

Great resource explaining the format [here](http://www.gae.ucm.es/~padilla/extrawork/magexam1.html).

# License

MIT

