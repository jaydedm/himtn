'use client'


export default function Home() {
  function mapsSelector() {
    if (
      /* if we're on iOS, open in Apple Maps */
      navigator.platform.indexOf('iPhone') != -1 ||
      navigator.platform.indexOf('iPad') != -1 ||
      navigator.platform.indexOf('iPod') != -1
    )
      window.open(
        'maps://maps.google.com/maps?daddr=40.643878,-111.280606&amp;ll='
      )
    /* else use Google */ else
      window.open('https://maps.google.com/maps?daddr=40.643878,-111.280606')
  }

  return (
    <>
      <h1 className='site-heading text-center text-white d-none d-lg-block'>
        <div className='container' style={{ height: '225px' }}></div>
      </h1>

      <div>
        <section className='page-section clearfix'>
          <div className='container'>
            <div className='intro'>
              <div className='container home-images'>
                {/* <img
              className="fries-img intro-img img-fluid mb-3 mb-lg-0 rounded"
              src="/img/home.jpeg"
              alt=""
            /> */}
              </div>
              <div className='intro-text left-0 text-center bg-faded p-4 rounded' style={{position: 'relative', marginLeft: 'auto', marginRight: 'auto'}}>
                <h2 className='section-heading mb-4'>
                  <span className='section-heading-upper'>
                    Juicy Burgers. Homestyle Fries. Thick Milkshakes.
                  </span>
                </h2>
                <div className='page-section clearfix container attention-box'>
                  <i>
                    <span>
                      Something we all grew up with. Something we can&apos;t
                      always find.
                    </span>
                    <br />
                    <span>
                      In a world of strip malls and fast food chains, we like
                      being different.
                    </span>
                  </i>
                </div>
                <p className='mb-3' style={{ textAlign: 'left' }}>
                  At Hi-Mountain, we take pride in our traditions. The food you
                  loved as a child tastes just as good today. We Strive to give
                  you quality food paired with exceptional service.
                  <br />
                  <br />
                  Built in 1918 as a confectionary, the store has had very few
                  changes since it first opened its doors. Although the pharmacy
                  is now closed, we are still - and most likely will be for
                  years to come - fondly known as{' '}
                  <strong>
                    <i>&quot;The Drug Store.&quot;</i>
                  </strong>
                  <br />
                  <br />
                  So, belly up to the bar, enjoy some down-home service, and
                  take a walk down memory lane. Before you go, peek below the
                  old-fashioned ice cream counter at the original tile mural,
                  and help yourself to a heaping serving of nostalgia. Let us
                  help you create special memories with your loved ones that
                  will carry on through the years.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='page-section cta'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-9 mx-auto'>
                <div className='cta-inner text-center rounded'>
                  <h2 className='section-heading mb-4'>
                    <span className='section-heading-upper'>Our Promise</span>
                    <span className='section-heading-lower'>To You</span>
                  </h2>
                  <p className='mb-0'>
                    When you walk into our store, we are dedicated to providing
                    you with friendly service, a welcoming atmosphere, and
                    excellent food made with the highest quality ingredients. If
                    you are not satisfied, please let us know and we will do
                    whatever we can to make things right!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
