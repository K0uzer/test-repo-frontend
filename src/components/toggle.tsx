import { Setter } from 'solid-js'

const Toggle = ({
    checked,
    setChecked,
}: {
    checked: () => boolean
    setChecked: Setter<boolean>
}) => {
    return (
        <label class="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                class="sr-only peer"
                checked={checked()}
                onChange={(e) => setChecked(e.currentTarget.checked)}
            />
            <div class="w-14 h-7 bg-gray-300 peer-checked:bg-green-500 rounded-full transition-all relative">
                <div
                    class={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                        checked() ? 'translate-x-7' : 'translate-x-1'
                    }`}
                ></div>
            </div>
        </label>
    )
}

export default Toggle
