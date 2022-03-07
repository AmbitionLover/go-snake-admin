<template>
  <div class="row g-5 g-xxl-8">
    <div class="col-xl-12">
      <!--start::Card-->
      <CryptoCard url="/tools/crypto/qys/userDe"></CryptoCard>
    </div>
    <div class="col-xl-12">
      <!--start::Card-->
      <CryptoCardDesc
        description="1、解密. <br/>2、机密"
        title="qys信息解密"
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
  name: "crypto-qys",
  components: {
    CryptoCard,
    CryptoCardDesc,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("qys", ["crypto", "tools"]);
    });
  },
});
</script>
