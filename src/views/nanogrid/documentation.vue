<template>
  <nn-scroll-area color="royal-purple">
    <nn-container>
      <header>
        <h1>Dictionary</h1>
      </header>
      <div class="nn-box">
        <h2>Components</h2>

        <nn-row breakpoint="lg" grid>
          <template v-for="(item, itemIndex) in componentes">
            <nn-column size="1/4" :key="'itemIndex' + itemIndex">
              <span class="nn-label">
                {{ item.key }}
              </span>
            </nn-column>
          </template>
        </nn-row>
      </div>

      <div class="nn-box">
        <h2>Row Settings</h2>
        <div class="table" role="table">
          <div class="table-head" role="rowgroup">
            <nn-row table-element breakpoint="lg">
              <nn-column table-element size="1/2">Keyword</nn-column>
              <nn-column table-element size="1/2">Description</nn-column>
            </nn-row>
          </div>
          <div class="table-body" role="rowgroup">
            <template v-for="(item, itemIndex) in rows">
              <nn-row
                table-element
                breakpoint="lg"
                :key="'itemIndex' + itemIndex"
              >
                <nn-column table-element size="1/2">
                  {{ item.key }}
                </nn-column>
                <nn-column table-element size="1/2">
                  {{ item.description }}
                </nn-column>
              </nn-row>
            </template>
          </div>
        </div>
      </div>

      <div class="nn-box">
        <h2>Column Settings</h2>
        <div class="table" role="table">
          <div class="table-head" role="rowgroup">
            <nn-row table-element breakpoint="lg">
              <nn-column table-element size="1/2">Keyword</nn-column>
              <nn-column table-element size="1/2">Description</nn-column>
            </nn-row>
          </div>
          <div class="table-body" role="rowgroup">
            <template v-for="(item, itemIndex) in columns">
              <nn-row
                table-element
                breakpoint="lg"
                :key="'itemIndex' + itemIndex"
              >
                <nn-column table-element size="1/2">
                  {{ item.key }}
                </nn-column>
                <nn-column table-element size="1/2">
                  <span v-html="item.description" />
                </nn-column>
              </nn-row>
            </template>
          </div>
        </div>
      </div>

      <div class="nn-box">
        <h2>Button Settings</h2>
        <div class="table" role="table">
          <div class="table-head" role="rowgroup">
            <nn-row table-element breakpoint="lg">
              <nn-column table-element size="1/2">Keyword</nn-column>
              <nn-column table-element size="1/2">Description</nn-column>
            </nn-row>
          </div>
          <div class="table-body" role="rowgroup">
            <template v-for="(item, itemIndex) in buttons">
              <nn-row
                table-element
                breakpoint="lg"
                :key="'itemIndex' + itemIndex"
              >
                <nn-column table-element size="1/2">
                  {{ item.key }}
                </nn-column>
                <nn-column table-element size="1/2">
                  {{ item.description }}
                </nn-column>
              </nn-row>
            </template>
          </div>
        </div>
      </div>

      <div class="nn-box">
        <h2>Scroll Area Settings</h2>
        <div class="table" role="table">
          <div class="table-head" role="rowgroup">
            <nn-row table-element breakpoint="lg">
              <nn-column table-element size="1/2">Keyword</nn-column>
              <nn-column table-element size="1/2">Description</nn-column>
            </nn-row>
          </div>
          <div class="table-body" role="rowgroup">
            <template v-for="(item, itemIndex) in scrollarea">
              <nn-row
                table-element
                breakpoint="lg"
                :key="'itemIndex' + itemIndex"
              >
                <nn-column table-element size="1/2">
                  {{ item.key }}
                </nn-column>
                <nn-column table-element size="1/2">
                  {{ item.description }}
                </nn-column>
              </nn-row>
            </template>
          </div>
        </div>
      </div>

      <div class="nn-box">
        <h2>Container Settings</h2>
        <div class="table" role="table">
          <div class="table-head" role="rowgroup">
            <nn-row table-element breakpoint="lg">
              <nn-column table-element size="1/2">Keyword</nn-column>
              <nn-column table-element size="1/2">Description</nn-column>
            </nn-row>
          </div>
          <div class="table-body" role="rowgroup">
            <template v-for="(item, itemIndex) in containers">
              <nn-row
                table-element
                breakpoint="lg"
                :key="'itemIndex' + itemIndex"
              >
                <nn-column table-element size="1/2">
                  {{ item.key }}
                </nn-column>
                <nn-column table-element size="1/2">
                  {{ item.description }}
                </nn-column>
              </nn-row>
            </template>
          </div>
        </div>
      </div>

      <div class="nn-box">
        <h2>Colors</h2>

        <nn-row breakpoint="lg" grid>
          <template v-for="(item, itemIndex) in colors">
            <nn-column size="1/4" :key="'itemIndex' + itemIndex">
              <span :class="['nn-label', item]">
                {{ item }}
              </span>
            </nn-column>
          </template>
        </nn-row>

        <br />

        <div class="nn-shade">
          <p><em>And an extra color just for the label component</em></p>

          <nn-row breakpoint="lg">
            <nn-column size="1/4">
              <span class="nn-label nn-input-color"> nn-input-color </span>
            </nn-column>
          </nn-row>
        </div>
      </div>

      <nano-footer />
    </nn-container>
  </nn-scroll-area>
</template>

<script>
import Vue from "vue";
import nanoFooter from "@/components/nanogrid/footer.vue";
import * as installation from "@/db/nanogrid/installation";

export default Vue.extend({
  components: { nanoFooter },
  data: () => ({
    containers: installation.containers,
    columns: installation.columns,
    rows: installation.rows,
    buttons: installation.buttons,
    scrollarea: installation.scrollarea,
    colors: installation.colors,
    componentes: installation.componentes,
  }),
});
</script>