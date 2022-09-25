<template>
  <nn-scroll-area nn-color="royal-purple">
    <nn-container>
      <header>
        <logo class="mb-logo" />
        <h1 :class="{ 'compress-title': animateTitle }">
          <span class="stay">N</span>
          <span>A</span>
          <span class="stay">N</span>
          <span>O</span>
          <span>&nbsp;</span>
          <span>G</span>
          <span>R</span>
          <span>I</span>
          <span>D</span>
          <logo class="dt-logo" />
        </h1>

        <h2>Start building apps fast and easy</h2>
        <p>
          Frontend toolkit powered by
          <nn-crayon tag="strong" color="blush" class="nn-blush">CSS</nn-crayon>
          and
          <nn-crayon tag="strong" color="burn-orange" class="nn-burn-orange"
            >Javascript</nn-crayon
          >.
        </p>

        <nn-row nn-breakpoint="lg" nn-spacing="0.5" class="install-pills">
          <nn-column nn-size="1/4">
            <nn-btn
              @click="switchInstallTab('webComponent')"
              nn-text="Web Component"
              :nn-color="
                installBox.selected === 'webComponent'
                  ? 'green-pea'
                  : 'shamrock'
              "
            />
          </nn-column>
          <nn-column nn-size="1/4">
            <nn-btn
              @click="switchInstallTab('cssVars')"
              nn-text="CSS Variables"
              :nn-color="
                installBox.selected === 'cssVars' ? 'green-pea' : 'shamrock'
              "
            />
          </nn-column>
          <nn-column nn-size="1/4">
            <nn-btn
              @click="switchInstallTab('sass')"
              nn-text="Sass"
              :nn-color="installBox.selected === 'sass' ? 'green-pea' : 'shamrock'"
            />
          </nn-column>
          <nn-column nn-size="1/4">
            <nn-btn
              @click="switchInstallTab('flexbox')"
              nn-text="Flexbox"
              :nn-color="
                installBox.selected === 'flexbox' ? 'green-pea' : 'shamrock'
              "
            />
          </nn-column>
        </nn-row>

        <spirit
          :text="installBox.mode[installBox.selected].example"
          :lang="installBox.mode[installBox.selected].mode"
        />

        <nn-row class="install" nn-breakpoint="lg">
          <nn-column nn-size="100%-100*3">
            <span class="nn-label nn-input-color">
              <template v-if="pmanager === 'yarn'">
                yarn add nano-grid
              </template>
              <template v-else-if="pmanager === 'npm'">
                npm install nano-grid
              </template>
              <template v-else-if="pmanager === 'clone'">
                git clone https://github.com/nano-grid/nano-grid.git
              </template>
            </span>
          </nn-column>
          <nn-column nn-size="100">
            <nn-btn
              nn-text="Yarn"
              @click="togglePackageManager('yarn')"
              :nn-color="pmanager === 'yarn' ? 'denim' : 'charcoal'"
            />
          </nn-column>
          <nn-column nn-size="100">
            <nn-btn
              nn-text="NPM"
              @click="togglePackageManager('npm')"
              :nn-color="pmanager === 'npm' ? 'persian-red' : 'charcoal'"
            />
          </nn-column>
          <nn-column nn-size="100">
            <nn-btn
              nn-mode="flat"
              nn-text="Clone"
              :nn-color="pmanager === 'clone' ? 'royal-purple' : 'charcoal'"
              @click="togglePackageManager('clone')"
            />
          </nn-column>
        </nn-row>
      </header>

      <div class="nn-box">
        <h2>Test your layout</h2>

        <div class="nn-shade grid-row-preview">
          <nn-row
            :nn-group="rowSettings.group"
            :nn-grid="rowSettings.grid"
            :nn-spacing="rowSettings.spacing"
          >
            <template v-for="(row, rowIndex) in grid">
              <nn-column :nn-size="row.size" :key="'row-' + rowIndex">
                <nn-btn
                  :nn-round="rowSettings.round"
                  :nn-mode="rowSettings.mode"
                  :nn-color="row.color"
                  :nn-text="'' + (rowIndex + 1)"
                  title="Remove Column"
                  @click.passive="removeRow(rowIndex)"
                />
              </nn-column>
            </template>
          </nn-row>
        </div>

        <hr />

        <nn-row class="nn-shade" nn-breakpoint="lg">
          <nn-column nn-size="1/4">
            <nn-container class="nn-box">
              <div class="nn-label">Row Settings</div>
              <nn-row>
                <nn-column nn-size="100%">
                  <nn-btn
                    nn-text="Group"
                    nn-color="burn-orange"
                    :nn-active="rowSettings.group"
                    @click.passive="toggleRowSettings('group')"
                  />
                </nn-column>
              </nn-row>
              <nn-row>
                <nn-column nn-size="100%">
                  <nn-btn
                    nn-text="Grid"
                    nn-color="burn-orange"
                    :nn-active="rowSettings.grid"
                    @click.passive="toggleRowSettings('grid')"
                  />
                </nn-column>
              </nn-row>
              <nn-row v-if="!rowSettings.grid">
                <nn-column nn-size="100%-50">
                  <input
                    type="range"
                    class="nn-range nn-cobalt-blue"
                    min="0"
                    max="4"
                    step="0.25"
                    v-model="rowSettings.spacing"
                  />
                </nn-column>
                <nn-column nn-size="50">
                  <input
                    type="text"
                    class="nn-input"
                    v-model="rowSettings.spacing"
                  />
                </nn-column>
              </nn-row>

              <hr />
              <div class="nn-label">Button Settings</div>
              <nn-row>
                <nn-column nn-size="100%">
                  <nn-btn
                    nn-text="Round"
                    nn-color="burn-orange"
                    :nn-active="rowSettings.round"
                    @click.passive="toggleRowSettings('round')"
                  />
                </nn-column>
              </nn-row>

              <hr />

              <nn-row>
                <nn-column nn-size="100%">
                  <nn-btn
                    nn-text="Flat"
                    nn-color="gold-tips"
                    :nn-active="rowSettings.mode === 'flat'"
                    @click.passive="switchMode('flat')"
                  />
                </nn-column>
              </nn-row>
              <nn-row>
                <nn-column nn-size="100%">
                  <nn-btn
                    nn-text="Outline"
                    nn-color="gold-tips"
                    :nn-active="rowSettings.mode === 'outline'"
                    @click.passive="switchMode('outline')"
                  />
                </nn-column>
              </nn-row>
              <nn-row>
                <nn-column nn-size="100%">
                  <nn-btn
                    nn-text="Ghost"
                    nn-color="gold-tips"
                    :nn-active="rowSettings.mode === 'ghost'"
                    @click.passive="switchMode('ghost')"
                  />
                </nn-column>
              </nn-row>
              <nn-row>
                <nn-column nn-size="100%">
                  <nn-btn
                    nn-text="Nav"
                    nn-color="gold-tips"
                    :nn-active="rowSettings.mode === 'nav'"
                    @click.passive="switchMode('nav')"
                  />
                </nn-column>
              </nn-row>

              <hr />
              <div class="nn-label">Presets</div>
              <nn-row>
                <nn-column nn-size="100%">
                  <nn-btn
                    nn-text="Search Bar"
                    nn-color="gold-tips"
                    :nn-active="isSimilarObject('searchBar')"
                    @click.passive="setGrid(def.searchBar)"
                  />
                </nn-column>
              </nn-row>
              <nn-row>
                <nn-column nn-size="100%">
                  <nn-btn
                    nn-text="Pride"
                    nn-color="gold-tips"
                    :nn-active="isSimilarObject('rainbow')"
                    @click.passive="setGrid(def.rainbow)"
                  />
                </nn-column>
              </nn-row>
              <nn-row>
                <nn-column nn-size="100%">
                  <nn-btn
                    nn-text="Magnet"
                    nn-color="gold-tips"
                    :nn-active="isSimilarObject('magnet')"
                    @click.passive="setGrid(def.magnet)"
                  />
                </nn-column>
              </nn-row>
              <nn-row>
                <nn-column nn-size="100%">
                  <nn-btn
                    nn-text="Esperanto"
                    nn-color="gold-tips"
                    :nn-active="isSimilarObject('esperanto')"
                    @click.passive="setGrid(def.esperanto)"
                  />
                </nn-column>
              </nn-row>
              <nn-row>
                <nn-column nn-size="100%">
                  <nn-btn
                    nn-text="Dominican Republic"
                    nn-color="gold-tips"
                    :nn-active="isSimilarObject('dr')"
                    @click.passive="setGrid(def.dr)"
                  />
                </nn-column>
              </nn-row>
              <nn-row>
                <nn-column nn-size="100%">
                  <nn-btn
                    nn-text="All Colors"
                    nn-color="gold-tips"
                    :nn-active="isSimilarObject('all')"
                    @click.passive="setGrid(def.all)"
                  />
                </nn-column>
              </nn-row>

              <hr />

              <nn-row>
                <nn-column nn-size="100%">
                  <nn-btn
                    nn-text="+ Add column"
                    nn-color="burn-orange"
                    @click.passive="addRow()"
                  />
                </nn-column>
              </nn-row>
            </nn-container>
          </nn-column>

          <nn-column nn-size="3/4">
            <nn-row nn-breakpoint="lg">
              <template v-for="(rowController, rowCIndex) in grid">
                <nn-column
                  :key="'row-' + rowCIndex"
                  :nn-size="grid.length < 3 ? '1/' + grid.length : '1/3'"
                >
                  <nn-container>
                    <nn-row>
                      <nn-column nn-size="100%">
                        <nn-btn
                          title="Remove Column"
                          :nn-color="rowController.color"
                          :nn-round="rowSettings.round"
                          :nn-text="rowCIndex + 1"
                          :nn-mode="rowSettings.mode"
                          @click.passive="removeRow(rowCIndex)"
                        />
                      </nn-column>
                    </nn-row>

                    <nn-row>
                      <nn-column nn-size="70">
                        <label :for="`size-${rowCIndex}`" class="nn-label">
                          Size:
                        </label>
                      </nn-column>

                      <nn-column nn-size="100%-70">
                        <input
                          class="nn-input"
                          type="text"
                          v-model="rowController.size"
                          :id="`size-${rowCIndex}`"
                        />
                      </nn-column>
                    </nn-row>

                    <nn-row>
                      <nn-column nn-size="70">
                        <label :for="`color-${rowCIndex}`" class="nn-label">
                          Color:
                        </label>
                      </nn-column>

                      <nn-column nn-size="100%-70">
                        <select
                          class="nn-input"
                          :id="`color-${rowCIndex}`"
                          v-model="rowController.color"
                        >
                          <template v-for="(color, colorIndex) in gColorsDB">
                            <option
                              :value="color.label"
                              :key="`color-${colorIndex}`"
                            >
                              {{ color.titleCase }}
                            </option>
                          </template>
                        </select>
                      </nn-column>
                    </nn-row>
                  </nn-container>
                </nn-column>
              </template>
            </nn-row>
          </nn-column>
        </nn-row>
      </div>

      <nano-footer />
    </nn-container>
  </nn-scroll-area>
