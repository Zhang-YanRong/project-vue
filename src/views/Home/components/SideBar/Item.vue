<template>
<div>
    <slot name="title">
        <svg-icon :icon-class="icon" />
        <span>{{ title }}</span>
    </slot>
</div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon"
export default {
    name: "item",
    props: {
        title: String,
        icon: String,
    },
    components: {
        SvgIcon,
    },
}
</script>
