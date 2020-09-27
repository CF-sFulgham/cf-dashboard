<script>
export default {
  props: {
    mode: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
      default: () => []
    },
    title: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      radio: 'no',
      navRadio: 'Sidebar'
    }
  },
  methods: {
    onChange(evt) {
      evt.preventDefault();
      evt.stopImmediatePropagation();
      console.log(evt)
      const $elem = evt.target || evt.srcElement
      const $name = $elem.name
      const $val = $elem.value === "yes"

      switch($name){
        case 'sticky-header':
          this.setSettings({val: $val, name: 'slim-sticky-header'})
          break;
        case 'full-width':
          this.setSettings({val: $val, name: 'slim-full-width'})
          break;
        case 'skin-light-mode':
        case 'skin-dark-mode':
          this.setSettings({val: $name === 'skin-dark-mode', name: 'dark'})
          break;
        default:
          break;
      }
    },
    setSettings(setting) {
      const $body = document.getElementById('app-body');
      setting.val ?
            $body.classList.add(setting.name) :
            $body.classList.remove(setting.name);
    }
  }
}
</script>

<template>
  <section class="option-row-wrapper" :class="mode === 'radio-d' ? `d-block ${$style.fieldset}` : `${$style.fieldset}`">
    <label class="slim-options-label" :class="$style.legendFont">{{title}}:</label>
    <section v-if="mode === 'skin'" :class="$style.items">
      <div v-for="(option, idx) in options" :key="idx" class="skin-mode-item">
        <a href="" :class="option.name" :name="option.name" @click="onChange"></a>
      </div>
      <!-- skin-mode-item -->
    </section>
    <section v-if="mode === 'radio'" :class="$style.items">
      <label v-for="(option, idx) in options" :key="idx" class="rdiobox">
        <input
          v-model="radio"
          :name="option.name"
          :class="option.name"
          type="radio"
          :value="option.value"
          @change="onChange"
        />
        <span>{{option.value}}</span>
      </label>
    </section>
    <section v-if="mode === 'radio-d'" :class="`mg-t-10 ${$style.items}`">
      <label v-for="(option, idx) in options" :key="idx" class="rdiobox" :class="idx === 0 ? 'm-0' : ''">
        <input
          v-model="navRadio"
          :name="option.name"
          :class="option.name"
          type="radio"
          :value="option.value"
          @change="onChange"
        />
        <span>{{option.value}}</span>
      </label>
    </section>
  </section>
</template>

<style lang="scss" module>
  .fieldset {
    flex-direction: row;
  }
  .items {
    display: inline-flex !important;
  }
  .legendFont {
    font-size: 12px;
  }
</style>
