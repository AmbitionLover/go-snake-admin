<template>
  <div class="row g-5 g-xxl-8">
    <div class="col-xl-12">
      <!--start::Card-->
      <CryptoCard></CryptoCard>
    </div>
    <div class="col-xl-12">
      <!--start::Card-->
      <CryptoCardDesc
        description="There are no customers added yet. <br/>Kickstart your CRM by adding a your first customer"
        title="hash介绍"
      ></CryptoCardDesc>
      <!--end::Card-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import CryptoCard from "@/components/tools-layouts/CryptoCard.vue";
import CryptoCardDesc from "@/components/tools-layouts/CryptoDescribe.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "crypto-hash",
  components: {
    CryptoCard,
    CryptoCardDesc,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("hash", ["crypto", "tools"]);
    });
  },
});
</script>
