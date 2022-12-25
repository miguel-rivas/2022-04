<template>
  <div id="family-tree" />
</template>

<script>
import Vue from "vue";
import * as d3 from "d3/dist/d3.min";
import familyData from "@/db/family-tree";

export default Vue.extend({
  data: () => ({
    selection: {},
  }),
  created() {
    this.selection = this.$store.getters.getFamilySelection;
  },
  mounted() {
    let root;
    let boxWidth = 250,
      boxHeight = 60,
      duration = 250;
    let layerSpacing = 28;
    let nodeSpacing = 28;
    let zoom = d3
      .zoom()
      .scaleExtent([0.1, 2])
      .on("zoom", zoomed)
      .extent([
        [0, 0],
        [0, 0],
      ]);

    let initTransform = d3.zoomIdentity.translate(0, 0);
    let svg = d3
      .select("#family-tree")
      .append("svg")
      .attr("width", 1)
      .attr("height", 1)
      .attr("class", "overlay printable")
      .call(zoom);
    svg
      .append("defs")
      .append("marker")
      .attr("id", "arrowhead")
      .attr("viewBox", "0 0 10 10")
      .attr("refX", 8)
      .attr("refY", 5)
      .attr("orient", "auto")
      .attr("markerWidth", 4)
      .attr("markerHeight", 4)
      .attr("xoverflow", "visible")
      .append("path")
      .attr("d", "M 0 0 L 10 5 L 0 10 z")
      .attr("fill", "#999")
      .style("stroke", "none");

    let svgGroup = svg.append("g");
    svg.call(zoom.transform, initTransform);
    let vertical = this.selection.verticalOrientation;

    d3.select("#treedepth").on("change", function () {
      resfreshFamilyTree(this.value);
    });

    d3.select("#cladogram").on("change", function () {
      resfreshFamilyTree();
    });

    drawHierarchicalData(familyData);

    function drawHierarchicalData(hierarchicalData) {
      root = d3.hierarchy(hierarchicalData);
      root.x0 = 0;
      root.y0 = 0;
      updateTidyTree(root);
    }

    function updateTidyTree(source) {
      let datumId = 0;
      let buildLinkPath = vertical ? linkVertical : elbow;
      let nodeSize = [boxWidth + nodeSpacing, boxHeight + layerSpacing];
      let tree = d3
        .tree()
        .separation(function (a, b) {
          return 1;
        })
        .nodeSize(vertical ? nodeSize : nodeSize.reverse());

      let treeData = tree(root);
      let nodes = treeData.descendants(),
        links = treeData.links();

      let nodesUpdate = svgGroup.selectAll("g.person").data(nodes, nodeDataKey);
      
      let nodesEnter = nodesUpdate
        .enter()
        .append("g")
        .attr("class", function (datum) {
          const classes = ['person'];
          if(datum?.data?.group){
            classes.push(datum.data.group);
          }
          return classes.join(' ');
        })
        .attr(
          "transform",
          "translate(" +
            (vertical
              ? source.x0 + "," + source.y0
              : source.y0 + "," + source.x0) +
            ")"
        )
        .style("opacity", 0)
        .on("click", togglePerson);
      setNodeRectLayout(nodesEnter.append("rect"));
      nodesEnter
        .append("text")
        .attr("dy", -4)
        .attr("text-anchor", "middle")
        .attr("class", "name")
        .text(function (datum) {
          return datum?.data?.name?.length ? datum.data.name.join(' ') : '--';
        })
        nodesEnter
        .append("text")
        .attr("dy", 14)
        .attr("text-anchor", "middle")
        .attr("class", "family-name")
        .text(function (datum) {
          return datum?.data?.familyName?.length ? datum.data.familyName.join(' ') : '--';
        })
      {
        nodesUpdate
          .merge(nodesEnter)
          .transition("SlideShow")
          .duration(duration)
          .attr("transform", function (datum, index) {
            return (
              "translate(" +
              (vertical ? datum.x + "," + datum.y : datum.y + "," + datum.x) +
              ")"
            );
          })
          .style("opacity", 1);
      }
      nodesUpdate
        .exit()
        .transition()
        .duration(duration)
        .attr("transform", function (datum) {
          return (
            "translate(" +
            (vertical ? source.x + "," + source.y : source.y + "," + source.x) +
            ")"
          );
        })
        .style("opacity", 0)
        .remove();

      let linksUpdate = svgGroup
        .selectAll("path.link")
        .data(links, linkDataKey);

      let linksEnter = linksUpdate
        .enter()
        .append("path")
        .attr("class", "link")
        .attr("d", function (d, idx) {
          let position = { x: source.x0, y: source.y0 };
          return buildLinkPath({ source: position, target: position });
        })
        .style("opacity", 0);

      linksUpdate
        .merge(linksEnter)
        .transition()
        .duration(duration)
        .attr("d", buildLinkPath)
        .style("opacity", 1);

      linksUpdate
        .exit()
        .transition()
        .duration(duration)
        .attr("d", function (d, idx) {
          let position = { x: source.x, y: source.y };
          console.log(
            "link removed:",
            idx,
            d.source.data.name,
            d.target.data.name,
            position
          );
          return buildLinkPath({ source: position, target: position });
        })
        .style("opacity", 0)
        .remove();

      nodes.forEach(function (person) {
        person.x0 = person.x;
        person.y0 = person.y;
      });

      function setNodeRectLayout(nodeBox) {
        return nodeBox
          .attr("x", -(boxWidth / 2))
          .attr("y", -(boxHeight / 2))
          .attr("width", boxWidth)
          .attr("height", boxHeight);
      }

      function linkDataKey(link) {
        return link.target.id;
      }

      function nodeDataKey(datum) {
        return datum.id || (datum.id = ++datumId);
      }

      function togglePerson(datum) {
        if (datum.collapsed) {
          datum.collapsed = false;
          expandChildren(datum);
        } else {
          collapseChildren(datum);
        }
        updateTidyTree(datum);
      }

      function elbow(d) {
        let sourceX = d.source.x,
          sourceY = d.source.y + boxWidth / 2,
          targetX = d.target.x,
          targetY = d.target.y - boxWidth / 2;

        return (
          "M" +
          sourceY +
          "," +
          sourceX +
          "H" +
          (sourceY + (targetY - sourceY) / 2) +
          "V" +
          targetX +
          "H" +
          targetY
        );
      }

      function linkVertical(d) {
        let sourceX = d.source.x,
          sourceY = d.source.y + boxHeight / 2,
          targetX = d.target.x,
          targetY = d.target.y - boxHeight / 2;
        return (
          "M" +
          sourceX +
          "," +
          sourceY +
          "v" +
          (targetY - sourceY) / 2 +
          "H" +
          targetX +
          "V" +
          targetY
        );
      }

      function transitionElbow(d) {
        return (
          "M" +
          d.source.y +
          "," +
          d.source.x +
          "H" +
          d.source.y +
          "V" +
          d.source.x +
          "H" +
          d.source.y
        );
      }
      function transitionVerticalElbow(d) {
        return (
          "M" +
          d.source.x +
          "," +
          d.source.y +
          "V" +
          d.source.y +
          "H" +
          d.source.x +
          "V" +
          d.source.y
        );
      }
    }

    function collapseParent(person) {
      person.collapsed = true;
      if (person._parents) {
        person._parents.forEach(collapse);
      }
    }

    function expandChildren(datum) {
      datum.collapsed = false;
      if (datum._children) {
        datum.children = datum._children;
        datum.children.forEach(expandChildren);
        datum._children = null;
      }
    }

    function collapseChildren(datum) {
      datum.collapsed = true;
      if (datum.children) {
        datum._children = datum.children;
        datum._children.forEach(collapseChildren);
        datum.children = null;
      }
    }

    function zoomed() {
      svgGroup.attr("transform", d3.event.transform);
    }

    function personTreeHeight(root) {
      if (!root) return 0;
      if (!root.children || !root.children.length) return 1;
      return (
        1 +
        Math.max.apply(
          null,
          root.children.map((it) => personTreeHeight(it))
        )
      );
    }

    function resfreshFamilyTree(generationLimit) {}
  },
});
</script>