<template>
  <div
    class="block max-w-xs rounded-lg bg-white shadow-lg dark:bg-neutral-700 mx-6 md:mx-2 p-2 mt-2">
    <a href="#!" data-te-ripple-init data-te-ripple-color="light">
      <img
        class="rounded-t-lg"
        src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
        alt="" />
    </a>
    <div>
      <h5
        class="my-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        {{ name }}
      </h5>
      <p class="font-bold text-base text-neutral-800 dark:text-neutral-200">
        {{ formatPrice(price) }}
      </p>
      <!-- <button
        type="button"
        class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        Button
      </button> -->
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue"
import formatPrice from "../../utils/formatPrice"

const props = defineProps({
    id: String,
    name: String,
    price: Number,
    image: String,
})

</script>