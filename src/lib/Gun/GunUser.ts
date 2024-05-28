import Gun from 'gun';
import 'gun/sea';
import 'gun/axe';
import { writable } from 'svelte/store';

export const GunDB = Gun();

export const User = GunDB.user().recall({sessionStorage:true})

export const UserName = writable('');

GunDB.on('auth', async()=>{
    const alias:string = await User.get('alias');
    UserName.set(alias);
    console.log(`signed in as ${alias}`)
})