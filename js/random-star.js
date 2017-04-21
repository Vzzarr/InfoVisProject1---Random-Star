/**
 * Created by nicholas on 21/04/17.
 */
var exa = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

window.setInterval(function(){
    var dim = Math.round(Math.random() * 20);
    var top = Math.round(Math.random() * (window.innerHeight - (dim * 10)));
    var left = Math.round(Math.random() * (window.innerWidth - (dim * 10)));
    var color = "#";
    for (i = 0; i < 6; i++)
        color = color.concat(exa[Math.round(Math.random() * (exa.length - 1))]);

    d3.select("body")
        .append("svg")
        .style("top", top)
        .style("left", left)
        .style("position", "absolute")
        .attr("height", 10 * dim)
        .attr("width", 10 * dim)
        .on("click", function(){d3.select(this).remove();})
        .append("polygon")
        .attr("points", CalculateStarPoints(5 * dim, 5 * dim, 5, 5 * dim, 2 * dim))
        .style("fill", color);
}, 1000);



function CalculateStarPoints(centerX, centerY, arms, outerRadius, innerRadius){
    var results = "";
    var angle = Math.PI / arms;
    for (var i = 0; i < 2 * arms; i++) {

        var r = (i & 1) == 0 ? outerRadius : innerRadius;

        var currX = centerX + Math.cos(i * angle) * r;
        var currY = centerY + Math.sin(i * angle) * r;

        if (i == 0)
            results = currX + "," + currY;
        else
            results += ", " + currX + "," + currY;
    }
    return results;
}