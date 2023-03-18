const buble1 = document.getElementById("gnome_buble");
const buble2 = document.getElementById("gb1");
document.getElementById("biblio_gnome").addEventListener(
    "mouseover",
    (event) => {
        buble1.style.backgroundColor = "white";
        buble2.style.backgroundColor = "white";
      setTimeout(() => {
        buble1.style.backgroundColor = "black";
        buble2.style.backgroundColor = "black";
      }, 2000);
    },
    false
  );