<script>
export default {
  // Disable automatic attribute inheritance, so that $attrs are
  // passed to the <input>, even if it's not the root element.
  // https://vuejs.org/v2/guide/components-props.html#Disabling-Attribute-Inheritance
  inheritAttrs: false,
  // Change the v-model event name to `update` to avoid changing
  // the behavior of the native `input` event.
  // https://vuejs.org/v2/guide/components-custom-events.html#Customizing-Component-v-model
  model: {
    event: 'update',
  },
  props: {
    label: {
      type: String,
      required: false,
      default: '',
    },
    name: {
      type: String,
      required: true,
      default: 'missing'
    },
    isRequired: {
      type: Boolean,
      required: true,
      default: false,
    },
    isValid: {
      type: Boolean,
      required: true,
      default: true,
    },
    errors: {
      type: Array,
      required: false,
      default: () => [],
    },
    type: {
      type: String,
      default: 'text',
      // Only allow types that essentially just render text boxes.
      validator(value) {
        return [
          'email',
          'number',
          'password',
          'search',
          'tel',
          'text',
          'url',
        ].includes(value)
      },
    },
  },
}
</script>

<template>
  <div 
    class="form-group"
    v-bind="
        $attrs
        // https://vuejs.org/v2/guide/components-props.html#Disabling-Attribute-Inheritance
      "
  >
    <label>{{ label }}: <span class="tx-danger" v-if="isRequired">*</span></label>       
    <input
      :type="type"
      class="form-control"
      :class="{ 'error': !isValid }"
      @input="$emit('validate', { evt: $event, name })"
      v-on="
        $listeners
        // https://vuejs.org/v2/guide/components-custom-events.html#Binding-Native-Events-to-Components
      "
    />
    <ul class="errors-list">
      <li v-for="(error, idx) in errors" :key="idx">{{ error }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .error {
    border-color: #dc3545;
  }
  ul.errors-list {
    color: #dc3545;
    list-style: none;
    font-size: 12px;
    padding: 0;
    margin-bottom: 0;
    li {
      margin: 5px 0 0;
    }
  }
</style>