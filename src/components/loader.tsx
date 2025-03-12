const Loader = () => {
    return (
        <div class="relative flex items-center justify-center w-16 h-16">
            <div class="absolute w-12 h-12 border-4 border-blue-600 border-solid border-t-transparent rounded-full animate-spin-left"></div>
            <div class="absolute w-8 h-8 border-4 border-blue-400 border-solid border-t-transparent rounded-full animate-spin-right"></div>
        </div>
    )
}

export default Loader
