<template>
  <section>
    <div class="relative bg-linho overflow-hidden">
      <a name="quem-somos"></a>
      <div class="max-w-7xl mx-auto">
        <div class="p-8">
          <ElementSectionTitle>
            Quem <span class="text-laranja-internacional">somos</span>
          </ElementSectionTitle>

          <nav class="flex flex-row pt-8" role="tablist">
            <button
              role="tab"
              aria-controls="pet-members"
              :aria-selected="selectedOption === 'current'"
              :class="
                selectedOption === 'current'
                  ? buttonStyle.selected
                  : buttonStyle.unselected
              "
              @click="selectedOption = 'current'"
            >
              Membros
            </button>
            <button
              role="tab"
              aria-controls="pet-members"
              :aria-selected="selectedOption === 'egress'"
              :class="
                selectedOption === 'egress'
                  ? buttonStyle.selected
                  : buttonStyle.unselected
              "
              @click="selectedOption = 'egress'"
            >
              Egressos
            </button>
          </nav>

          <div id="pet-members">
            <div
              v-if="selectedOption === 'current'"
              id="current-members"
              class="pt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
            >
              <div
                v-for="member in currentMembers"
                :key="member.name"
                class="py-1"
              >
                <div class="flex-col flex justify-center items-center">
                  <div class="flex-shrink-0">
                    <EnlargeableImage
                        id="member-photo"
                        :src="member.photoUrl"
                        :src_large="member.photoUrl"
                        animation_duration="200"
                    >
                        <span class="sr-only"
                        >Ampliar foto de {{ member.name }}</span
                        >
                        <img
                        :alt="'Foto de ' + member.name"
                        :src="member.photoUrl"
                        class="mx-auto object-cover text-perola-negra text-sm rounded-full h-20 w-20"
                        />
                    </EnlargeableImage>
                  </div>
                  <div class="mt-4 text-center flex flex-col">
                    <span class="text-md text-perola-negra font-medium">
                      {{ member.name }}
                    </span>
                    <a
                      v-if="member.cinLogin"
                      :href="'mailto:' + member.cinLogin + '@cin.ufpe.br'"
                      class="block text-laranja-internacional hover:text-laranja-internacional-dark text-sm transition-colors"
                    >
                      {{ member.cinLogin }}
                    </a>
                    <div class="flex flex-wrap justify-center text-xl">
                      <div v-if="member.linkedinUrl" class="m-2">
                        <a
                          :href="member.linkedinUrl"
                          target="_blank"
                          rel="noopener noreferrer"
                          :title="member.name + ' no Linkedin'"
                          class="text-laranja-internacional hover:text-laranja-internacional-dark transition-colors"
                        >
                          <i class="ri-linkedin-fill"></i>
                          <span class="sr-only">Linkedin</span>
                        </a>
                      </div>
                      <div v-if="member.personalWebsiteUrl" class="m-2">
                        <a
                          :href="member.personalWebsiteUrl"
                          target="_blank"
                          rel="noopener noreferrer"
                          :title="'Página pessoal de ' + member.name"
                          class="text-laranja-internacional hover:text-laranja-internacional-dark transition-colors"
                        >
                          <i class="ri-earth-fill"></i>
                          <span class="sr-only">Página pessoal</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="selectedOption === 'egress'"
              id="egress-members"
              class="pt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
            >
              <div
                v-for="member in egressMembers"
                :key="member.name"
                class="py-1"
              >
                <div class="flex-col flex justify-center items-center">
                  <div class="flex-shrink-0">
                    <EnlargeableImage
                      id="member-photo"
                      :src="member.photoUrl"
                      :src_large="member.photoUrl"
                      animation_duration="200"
                    >
                      <span class="sr-only"
                        >Ampliar foto de {{ member.name }}</span
                      >
                      <img
                        :alt="'Foto de ' + member.name"
                        :src="member.photoUrl"
                        class="mx-auto object-cover text-perola-negra text-sm rounded-full h-20 w-20"
                      />
                    </EnlargeableImage>
                  </div>
                  <div class="mt-4 text-center flex flex-col">
                    <span class="text-md text-perola-negra font-medium">
                      {{ member.name }}
                    </span>
                    <a
                      v-if="member.cinLogin"
                      :href="'mailto:' + member.cinLogin + '@cin.ufpe.br'"
                      class="text-md block text-laranja-internacional hover:text-laranja-internacional-dark text-sm transition-colors"
                    >
                      {{ member.cinLogin }}
                    </a>
                    <div class="flex flex-wrap justify-center text-xl">
                      <div v-if="member.linkedinUrl" class="m-2">
                        <a
                          :href="member.linkedinUrl"
                          target="_blank"
                          rel="noopener noreferrer"
                          :title="member.name + ' no Linkedin'"
                          class="text-laranja-internacional hover:text-laranja-internacional-dark transition-colors"
                        >
                          <i class="ri-linkedin-fill"></i>
                          <span class="sr-only">Linkedin</span>
                        </a>
                      </div>
                      <div v-if="member.personalWebsiteUrl" class="m-2">
                        <a
                          :href="member.personalWebsiteUrl"
                          target="_blank"
                          rel="noopener noreferrer"
                          :title="'Página pessoal de ' + member.name"
                          class="text-laranja-internacional hover:text-laranja-internacional-dark transition-colors"
                        >
                          <i class="ri-earth-fill"></i>
                          <span class="sr-only">Página pessoal</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  PetMemberType,
  PetWebsiteMember,
} from './../../assets/content-model/content-model'

export default Vue.extend({
  props: {
    members: {
      type: Array as () => PetWebsiteMember[],
      required: true,
    },
  },
  data() {
    return {
      currentMembers: this.members
        .filter(
          (member) =>
            member.type === PetMemberType.Current ||
            member.type === PetMemberType.Tutor
        )
        .sort((a, b) => a.name.localeCompare(b.name)),
      egressMembers: this.members
        .filter((member) => member.type === PetMemberType.Egress)
        .sort((a, b) => a.name.localeCompare(b.name)),
      selectedOption: PetMemberType.Current,
      buttonStyle: {
        selected:
          'text-laranja-internacional font-bold lowercase py-2 my-2 mr-8 block hover:text-laranja-internacional-dark focus:outline-none border-b-2 border-laranja-internacional transition-colors',
        unselected:
          'text-laranja-internacional font-medium lowercase py-2 my-2 mr-8 block hover:text-laranja-internacional-dark focus:outline-none transition-colors',
      },
    }
  },
})
</script>

<style lang="postcss">
#member-photo.enlargeable-image .full.enlarged {
  @apply bg-perola-negra bg-opacity-80;
}
</style>
