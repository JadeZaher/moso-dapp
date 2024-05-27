<script lang="ts">
    // handle snap position
    type SnapPosition = "snap-start" | "snap-center" | "snap-end" 
    export let snapPosition :SnapPosition = "snap-start"
   
</script>
<!-- 
    border is placed to see if it works 
    min h set to screen to allow each wrapped
    component to take up the whole space. 
-->
<div class="
    border 
    border-red-50 
    min-h-full
    min-w-full
    {snapPosition}">
    <slot/>
</div>