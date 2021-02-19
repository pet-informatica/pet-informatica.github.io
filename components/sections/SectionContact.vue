<template>
  <footer>
    <div class="relative bg-linho overflow-hidden">
      <a name="contato"></a>
      <div class="max-w-7xl mx-auto">
        <div class="p-8">
          <div class="grid grid-cols sm:grid-cols-2 gap-2">
            <div class="pb-8">
              <ElementSectionTitle>
                <span class="text-laranja-internacional">Contato</span>
              </ElementSectionTitle>
              <ul class="mt-10 text-md font-medium">
                <li
                  v-for="contactUrl in contactUrls"
                  :key="contactUrl.name"
                  class="py-2"
                >
                  <a
                    :href="contactUrl.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex text-laranja-internacional hover:text-laranja-internacional-dark transition-colors"
                  >
                    <i :class="contactUrl.icon + ' text-2xl -mt-1'"></i>
                    <span class="sr-only">contactUrl.name</span>
                    <span class="ml-4">{{ contactUrl.label }}</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="pb-8">
              <ElementSectionTitle>
                <span class="text-laranja-internacional">Links</span>
              </ElementSectionTitle>

              <ul class="mt-10 text-md font-medium">
                <li
                  v-for="externalLink in externalLinks"
                  :key="externalLink.text"
                  class="py-2"
                >
                  <a
                    :href="externalLink.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex text-laranja-internacional hover:text-laranja-internacional-dark transition-colors"
                  >
                    <i class="ri-external-link-fill"></i>
                    <span class="ml-4">{{ externalLink.text }}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative">
      <div class="sm:absolute bottom-0 left-0 w-full">
        <div
          class="max-w-7xl mx-auto flex flex-col justify-center sm:pb-8 lg:pb-16"
        >
          <img
            alt="Logo do PET-Informática"
            class="sm:hidden h-8 w-auto px-8 self-start"
            src="images/logos/pet-primary-signature-light.svg"
          />
          <img
            alt="Logo do PET-Informática"
            class="hidden sm:block h-8 w-auto md:h-16"
            src="images/logos/pet-horizontal-mono-white.svg"
          />
          <p
            class="text-perola-negra text-sm sm:text-md sm:text-center sm:text-linho px-8 pt-4 pb-12 sm:py-8"
          >
            2021. Feito com ❤ pelo PET-Informática.
          </p>
        </div>
      </div>
      <ElementWaves />
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  PetWebsiteContactUrl,
  PetWebsiteExternalLink,
} from '~/assets/content-model/content-model'

export default Vue.extend({
  props: {
    contactUrls: {
      type: Array as () => PetWebsiteContactUrl[],
      required: true,
    },
    externalLinks: {
      type: Array as () => PetWebsiteExternalLink[],
      required: true,
    },
  },
})
</script>
