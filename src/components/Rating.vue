<template>
    <!-- <q-icon 
        v-for="(star, index) in stars"
        :key="star"
        :class="[index > (rating - 1) ? 'text-grey-4' : 'text-yellow-7' , 'col-1']"
        :name="star"
        style="margin-right:20px;"
    /> -->
</template>

<script lang="ts">
// import { defineComponent } from 'vue'
// // import { fasStar } from '@quasar/extras/fontawesome-v5'

// export default defineComponent({
//     props: {
//         rating: {
//             type: Number,
//             required: true,
//         }
//     },
//     setup() {
//         const starClass = (index: number, rating: number) => {
//             return index > rating ? 'text-black' : 'text-yellow'
//         }

//         const stars = [fasStar, fasStar, fasStar, fasStar, fasStar]

//         return { stars, starClass }
//     },
// })
</script>
