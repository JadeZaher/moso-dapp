<script lang="ts">
	import { StyleConstants } from "$lib/Constants/StyleConstants";
    import { UserName, User } from "$lib/Gun/GunUser";
	import ItemScroll from "../UIComponents/Wrappers/ItemScroll.Wrapper.svelte";
	import MainScroll from "../UIComponents/Wrappers/MainScroll.Wrapper.svelte";

	let userName:string;
	let pass:string;

    function signOut() {
        User.leave();
        UserName.set("")
    }
    
    function logIn() {
        User.auth(userName, pass,((err: Error) => err && alert(err)));
    }

    function signUp() {
        User.create(userName, pass,
            ((err: Error) => 
            {
                if(err)
                {
                    alert(err)
                }else{
                    logIn()
                }
            }));
    }
</script>

    <MainScroll snapDirection="Vertical">
        <ItemScroll snapPosition="snap-center">
            <div class="{StyleConstants.verticalFullScreenScrollItem}">
                <h1 class="text-3xl font-bold underline">MoSo dapp</h1>
                {#if $UserName}
                <div> hello {$UserName}</div>
                <button on:click={signOut}>Sign Out</button>
            {:else}
            <div> Login/Sign Up </div>
                <input bind:value={userName} minlength="3" maxlength="16" class=" border-solid border-2 border-black">
                <input bind:value={pass} minlength="3" maxlength="16" class=" border-solid border-2 border-black">
                <button on:click={logIn}>Log In</button>
                <button on:click={signUp}>Sign Up</button>
            {/if}
            </div>
        </ItemScroll>
        <ItemScroll snapPosition="snap-center">
            <div class="{StyleConstants.verticalFullScreenScrollItem}">
                <h1 class="text-3xl font-bold underline">Starting the MOSO decentralized application</h1>
            </div>
        </ItemScroll>
    </MainScroll>