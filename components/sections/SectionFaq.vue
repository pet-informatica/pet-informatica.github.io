<template>
  <section>
    <div class="relative bg-linho overflow-hidden">
      <a name="perguntas-frequentes"></a>
      <div class="max-w-7xl mx-auto">
        <div class="p-8">
          <ElementSectionTitle>
            <span class="text-laranja-internacional">Perguntas</span> frequentes
          </ElementSectionTitle>

          <ul class="grid grid-cols sm:grid-cols-2 pt-8 gap-12">
            <li
              v-for="faqEntry of faqEntries"
              :key="faqEntry.question"
              class="w-full"
            >
              <p
                class="text-lg font-bold leading-6 text-perola-negra"
                v-html="faqEntry.question"
              ></p>
              <p
                class="text-base font-body leading-6 text-perola-negra mt-2"
                v-html="faqEntry.answer"
              ></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { PetWebsiteFaqEntry } from './../../assets/content-model/content-model'

export default Vue.extend({
  props: {
    faqEntries: {
      type: Array as () => PetWebsiteFaqEntry[],
      required: true,
    },
  },
})
</script>
