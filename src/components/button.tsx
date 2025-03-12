const Button = ({
    styles,
    iconPath,
    title,
    disabled,
    onClick,
}: {
    styles?: string
    iconPath?: string | string[]
    title?: string
    disabled?: boolean
    onClick?: () => {}
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            class={`${styles} ${Array.isArray(iconPath) ? 'gap-0' : ''}`}
        >
            {!Array.isArray(iconPath) ? <img src={iconPath} /> : ''}
            {Array.isArray(iconPath) ? getIcons(iconPath) : ''}
            {title}
        </button>
    )
}

function getIcons(array: string[]) {
    return array.map((item) => <img src={item} />)
}

export default Button
