<template>
  <div>
    <SectionAnnouncement :announcement="petWebsiteData.announcement" />
    <SectionHero :hero="petWebsiteData.hero" />
    <SectionActivities :activities="petWebsiteData.activities" />
    <SectionMembers :members="petWebsiteData.members" />
    <SectionFaq :faq-entries="petWebsiteData.faqEntries" />
    <SectionContact
      :contact-urls="petWebsiteData.contactUrls"
      :external-links="petWebsiteData.externalLinks"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { petWebsiteData } from './../assets/content-model/data'

export default Vue.extend({
  data() {
    return {
      petWebsiteData,
    }
  },
})
</script>

<style>
html {
  scroll-behavior: smooth;
}

@media screen and (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
</style>
