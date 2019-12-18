<template>
  <div class="home container mx-auto">
    <h1>Home</h1>
    <NabCard>
      <strong>Normal</strong>
      <div class="mb-2">
        <NabButton @click="test()">Default</NabButton>
        <NabButton @click="test()" variant="primary">Primary</NabButton>
        <NabButton @click="test()" variant="success">Success</NabButton>
        <NabButton @click="test()" variant="warning">Warning</NabButton>
        <NabButton @click="test()" variant="danger">Danger</NabButton>
      </div>

      <strong>Outlined</strong>
      <div class="mb-2">
        <NabButton @click="test()" variant="defaultOutline">Default</NabButton>
        <NabButton @click="test()" variant="primaryOutline">Primary</NabButton>
        <NabButton @click="test()" variant="successOutline">Success</NabButton>
        <NabButton @click="test()" variant="warningOutline">Warning</NabButton>
        <NabButton @click="test()" variant="dangerOutline">Danger</NabButton>
      </div>
    </NabCard>
  </div>
</template>

<script>
export default {
  name: "home",

  methods: {
    test() {
      alert("HEY");
    }
  }
};
</script>
