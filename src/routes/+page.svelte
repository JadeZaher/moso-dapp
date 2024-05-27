<script lang="ts">
	import { StyleConstants } from "$lib/Constants/StyleConstants";
	import { UrlHelpers } from "$lib/Helpers/UrlHelpers";
	import ItemScroll from "../UIComponents/Wrappers/ItemScroll.Wrapper.svelte";
	import MainScroll from "../UIComponents/Wrappers/MainScroll.Wrapper.svelte";

    let max = 0;
	let min = 0;
	let total = 0;

	async function add() {
		const response = await fetch('/api/dap?' + UrlHelpers.EncodeGetParams({max,min}), {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		});

		total = await response.json();
	}

</script>

    <MainScroll snapDirection="Vertical">
        <ItemScroll snapPosition="snap-center">
            <div class="{StyleConstants.verticalFullScreenScrollItem}">
                <h1 class="text-3xl font-bold underline">MoSo dapp</h1>
                <form >
                    <input bind:value={max} class=" border-solid border-2 border-black">
                    <input bind:value={min} class=" border-solid border-2 border-black">
                    <button on:click={add}>Add</button>
                </form>
                <p>{total}</p>
            </div>
        </ItemScroll>
        <ItemScroll snapPosition="snap-center">
            <div class="{StyleConstants.verticalFullScreenScrollItem}">
                <h1 class="text-3xl font-bold underline">MoSo dapp</h1>
                <form >
                    <input class=" border-solid border-2 border-black">
                    <button>Add</button>
                </form>
            </div>
        </ItemScroll>
    </MainScroll>