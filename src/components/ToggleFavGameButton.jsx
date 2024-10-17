import { useState } from 'react';

export default function ToggleFavGameButton({ toggleFavGame }) {
    return (
        <div className="flex justify-center my-4">
            <button className="btn text-white" onClick={toggleFavGame}>
                Показать/Скрыть Избранные Игры
            </button>
        </div>
    );
}
