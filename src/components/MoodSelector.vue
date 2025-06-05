<template>
<div class="moodSelector">
    </div>
</template>

<script lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{ modelValue: string | null}>()

const moods = ['😃', '😐', '😞', '😡', '😴'] //Probably change later?

</script>