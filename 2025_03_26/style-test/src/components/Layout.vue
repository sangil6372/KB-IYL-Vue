<template>
  <div class="wrapper">
    <header class="box header">
      <slot name="header"></slot>
    </header>
    <aside class="box sidebar">
      <slot name="sidebar"></slot>
    </aside>
    <section class="box content">
      <slot></slot>
    </section>
    <footer class="box footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Layout",
};
</script>
