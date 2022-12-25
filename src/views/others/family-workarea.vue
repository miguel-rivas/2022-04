<template>
  <div id="family-tree" />
</template>

<script>
import Vue from "vue";
import * as d3 from "d3/dist/d3.min";
import familyData from "@/db/family-tree";

export default Vue.extend({
  data: () => ({
    selection: {
      layerSpacing: 16,
      nodeSpacing: 32,
      verticalOrientation: false,
    },
    svgGroup: undefined,
    root: undefined,
    boxWidth: 250,
    boxHeight: 60,
    duration: 250,
    zoom: undefined,
    initTransform: undefined,
    svg: undefined,
    datumId: 0,
  }),
  created() {
    this.selection = this.$store.getters.getFamilySelection;
  },
  methods: {
    setNodeRectLayout(nodeBox) {
      return nodeBox
        .attr("x", -(this.boxWidth / 2))
        .attr("y", -(this.boxHeight / 2))
        .attr("width", this.boxWidth)
        .attr("height", this.boxHeight);
    },

    linkDataKey(link) {
      return link.target.id;
    },

    nodeDataKey(datum) {
      return datum.id || (datum.id = ++this.datumId);
    },

    togglePerson(datum) {
      if (datum.collapsed) {
        datum.collapsed = false;
        this.expandChildren(datum);
      } else {
        this.collapseChildren(datum);
      }
      this.updateTidyTree(datum);
    },

    elbow(d) {
      let sourceX = d.source.x,
        sourceY = d.source.y + this.boxWidth / 2,
        targetX = d.target.x,
        targetY = d.target.y - this.boxWidth / 2;

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
    },
    linkVertical(d) {
      let sourceX = d.source.x,
        sourceY = d.source.y + this.boxHeight / 2,
        targetX = d.target.x,
        targetY = d.target.y - this.boxHeight / 2;
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
    },

    drawHierarchicalData(hierarchicalData) {
      this.root = d3.hierarchy(hierarchicalData);
      this.root.x0 = 0;
      this.root.y0 = 0;
      this.updateTidyTree(this.root);
    },

    expandChildren(datum) {
      datum.collapsed = false;
      if (datum._children) {
        datum.children = datum._children;
        datum.children.forEach(this.expandChildren);
        datum._children = null;
      }
    },

    collapseChildren(datum) {
      datum.collapsed = true;
      if (datum.children) {
        datum._children = datum.children;
        datum._children.forEach(this.collapseChildren);
        datum.children = null;
      }
    },

    zoomed() {
      this.svgGroup.attr("transform", d3.event.transform);
    },

    personTreeHeight(root) {
      if (!root) return 0;
      if (!root.children || !root.children.length) return 1;
      return (
        1 +
        Math.max.apply(
          null,
          root.children.map((it) => this.personTreeHeight(it))
        )
      );
    },

    updateTidyTree(source) {
      this.datumId = 0;
      const vertical = this.selection.verticalOrientation;
      let buildLinkPath = vertical
        ? this.linkVertical
        : this.elbow;
      let nodeSize = [
        this.boxWidth + this.selection.nodeSpacing,
        this.boxHeight + this.selection.layerSpacing,
      ];
      let tree = d3
        .tree()
        .separation(function (a, b) {
          return 1;
        })
        .nodeSize(
          vertical ? nodeSize : nodeSize.reverse()
        );

      let treeData = tree(this.root);
      let nodes = treeData.descendants(),
        links = treeData.links();

      let nodesUpdate = this.svgGroup
        .selectAll("g.person")
        .data(nodes, this.nodeDataKey);

      let nodesEnter = nodesUpdate
        .enter()
        .append("g")
        .attr("id", (datum) => datum?.data?.id)
        .attr("class", (datum) => {
          const classes = ["person"];
          if (datum?.data?.group) {
            classes.push(datum.data.group);
          }
          return classes.join(" ");
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
        .on("click", this.togglePerson);
      this.setNodeRectLayout(nodesEnter.append("rect"));
      nodesEnter
        .append("text")
        .attr("dy", -4)
        .attr("text-anchor", "middle")
        .attr("class", "name")
        .text(function (datum) {
          let name = datum?.data?.name?.length
            ? datum.data.name.join(" ")
            : "--";
          if (datum?.data?.preferedName) {
            name = datum.data.preferedName;
          }
          return name;
        });
      nodesEnter
        .append("text")
        .attr("dy", 14)
        .attr("text-anchor", "middle")
        .attr("class", "family-name")
        .text(function (datum) {
          return datum?.data?.familyName?.length
            ? datum.data.familyName.join(" ")
            : "--";
        });
      {
        nodesUpdate
          .merge(nodesEnter)
          .transition("SlideShow")
          .duration(this.duration)
          .attr("transform", function (datum, index) {
            return (
              "translate(" +
              (vertical
                ? datum.x + "," + datum.y
                : datum.y + "," + datum.x) +
              ")"
            );
          })
          .style("opacity", 1);
      }
      nodesUpdate
        .exit()
        .transition()
        .duration(this.duration)
        .attr("transform", function (datum) {
          return (
            "translate(" +
            (vertical
              ? source.x + "," + source.y
              : source.y + "," + source.x) +
            ")"
          );
        })
        .style("opacity", 0)
        .remove();

      let linksUpdate = this.svgGroup
        .selectAll("path.link")
        .data(links, this.linkDataKey);

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
        .duration(this.duration)
        .attr("d", buildLinkPath)
        .style("opacity", 1);

      linksUpdate
        .exit()
        .transition()
        .duration(this.duration)
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
    },
  },
  mounted() {
    this.zoom = d3
      .zoom()
      .scaleExtent([0.1, 2])
      .on("zoom", this.zoomed)
      .extent([
        [0, 0],
        [0, 0],
      ]);

    this.initTransform = d3.zoomIdentity.translate(0, 0);
    this.svg = d3
      .select("#family-tree")
      .append("svg")
      .attr("width", 1)
      .attr("height", 1)
      .attr("class", "overlay printable")
      .call(this.zoom);
    this.svg
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

    this.svgGroup = this.svg.append("g");
    this.svg.call(this.zoom.transform, this.initTransform);
    this.drawHierarchicalData(familyData);
  },
});
</script>