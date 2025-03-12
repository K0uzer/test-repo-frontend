import { createSignal, Show, For } from 'solid-js'
import { createQuery } from '@tanstack/solid-query'

import { fetchUsers } from '../api/apiClient'
import Button from './button'
import Card from './card'
import Loader from './loader'

const CardList = () => {
    const [limit, setLimit] = createSignal(4)
    const [page, setPage] = createSignal(0)

    const { data, isLoading, refetch } = createQuery(
        () => ['users', page(), limit()],
        () => fetchUsers(page() * limit(), limit()),
        {
            staleTime: 1000 * 60 * 10,
            cacheTime: 1000 * 60 * 10,
        },
    )

    const handleLimitChange = (event: InputEvent) => {
        const newLimit = Number((event.target as HTMLSelectElement).value)
        setLimit(newLimit)
        setPage(0)
        refetch()
    }

    return (
        <section class="flex flex-col items-center gap-5">
            <Button
                styles="absolute top-5 right-5"
                title="Обновить"
                onClick={() => refetch()}
            />

            <select
                class="absolute top-5 left-5 px-4 py-2 border border-gray-300 text-black rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                value={limit()}
                onInput={handleLimitChange}
            >
                <option value="4">4 карточки</option>
                <option value="8">8 карточек</option>
                <option value="12">12 карточек</option>
            </select>

            <Show when={!isLoading} fallback={<Loader />}>
                <div
                    class={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 transition-opacity duration-300`}
                >
                    <For each={data}>
                        {({ email, website }) => (
                            <Card
                                action="Ожидаю сообщений"
                                titleCard={website}
                                chanelList="Telegram"
                                userId={email}
                            />
                        )}
                    </For>
                </div>
            </Show>

            <div class="flex gap-5 mt-5">
                <Button
                    title="Предыдущая страница"
                    styles={`px-4 py-2 ${
                        !page() ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    disabled={!page()}
                    onClick={() => setPage((prev) => Math.max(0, prev - 1))}
                />
                <Button
                    title="Следующая страница"
                    styles="px-4 py-2"
                    onClick={() => setPage((prev) => prev + 1)}
                />
            </div>
        </section>
    )
}

export default CardList
