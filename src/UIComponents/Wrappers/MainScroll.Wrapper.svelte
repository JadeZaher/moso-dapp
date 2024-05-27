<script lang="ts">

    // handle scroll direction
    type SnapDirection = "Horizontal" | "Vertical";
    export let snapDirection: SnapDirection = "Vertical";
    let directionStlye = snapDirection == "Vertical" ? 
        "flex-col snap-y overflow-x-hidden" : 
        "snap-x overflow-y-hidden";

    // color
    export let bgStyle = "bg-slate-400" 
    export let borderStyle = "border-2 border-black rounded-md" 

</script>
<!-- 
    overflow hidden and scroll snap set on empty div 
-->
<div 
    class="
        min-w-full h-screen flex
        snap-mandatory
        scroll-smooth
        no-scrollbar
        {directionStlye}
        {bgStyle}
        {borderStyle}"
    >    
    <slot/>
</div>