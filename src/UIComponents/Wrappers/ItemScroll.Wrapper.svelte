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
    min-h-screen
    min-w-screen
    m-4
    flex
    justify-center
    items-center
    {snapPosition}">
    <slot/>
</div>