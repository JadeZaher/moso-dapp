<script lang="ts">

    // handle scroll direction
    type SnapDirection = "Horizontal" | "Vertical";
    export let snapDirection: SnapDirection = "Vertical";
    let directionStlye = snapDirection == "Vertical" ? 
        "flex-col snap-y overflow-x-hidden" : 
        "snap-x overflow-y-hidden";

</script>
<!-- 
    overflow hidden and scroll snap set on empty div 
-->
<div 
class="
    min-w-full min-h-full
    border-8 border-fuchsia-600
    bg-slate-400 
    flex
    snap-mandatory
    scroll-smooth
    no-scrollbar
    {directionStlye}
">    
    <slot/>
</div>