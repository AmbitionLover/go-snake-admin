<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card body-->
    <div class="card-body p-0">
      <!--begin::Heading-->
      <div class="card-px py-20 my-10">
        <!--begin::Title-->
        <h2 class="fs-2x fw-bolder mb-10">{{ title }}</h2>
        <!--end::Title-->

        <!--begin::Description-->
        <p class="text-gray-400 fs-5 fw-bold mb-13">
          <span v-html="description"></span>
        </p>
        <!--end::Description-->
      </div>
      <!--end::Heading-->
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "crypto-desc",
  components: {},

  props: {
    title: String,
    description: String,
    icon: String,
  },
});
</script>
