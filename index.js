document
  .getElementById("color-generator")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let colorPick = document.getElementById("color-pick").value;
    let hex = colorPick.slice(1, colorPick.length + 1);
    let mode = document.getElementById("mode-options").value;
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`)
      .then((res) => res.json())
      .then((data) => renderColor(data));
  });

function renderColor(data) {
  let html = data.colors
    .map((color) => {
      return `  <div class="outer-container">
                        <div class="inner-container"
                        style="background-color:${color.hex.value};"></div>
                        <p>${color.hex.value}</p> 
                   </div>`;
    })
    .join("");

  document.getElementById("color-scheme").innerHTML = html;
}
