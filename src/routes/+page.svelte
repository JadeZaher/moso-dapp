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

<div class="absolute w-screen h-screen bg-[#0681E8] z-[-1]"/>

<MainScroll snapDirection="Vertical">
    <ItemScroll snapPosition="snap-center">
        <div class="{StyleConstants.vertical80ScrollItem} bg-white">
            <div class=" filter-none">    
                <h1 class="{StyleConstants.h1TitleStyle} font-black">MoSo dapp</h1>
                {#if $UserName}
                <div> hello {$UserName}</div>
                <button on:click={signOut}>Sign Out</button>
                {:else}
                <h1 class="{StyleConstants.h1BaseStyle} "> Login/Sign Up </h1>
                <input placeholder="username" bind:value={userName} minlength="3" maxlength="16" class="{StyleConstants.inputBaseStyle}">
                <input placeholder="password" bind:value={pass} minlength="3" maxlength="16" class="{StyleConstants.inputBaseStyle}">
                <button class="{StyleConstants.baseButtonStyle}" on:click={logIn}>Log In</button>
                <button class="{StyleConstants.baseButtonStyle}" on:click={signUp}>Sign Up</button>
                {/if}
            </div>
        </div>
    </ItemScroll>
    <ItemScroll snapPosition="snap-center">
        <div class="{StyleConstants.verticalFullScreenScrollItem}">
            <h1 class="{StyleConstants.h1BaseStyle}">Starting the MOSO decentralized application</h1>
        </div>
    </ItemScroll>
</MainScroll>
