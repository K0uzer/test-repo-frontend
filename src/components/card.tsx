import { createSignal } from 'solid-js'
import Button from './button'
import Toggle from './toggle'

const data = {
    messages: 200,
    workedOut: 150,
}

const Card = ({
    action = 'Ожидаю сообщений',
    titleCard = 'Бот для продаж',
    titleMainButton = 'Настройка чат-бота',
    titleLowerButton = 'Детали',
    chanelList = '',
    userId = '',
}) => {
    const [isActiveChanel, setActiveChanel] = createSignal(false)

    const iconsOfWithoutChanel = [
        '/src/public/Frame 84.svg',
        '/src/public/Frame 85.svg',
        '/src/public/bitrix24 1.svg',
        '/src/public/Frame 84 (1).svg',
    ]

    const iconsOfAction = (key: string) => {
        switch (key) {
            case 'Ожидаю сообщений':
                return '/src/public/Frame 112.svg'
            case 'Протестируй меня':
                return '/src/public/Frame 112 (2).svg'
            case 'Подключите канал':
                return '/src/public/Frame 112 (1).svg'
            default:
                return '/src/public/Frame 38.svg'
        }
    }

    const iconOfTitleChanel = (key: string) => {
        switch (key) {
            case 'Telegram':
                return '/src/public/Frame 84.svg'
            case 'Bitrix24':
                return '/src/public/bitrix24 1.svg'
            case 'Viber':
                return '/src/public/Frame 84 (1).svg'
            case 'WhatsApp':
                return '/src/public/Frame 85.svg'
            default:
                return '/src/public/Frame 84.svg'
        }
    }

    return (
        <section class="p-3 w-[21rem] h-[20rem] bg-white flex flex-col rounded-2xl text-black">
            <div class="flex items-center">
                <picture>
                    <img src={iconsOfAction(action)} />
                </picture>
                <p class="ml-2">{action}</p>
            </div>
            <div>
                <div class="flex justify-between items-center">
                    <h2 class="font-semibold">{titleCard}</h2>
                    <picture>
                        <img
                            src={`${
                                isActiveChanel()
                                    ? '/src/public/checkbox_1.svg'
                                    : '/src/public/checkbox_1 (1).svg'
                            }`}
                            alt="Bot state"
                        />
                    </picture>
                </div>
                <div class="font-semibold flex items-center justify-between mb-4">
                    <div>
                        <p>Сообщения</p>
                        <p>
                            {action !== 'Подключите канал'
                                ? data.messages
                                : '-'}
                        </p>
                    </div>

                    <div class="border border-gray-400 h-[2.5rem] opacity-2" />

                    <div>
                        <p>Отработано</p>
                        <p>
                            {action !== 'Подключите канал'
                                ? data.workedOut
                                : '-'}
                        </p>
                    </div>

                    <div class="border border-gray-400 h-[2.5rem] opacity-2" />

                    <div>
                        <p>Эффективно</p>
                        <p>
                            {action !== 'Подключите канал'
                                ? (data.workedOut / data.messages) * 100 + '%'
                                : '-'}
                        </p>
                    </div>
                </div>
            </div>
            <Button
                styles="flex items-center justify-center text-white bg-[#172554] gap-2"
                iconPath={'/src/public/Vector.svg'}
                title={titleMainButton}
            />
            <div>
                <div class="flex items-center mt-4">
                    <p class="uppercase mr-2">каналы</p>
                    <picture>
                        <img src="/src/public/info-6 1.svg" alt="info" />
                    </picture>
                </div>
                {userId ? (
                    <>
                        <div class="p-2 flex items-center justify-between rounded-md bg-slate-100">
                            <picture>
                                <img
                                    src={iconOfTitleChanel(chanelList)}
                                    alt="icon"
                                />
                            </picture>
                            <p>{chanelList}</p>
                            <p class="pl-2 truncate">{userId}</p>
                            <Toggle
                                checked={isActiveChanel}
                                setChecked={setActiveChanel}
                            />
                        </div>
                    </>
                ) : (
                    <Button
                        iconPath={iconsOfWithoutChanel}
                        styles="w-full flex items-center border border-gray-400 justify-center text-gray-400 bg-white gap-2"
                        title={' +8 Подключить канал'}
                    />
                )}
                <Button
                    iconPath="/src/public/Vector (1).svg"
                    styles="flex items-center justify-center text-gray-400 bg-white gap-2"
                    title={titleLowerButton}
                />
            </div>
        </section>
    )
}

export default Card
