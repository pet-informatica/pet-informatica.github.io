<template>
  <section>
    <div class="relative bg-linho overflow-hidden">
      <a name="atividades"></a>
      <div class="max-w-7xl mx-auto">
        <div class="p-8">
          <ElementSectionTitle>
            Nossas <span class="text-laranja-internacional">atividades</span>
          </ElementSectionTitle>

          <div
            class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 pt-8"
          >
            <div
              v-for="activity in activities"
              :key="activity.title"
              class="bg-branco overflow-hidden shadow-md rounded-lg w-full h-full flex flex-col flex-1 m-auto"
            >
              <img
                v-if="activity.images && activity.images[0]"
                :src="activity.images[0].url"
                :alt="activity.images[0].alternativeText"
                class="max-h-40 w-full object-cover"
              />
              <div class="bg-white w-full p-4 flex-grow">
                <p class="text-laranja-internacional text-xl font-bold mb-2">
                  {{ activity.title }}
                </p>
                <p
                  class="text-perola-negra font-body text-sm"
                  v-html="activity.text"
                ></p>
              </div>
              <a
                  v-if="activity.callToAction"
                  :href="activity.callToAction.url"
                  class="flex items-center justify-between px-4 py-3 mx-4 mb-4 border border-transparent rounded-md shadow-md text-sm font-bold text-linho bg-laranja-internacional hover:bg-laranja-internacional-dark transition-colors"
              >
                {{ activity.callToAction.text }}
                <i class="ri-external-link-fill text-md"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { PetWebsiteActivity } from '~/assets/content-model/content-model'

export default Vue.extend({
  props: {
    activities: {
      type: Array as () => PetWebsiteActivity[],
      required: true,
    },
  },
})
</script>
