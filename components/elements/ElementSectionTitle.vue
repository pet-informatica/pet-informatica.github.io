<template>
  <div>
    <h2 class="text-2xl sm:text-3xl font-bold text-perola-negra lowercase">
      <slot></slot>
    </h2>
    <svg class="fill-current text-laranja-internacional" width="72" height="12">
      <rect x="0" y="8" width="72" height="4" />
    </svg>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
