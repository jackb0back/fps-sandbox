

var Builds;

function LoadBuilds() {
for (let i = 0; i < Builds.length; i++) {
    var B = i+1;
    document.getElementById("Builds").innerHTML += `
    <a href="`+Builds[i]+`">Build `+B+`</a>
    `
}
}
function LoadBuilds2() {
    for (let i = 0; i < Builds.length; i++) {
        var B = i+1;
        document.getElementById("Builds2").innerHTML += `
        <a class="lnk" href="`+Builds[i]+`">Build `+B+`</a>
        `
    }
    }
