import Vue from "vue";
import {
  getVals,
  cssWClass,
  cssHClass,
} from "nano-grid/modules/columns-manager";

export default Vue.extend({
  data: () => ({
    selection: { columns: [] },
    cssWClass,
    cssHClass,
  }),
  created() {
    this.cssWClass.shift(),
      this.selection = this.$store.getters.getGridSelection;
  },
  methods: {
    getWidth(rawWidth) {
      const width = this.cssWClass[rawWidth];
      const decimal = width[0] / width[1];
      const fraction = `${width[0]}/${width[1]}`;
      let percent;
      if (parseInt(decimal * 100) === (decimal * 100)) {
        percent = `${+(decimal * 100).toFixed(2)}%`;
      }

      return { percent, fraction, decimal: decimal.toFixed(2) };
    },
    getHeight(rawHeight) {
      const height = this.cssHClass[rawHeight];
      const decimal = height[0] / height[1];
      const fraction = `${height[0]}/${height[1]}`;
      let percent;
      if (parseInt(decimal * 100) === (decimal * 100)) {
        percent = `${+(decimal * 100).toFixed(2)}%`;
      }

      return { percent, fraction, decimal: decimal.toFixed(2) };
    },
    getColumnHeight(height, absoluteHeight) {
      if (typeof height !== 'undefined') {
        let computedSize = "";
        if (height > 0) {
          computedSize += ", ";
          if (absoluteHeight) {
            computedSize += height;
          } else {
            if (height > this.cssHClass.lenght - 1) {
              computedSize += this.getHeight(this.cssHClass.length - 1).fraction + "vh";
            } else {
              computedSize += this.getHeight(height).fraction + "vh";
            }
          }
        }
        return computedSize;
      } else {
        return '0';
      }
    },
    getColumnWidth(width, widthSubtraction, absoluteWidth) {
      if (typeof width !== 'undefined') {
        let computedSize = "";
        if (absoluteWidth) {
          computedSize += width;
        } else {
          if (width > this.cssWClass.length - 1) {
            computedSize += this.getWidth(this.cssWClass.length - 1).fraction;
          } else {
            computedSize += this.getWidth(width).fraction;
          }
        }
        if (widthSubtraction > 0) {
          computedSize += ` - ${widthSubtraction}`;
        }
        return computedSize;
      } else {
        return '0';
      }
    },
    getColumnSize(newValues) {
      const width = newValues.width;
      const widthSubtraction = newValues.widthSubtraction;
      const height = newValues.height;
      const absoluteHeight = height > this.cssHClass.length - 1 ? true : newValues.absoluteHeight || false;
      const absoluteWidth = width > this.cssWClass.length - 1 ? true : newValues.absoluteWidth || false;

      let computedSize = this.getColumnWidth(
        width,
        widthSubtraction,
        absoluteWidth
      );

      computedSize += this.getColumnHeight(height, absoluteHeight);

      return { computedSize, columnClass: getVals(computedSize).class, columnStyle: getVals(computedSize).style };
    },
  },
});