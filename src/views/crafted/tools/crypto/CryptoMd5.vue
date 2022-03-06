<template>
  <div class="row g-5 g-xxl-8">
    <div class="col-xl-12">
      <!--start::Card-->
      <CryptoCard></CryptoCard>

      <!--end::Card-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import CryptoCard from "@/components/tools-layouts/CryptoCard.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "crypto-md5",
  components: {
    CryptoCard,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("crypto-md5", ["crypto", "tools"]);
    });
  },
});
</script>
