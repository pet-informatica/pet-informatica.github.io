<template>
  <div
    v-if="!dismissed && announcement && announcement.visible"
    :class="backgroundColor[announcement.colorScheme]"
  >
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between flex-wrap">
        <div class="w-0 flex-1 flex items-center">
          <span
            :class="
              'flex p-2 rounded-lg ' + textColor[announcement.colorScheme]
            "
          >
            <i class="ri-rss-fill"></i>
          </span>
          <p :class="'ml-3 truncate ' + textColor[announcement.colorScheme]">
            <span class="md:hidden" v-html="announcement.shortDescription">
            </span>
            <span
              class="hidden md:inline"
              v-html="announcement.longDescription"
            >
            </span>
          </p>
        </div>
        <div
          v-if="announcement.callToAction"
          class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"
        >
          <a
            :href="announcement.callToAction.url"
            :class="
              'flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-bold transition-colors ' +
              buttonColorScheme[announcement.colorScheme]
            "
          >
            {{ announcement.callToAction.text }}
          </a>
        </div>
        <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
          <button
            type="button"
            class="-mr-1 flex p-2 rounded-md hover:bg-perola-negra hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-linho sm:-mr-2 transition-colors"
            @click="dismissed = !dismissed"
          >
            <span class="sr-only">Fechar</span>
            <i
              :class="'ri-close-line ' + textColor[announcement.colorScheme]"
            ></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PetWebsiteAnnouncementData } from '../../assets/content-model/content-model'

export default Vue.extend({
  props: {
    announcement: {
      type: Object as () => PetWebsiteAnnouncementData,
      required: true,
    },
  },
  data() {
    return {
      dismissed: false,
      backgroundColor: {
        'laranja-internacional': 'bg-laranja-internacional',
        'laranja-chama': 'bg-laranja-chama',
        'laranja-gradiente': 'bg-gradient-to-r from-laranja-internacional to-laranja-chama',
        'mar-amarelo': 'bg-mar-amarelo',
        'ouro': 'bg-ouro',
        'perola-negra': 'bg-perola-negra',
        'bondi-blue': 'bg-bondi-blue',
        'pompadour': 'bg-pompadour',
        'rosa-francesa': 'bg-rosa-francesa',
      },
      textColor: {
        'laranja-internacional': 'text-linho',
        'laranja-chama': 'text-linho',
        'laranja-gradiente': 'text-linho',
        'mar-amarelo': 'text-perola-negra',
        'ouro': 'text-perola-negra',
        'perola-negra': 'text-linho',
        'bondi-blue': 'text-perola-negra',
        'pompadour': 'text-linho',
        'rosa-francesa': 'text-linho',
      },
      buttonColorScheme: {
        'laranja-internacional': 'text-perola-negra bg-linho hover:bg-linho-dark',
        'laranja-chama': 'text-perola-negra bg-linho hover:bg-linho-dark',
        'laranja-gradiente': 'text-perola-negra bg-linho hover:bg-linho-dark',
        'mar-amarelo': 'text-linho bg-perola-negra hover-bondi-blue',
        'ouro': 'text-linho bg-perola-negra hover-bondi-blue',
        'perola-negra': 'text-perola-negra bg-linho hover:bg-linho-dark',
        'bondi-blue': 'text-perola-negra bg-linho hover:bg-linho-dark',
        'pompadour': 'text-perola-negra bg-linho hover:bg-linho-dark',
        'rosa-francesa': 'text-linho bg-perola-negra hover-bondi-blue',
      },
    }
  },
})
</script>
