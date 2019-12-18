<template>
  <div class="home container mx-auto">
    <h1>Home</h1>
    <NabCard>
      <NabButton @click="test()">Default</NabButton>
      <NabButton @click="test()" variant="primary">Primary</NabButton>
      <NabButton @click="test()" variant="success">Success</NabButton>
      <NabButton @click="test()" variant="warning">Warning</NabButton>
      <NabButton @click="test()" variant="danger">Danger</NabButton>
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
