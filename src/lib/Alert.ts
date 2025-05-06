'use client'
export default function alert({message}: { message: string}){
    window.alert(message);
    return null;
}