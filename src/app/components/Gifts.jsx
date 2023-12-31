export default function Gifts() {
  return (
    <div id="gifts" class="whenwhere story section-padding bg-pink">
      <div class="container ">
        <div class="row">
          <div class="col-md-12 mb-30">
            <span class="oliven-title-meta">Honeymoon</span>
            <h2 class="oliven-title">Gifts</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-7 story-img hidden-xs">
            <div class="img">
              <img src="/gifts.jpg" alt="" />
            </div>
          </div>
          <div class="col-md-5">
            <p>
              The most important thing to us is that you are able to celebrate
              with us on our wedding day.
            </p>
            <p>
              However, if you wish to give us a gift, we will gratefully accept
              a contribution to put towards our honeymoon.
            </p>
            <p className="item">Head to our Collection Pot to find out more.</p>
            <p className="item">
              {" "}
              <a
                href="https://app.collectionpot.com/pot/jessandruss"
                target="_blank"
              >
                Go to our Collection Pot
              </a>
            </p>
          </div>
          <div class="col-md-7 story-img hidden-not-xs">
            <div class="img">
              <img src="/gifts.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
