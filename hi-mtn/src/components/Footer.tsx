'use client'

export default function Footer(){

  function mapsSelector() {
    if (
      /* if we're on iOS, open in Apple Maps */
      navigator.platform.indexOf("iPhone") != -1 ||
      navigator.platform.indexOf("iPad") != -1 ||
      navigator.platform.indexOf("iPod") != -1
    )
      window.open(
        "maps://maps.google.com/maps?daddr=40.643878,-111.280606&amp;ll="
      );
      /* else use Google */ else
      window.open("https://maps.google.com/maps?daddr=40.643878,-111.280606");
  }

  return (
    <footer className="footer text-faded text-center py-5" style={{position: 'relative'}}>
    <div className="container">
      <p className="m-0 small">Copyright &copy; Hi-Mountain 2019</p>
      <p onClick={mapsSelector} className="m-0 small link">
        40 North Main Street,<br />
        Kamas, UT 84036
      </p>
    </div>
  </footer>
  )
}
