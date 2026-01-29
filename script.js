document.addEventListener("DOMContentLoaded", function () {

  const splash = document.getElementById("splash");

  // safety check
  if (!splash) return;

  // already shown? then remove immediately
  if (sessionStorage.getItem("splashShown") === "true") {
    splash.remove();
    return;
  }

  // first time only
  splash.style.opacity = "1";

  setTimeout(function () {
    splash.style.opacity = "0";

    setTimeout(function () {
      splash.remove();
      sessionStorage.setItem("splashShown", "true");
    }, 800);

  }, 2000);

});
