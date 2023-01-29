function toggleMode() {
  const html = document.querySelector("html");

  // if(html.classList.contains("light")) {
  //   html.removeAttribute("class", "light");
  // } else {
  //   html.setAttribute("class", "light");
  // }

  html.classList.toggle("light");
}