</template>

<script>
import Vue from "vue";
import Spirit from "@/components/spirit.vue";
import { gColorsDB } from "@/db/colors";
import def from "@/db/nanogrid/grid-settings";
import logo from "@/svg/nano-grid.vue";
import nanoFooter from "@/components/nanogrid/footer.vue";
import installBoxMode from "@/db/nanogrid/install-box";

export default Vue.extend({
  components: { Spirit, logo, nanoFooter },
  data: () => ({
    pmanager: "yarn",
    grid: [],
    def,
    gColorsDB,
    animateTitle: false,
    rowSettings: {
      group: false,
      mode: "flat",
      spacing: 0,
      grid: false,
      round: true,
    },
    installBox: {
      selected: "webComponent",
      mode: installBoxMode,
    },
    timer: undefined,
  }),
  created() {
    this.grid = [...this.def.searchBar];
    this.timer = setInterval(() => {
      this.animateTitle = !this.animateTitle;
    }, 10000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  computed: {
    reachLimit() {
      return this.grid.length < 2;
    },
  },
  methods: {
    isSimilarObject(setting) {
      return JSON.stringify(this.grid) === JSON.stringify(this.def[setting]);
    },
    removeRow(index) {
      if (!this.reachLimit) {
        this.grid.splice(index, 1);
      }
    },
    addRow() {
      const newColumn = this.grid[this.grid.length - 1];
      this.grid.push(newColumn);
    },
    setGrid(def) {
      this.grid = [];

      def.forEach((element) => {
        this.grid.push({ size: element.size, color: element.color });
      });
    },
    toggleRowSettings(property) {
      this.rowSettings[property] = !this.rowSettings[property];
      if (property === "round" && this.rowSettings.round) {
        this.rowSettings.group = false;
      }
      if (property === "group" && this.rowSettings.group) {
        this.rowSettings.round = false;
      }
      if (property === "grid") {
        this.rowSettings.spacing = 0;
      }
    },
    togglePackageManager(value) {
      this.pmanager = value;
    },
    switchMode(mode) {
      this.rowSettings.mode = mode;
    },
    switchInstallTab(mode) {
      this.installBox.selected = mode;
    },
  },
});
</script>

