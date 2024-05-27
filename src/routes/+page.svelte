<script lang="ts">
	import ItemScroll from "../UIComponents/Wrappers/ItemScroll.Wrapper.svelte";
	import MainScroll from "../UIComponents/Wrappers/MainScroll.Wrapper.svelte";


</script>

<div class="h-screen">
    <MainScroll snapDirection="Horizontal">
    <ItemScroll snapPosition="snap-center">
            <h1 class="text-3xl font-bold underline">MoSo dapp</h1>
            <form >
                <input class=" border-solid border-2 border-black">
                <button>Add</button>
            </form>
        </ItemScroll>
        <ItemScroll>
            <h1 class="text-3xl font-bold underline">MoSo dapp</h1>
            <form >
                <input class=" border-solid border-2 border-black">
                <button>Add</button>
            </form>
        </ItemScroll>
    </MainScroll>
</div>