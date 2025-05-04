import { Check, X } from 'lucide-react'

export type SnackbarType = {
    visible: boolean;
    message: string;
    type: string;
}


export default function Snackbar({ snackbar }: { snackbar: SnackbarType }) {

    return (
        <div
            className={`
            flex gap-2 fixed bottom-6 left-1/2 transform -translate-x-1/2
            border
            px-6 py-3 rounded shadow-lg text-center text-base
            transition-all duration-500 ease-in-out
            ${snackbar.type === 'success' ? 'bg-green-950/20 text-green-300 border-green-950' : 'bg-red-950/20 text-red-300 border-red-950'}
            ${snackbar.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            z-50 min-w-[250px] max-w-xs sm:max-w-sm
            `}
        >
            {snackbar.type === 'success' ? <Check className="size-6 text-green-300" /> : <X className="size-6 text-red-300" />}
            {snackbar.message}
        </div>
    )
}