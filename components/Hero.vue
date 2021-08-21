<template>
  <div class="bg-purple-300 h-96 container mx-auto">
    {{ $t('hello')}}
    <h1>{{ $t('bye')}}</h1>

    <NuxtLink
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)">{{ locale.code }}
    </NuxtLink>

  </div>

</template>

<i18n lang="yaml">
en:
  hello: "wowow"
  bye: "so good bye"
ru:
  hello: "Наконец-то"
  bye: "влаофжыва"
</i18n>

<script>
export  default {
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>
