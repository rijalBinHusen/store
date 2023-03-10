;<template>
    <div class="flex flex-row">
        <Icon
            v-for="(star, index) in stars"
            :key="star"
            :class="[index > (rating - 1) ? 'text-gray-400' : 'text-yellow-500' , 'col-1']"
            :icon="star"
            style="margin-right:9px; width: 26px; height: 26px;"
        />
    </div>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue"
import { defineComponent } from 'vue'
// // import { fasStar } from '@quasar/extras/fontawesome-v5'

const props = defineProps({
    rating: {
        type: Number,
        required: true,
    }
})

        const starClass = (index: number, rating: number) => {
            return index > rating ? 'text-black' : 'text-yellow'
        }

        const stars = ['material-symbols:star', 'material-symbols:star', 'material-symbols:star', 'material-symbols:star', 'material-symbols:star']
</script>
