function goForwd() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/2d003a000a47363339343638/cartKommand?access_token=730d17457669375efa9789faa441ab1448beff1b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=goForwd");
  }

  function allStop() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/2d003a000a47363339343638/cartKommand?access_token=730d17457669375efa9789faa441ab1448beff1b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=allStop");
  }

  function turnLeft() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/2d003a000a47363339343638/cartKommand?access_token=730d17457669375efa9789faa441ab1448beff1b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=turnLeft");
  }

  function turnRight() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/2d003a000a47363339343638/cartKommand?access_token=730d17457669375efa9789faa441ab1448beff1b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=turnRight");
  }

  function allRev() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/2d003a000a47363339343638/cartKommand?access_token=730d17457669375efa9789faa441ab1448beff1b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=allRev");
  }

  function auxMotorForwd() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/2d003a000a47363339343638/cartKommand?access_token=730d17457669375efa9789faa441ab1448beff1b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=motor3Forwd");
  }

  function auxMotorRev() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/2d003a000a47363339343638/cartKommand?access_token=730d17457669375efa9789faa441ab1448beff1b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=motor3Rev");
  }