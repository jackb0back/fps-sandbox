

var Builds;

function LoadBuilds() {
for (let i = 0; i < Builds; i++) {
    var B = i+1;
    document.getElementById("Builds").innerHTML += `
    <a href="Builds/build`+B+`/index.html">Build `+B+`</a>
    `
}
}
function LoadBuilds2() {
    for (let i = 0; i < Builds; i++) {
        var B = i+1;
        document.getElementById("Builds2").innerHTML += `
      <a class="lnk" href="Builds/build`+B+`/index.html">Build `+B+`</a>
      <br>
        `
    }
    }
