<template lang="pug">
main
  aside#rules
    img(:src="getZapp('img/tetravex/crown.png')")
    h1 HOW TO SOLVE
    p The player is presented with a grid full of pieces, each piece have a number on each edge. The objective of the game is to place the pieces in the grid in the proper position. Two pieces should only be placed next to each other if the numbers on adjacent faces match.
    button Okay Now I Get It

  section#home.fullScreen
    span.pencil.red
    span.pencil.black
    span.pencil.brown
    span.pencil.blue
    span.pencil.gray

    span.tambora.t
    span.tambora.e
    span.tambora.t
    span.tambora.r
    span.tambora.a
    span.tambora.v
    span.tambora.e
    span.tambora.x

    .btnBox
      button#btn_instructions How Should i Play?
      button#btn_chooseLevel Play

  section#chooseLevel.adaptative.ND
    h1 Choose Your Level
    .arrow.right.ND
    .arrow.left

  section#final.ND
    .arrow.left

  #levels.ND
</template>


<script>
import Vue from "vue";
import Velocity from "velocity-animate";
import Sizzle from "sizzle";
import _ from "lodash";

export default Vue.extend({
  data: () => ({}),
  mounted() {
    var matrixSolved = [],
      matrixUnsolved = [],
      clickStatus = [],
      level = 0,
      saveStatus = [],
      positions = ["top", "right", "bottom", "left"],
      winCounter = [];

    var bkColors = {
      0: ["#000000", "#fff"],
      1: ["rgb(255, 0, 82)", "#fff"],
      2: ["#FF7A00", "#fff"],
      3: ["#A8F400", "#000"],
      4: ["#03A4BA", "#fff"],
      5: ["#8B0054", "#fff"],
      6: ["rgb(0, 191, 94)", "#fff"],
      7: ["rgb(125, 64, 11)", "#fff"],
      8: ["#015F6C", "#fff"],
      9: ["#555", "#fff"],
    };

    var medalColors = {
      2: {
        wheel: "#333",
        stroke: "#29ABE2",
        innerCircle: "#FFCA1C",
        innerCircles: "#00D58F",
        ribbon: "#DB186D",
        ribbonShadow: "#6B012F",
        winText: "white",
      },
      3: {
        wheel: "#333",
        stroke: "#29ABE2",
        innerCircle: "#00D58F",
        innerCircles: "#FFCA1C",
        ribbon: "#DB186D",
        ribbonShadow: "#6B012F",
        winText: "white",
      },
      4: {
        wheel: "#333",
        stroke: "#FFE700",
        innerCircle: "#00D58F",
        innerCircles: "#FFCA1C",
        ribbon: "#DB186D",
        ribbonShadow: "#6B012F",
        winText: "white",
      },
      5: {
        wheel: "#3A2313",
        stroke: "#00D58F",
        innerCircle: "#FFE700",
        innerCircles: "#FFCA1C",
        ribbon: "#DB186D",
        ribbonShadow: "#6B012F",
        winText: "white",
      },
      6: {
        wheel: "#3A2313",
        stroke: "#29ABE2",
        innerCircle: "#8CC63F",
        innerCircles: "#FFCA1C",
        ribbon: "#FFCA1C",
        ribbonShadow: "#BF9815",
        winText: "black",
      },
      7: {
        wheel: "#3A2313",
        stroke: "#FFE700",
        innerCircle: "#8CC63F",
        innerCircles: "#666",
        ribbon: "#00D58F",
        ribbonShadow: "#0A6648",
        winText: "black",
      },
      8: {
        wheel: "#3A2313",
        stroke: "#00D58F",
        innerCircle: "#E7007E",
        innerCircles: "#FFCA1C",
        ribbon: "#12A5CA",
        ribbonShadow: "#0E7C98",
        winText: "black",
      },
      9: {
        wheel: "#3A2313",
        stroke: "#FFCA1C",
        innerCircle: "#FFCA1C",
        innerCircles: "#FFCA1C",
        ribbon: "#12A5CA",
        ribbonShadow: "#0E7C98",
        winText: "black",
      },
      10: {
        wheel: "#12343A",
        stroke: "#29ABE2",
        innerCircle: "#FFCA1C",
        innerCircles: "#00D58F",
        ribbon: "#D81919",
        ribbonShadow: "#680202",
        winText: "white",
      },
    };

    //------------------------------------

    function makeWheel(o) {
      /* ----------- Vars ----------- */
      var nm = document.querySelectorAll(o.id)[0],
        w = nm.width /* canvas weight */,
        h = nm.height /* canvas height */,
        mx = h < w ? h : w /* valor maximo a considerar */,
        per = mx / 100 /* percent */,
        p = nm.getContext("2d"),
        ang = Math.PI / 180,
        sd = o.p1Sides /* poligon sides */,
        x = nm.width / 2,
        y = nm.height / 2,
        /* ----------- Poligon 1 ----------- */
        r = o.p1Radius * per,
        px = new Array(),
        py = new Array(),
        /* ----------- Poligon 2 ----------- */
        r2 = o.p2Radius * per,
        px2 = new Array(),
        py2 = new Array(),
        /* ----------- Inner Circle ----------- */
        r3 = o.circDistances * per /* distance of circles */,
        r4 = o.circRadius * per /* radius of circle */,
        sd2 = o.nCirc /* number of circles */,
        px3 = new Array(),
        py3 = new Array(),
        /* ----------- Inner Circle ----------- */
        r5 = o.innerCircDiam;

      for (let kk = 0; kk <= sd - 1; kk++) {
        px[kk] = Math.cos((360 / sd) * kk * ang) * r;
        py[kk] = Math.sin((360 / sd) * kk * -ang) * r;
      }

      /* --------------------- Second Shape --------------------- */

      for (let kk = 0; kk <= sd - 1; kk++) {
        px2[kk] = Math.cos((360 / (sd * 2) + (360 / sd) * kk) * ang) * r2;
        py2[kk] = Math.sin((360 / (sd * 2) + (360 / sd) * kk) * -ang) * r2;
      }

      /* --------------------- Circles --------------------- */
      for (let kk = 0; kk <= sd2 - 1; kk++) {
        px3[kk] = Math.cos((360 / sd2) * kk * ang) * r3;
        py3[kk] = Math.sin((360 / sd2) * kk * -ang) * r3;
      }

      p.beginPath();
      p.moveTo(x + px[0], y + py[0]);
      p.lineTo(x + px2[0], y + py2[0]);

      for (let kk = 1; kk <= sd - 1; kk++) {
        p.lineTo(x + px[kk], y + py[kk]);
        p.lineTo(x + px2[kk], y + py2[kk]);
      }

      p.lineTo(x + px[0], y + py[0]);
      p.lineTo(x + px[1], y + py[1]);

      p.fillStyle = o.colors.wheel;
      p.fill();
      p.strokeStyle = o.colors.stroke;
      p.lineWidth = 7;
      p.stroke();
      p.closePath();

      p.beginPath();
      p.arc(x, y, r5, 0, Math.PI * 2, true);
      p.fillStyle = o.colors.innerCircle;
      p.fill();
      p.closePath();

      for (let kk = 0; kk <= sd2 - 1; kk++) {
        p.beginPath();
        p.arc(x + px3[kk], y + py3[kk], r4, 0, Math.PI * 2, true);
        p.fillStyle = o.colors.innerCircles;
        p.fill();
        p.closePath();
      }
    }

    function makeRibbon(o) {
      /* ----------- Vars ----------- */
      var nm = document.querySelectorAll(o.id)[0],
        p = nm.getContext("2d");

      p.beginPath();

      p.moveTo(0, 15);
      p.lineTo(20, 45);
      p.lineTo(0, 80);
      p.lineTo(70, 80);
      p.lineTo(70, 15);
      p.fillStyle = o.colors.ribbonShadow;
      p.fill();
      p.closePath();

      p.moveTo(420, 15);
      p.lineTo(400, 45);
      p.lineTo(420, 80);
      p.lineTo(350, 80);
      p.lineTo(350, 15);
      p.fillStyle = o.colors.ribbonShadow;
      p.fill();
      p.closePath();

      p.beginPath();
      p.moveTo(50, 0);
      p.lineTo(50, 70);
      p.lineTo(370, 70);
      p.lineTo(370, 0);
      p.fillStyle = o.colors.ribbon;
      p.fill();
      p.closePath();

      /*p.font = "30px Amatic SC";
	p.textAlign = "center";
	p.fillStyle = o.colors.winText;
	p.fillText("Congratulations", nm.width/2, 55);*/
    }

    function makeShape(o) {
      /* ----------- Vars ----------- */
      var nm = document.querySelectorAll(o.id)[0],
        w = nm.width /* canvas weight */,
        h = nm.height /* canvas height */,
        mx = h < w ? h : w /* valor maximo a considerar */,
        per = mx / 100 /* percent */,
        p = nm.getContext("2d"),
        ang = Math.PI / 180,
        sd = o.p1Sides /* poligon sides */,
        x = nm.width / 2,
        y = nm.height / 2,
        /* ----------- Poligon 1 ----------- */
        r = o.p1Radius * per,
        px = new Array(),
        py = new Array(),
        /* ----------- Poligon 2 ----------- */
        r2 = o.p2Radius * per,
        px2 = new Array(),
        py2 = new Array(),
        /* ----------- Inner Circle ----------- */
        r3 = o.circDistances * per /* distance of circles */,
        r4 = o.circRadius * per /* radius of circle */,
        sd2 = o.nCirc /* number of circles */,
        px3 = new Array(),
        py3 = new Array(),
        /* ----------- Inner Circle ----------- */
        r5 = o.innerCircDiam;

      for (let kk = 0; kk <= sd - 1; kk++) {
        px[kk] = Math.cos((360 / sd) * kk * ang) * r;
        py[kk] = Math.sin((360 / sd) * kk * -ang) * r;
      }

      p.beginPath();
      p.moveTo(x + px[0], y + py[0]);

      for (let kk = 1; kk <= sd - 1; kk++) {
        p.lineTo(x + px[kk], y + py[kk]);
      }

      p.lineTo(x + px[0], y + py[0]);
      /*p.lineTo( x + px[ 1 ] , y + py[ 1 ] );*/

      p.strokeStyle = o.colors.stroke;
      p.lineWidth = 2;
      p.setLineDash([5, 5]);
      p.stroke();
      p.closePath();
    }

    var ornaments = {
      deco1: function (actualLevel) {
        var world = document.getElementById("world_" + actualLevel);
        main.addNode({
          parentNode: world,
          type: "span",
          attributes: [
            { attribute: "class", value: "pencil caramel ornament a" },
          ],
        });

        main.addNode({
          parentNode: world,
          type: "span",
          attributes: [
            { attribute: "class", value: "pencil redOrange ornament b" },
          ],
        });

        main.addNode({
          parentNode: world,
          type: "span",
          attributes: [
            { attribute: "class", value: "pencil darkViolet ornament c" },
          ],
        });
      },

      deco2: function (actualLevel) {
        var world = document.getElementById("world_" + actualLevel);
        main.addNode({
          parentNode: world,
          type: "span",
          attributes: [{ attribute: "class", value: "pencil red ornament d" }],
        });

        main.addNode({
          parentNode: world,
          type: "img",
          attributes: [
            { attribute: "class", value: "ornament e" },
            { attribute: "src", value: "img/cartabon.png" },
          ],
        });
      },

      deco3: function (actualLevel) {
        var world = document.getElementById("world_" + actualLevel);
        main.addNode({
          parentNode: world,
          type: "span",
          attributes: [
            { attribute: "class", value: "pencil lightBlue ornament f" },
          ],
        });

        main.addNode({
          parentNode: world,
          type: "span",
          attributes: [{ attribute: "class", value: "pencil mint ornament g" }],
        });
      },
    };

    //------------------------------------

    var main = {
      addNode: function (obj) {
        var attr = [],
          node,
          text;
        obj.parentNode = obj.parentNode || document;
        obj.txt = obj.txt || "";
        obj.attributes = obj.attributes || "";

        node = document.createElement(obj.type);
        text = document.createTextNode(obj.txt);
        node.appendChild(text);

        if (obj.attributes != "") {
          for (var k in obj.attributes) {
            attr = document.createAttribute(obj.attributes[k].attribute);
            attr.value = obj.attributes[k].value;
            node.setAttributeNode(attr);
          }
        }

        obj.parentNode.appendChild(node);
        return node;
      },

      sortingArray: function (array) {
        var tmpArray = array;
        var newArray = [];

        while (tmpArray.length != 0) {
          var number = Math.floor(Math.random() * (tmpArray.length - 1));
          var newElement = tmpArray.splice(number, 1)[0];
          newArray.push(newElement);
        }
        return newArray;
      },

      convertToArray: function (array) {
        var newMatrix = [];
        for (var k = 0; k < array.length; k++) {
          var newArray = [];
          newArray.push(
            array[k].topValue.toString(),
            array[k].rightValue.toString(),
            array[k].bottomValue.toString(),
            array[k].leftValue.toString()
          );

          newMatrix.push(newArray);
        }
        return newMatrix;
      },

      generateNumbers: function (limit) {
        var array = [];
        for (var k = 0; k < limit * limit; k++) {
          var number = Math.floor(Math.random() * 10);
          array.push(number, number);
        }
        var swap = array.pop();
        array.unshift(swap);
        return array;
      },

      creatingPuzzle: function (rows, columns, levelNumber) {
        var result = {},
          tmpRows = [],
          tmpColumns = [];

        for (var k = 0; k < rows.length; k += 2) {
          tmpRows.push({ leftValue: rows[k], rightValue: rows[k + 1] });
        }

        for (
          var newPieceOrder = 0, alternate = 0, kount = 0;
          alternate < levelNumber;
          newPieceOrder += levelNumber, kount += 2
        ) {
          if (newPieceOrder > levelNumber * levelNumber - 1) {
            alternate++;
            newPieceOrder = alternate;
          }

          if (alternate != levelNumber) {
            tmpColumns[newPieceOrder] = {
              topValue: columns[kount],
              bottomValue: columns[kount + 1],
            };
          }
        }

        /* patch :: the last element of the columns its missing */
        tmpColumns[levelNumber * levelNumber] = {
          topValue: columns[levelNumber * levelNumber * 2 - 2],
          bottomValue: columns[levelNumber * levelNumber * 2 - 1],
        };

        tmpColumns.pop();

        for (var k in tmpRows) {
          result = _.merge(tmpRows, tmpColumns);
        }

        return result;
      },

      generatePieces: function (world, path, array) {
        var actualPiece;

        for (var k = 1; k <= world * world; k++) {
          /* -- creating piece -- */
          actualPiece = main.addNode({
            parentNode: path,
            type: "a",
            attributes: [
              { attribute: "href", value: "javascript:void(0)" },
              { attribute: "class", value: "piece_" + k + " piece" },
            ],
          });

          /* -- creating parts of the piece -- */

          main.addNode({
            parentNode: actualPiece,
            type: "div",
            txt: array[world][k - 1][0],
            attributes: [{ attribute: "class", value: "top" }],
          });
          main.addNode({
            parentNode: actualPiece,
            type: "div",
            txt: array[world][k - 1][1],
            attributes: [{ attribute: "class", value: "right" }],
          });
          main.addNode({
            parentNode: actualPiece,
            type: "div",
            txt: array[world][k - 1][2],
            attributes: [{ attribute: "class", value: "bottom" }],
          });
          main.addNode({
            parentNode: actualPiece,
            type: "div",
            txt: array[world][k - 1][3],
            attributes: [{ attribute: "class", value: "left" }],
          });
        }
        return 0;
      },

      generateLevels: function (begin, end) {
        var actualWorld, puzzleSolved, puzzleUnsolved, medal, btn;
        for (var levelNumber = begin; levelNumber <= end; levelNumber++) {
          if (typeof localStorage.getItem("saveData9") !== "string") {
            winCounter.push(levelNumber);
          }

          /* -- creating buttons for link to a level -- */
          btn = main.addNode({
            parentNode: document.getElementById("chooseLevel"),
            type: "button",
            attributes: [
              { attribute: "id", value: "btn_" + levelNumber },
              { attribute: "type", value: "button" },
            ],
          });

          main.addNode({
            parentNode: btn,
            type: "canvas",
            attributes: [
              { attribute: "width", value: "150px" },
              { attribute: "height", value: "150px" },
            ],
          });

          main.addNode({
            parentNode: btn,
            type: "p",
            txt: "level " + levelNumber,
          });

          makeShape({
            id: "#btn_" + levelNumber + " canvas",
            p1Radius: 48,
            p1Sides: levelNumber,
            colors: medalColors[levelNumber],
          });

          /* -- creating the base of the level -- */
          actualWorld = main.addNode({
            parentNode: document.getElementById("levels"),
            type: "section",
            attributes: [
              { attribute: "id", value: "world_" + levelNumber },
              { attribute: "class", value: "adaptative ND" },
            ],
          });

          main.addNode({
            parentNode: actualWorld,
            type: "h1",
            txt: "Level " + levelNumber,
            attributes: [{ attribute: "class", value: "levelName" }],
          });

          medal = main.addNode({
            parentNode: actualWorld,
            type: "div",
            attributes: [{ attribute: "class", value: "medal" }],
          });

          main.addNode({
            parentNode: medal,
            type: "canvas",
            attributes: [
              { attribute: "class", value: "body" },
              { attribute: "width", value: "300px" },
              { attribute: "height", value: "300px" },
            ],
          });

          main.addNode({
            parentNode: medal,
            type: "canvas",
            attributes: [
              { attribute: "class", value: "ribbon" },
              { attribute: "width", value: "420px" },
              { attribute: "height", value: "95px" },
            ],
          });

          main.addNode({
            parentNode: medal,
            type: "span",
            attributes: [
              { attribute: "class", value: "number " + "n" + levelNumber },
            ],
          });

          main.addNode({
            parentNode: medal,
            type: "span",
            txt: "Congratulations",
            attributes: [
              {
                attribute: "class",
                value: "winText " + medalColors[levelNumber].winText,
              },
            ],
          });

          main.addNode({
            parentNode: medal,
            type: "span",
            attributes: [{ attribute: "class", value: "regla a" }],
          });

          main.addNode({
            parentNode: medal,
            type: "span",
            attributes: [{ attribute: "class", value: "regla b" }],
          });

          makeWheel({
            id: "#world_" + levelNumber + " .medal .body",
            p1Radius: 48,
            p1Sides: 45,
            p2Radius: 44,
            circDistances: 35,
            circRadius: 3,
            nCirc: 12,
            innerCircDiam: 70,
            colors: medalColors[levelNumber],
          });

          makeRibbon({
            id: "#world_" + levelNumber + " .medal .ribbon",
            colors: medalColors[levelNumber],
          });

          /* -- creating rows and columns -- */
          var rows = main.generateNumbers(levelNumber);
          var columns = main.generateNumbers(levelNumber);

          //console.log(columns);

          /* -- mixing rows and columns -- */
          matrixSolved[levelNumber] = main.creatingPuzzle(
            rows,
            columns,
            levelNumber
          );
          matrixSolved[levelNumber] = main.convertToArray(
            matrixSolved[levelNumber]
          );
          var matrixTmp = matrixSolved[levelNumber].slice(0);
          matrixUnsolved[levelNumber] = main.sortingArray(matrixTmp);

          /* -- creating the base of the puzzle unsolved -- */
          puzzleUnsolved = main.addNode({
            parentNode: actualWorld,
            type: "div",
            attributes: [{ attribute: "class", value: "puzzle pUnsolved" }],
          });
          main.generatePieces(levelNumber, puzzleUnsolved, matrixUnsolved);

          /* -- creating the base of the puzzle Solved -- */
          puzzleSolved = main.addNode({
            parentNode: actualWorld,
            type: "div",
            attributes: [{ attribute: "class", value: "puzzle pSolved" }],
          });
          main.generatePieces(levelNumber, puzzleSolved, matrixSolved);

          matrixSolved[levelNumber] = _.flattenDeep(
            matrixSolved[levelNumber]
          ).join("");

          /* -- creating arrow -- */
          main.addNode({
            parentNode: actualWorld,
            type: "div",
            attributes: [{ attribute: "class", value: "arrow back" }],
          });

          if (levelNumber % 4 == 0) {
            ornaments.deco1(levelNumber);
          } else if (levelNumber % 3 == 0) {
            ornaments.deco2(levelNumber);
          } else {
            ornaments.deco3(levelNumber);
          }
        }

        return 0;
      },

      giveMeYourClickAndBeAwesome: function (query, fn) {
        var clickMe = document.querySelectorAll(query);
        for (var k = 0; k < clickMe.length; k++) {
          clickMe.item(k).onclick = fn;
        }
      },

      checkWonLevels: function (start, end) {
        for (var levelNumber = start; levelNumber <= end; levelNumber++) {
          if (winCounter.indexOf(levelNumber) == -1) {
            main.winLevel(levelNumber);
          }
        }
      },

      checkBk: function (query) {
        for (var actualColor = 0; actualColor < 10; actualColor++) {
          (function (color) {
            var setBk = function (element, index, array) {
              element.style.backgroundColor = bkColors[color][0];
              element.style.color = bkColors[color][1];
            };

            var numberArray = Sizzle(
              query + " div:not(.pUnsolved):contains(" + color + ")"
            );

            numberArray.forEach(setBk);
          })(actualColor);
        }
      },

      winLevel: function (actualLevel) {
        var tmpIndex = _.findIndex(winCounter, function (number) {
            return number == actualLevel;
          }),
          actualWorld = document
            .getElementById("world_" + actualLevel)
            .getElementsByClassName("puzzle"),
          medal = document
            .getElementById("world_" + actualLevel)
            .getElementsByClassName("medal")[0],
          hiddenArrow = document
            .getElementById("chooseLevel")
            .getElementsByClassName("right")[0],
          body = medal.getElementsByClassName("body")[0],
          regla_A = medal.getElementsByClassName("regla a")[0],
          regla_B = medal.getElementsByClassName("regla b")[0],
          number_txt = medal.getElementsByClassName("number")[0],
          ribbon = medal.getElementsByClassName("ribbon")[0],
          ribbon_txt = medal.getElementsByClassName("winText")[0];

        _.pull(winCounter, winCounter[tmpIndex]);
        Velocity(actualWorld, { opacity: 0 }, { display: "none" }, 500);

        Velocity(body, { rotateZ: 300, scale: 0.2 }, 0);
        Velocity(
          regla_A,
          {
            opacity: 0,
            rotateZ: 45,
            scale: 0.8,
            translateX: -14,
            translateY: -96,
          },
          0
        );
        Velocity(
          regla_B,
          {
            opacity: 0,
            rotateZ: -45,
            scale: 0.8,
            translateX: -14,
            translateY: -96,
          },
          0
        );
        Velocity(ribbon, { opacity: 0, scale: 0.8, translateY: 10 }, 0);
        Velocity(ribbon_txt, { opacity: 0, translateY: 10 }, 0);
        Velocity(number_txt, { opacity: 0, scale: 0.2 }, 0);

        Velocity(
          body,
          { opacity: 1, rotateZ: 385, scale: 0.8 },
          700,
          function () {
            Velocity(
              regla_A,
              {
                opacity: 1,
                rotateZ: 45,
                scale: 0.8,
                translateX: 0,
                translateY: 0,
              },
              200
            );
            Velocity(
              regla_B,
              {
                opacity: 1,
                rotateZ: -45,
                scale: 0.8,
                translateX: 0,
                translateY: 0,
              },
              200,
              function () {
                Velocity(
                  ribbon,
                  { opacity: 1, scale: 0.8, translateY: 0 },
                  500
                );
                Velocity(
                  ribbon_txt,
                  { opacity: 1, translateY: 0 },
                  500,
                  function () {
                    Velocity(number_txt, { opacity: 1, scale: 1 }, 500);
                    medal.className += " stopAnimation";
                  }
                );
              }
            );
          }
        );

        localStorage.setItem("saveData9", winCounter);

        if (winCounter != 0) {
          console.log("you beat level " + actualLevel);
          console.log(
            "you need to beat the level " +
              winCounter +
              " to win the whole game"
          );
        } else {
          console.log("you win the whole game");
          Velocity(hiddenArrow, "fadeIn", 0);
        }
      },
    };

    //------------------------------------

    var core = (function () {
      if (typeof localStorage.getItem("saveData9") === "string") {
        winCounter = localStorage.getItem("saveData9");
      }

      main.generateLevels(3, 10);

      main.giveMeYourClickAndBeAwesome(".arrow.right", function () {
        Velocity(this.parentNode, "fadeOut", { duration: 500 });
        Velocity(this.parentNode.nextSibling.nextSibling, "fadeIn", {
          duration: 500,
        });
      });

      main.giveMeYourClickAndBeAwesome(".arrow.left", function () {
        Velocity(this.parentNode, "fadeOut", { duration: 500 });
        Velocity(this.parentNode.previousSibling.previousSibling, "fadeIn", {
          duration: 500,
        });
      });

      main.giveMeYourClickAndBeAwesome(".arrow.back", function () {
        Velocity(this.parentNode, "fadeOut", { duration: 500 });
        Velocity(Sizzle("#chooseLevel")[0], "fadeIn", { duration: 500 });
      });

      main.giveMeYourClickAndBeAwesome("#btn_instructions", function () {
        Velocity(Sizzle("#home")[0], "fadeOut", { duration: 500 });
        Velocity(Sizzle("#rules")[0], "fadeIn", { duration: 500 });
      });

      main.giveMeYourClickAndBeAwesome("#btn_chooseLevel", function () {
        Velocity(Sizzle("#home")[0], "fadeOut", { duration: 500 });
        Velocity(Sizzle("#chooseLevel")[0], "fadeIn", { duration: 500 });
      });

      main.giveMeYourClickAndBeAwesome("#rules button", function () {
        Velocity(Sizzle("#rules")[0], "fadeOut", { duration: 500 });
        Velocity(Sizzle("#home")[0], "fadeIn", { duration: 500 });
      });

      main.giveMeYourClickAndBeAwesome("#chooseLevel button", function () {
        level = this.getAttribute("id").split("_")[1];
        Velocity(this.parentNode, "fadeOut", { duration: 500 });
        Velocity(Sizzle("#levels")[0], "fadeIn", { duration: 500 });
        Velocity(Sizzle("#world_" + level)[0], "fadeIn", { duration: 500 });
      });

      main.giveMeYourClickAndBeAwesome(".piece", function () {
        var pieceNumber = this.getAttribute("class")
          .split(" ")[0]
          .split("_")[1];
        if (saveStatus[level] != pieceNumber) {
          clickStatus[level] = !clickStatus[level];

          if (clickStatus[level] == true) {
            saveStatus[level] = pieceNumber;
            this.className += " selected";
          } else {
            var piece_A =
                "#world_" + level + " .piece_" + parseInt(saveStatus[level]),
              piece_B = "#world_" + level + " .piece_" + parseInt(pieceNumber);

            var newClass = Sizzle(piece_A)[0].className.split(" ");
            newClass.pop();
            newClass = newClass.join(" ");

            Sizzle(piece_A)[0].className = newClass;

            for (var k in positions) {
              var a = Sizzle(piece_A + " ." + positions[k])[0].innerHTML,
                b = Sizzle(piece_B + " ." + positions[k])[0].innerHTML;

              Sizzle(piece_A + " ." + positions[k])[0].innerHTML =
                matrixUnsolved[level][saveStatus[level] - 1][k] = b;

              Sizzle(piece_B + " ." + positions[k])[0].innerHTML =
                matrixUnsolved[level][pieceNumber - 1][k] = a;
            }

            var tmpArrayA = _.uniq(matrixUnsolved[level]);
            var unsolved = _.flattenDeep(tmpArrayA).join("");

            if (matrixSolved[level] == unsolved) {
              main.winLevel(level);
            }

            saveStatus[level] = "NaN";
            main.checkBk("#world_" + level);
          }
        }
      });

      main.checkBk(".pUnsolved");
      main.checkWonLevels(3, 10);
    })();
  },
});
</script>